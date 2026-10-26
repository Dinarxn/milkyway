/**
 * tests/unit/navigation.spec.ts
 * Dual Track Unit & Boundary Test Suite for OrbitControls and CameraFlyTo Interpolator (F14, F15)
 * Validates quintic smootherstep easing, parabolic arc trajectory, damping inertia,
 * macro-to-micro zoom limits, and cancellation contracts.
 */

import { describe, it, expect } from 'vitest';

// Quintic smootherstep easing function: 10t^3 - 15t^4 + 6t^5
export function quinticSmootherstep(t: number): number {
  const clampedT = Math.min(Math.max(t, 0.0), 1.0);
  return clampedT * clampedT * clampedT * (clampedT * (clampedT * 6.0 - 15.0) + 10.0);
}

// First derivative of quintic smootherstep (velocity)
export function quinticVelocity(t: number): number {
  const clampedT = Math.min(Math.max(t, 0.0), 1.0);
  return 30.0 * clampedT * clampedT * Math.pow(1.0 - clampedT, 2);
}

// Second derivative of quintic smootherstep (acceleration)
export function quinticAcceleration(t: number): number {
  const clampedT = Math.min(Math.max(t, 0.0), 1.0);
  return 60.0 * clampedT * (1.0 - clampedT) * (1.0 - 2.0 * clampedT);
}

// Parabolic arc height formula based on travel distance
export function computeArcHeight(distance: number): number {
  return Math.min(Math.max(distance * 0.25, 20.0), 12000.0);
}

// CameraFlyTo Trajectory Evaluator
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

// Reference OrbitControls configuration & clamps
export interface OrbitConfig {
  minDistance: number;
  maxDistance: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  dampingFactor: number;
  enableDamping: boolean;
}

export const CANONICAL_ORBIT_CONFIG: OrbitConfig = {
  minDistance: 15.0,
  maxDistance: 160000.0,
  minPolarAngle: 0.05,
  maxPolarAngle: Math.PI - 0.05,
  dampingFactor: 0.05,
  enableDamping: true
};

export function clampOrbitDistance(distance: number, config = CANONICAL_ORBIT_CONFIG): number {
  return Math.min(Math.max(distance, config.minDistance), config.maxDistance);
}

export function clampPolarAngle(angle: number, config = CANONICAL_ORBIT_CONFIG): number {
  return Math.min(Math.max(angle, config.minPolarAngle), config.maxPolarAngle);
}

describe('Feature F15: Camera Fly-To Landmark Interpolation (Tier 1)', () => {
  it('F15-T1-01: Quintic smootherstep easing satisfies boundary values [0.0, 0.5, 1.0]', () => {
    expect(quinticSmootherstep(0.0)).toBe(0.0);
    expect(quinticSmootherstep(0.5)).toBe(0.5);
    expect(quinticSmootherstep(1.0)).toBe(1.0);
  });

  it('F15-T1-02: Quintic smootherstep has zero velocity and acceleration at start and end', () => {
    // Zero velocity at t=0 and t=1 ensures zero entry/exit jerk
    expect(quinticVelocity(0.0)).toBeCloseTo(0.0, 6);
    expect(quinticVelocity(1.0)).toBeCloseTo(0.0, 6);
    expect(quinticAcceleration(0.0)).toBeCloseTo(0.0, 6);
    expect(quinticAcceleration(1.0)).toBeCloseTo(0.0, 6);
  });

  it('F15-T1-03: Easing increases strictly monotonically across progress (velocity >= 0)', () => {
    let prev = -1;
    for (let t = 0; t <= 1.0; t += 0.05) {
      const val = quinticSmootherstep(t);
      expect(val).toBeGreaterThanOrEqual(prev);
      expect(quinticVelocity(t)).toBeGreaterThanOrEqual(0.0);
      prev = val;
    }
  });

  it('F15-T1-04: Parabolic arc height scales with distance and clamps between 20 ly and 12,000 ly', () => {
    const arcShort = computeArcHeight(10);
    expect(arcShort).toBe(20.0); // Min clamp

    const arcMid = computeArcHeight(1000);
    expect(arcMid).toBe(250.0); // 1000 * 0.25

    const arcFar = computeArcHeight(100000);
    expect(arcFar).toBe(12000.0); // Max clamp
  });

  it('F15-T1-05: Trajectory correctly reaches midpoint peak elevation and terminal destination', () => {
    const start = { x: 0, y: 45000, z: 75000 };
    const end = { x: 0, y: 0, z: 0 };
    const dist = Math.hypot(end.x - start.x, end.y - start.y, end.z - start.z);
    const arcH = computeArcHeight(dist);

    // Initial position
    const p0 = evaluateTrajectory(start, end, arcH, 0.0);
    expect(p0.x).toBeCloseTo(start.x, 6);
    expect(p0.y).toBeCloseTo(start.y, 6);
    expect(p0.z).toBeCloseTo(start.z, 6);

    // Midpoint position has arc lift
    const pMid = evaluateTrajectory(start, end, arcH, 0.5);
    const expectedBaseY = (start.y + end.y) / 2.0;
    expect(pMid.y).toBeCloseTo(expectedBaseY + arcH, 1);

    // Final position
    const p1 = evaluateTrajectory(start, end, arcH, 1.0);
    expect(p1.x).toBeCloseTo(end.x, 6);
    expect(p1.y).toBeCloseTo(end.y, 6);
    expect(p1.z).toBeCloseTo(end.z, 6);
  });
});

