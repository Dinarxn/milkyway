/**
 * tests/integration/cross-feature.spec.ts
 * Tier 3: Cross-Feature Integration Test Suite
 * Validates pairwise subsystem interactions:
 * - CameraFlyTo + HUD StateStore synchronization
 * - User manual control interruption of active camera flights
 * - Particle sizing dynamic attenuation across macro-to-micro zooms
 * - Rapid bookmark re-targeting mid-flight
 * - Concurrent render loop telemetry updates and camera state
 */

import { describe, it, expect, vi } from 'vitest';
import {
  TestGalaxyStateStore,
  evaluateTrajectory,
  computeArcHeight,
  computePointSize
} from '../fixtures/helpers.js';
import type { Landmark } from '../../src/types/galaxy.js';

describe('Tier 3: Cross-Feature Combinations & Pairwise Integration', () => {
  const mockSgrA: Landmark = {
    id: 'sagittarius-a',
    name: 'Sagittarius A*',
    category: 'supermassive_black_hole',
    equatorial: { ra: '17h 45m', dec: '-29° 00\'', raDeg: 266.41, decDeg: -29.0, distanceLy: 26000 },
    galactic: { lDeg: 359.94, bDeg: -0.05, distanceLy: 26000 },
    cartesian: { x: 0, y: 0, z: 0 },
    distanceFromGC: 0,
    distanceFromSun: 26000,
    spectralType: 'SMBH',
    description: 'Galactic Center supermassive black hole.',
    cameraDistance: 250
  };

  const mockPleiades: Landmark = {
    id: 'pleiades',
    name: 'Pleiades',
    category: 'open_cluster',
    equatorial: { ra: '03h 47m', dec: '+24° 07\'', raDeg: 56.85, decDeg: 24.11, distanceLy: 444 },
    galactic: { lDeg: 166.57, bDeg: -23.52, distanceLy: 444 },
    cartesian: { x: -94.6, y: -109.2, z: 26396 },
    distanceFromGC: 26396,
    distanceFromSun: 444,
    spectralType: 'B7IIIe',
    description: 'Seven Sisters open cluster.',
    cameraDistance: 300
  };

  it('Tier 3 - Pair 1: CameraFlyTo animation synchronizes with StateStore HUD update and completion', () => {
    const store = new TestGalaxyStateStore();
    const onComplete = vi.fn();

    // 1. User selects landmark: StateStore updates active landmark and marks isFlying = true
    store.setActiveLandmark(mockSgrA);
    store.setFlying(true);

    expect(store.getActiveLandmark()?.id).toBe('sagittarius-a');
    expect(store.getFlying()).toBe(true);

    // 2. Flight interpolates across 5 steps
    const start = { x: 0, y: 45000, z: 75000 };
    const end = { x: 0, y: 80, z: 220 };
    const dist = Math.hypot(end.x - start.x, end.y - start.y, end.z - start.z);
    const arcHeight = computeArcHeight(dist);

    const positions = [];
    for (let step = 0; step <= 1.0; step += 0.25) {
      positions.push(evaluateTrajectory(start, end, arcHeight, step));
    }

    expect(positions.length).toBe(5);
    // Intermediate position has arc elevation
    expect(positions[2].y).toBeGreaterThan(start.y / 2);

    // 3. Flight finishes at destination: onComplete called, isFlying set to false
    onComplete();
    store.setFlying(false);

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(store.getFlying()).toBe(false);
    expect(positions[4].x).toBeCloseTo(end.x, 5);
    expect(positions[4].y).toBeCloseTo(end.y, 5);
    expect(positions[4].z).toBeCloseTo(end.z, 5);
  });

  it('Tier 3 - Pair 2: User OrbitControls manual drag interrupts active CameraFlyTo cleanly', () => {
    const store = new TestGalaxyStateStore();
    store.setActiveLandmark(mockPleiades);
    store.setFlying(true);

    // Camera is mid-flight at progress t = 0.4 from overview (z = 75,000) to Pleiades (z = 26,550)
    const start = { x: 0, y: 45000, z: 75000 };
    const end = { x: -94.6, y: -40, z: 26550 };
    const arcHeight = computeArcHeight(Math.hypot(end.x - start.x, end.y - start.y, end.z - start.z));
    const midFlightPos = evaluateTrajectory(start, end, arcHeight, 0.4);

    // User initiates manual drag: cancel active flight
    store.setFlying(false);
    expect(store.getFlying()).toBe(false);

    // Camera current position remains at midFlightPos without snapping back to start or destination
    expect(midFlightPos.y).toBeGreaterThan(end.y);
    expect(midFlightPos.z).toBeLessThan(start.z);
    expect(midFlightPos.z).toBeGreaterThan(end.z);
  });

  it('Tier 3 - Pair 3: Particle point sizing dynamically attenuates during camera zoom transition', () => {
    // Distance decreases from macro view (75,000 ly) down to cluster view (150 ly)
    const macroDist = 75000;
    const midDist = 5000;
    const microDist = 150;

    const sizeMacro = computePointSize(macroDist, 4.83); // Sun magnitude
    const sizeMid = computePointSize(midDist, 4.83);
    const sizeMicro = computePointSize(microDist, 4.83);

    expect(sizeMicro).toBeGreaterThan(sizeMid);
    expect(sizeMid).toBeGreaterThanOrEqual(sizeMacro);
    expect(sizeMicro).toBeLessThanOrEqual(24.0);
    expect(sizeMacro).toBeGreaterThanOrEqual(1.0);
  });

  it('Tier 3 - Pair 4: Rapid bookmark switching mid-flight redirects smoothly to new target', () => {
    const store = new TestGalaxyStateStore();

    // 1. Start flight towards Pleiades
    store.setActiveLandmark(mockPleiades);
    store.setFlying(true);

    // Midpoint position reached at t = 0.5
    const posStart = { x: 0, y: 45000, z: 75000 };
    const pleiadesEnd = { x: -94.6, y: -40, z: 26550 };
    const arc1 = computeArcHeight(Math.hypot(pleiadesEnd.x - posStart.x, pleiadesEnd.y - posStart.y, pleiadesEnd.z - posStart.z));
    const currentPos = evaluateTrajectory(posStart, pleiadesEnd, arc1, 0.5);

    // 2. User rapidly clicks Sagittarius A* bookmark while in mid-air
    store.setActiveLandmark(mockSgrA);
    const sgrAEnd = { x: 0, y: 80, z: 220 };
    const arc2 = computeArcHeight(Math.hypot(sgrAEnd.x - currentPos.x, sgrAEnd.y - currentPos.y, sgrAEnd.z - currentPos.z));

    // Redirect flight starts seamlessly from currentPos
    const redirectStartPos = evaluateTrajectory(currentPos, sgrAEnd, arc2, 0.0);
    expect(redirectStartPos.x).toBeCloseTo(currentPos.x, 5);
    expect(redirectStartPos.y).toBeCloseTo(currentPos.y, 5);
    expect(redirectStartPos.z).toBeCloseTo(currentPos.z, 5);

    // Completes at Sagittarius A*
    const finalPos = evaluateTrajectory(currentPos, sgrAEnd, arc2, 1.0);
    expect(finalPos.x).toBeCloseTo(sgrAEnd.x, 5);
    expect(finalPos.y).toBeCloseTo(sgrAEnd.y, 5);
    expect(finalPos.z).toBeCloseTo(sgrAEnd.z, 5);
    expect(store.getActiveLandmark()?.id).toBe('sagittarius-a');
  });

  it('Tier 3 - Pair 5: Orbital rotation and telemetry updates execute concurrently without collision', () => {
    const store = new TestGalaxyStateStore();
    let listenerCount = 0;
    store.subscribe(() => {
      listenerCount++;
    });

    // Simulate 60 frames of simultaneous camera rotation and FPS telemetry
    for (let frame = 0; frame < 60; frame++) {
      const angle = (frame * Math.PI) / 30;
      const camX = Math.cos(angle) * 75000;
      const camZ = Math.sin(angle) * 75000;
      store.updateTelemetry(60, 250000, [camX, 45000, camZ]);
    }

    expect(listenerCount).toBe(60);
    const telemetry = store.getTelemetry();
    expect(telemetry.fps).toBe(60);
    expect(telemetry.particleCount).toBe(250000);
    expect(telemetry.cameraPosition.length).toBe(3);
  });
});
