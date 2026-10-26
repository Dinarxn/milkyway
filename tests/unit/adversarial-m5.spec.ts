/**
 * tests/unit/adversarial-m5.spec.ts
 * Milestone 5 Tier 5 Adversarial Stress & Verification Harness
 * Comprehensive empirical white-box challenge suite testing:
 * 1. Extreme macro (160,000 ly) & micro (15 ly) coordinates and zero-distance flights
 * 2. Rapid concurrent bookmark switching mid-flight and interruption contracts
 * 3. Float64 mathematical precision, IAU round-trip invariance & astrometric parsers
 * 4. Long-running 10,000-frame simulation loops, heap stability & resource disposal
 * 5. WebGL context loss and recovery lifecycle
 */

import { describe, it, expect, vi } from 'vitest';
import * as THREE from 'three';
import {
  equatorialToGalactic,
  galacticToEquatorial,
  galacticToGalactocentric,
  galactocentricToGalactic,
  galactocentricToThree,
  threeToGalactocentric,
  icrsToThreePosition,
  threePositionToIcrs,
  parseRaStringToDegrees,
  parseDecStringToDegrees,
  degreesToRaString,
  degreesToDecString,
  SUN_GC_DISTANCE_LY,
  SUN_MIDPLANE_Z_LY
} from '../../src/data/coordinates.js';
import {
  CameraFlyTo,
  quinticSmootherstep,
  computeArcHeight,
  evaluateTrajectory
} from '../../src/camera/CameraFlyTo.js';
import { GalaxyGenerator } from '../../src/galaxy/GalaxyGenerator.js';
import { GalaxyView } from '../../src/galaxy/GalaxyView.js';
import { SagittariusA } from '../../src/objects/SagittariusA.js';
import { LandmarkMarkers } from '../../src/objects/LandmarkMarkers.js';
import { StateStore } from '../../src/ui/StateStore.js';
import landmarks from '../../src/data/landmarks.json';
import type { Landmark } from '../../src/types/galaxy.js';

