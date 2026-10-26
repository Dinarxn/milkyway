/**
 * src/camera/CameraFlyTo.ts
 * Parabolic Smootherstep Landmark Fly-To Interpolation Engine (F15)
 * Synchronously interpolates camera position and OrbitControls target
 * along a high-altitude parabolic elevation arc using quintic smootherstep easing.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Landmark, ICameraController } from '../types/galaxy.js';
import type { StateStore } from '../ui/StateStore.js';

export interface FlyToOptions {
  duration?: number;
  durationMs?: number;
  arcHeight?: number;
  offset?: THREE.Vector3;
  onComplete?: () => void;
}

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

/**
 * Quintic smootherstep easing: tau(t) = 10t^3 - 15t^4 + 6t^5
 * Provides C2-continuous velocity and acceleration (zero jerk at boundaries).
 */
export function quinticSmootherstep(t: number): number {
  const clampedT = Math.min(Math.max(t, 0.0), 1.0);
  return clampedT * clampedT * clampedT * (clampedT * (clampedT * 6.0 - 15.0) + 10.0);
}

/**
 * Calculates parabolic arc height proportional to travel distance.
 * Clamps between 20 ly and 12,000 ly to avoid clipping through galactic core.
 */
export function computeArcHeight(distance: number): number {
  return Math.min(Math.max(distance * 0.25, 20.0), 12000.0);
}

/**
 * Evaluates parabolic arc trajectory at normalized progress t in [0.0, 1.0].
 */
export function evaluateTrajectory(
  startPos: Vector3D,
  endPos: Vector3D,
  arcHeight: number,
  t: number
): Vector3D {
  const ease = quinticSmootherstep(t);
  const x = startPos.x + (endPos.x - startPos.x) * ease;
  const z = startPos.z + (endPos.z - startPos.z) * ease;
  const baseLy = startPos.y + (endPos.y - startPos.y) * ease;
  const arcLift = Math.sin(ease * Math.PI) * arcHeight;
  const y = baseLy + arcLift;

  return { x, y, z };
}

export class CameraFlyTo implements ICameraController {
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private stateStore?: StateStore;

  private isAnimating = false;
  private startTime = 0;
  private elapsedTime = 0;
  private duration = 2500;

  private startPos = new THREE.Vector3();
  private endPos = new THREE.Vector3();
  private startTarget = new THREE.Vector3();
  private endTarget = new THREE.Vector3();
  private arcHeight = 0;
  private onCompleteCallback?: () => void;

  constructor(
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls,
    stateStore?: StateStore
  ) {
    this.camera = camera;
    this.controls = controls;
    this.stateStore = stateStore;
  }

  /**
   * Initiates a smootherstep parabolic fly-to transition toward a target point.
   */
  public flyTo(
    targetPosition: THREE.Vector3,
    viewDistanceOrOptions?: number | FlyToOptions,
    options?: FlyToOptions
  ): void {
    let resolvedOptions: FlyToOptions = {};

    if (typeof viewDistanceOrOptions === 'number') {
      resolvedOptions = { ...options };
      if (!resolvedOptions.offset) {
        resolvedOptions.offset = new THREE.Vector3(
          0,
          viewDistanceOrOptions * 0.35,
          viewDistanceOrOptions * 0.9
        );
      }
    } else if (viewDistanceOrOptions) {
      resolvedOptions = { ...viewDistanceOrOptions };
    }

    this.duration = resolvedOptions.duration ?? resolvedOptions.durationMs ?? 2500;
    this.onCompleteCallback = resolvedOptions.onComplete;

    // Start transition from current live camera state (enables seamless redirect mid-flight)
    this.startPos.copy(this.camera.position);
    this.startTarget.copy(this.controls.target);
    this.endTarget.copy(targetPosition);

    const defaultOffset = resolvedOptions.offset ?? new THREE.Vector3(0, 120, 280);
    this.endPos.copy(targetPosition).add(defaultOffset);

    const travelDist = this.startPos.distanceTo(this.endPos);
    this.arcHeight = resolvedOptions.arcHeight ?? computeArcHeight(travelDist);

    this.startTime = performance.now();
    this.elapsedTime = 0;
    this.isAnimating = true;
    this.controls.enabled = false;

    if (this.stateStore) {
      this.stateStore.setFlying(true);
    }
  }

  /**
   * Helper to initiate flight directly targeting a curated Landmark.
   */
  public flyToLandmark(landmark: Landmark, options: FlyToOptions = {}): void {
    const target = new THREE.Vector3(
      landmark.cartesian.x,
      landmark.cartesian.y,
      landmark.cartesian.z
    );

    let offset: THREE.Vector3;
    if (options.offset) {
      offset = options.offset;
    } else if (landmark.cameraOffset && Array.isArray(landmark.cameraOffset)) {
      offset = new THREE.Vector3(
        landmark.cameraOffset[0],
        landmark.cameraOffset[1],
        landmark.cameraOffset[2]
      );
    } else if (landmark.cameraDistance) {
      offset = new THREE.Vector3(
        0,
        landmark.cameraDistance * 0.32,
        landmark.cameraDistance * 0.88
      );
    } else {
      offset = new THREE.Vector3(0, 120, 280);
    }

    this.flyTo(target, { ...options, offset });
  }

  /**
   * Cancels active camera transition immediately, granting full manual 6-DOF control.
   */
  public cancel(): void {
    if (this.isAnimating) {
      this.isAnimating = false;
      this.controls.enabled = true;
      this.controls.update();

      if (this.stateStore) {
        this.stateStore.setFlying(false);
      }
    }
  }

  /**
   * Per-frame animation update step.
   * Can be driven by delta time or absolute timestamp.
   */
  public update(deltaOrNow?: number): boolean {
    if (!this.isAnimating) return false;

    let elapsed: number;
    if (deltaOrNow === undefined) {
      elapsed = performance.now() - this.startTime;
    } else if (deltaOrNow > 100000) {
      elapsed = deltaOrNow - this.startTime;
    } else if (deltaOrNow <= 1.0) {
      this.elapsedTime += deltaOrNow * 1000.0;
      elapsed = this.elapsedTime;
    } else {
      this.elapsedTime += deltaOrNow;
      elapsed = this.elapsedTime;
    }

    const progress = Math.min(elapsed / this.duration, 1.0);
    const tau = quinticSmootherstep(progress);

    // Interpolate OrbitControls target
    this.controls.target.lerpVectors(this.startTarget, this.endTarget, tau);

    // Interpolate camera position with parabolic elevation arc
    this.camera.position.x = this.startPos.x + (this.endPos.x - this.startPos.x) * tau;
    this.camera.position.z = this.startPos.z + (this.endPos.z - this.startPos.z) * tau;
    const baseY = this.startPos.y + (this.endPos.y - this.startPos.y) * tau;
    const arcLift = Math.sin(tau * Math.PI) * this.arcHeight;
    this.camera.position.y = baseY + arcLift;

    if (progress >= 1.0) {
      this.isAnimating = false;
      this.controls.enabled = true;
      this.controls.update();

      if (this.stateStore) {
        this.stateStore.setFlying(false);
      }

      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
      return false;
    }

    return true;
  }

  public isFlying(): boolean {
    return this.isAnimating;
  }

  public get active(): boolean {
    return this.isAnimating;
  }
}