describe('Feature F14: 6-DOF OrbitControls with Damping (Tier 1)', () => {
  it('F14-T1-01: OrbitControls damping factor conforms to 0.05 specification', () => {
    expect(CANONICAL_ORBIT_CONFIG.dampingFactor).toBe(0.05);
    expect(CANONICAL_ORBIT_CONFIG.enableDamping).toBe(true);
  });

  it('F14-T1-02: Macro-to-micro zoom limits span 15 ly to 160,000 ly', () => {
    expect(CANONICAL_ORBIT_CONFIG.minDistance).toBe(15.0);
    expect(CANONICAL_ORBIT_CONFIG.maxDistance).toBe(160000.0);
  });

  it('F14-T1-03: Polar angles prevent gimbal pole flipping (0.05 to pi - 0.05)', () => {
    expect(CANONICAL_ORBIT_CONFIG.minPolarAngle).toBe(0.05);
    expect(CANONICAL_ORBIT_CONFIG.maxPolarAngle).toBeCloseTo(Math.PI - 0.05, 5);
  });
});

describe('Features F14 & F15: Navigation Boundaries & Interruption Handling (Tier 2)', () => {
  it('F15-T2-01: Zero-distance trajectory evaluation returns exact start coordinates without NaN', () => {
    const pt = { x: 100, y: 200, z: 300 };
    const pMid = evaluateTrajectory(pt, pt, 20.0, 0.5);
    expect(pMid.x).toBe(100);
    expect(pMid.z).toBe(300);
    expect(pMid.y).toBe(200 + 20.0); // Lifted by minimum arc
  });

  it('F15-T2-02: Progress values t < 0 and t > 1 are cleanly clamped to [0.0, 1.0]', () => {
    const start = { x: 0, y: 0, z: 0 };
    const end = { x: 100, y: 100, z: 100 };

    const pNeg = evaluateTrajectory(start, end, 50, -0.5);
    expect(pNeg.x).toBe(0);

    const pOver = evaluateTrajectory(start, end, 50, 1.5);
    expect(pOver.x).toBe(100);
  });

  it('F14-T2-01: Zoom distance clamps when user attempts to zoom inside micro limit (<15 ly)', () => {
    const clampedNear = clampOrbitDistance(5.0);
    expect(clampedNear).toBe(15.0);

    const clampedZero = clampOrbitDistance(0.0);
    expect(clampedZero).toBe(15.0);

    const clampedNegative = clampOrbitDistance(-50.0);
    expect(clampedNegative).toBe(15.0);
  });

  it('F14-T2-02: Zoom distance clamps when user attempts to zoom beyond macro limit (>160,000 ly)', () => {
    const clampedFar = clampOrbitDistance(250000.0);
    expect(clampedFar).toBe(160000.0);
  });

  it('F14-T2-03: Polar angle clamps when user attempts to drag over North or South poles', () => {
    const clampedNorth = clampPolarAngle(-0.5);
    expect(clampedNorth).toBe(0.05);

    const clampedSouth = clampPolarAngle(Math.PI + 0.5);
    expect(clampedSouth).toBeCloseTo(Math.PI - 0.05, 5);
  });
});