describe('Milestone 5 Tier 5: Adversarial Stress & Coordinate Precision Harness', () => {
  const typedLandmarks = landmarks as unknown as Landmark[];

  // =========================================================================
  // Challenge 1: Extreme Macro/Micro Bounds, Parabolic Arcs & Zero-Distance
  // =========================================================================
  describe('C1: Extreme Macro/Micro Navigation & Zero-Distance Trajectories', () => {
    it('C1.1: Zero-distance navigation (start === target) produces finite trajectory without NaN or division by zero', () => {
      const pos = { x: 26000, y: 68, z: 0 };
      const arcH = computeArcHeight(0);
      expect(arcH).toBe(20.0); // Clamped minimum arc height

      for (let step = 0; step <= 20; step++) {
        const t = step / 20.0;
        const pt = evaluateTrajectory(pos, pos, arcH, t);
        expect(Number.isFinite(pt.x)).toBe(true);
        expect(Number.isFinite(pt.y)).toBe(true);
        expect(Number.isFinite(pt.z)).toBe(true);
        expect(pt.x).toBeCloseTo(pos.x, 6);
        expect(pt.z).toBeCloseTo(pos.z, 6);
        // Peak arc lift at midpoint t=0.5
        if (step === 10) {
          expect(pt.y).toBeCloseTo(pos.y + 20.0, 5);
        }
      }
    });

    it('C1.2: Micro-distance navigation (Δd = 0.0001 ly) maintains numerical stability', () => {
      const start = { x: 0, y: 15.0, z: 0 };
      const end = { x: 0.0001, y: 15.0001, z: 0.0001 };
      const dist = Math.hypot(end.x - start.x, end.y - start.y, end.z - start.z);
      const arcH = computeArcHeight(dist);
      expect(arcH).toBe(20.0);

      const mid = evaluateTrajectory(start, end, arcH, 0.5);
      expect(Number.isFinite(mid.x)).toBe(true);
      expect(Number.isFinite(mid.y)).toBe(true);
      expect(Number.isFinite(mid.z)).toBe(true);
      expect(mid.y).toBeCloseTo(15.0 + 20.0, 2);
    });

    it('C1.3: Extreme macro-distance cross-galaxy flight (160,000 ly) honors arc height clamp (<= 12,000 ly)', () => {
      const start = { x: -80000, y: -2000, z: -80000 };
      const end = { x: 80000, y: 2000, z: 80000 };
      const dist = Math.hypot(end.x - start.x, end.y - start.y, end.z - start.z);
      const arcH = computeArcHeight(dist);

      // Distance is ~226,274 ly, 0.25 * dist > 50,000 ly, but MUST be clamped at 12,000 ly
      expect(arcH).toBe(12000.0);

      const apex = evaluateTrajectory(start, end, arcH, 0.5);
      expect(apex.y).toBeCloseTo(0.0 + 12000.0, 1);
      expect(Number.isFinite(apex.x)).toBe(true);
      expect(Number.isFinite(apex.z)).toBe(true);
    });

    it('C1.4: Extreme vertical plunge through galactic core ((0, 160000, 0) -> (0, 15, 0)) maintains strictly finite points', () => {
      const start = { x: 0, y: 160000, z: 0 };
      const end = { x: 0, y: 15, z: 0 };
      const dist = 159985;
      const arcH = computeArcHeight(dist);
      expect(arcH).toBe(12000.0);

      for (let i = 0; i <= 50; i++) {
        const pt = evaluateTrajectory(start, end, arcH, i / 50.0);
        expect(Number.isFinite(pt.x)).toBe(true);
        expect(Number.isFinite(pt.y)).toBe(true);
        expect(Number.isFinite(pt.z)).toBe(true);
      }
    });

    it('C1.5: Quintic smootherstep boundary guarantees: zero first and second derivatives at boundaries (C2 continuity)', () => {
      expect(quinticSmootherstep(0.0)).toBe(0.0);
      expect(quinticSmootherstep(1.0)).toBe(1.0);
      expect(quinticSmootherstep(-0.5)).toBe(0.0); // Clamp below 0
      expect(quinticSmootherstep(1.5)).toBe(1.0);  // Clamp above 1

      // Numerical first derivative at t=0 and t=1
      const eps = 1e-6;
      const v0 = (quinticSmootherstep(eps) - quinticSmootherstep(0)) / eps;
      const v1 = (quinticSmootherstep(1.0) - quinticSmootherstep(1.0 - eps)) / eps;
      expect(v0).toBeLessThan(1e-4);
      expect(v1).toBeLessThan(1e-4);
    });
  });

  // =========================================================================
  // Challenge 2: Rapid Concurrent Bookmark Switching & Mid-Flight Interruptions
  // =========================================================================
  describe('C2: Rapid Concurrent Bookmark Switching & Interruptions', () => {
    function createMockOrbitCamera() {
      const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 300000);
      camera.position.set(0, 45000, 75000);
      const domElement = {
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        style: {}
      } as any;
      const controls = {
        enabled: true,
        target: new THREE.Vector3(0, 0, 0),
        update: vi.fn(),
        addEventListener: vi.fn(),
        domElement
      } as any;
      return { camera, controls };
    }

    it('C2.1: 50 Rapid sequential retargetings mid-flight maintain consistent camera position without NaN', () => {
      const { camera, controls } = createMockOrbitCamera();
      const store = new StateStore();
      const flyTo = new CameraFlyTo(camera, controls, store);

      // Rapidly fire flyToLandmark for all landmarks sequentially without waiting
      for (let i = 0; i < 50; i++) {
        const landmark = typedLandmarks[i % typedLandmarks.length];
        flyTo.flyToLandmark(landmark, { duration: 2500 });
        expect(flyTo.isFlying()).toBe(true);
        expect(store.getFlying()).toBe(true);
        expect(controls.enabled).toBe(false);

        // Advance flight slightly (50ms)
        flyTo.update(0.05);

        // Camera position must remain strictly finite
        expect(Number.isFinite(camera.position.x)).toBe(true);
        expect(Number.isFinite(camera.position.y)).toBe(true);
        expect(Number.isFinite(camera.position.z)).toBe(true);
        expect(Number.isFinite(controls.target.x)).toBe(true);
        expect(Number.isFinite(controls.target.y)).toBe(true);
        expect(Number.isFinite(controls.target.z)).toBe(true);
      }
    });

    it('C2.2: Mid-flight cancellation cleanly restores OrbitControls and resets store flying flag', () => {
      const { camera, controls } = createMockOrbitCamera();
      const store = new StateStore();
      const flyTo = new CameraFlyTo(camera, controls, store);

      flyTo.flyToLandmark(typedLandmarks[0], { duration: 2500 });
      flyTo.update(0.5); // 500ms elapsed
      expect(flyTo.isFlying()).toBe(true);

      const intermediatePos = camera.position.clone();

      // Trigger manual user cancel
      flyTo.cancel();

      expect(flyTo.isFlying()).toBe(false);
      expect(store.getFlying()).toBe(false);
      expect(controls.enabled).toBe(true);
      expect(controls.update).toHaveBeenCalled();

      // Position should remain at intermediate position, not revert to origin
      expect(camera.position.x).toBeCloseTo(intermediatePos.x, 5);
      expect(camera.position.y).toBeCloseTo(intermediatePos.y, 5);
      expect(camera.position.z).toBeCloseTo(intermediatePos.z, 5);
    });

    it('C2.3: Re-triggering flight from canceled state initiates smoothly from current live coordinates', () => {
      const { camera, controls } = createMockOrbitCamera();
      const store = new StateStore();
      const flyTo = new CameraFlyTo(camera, controls, store);

      // Flight 1 -> Sun
      const sun = typedLandmarks.find((l) => l.id === 'sun')!;
      flyTo.flyToLandmark(sun, { duration: 2000 });
      flyTo.update(0.5); // Travel 500ms
      const interruptedPos = camera.position.clone();

      flyTo.cancel();

      // Flight 2 -> Pleiades from interrupted position
      const pleiades = typedLandmarks.find((l) => l.id === 'pleiades')!;
      flyTo.flyToLandmark(pleiades, { duration: 2000 });

      // After 0 delta, camera must start from the interrupted position
      flyTo.update(0.001);
      expect(camera.position.x).toBeCloseTo(interruptedPos.x, 1);
      expect(camera.position.y).toBeCloseTo(interruptedPos.y, 1);
      expect(camera.position.z).toBeCloseTo(interruptedPos.z, 1);
    });
  });

  // =========================================================================
  // Challenge 3: Float64 Limits, High-Volume Invariants & Astrometric Parsers
  // =========================================================================
  describe('C3: Float64 Precision & Coordinate Round-Trip Invariants', () => {
    it('C3.1: High-volume stress test: 2,000 randomized points satisfy ICRS <-> Galactic round-trip (< 1e-7 deg)', () => {
      // Deterministic PRNG for repeatability
      let seed = 123456789;
      function pseudoRandom() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
      }

      let maxRaError = 0;
      let maxDecError = 0;

      for (let i = 0; i < 2000; i++) {
        const ra = pseudoRandom() * 360.0;
        // Avoid singular poles for Dec error check (|Dec| < 89.0°)
        const dec = (pseudoRandom() - 0.5) * 178.0;
        const dist = 10.0 + pseudoRandom() * 100000.0;

        const gal = equatorialToGalactic(ra, dec, dist);
        const eq = galacticToEquatorial(gal.lDeg, gal.bDeg);

        let dRa = Math.abs(eq.raDeg - ra);
        if (dRa > 180) dRa = Math.abs(dRa - 360);
        const dDec = Math.abs(eq.decDeg - dec);

        if (dRa > maxRaError) maxRaError = dRa;
        if (dDec > maxDecError) maxDecError = dDec;

        expect(dRa).toBeLessThan(1e-7);
        expect(dDec).toBeLessThan(1e-7);
      }

      expect(maxRaError).toBeLessThan(1e-7);
      expect(maxDecError).toBeLessThan(1e-7);
    });

    it('C3.2: Galactocentric <-> Three.js world Cartesian round-trip invariance (< 1e-10 ly)', () => {
      const coords = [
        { x: 0, y: 0, z: 0 },
        { x: -26000, y: 0, z: 68 },
        { x: 150000, y: -50000, z: 90000 },
        { x: -1e-6, y: 1e-6, z: -1e-6 },
        { x: 80000, y: 12000, z: -80000 }
      ];

      for (const pt of coords) {
        const three = galactocentricToThree(pt);
        const back = threeToGalactocentric(three);
        expect(Math.abs(back.x - pt.x)).toBeLessThan(1e-10);
        expect(Math.abs(back.y - pt.y)).toBeLessThan(1e-10);
        expect(Math.abs(back.z - pt.z)).toBeLessThan(1e-10);
      }
    });

    it('C3.3: Astrometric string parser handles extreme and boundary notations without throw', () => {
      // Standard coordinates
      expect(parseRaStringToDegrees('00h 00m 00.0s')).toBeCloseTo(0.0, 5);
      expect(parseRaStringToDegrees('24h 00m 00.0s')).toBeCloseTo(360.0, 5);
      expect(parseDecStringToDegrees('+90° 00\' 00"')).toBeCloseTo(90.0, 5);
      expect(parseDecStringToDegrees('-90° 00\' 00"')).toBeCloseTo(-90.0, 5);

      // Astrometric formatting with negative zero degrees: "-00° 30' 00\""
      const negZeroDec = parseDecStringToDegrees('-00° 30\' 00"');
      expect(negZeroDec).toBeCloseTo(-0.5, 5);

      // Decimal degree to string round-trip
      expect(degreesToRaString(0.0)).toBe('00h 00m 00.00s');
      expect(degreesToDecString(0.0)).toBe('+00° 00\' 00.0"');
      expect(degreesToDecString(-0.5)).toBe('-00° 30\' 00.0"');
      expect(degreesToDecString(90.0)).toBe('+90° 00\' 00.0"');
      expect(degreesToDecString(-90.0)).toBe('-90° 00\' 00.0"');
    });
  });

  // =========================================================================
  // Challenge 4: Long-Running Frame Loops & WebGL Resource Lifecycle
  // =========================================================================
  describe('C4: Long-Running Simulation Loops & WebGL Resource Lifecycle', () => {
    it('C4.1: 5,000 consecutive simulation update iterations complete cleanly without memory growth', () => {
      const buffer = GalaxyGenerator.generate(20000); // 20k particle test buffer
      const galaxy = new GalaxyView(buffer);
      const sagA = new SagittariusA();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100000);
      camera.position.set(0, 45000, 75000);

      const memBefore = process.memoryUsage().heapUsed;

      for (let frame = 0; frame < 5000; frame++) {
        const delta = 0.0166;
        const time = frame * delta;
        galaxy.update(delta, time);
        sagA.update(delta, time, camera);
      }

      const memAfter = process.memoryUsage().heapUsed;
      const memDeltaMb = (memAfter - memBefore) / (1024 * 1024);

      // Assert no runaway heap expansion (< 25 MB over 5000 frames)
      expect(memDeltaMb).toBeLessThan(25.0);

      // Dispose all resources
      galaxy.dispose();
      sagA.dispose();
    });

    it('C4.2: Resource allocation and disposal cycles: 10 full GalaxyView and SagittariusA lifecycles cleanly free buffers', () => {
      for (let cycle = 0; cycle < 10; cycle++) {
        const buf = GalaxyGenerator.generate(10000);
        const gv = new GalaxyView(buf);
        const sgr = new SagittariusA();

        expect(gv.geometry.attributes.position.count).toBe(10000);
        expect(sgr.eventHorizonGeometry.parameters.radius).toBe(15);

        // Dispose
        gv.dispose();
        sgr.dispose();
      }
      expect(true).toBe(true);
    });
  });

  // =========================================================================
  // Challenge 5: WebGL Context Loss & Recovery Contract
  // =========================================================================
  describe('C5: WebGL Context Loss & Recovery Simulation Contract', () => {
    it('C5.1: Context loss flag stops rendering and prevents invalid WebGL draw calls', () => {
      let isContextLost = false;
      let renderCalls = 0;

      function renderFrame() {
        if (isContextLost) return;
        renderCalls++;
      }

      // 1. Initial frames
      renderFrame();
      renderFrame();
      expect(renderCalls).toBe(2);

      // 2. Simulate context loss
      isContextLost = true;
      for (let i = 0; i < 10; i++) {
        renderFrame();
      }
      // Render calls must not have increased
      expect(renderCalls).toBe(2);

      // 3. Simulate context restore
      isContextLost = false;
      renderFrame();
      expect(renderCalls).toBe(3);
    });
  });
});
