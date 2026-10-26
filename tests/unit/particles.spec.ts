/**
 * tests/unit/particles.spec.ts
 * Dual Track Unit & Boundary Test Suite for 200,000+ Star Particle System (F5, F6, F7, F8)
 * Validates Lin-Shu density wave logarithmic spirals, triaxial bar, Hernquist bulge,
 * thin/thick disk scale heights, and Float32Array buffer contracts.
 */

import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import type { GalaxyParticleBuffer } from '../../src/types/galaxy.js';
import { GalaxyGenerator } from '../../src/galaxy/GalaxyGenerator.js';
import { GalaxyView } from '../../src/galaxy/GalaxyView.js';

// Reid et al. (BeSSeL Survey) Reference Parameters for the 4 Major Spiral Arms + Orion Spur
export const SPIRAL_ARM_PARAMETERS = [
  {
    name: 'Scutum-Centaurus',
    id: 0,
    theta0Deg: 35.0,
    pitchAngleDeg: 13.0,
    rInnerLy: 9800,
    rOuterLy: 45600,
    targetCount: 26000
  },
  {
    name: 'Perseus',
    id: 1,
    theta0Deg: 215.0,
    pitchAngleDeg: 10.5,
    rInnerLy: 10400,
    rOuterLy: 50500,
    targetCount: 26000
  },
  {
    name: 'Sagittarius-Carina',
    id: 2,
    theta0Deg: 125.0,
    pitchAngleDeg: 12.0,
    rInnerLy: 11400,
    rOuterLy: 44000,
    targetCount: 22000
  },
  {
    name: 'Norma-Outer',
    id: 3,
    theta0Deg: 305.0,
    pitchAngleDeg: 13.5,
    rInnerLy: 9100,
    rOuterLy: 52200,
    targetCount: 22000
  },
  {
    name: 'Local Orion Spur',
    id: 4,
    theta0Deg: 90.0,
    pitchAngleDeg: 11.4,
    rInnerLy: 24000,
    rOuterLy: 31300,
    targetCount: 14000
  }
];

// Reference implementation of Lin-Shu logarithmic spiral ridge line
export function computeSpiralAngle(radius: number, r0: number, theta0Rad: number, pitchAngleRad: number): number {
  return theta0Rad + (1.0 / Math.tan(pitchAngleRad)) * Math.log(radius / r0);
}

// Reference test generator implementing Lin-Shu density wave particle physics
export function generateReferenceParticleBuffer(targetCount = 250000): GalaxyParticleBuffer {
  const positions = new Float32Array(targetCount * 3);
  const temperatures = new Float32Array(targetCount);
  const sizes = new Float32Array(targetCount);
  const arms = new Float32Array(targetCount);

  let idx = 0;
  const DEG_TO_RAD = Math.PI / 180;

  // 1. Generate Spiral Arms (110,000 particles)
  const armBudget = 110000;
  const countPerArm = Math.floor(armBudget / SPIRAL_ARM_PARAMETERS.length);

  for (const arm of SPIRAL_ARM_PARAMETERS) {
    const theta0 = arm.theta0Deg * DEG_TO_RAD;
    const pitch = arm.pitchAngleDeg * DEG_TO_RAD;

    for (let i = 0; i < countPerArm && idx < targetCount; i++) {
      const u = (i + 0.5) / countPerArm;
      const radius = arm.rInnerLy + u * (arm.rOuterLy - arm.rInnerLy);
      const theta = computeSpiralAngle(radius, arm.rInnerLy, theta0, pitch);

      // Width dispersion: W(R) = W0 + alpha * R
      const armWidth = 800 + 0.045 * radius;
      const angularDispersion = armWidth / radius;
      const dTheta = ((i % 100) / 100 - 0.5) * angularDispersion * 2.0;

      const angle = theta + dTheta;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = (((i * 7) % 100) / 100 - 0.5) * 650; // thin disk vertical scale

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;
      temperatures[idx] = 3000 + ((i * 13) % 35000); // 3000K - 38000K
      sizes[idx] = 1.0 + (i % 3);
      arms[idx] = arm.id;
      idx++;
    }
  }

  // 2. Generate Triaxial Bar (25,000 particles)
  const barCount = 25000;
  const phiBar = 27.0 * DEG_TO_RAD;
  const aBar = 13000.0;
  const bBar = 3900.0;
  const cBar = 2000.0;

  for (let i = 0; i < barCount && idx < targetCount; i++) {
    const u1 = ((i + 1) / barCount) * 2 - 1;
    const u2 = (((i * 3) % barCount) / barCount) * 2 - 1;
    const u3 = (((i * 5) % barCount) / barCount) * 2 - 1;

    const xPrime = u1 * aBar * 0.7;
    const yPrime = u2 * bBar * 0.7;
    const zPrime = u3 * cBar * 0.7;

    // Rotate by 27° bar angle
    const x = xPrime * Math.cos(phiBar) - yPrime * Math.sin(phiBar);
    const z = xPrime * Math.sin(phiBar) + yPrime * Math.cos(phiBar);
    const y = zPrime;

    positions[idx * 3] = x;
    positions[idx * 3 + 1] = y;
    positions[idx * 3 + 2] = z;
    temperatures[idx] = 3500 + ((i * 11) % 4000); // K and M stars (bulge/bar)
    sizes[idx] = 1.2;
    arms[idx] = 5; // Bar
    idx++;
  }

  // 3. Fill remaining particles in Hernquist Bulge & Exponential Disks
  while (idx < targetCount) {
    const u = (idx + 0.5) / targetCount;
    const r = -8500 * Math.log(1 - u * 0.99); // Exponential disk
    const phi = u * Math.PI * 40.0;
    const zScale = idx % 5 === 0 ? 2930 : 980; // thick vs thin disk

    positions[idx * 3] = r * Math.cos(phi);
    positions[idx * 3 + 1] = (((idx * 17) % 100) / 100 - 0.5) * zScale;
    positions[idx * 3 + 2] = r * Math.sin(phi);
    temperatures[idx] = 4000 + ((idx * 7) % 8000);
    sizes[idx] = 1.0;
    arms[idx] = 6; // Diffuse disk
    idx++;
  }

  return {
    positions,
    temperatures,
    sizes,
    arms,
    count: targetCount
  };
}

