/**
 * tests/fixtures/helpers.ts
 * Shared test fixtures, mock StateStore, and mathematical simulation helpers.
 */

import type { Landmark } from '../../src/types/galaxy.js';

export type StateListener = () => void;

export class TestGalaxyStateStore {
  private activeLandmark: Landmark | null = null;
  private fps = 60;
  private particleCount = 250000;
  private cameraPosition: [number, number, number] = [0, 45000, 75000];
  private isFlying = false;
  private listeners: Set<StateListener> = new Set();

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }

  public setActiveLandmark(landmark: Landmark | null): void {
    this.activeLandmark = landmark;
    this.notify();
  }

  public getActiveLandmark(): Landmark | null {
    return this.activeLandmark;
  }

  public updateTelemetry(fps: number, particleCount: number, cameraPosition?: [number, number, number]): void {
    this.fps = Math.max(0, fps);
    this.particleCount = particleCount;
    if (cameraPosition) this.cameraPosition = cameraPosition;
    this.notify();
  }

  public getTelemetry() {
    return {
      fps: this.fps,
      particleCount: this.particleCount,
      cameraPosition: this.cameraPosition
    };
  }

  public setFlying(flying: boolean): void {
    this.isFlying = flying;
    this.notify();
  }

  public getFlying(): boolean {
    return this.isFlying;
  }
}

export function quinticSmootherstep(t: number): number {
  const clampedT = Math.min(Math.max(t, 0.0), 1.0);
  return clampedT * clampedT * clampedT * (clampedT * (clampedT * 6.0 - 15.0) + 10.0);
}

export function computeArcHeight(distance: number): number {
  return Math.min(Math.max(distance * 0.25, 20.0), 12000.0);
}

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

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

export function computePointSize(
  distToCamera: number,
  absoluteMagnitude: number,
  baseSize = 400.0,
  scale = 1.0
): number {
  const lumFactor = Math.min(Math.max(Math.pow(10.0, -0.15 * (absoluteMagnitude - 4.83)), 0.6), 5.0);
  const pointSize = (baseSize * lumFactor * scale) / Math.max(distToCamera, 10.0);
  return Math.min(Math.max(pointSize, 1.0), 24.0);
}