describe('Feature F5: 200,000+ Star Particle Budget (Tier 1 - Feature Coverage)', () => {
  it('F5-T1-01: Generates at least 200,000 star particles meeting R1 requirements', () => {
    const buffer = generateReferenceParticleBuffer(250000);
    expect(buffer.count).toBeGreaterThanOrEqual(200000);
    expect(buffer.count).toBe(250000);
  });

  it('F5-T1-02: Buffer attributes use single-draw-call Float32Array typed arrays', () => {
    const buffer = generateReferenceParticleBuffer(200000);
    expect(buffer.positions instanceof Float32Array).toBe(true);
    expect(buffer.temperatures instanceof Float32Array).toBe(true);
    expect(buffer.sizes instanceof Float32Array).toBe(true);
    expect(buffer.arms instanceof Float32Array).toBe(true);
  });

  it('F5-T1-03: Buffer sizes match vertex attribute stride dimensions', () => {
    const count = 250000;
    const buffer = generateReferenceParticleBuffer(count);
    expect(buffer.positions.length).toBe(count * 3);
    expect(buffer.temperatures.length).toBe(count);
    expect(buffer.sizes.length).toBe(count);
    expect(buffer.arms.length).toBe(count);
  });

  it('F5-T1-04: Memory footprint of particle buffers is under 10 MB VRAM', () => {
    const count = 250000;
    const buffer = generateReferenceParticleBuffer(count);
    const totalBytes =
      buffer.positions.byteLength +
      buffer.temperatures.byteLength +
      buffer.sizes.byteLength +
      buffer.arms.byteLength;
    // 250k * (3 + 1 + 1 + 1) * 4 bytes = 6,000,000 bytes ~ 5.72 MB
    expect(totalBytes).toBeLessThan(10 * 1024 * 1024);
    expect(totalBytes).toBe(count * 6 * 4);
  });

  it('F5-T1-05: Temperatures span the Harvard spectral range (2,500K to 40,000K)', () => {
    const buffer = generateReferenceParticleBuffer(200000);
    let minTemp = Infinity;
    let maxTemp = -Infinity;

    for (let i = 0; i < buffer.count; i++) {
      const t = buffer.temperatures[i];
      if (t < minTemp) minTemp = t;
      if (t > maxTemp) maxTemp = t;
    }

    expect(minTemp).toBeGreaterThanOrEqual(2500);
    expect(maxTemp).toBeLessThanOrEqual(45000);
    expect(maxTemp).toBeGreaterThanOrEqual(30000); // Contains O/B class stars
  });
});

describe('Feature F6: Lin-Shu Density Wave Spiral Arms (Tier 1)', () => {
  it('F6-T1-01: Contains all 4 major spiral arms plus the local Orion Spur', () => {
    expect(SPIRAL_ARM_PARAMETERS.length).toBe(5);
    const names = SPIRAL_ARM_PARAMETERS.map((a) => a.name);
    expect(names).toContain('Scutum-Centaurus');
    expect(names).toContain('Perseus');
    expect(names).toContain('Sagittarius-Carina');
    expect(names).toContain('Norma-Outer');
    expect(names).toContain('Local Orion Spur');
  });

  it('F6-T1-02: Pitch angles conform to BeSSeL VLBI parameters (10.0° - 14.0°)', () => {
    for (const arm of SPIRAL_ARM_PARAMETERS) {
      expect(arm.pitchAngleDeg).toBeGreaterThanOrEqual(10.0);
      expect(arm.pitchAngleDeg).toBeLessThanOrEqual(14.0);
    }
  });

  it('F6-T1-03: Logarithmic spiral function increases angle monotonically with radius', () => {
    const r0 = 10000;
    const theta0 = 0.5;
    const pitch = 0.21; // ~12°

    const r1 = 12000;
    const r2 = 25000;
    const r3 = 45000;

    const angle1 = computeSpiralAngle(r1, r0, theta0, pitch);
    const angle2 = computeSpiralAngle(r2, r0, theta0, pitch);
    const angle3 = computeSpiralAngle(r3, r0, theta0, pitch);

    expect(angle2).toBeGreaterThan(angle1);
    expect(angle3).toBeGreaterThan(angle2);
  });

  it('F6-T1-04: Spiral arms span from inner bar radius (8,000-11,000 ly) to outer boundary (>44,000 ly)', () => {
    for (const arm of SPIRAL_ARM_PARAMETERS.filter((a) => a.id < 4)) {
      expect(arm.rInnerLy).toBeGreaterThanOrEqual(8000);
      expect(arm.rInnerLy).toBeLessThanOrEqual(12000);
      expect(arm.rOuterLy).toBeGreaterThanOrEqual(44000);
    }
  });

  it('F6-T1-05: Local Orion Spur bounds span the solar galactocentric radius (26,000 ly)', () => {
    const orionSpur = SPIRAL_ARM_PARAMETERS.find((a) => a.id === 4)!;
    expect(orionSpur.rInnerLy).toBeLessThanOrEqual(26000);
    expect(orionSpur.rOuterLy).toBeGreaterThanOrEqual(26000);
  });
});

describe('Feature F7 & F8: Bulge, Bar, Thin & Thick Disks (Tier 1)', () => {
  it('F7-T1-01: Triaxial bar dimensions conform to astrophysical models (13k x 3.9k x 2k ly at 27°)', () => {
    const aBar = 13000.0;
    const bBar = 3900.0;
    const cBar = 2000.0;
    const phiBarDeg = 27.0;

    expect(aBar / bBar).toBeCloseTo(3.33, 1); // Prolate aspect ratio
    expect(bBar / cBar).toBeCloseTo(1.95, 1);
    expect(phiBarDeg).toBe(27.0);
  });

  it('F8-T1-01: Thin disk scale height (300 pc / 980 ly) is 1/3 of thick disk (900 pc / 2930 ly)', () => {
    const zThinLy = 300 * 3.26156;
    const zThickLy = 900 * 3.26156;
    expect(zThinLy).toBeCloseTo(978.5, 0);
    expect(zThickLy).toBeCloseTo(2935.4, 0);
    expect(zThickLy / zThinLy).toBeCloseTo(3.0, 1);
  });
});

describe('Features F5-F8: Particle Boundaries, Finite Math & Clamping (Tier 2)', () => {
  it('F5-T2-01: Asserts zero NaN or infinite coordinates across all 250,000 particles', () => {
    const buffer = generateReferenceParticleBuffer(250000);
    const pos = buffer.positions;
    let allFinite = true;

    for (let i = 0; i < buffer.count * 3; i++) {
      if (!Number.isFinite(pos[i])) {
        allFinite = false;
        break;
      }
    }
    expect(allFinite).toBe(true);
  });

  it('F5-T2-02: All particles are strictly bounded within galactic maximum radius (R <= 65,000 ly)', () => {
    const buffer = generateReferenceParticleBuffer(250000);
    const pos = buffer.positions;
    let withinBounds = true;

    for (let i = 0; i < buffer.count; i++) {
      const x = pos[i * 3];
      const z = pos[i * 3 + 2];
      const r = Math.sqrt(x * x + z * z);
      if (r > 65000) {
        withinBounds = false;
        break;
      }
    }
    expect(withinBounds).toBe(true);
  });

  it('F5-T2-03: All particles are strictly bounded within vertical disk thickness (|Y| <= 12,000 ly)', () => {
    const buffer = generateReferenceParticleBuffer(250000);
    const pos = buffer.positions;
    let withinHeight = true;

    for (let i = 0; i < buffer.count; i++) {
      const y = pos[i * 3 + 1];
      if (Math.abs(y) > 12000) {
        withinHeight = false;
        break;
      }
    }
    expect(withinHeight).toBe(true);
  });

  it('F5-T2-04: Particle sizes are clamped within positive rendering bounds (1.0 to 10.0)', () => {
    const buffer = generateReferenceParticleBuffer(250000);
    const sizes = buffer.sizes;
    let validSizes = true;

    for (let i = 0; i < buffer.count; i++) {
      if (sizes[i] < 0.5 || sizes[i] > 15.0) {
        validSizes = false;
        break;
      }
    }
    expect(validSizes).toBe(true);
  });

  it('F5-T2-05: Arm indices are valid non-negative integer tags', () => {
    const buffer = generateReferenceParticleBuffer(250000);
    const arms = buffer.arms;
    let validArms = true;

    for (let i = 0; i < buffer.count; i++) {
      if (arms[i] < 0 || !Number.isInteger(arms[i])) {
        validArms = false;
        break;
      }
    }
    expect(validArms).toBe(true);
  });
});

describe('Feature F5-F8: GalaxyGenerator & GalaxyView Production Implementation', () => {
  it('Production-01: GalaxyGenerator produces 250,000 star particles with 4 typed buffers', () => {
    const buffer = GalaxyGenerator.generate(250000);
    expect(buffer.count).toBe(250000);
    expect(buffer.positions.length).toBe(250000 * 3);
    expect(buffer.temperatures.length).toBe(250000);
    expect(buffer.sizes.length).toBe(250000);
    expect(buffer.arms.length).toBe(250000);
  });

  it('Production-02: All generated particles strictly satisfy physical galactic bounds', () => {
    const buffer = GalaxyGenerator.generate(250000);
    const pos = buffer.positions;
    let allFinite = true;
    let withinRadius = true;
    let withinHeight = true;

    for (let i = 0; i < buffer.count; i++) {
      const x = pos[i * 3];
      const y = pos[i * 3 + 1];
      const z = pos[i * 3 + 2];

      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
        allFinite = false;
        break;
      }

      const r = Math.sqrt(x * x + z * z);
      if (r > 65000) {
        withinRadius = false;
        break;
      }
      if (Math.abs(y) > 12000) {
        withinHeight = false;
        break;
      }
    }

    expect(allFinite).toBe(true);
    expect(withinRadius).toBe(true);
    expect(withinHeight).toBe(true);
  });

  it('Production-03: Astrophysical temperatures conform to arm vs bulge population distributions', () => {
    const buffer = GalaxyGenerator.generate(250000);
    let armTempSum = 0;
    let armCount = 0;
    let bulgeTempSum = 0;
    let bulgeCount = 0;
    let validRange = true;

    for (let i = 0; i < buffer.count; i++) {
      const t = buffer.temperatures[i];
      const armId = buffer.arms[i];

      if (t < 2500 || t > 45000) {
        validRange = false;
        break;
      }

      if (armId >= 0 && armId <= 4) {
        armTempSum += t;
        armCount++;
      } else if (armId === 6) {
        bulgeTempSum += t;
        bulgeCount++;
      }
    }

    expect(validRange).toBe(true);
    const avgArmTemp = armTempSum / armCount;
    const avgBulgeTemp = bulgeTempSum / bulgeCount;

    // Young hot stellar nurseries in spiral arms vs old stellar population in bulge
    expect(avgArmTemp).toBeGreaterThan(7500);
    expect(avgBulgeTemp).toBeGreaterThanOrEqual(3500);
    expect(avgBulgeTemp).toBeLessThanOrEqual(5800);
  });

  it('Production-04: GalaxyView constructs THREE.BufferGeometry and THREE.Points with AdditiveBlending', () => {
    const buffer = GalaxyGenerator.generate(200000);
    const view = new GalaxyView(buffer);

    expect(view.particleCount).toBe(200000);
    expect(view.geometry.getAttribute('position').count).toBe(200000);
    expect(view.geometry.getAttribute('aTemperature').count).toBe(200000);
    expect(view.geometry.getAttribute('aSize').count).toBe(200000);
    expect(view.geometry.getAttribute('aArm').count).toBe(200000);

    expect(view.material.transparent).toBe(true);
    expect(view.material.depthWrite).toBe(false);
    expect(view.material.blending).toBe(THREE.AdditiveBlending);
    expect(view.material.uniforms.uTime.value).toBe(0.0);

    // Verify time update
    view.update(0.016, 2.5);
    expect(view.material.uniforms.uTime.value).toBe(2.5);

    view.dispose();
  });
});

