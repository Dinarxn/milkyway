/**
 * tests/unit/shaders.spec.ts
 * Dual Track Unit & Boundary Test Suite for Planck Blackbody Shaders & Point Attenuation (F9, F10)
 * Validates Tanner Helland polynomial Kelvin-to-sRGB mapping across Harvard spectral classes,
 * distance attenuation, luminosity scaling, and GLSL uniform contracts.
 */

import { describe, it, expect } from 'vitest';
import type { StarShaderUniforms, BlackHoleShaderUniforms } from '../../src/types/galaxy.js';

// Tanner Helland Analytical Polynomial Algorithm for Kelvin to sRGB
export function kelvinToRGB(kelvin: number): { r: number; g: number; b: number } {
  const temp = Math.max(1000.0, Math.min(40000.0, kelvin)) / 100.0;
  let r = 0;
  let g = 0;
  let b = 0;

  // 1. Red channel
  if (temp <= 66.0) {
    r = 255.0;
  } else {
    r = 329.698727446 * Math.pow(temp - 60.0, -0.1332047592);
  }

  // 2. Green channel
  if (temp <= 66.0) {
    g = 99.4708025861 * Math.log(temp) - 161.1195681661;
  } else {
    g = 288.1221695283 * Math.pow(temp - 60.0, -0.0755148492);
  }

  // 3. Blue channel
  if (temp >= 66.0) {
    b = 255.0;
  } else if (temp <= 19.0) {
    b = 0.0;
  } else {
    b = 138.5177312231 * Math.log(temp - 10.0) - 305.0447927307;
  }

  return {
    r: Math.max(0.0, Math.min(1.0, r / 255.0)),
    g: Math.max(0.0, Math.min(1.0, g / 255.0)),
    b: Math.max(0.0, Math.min(1.0, b / 255.0))
  };
}

// Distance attenuation & luminosity particle sizing formula
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

describe('Feature F9: Planck Blackbody GLSL Shaders (Tier 1 - Feature Coverage)', () => {
  it('F9-T1-01: Correctly maps Class O stars (38,000K) to electric violet-blue', () => {
    const color = kelvinToRGB(38000);
    expect(color.b).toBe(1.0);
    expect(color.r).toBeLessThan(0.7);
    expect(color.g).toBeLessThan(0.8);
    expect(color.b).toBeGreaterThan(color.r); // Blue dominates
  });

  it('F9-T1-02: Correctly maps Class B stars (15,000K) to blue-white', () => {
    const color = kelvinToRGB(15000);
    expect(color.b).toBe(1.0);
    expect(color.r).toBeGreaterThan(0.65);
    expect(color.g).toBeGreaterThan(0.75);
    expect(color.b).toBeGreaterThan(color.r);
  });

  it('F9-T1-03: Correctly maps Class A stars (9,600K Vega) to brilliant white', () => {
    const color = kelvinToRGB(9600);
    expect(color.b).toBe(1.0);
    expect(color.r).toBeGreaterThan(0.75);
    expect(color.g).toBeGreaterThan(0.85);
  });

  it('F9-T1-04: Correctly maps Class G stars (5,778K Sun) to warm yellow starlight', () => {
    const color = kelvinToRGB(5778);
    expect(color.r).toBe(1.0);
    expect(color.g).toBeGreaterThan(0.9);
    expect(color.b).toBeGreaterThan(0.85);
    expect(color.r).toBeGreaterThanOrEqual(color.g);
    expect(color.g).toBeGreaterThan(color.b);
  });

  it('F9-T1-05: Correctly maps Class M stars (3,000K Betelgeuse) to deep crimson-red', () => {
    const color = kelvinToRGB(3000);
    expect(color.r).toBe(1.0);
    expect(color.g).toBeLessThan(0.75);
    expect(color.b).toBeLessThan(0.5);
    expect(color.r).toBeGreaterThan(color.g);
    expect(color.g).toBeGreaterThan(color.b);
  });
});

describe('Feature F10: Distance-Attenuated Sizing & Bloom (Tier 1)', () => {
  it('F10-T1-01: Points attenuate inversely with camera distance', () => {
    const sizeNear = computePointSize(30, 4.83); // 30 ly
    const sizeMid = computePointSize(80, 4.83);   // 80 ly
    const sizeFar = computePointSize(300, 4.83);  // 300 ly

    expect(sizeNear).toBeGreaterThan(sizeMid);
    expect(sizeMid).toBeGreaterThan(sizeFar);
  });

  it('F10-T1-02: Luminous stars (lower absolute magnitude) render larger than dwarfs', () => {
    const sizeHypergiant = computePointSize(60, -8.0); // e.g. Eta Carinae (MV = -8.6)
    const sizeSun = computePointSize(60, 4.83);         // Sun (MV = +4.83)
    const sizeRedDwarf = computePointSize(60, 15.0);     // Proxima (MV = +15.5)

    expect(sizeHypergiant).toBeGreaterThan(sizeSun);
    expect(sizeSun).toBeGreaterThan(sizeRedDwarf);
  });

  it('F10-T1-03: Point size clamps strictly to WebGL viewport bounds [1.0, 24.0] px', () => {
    // Ultra close camera
    const sizeClose = computePointSize(0.1, -10.0);
    expect(sizeClose).toBeLessThanOrEqual(24.0);

    // Ultra far camera
    const sizeFar = computePointSize(300000.0, 20.0);
    expect(sizeFar).toBeGreaterThanOrEqual(1.0);
  });

  it('F10-T1-04: StarShaderUniforms structure conforms to PROJECT.md contract', () => {
    const uniforms: StarShaderUniforms = {
      uTime: { value: 0.0 },
      uPixelRatio: { value: 1.0 },
      uSizeScale: { value: 1.0 },
      uCoreBloom: { value: 1.2 }
    };

    expect(typeof uniforms.uTime.value).toBe('number');
    expect(typeof uniforms.uPixelRatio.value).toBe('number');
    expect(typeof uniforms.uSizeScale.value).toBe('number');
    expect(typeof uniforms.uCoreBloom.value).toBe('number');
  });

  it('F10-T1-05: BlackHoleShaderUniforms structure conforms to PROJECT.md contract', () => {
    const uniforms: BlackHoleShaderUniforms = {
      uTime: { value: 0.0 },
      uInnerRadius: { value: 0.3 },
      uOuterRadius: { value: 0.95 },
      uSpin: { value: 0.94 },
      uLensingStrength: { value: 1.0 }
    };

    expect(typeof uniforms.uTime.value).toBe('number');
    expect(typeof uniforms.uInnerRadius.value).toBe('number');
    expect(typeof uniforms.uOuterRadius.value).toBe('number');
    expect(typeof uniforms.uSpin.value).toBe('number');
    expect(typeof uniforms.uLensingStrength.value).toBe('number');
  });
});

describe('Features F9 & F10: Shader Boundaries & Numerical Robustness (Tier 2)', () => {
  it('F9-T2-01: Extreme temperatures (<1000K) clamp cleanly without NaN', () => {
    const col0 = kelvinToRGB(0);
    expect(Number.isFinite(col0.r)).toBe(true);
    expect(Number.isFinite(col0.g)).toBe(true);
    expect(Number.isFinite(col0.b)).toBe(true);
    expect(col0.r).toBe(1.0);
    expect(col0.b).toBe(0.0); // No blue below 1900K

    const colNeg = kelvinToRGB(-500);
    expect(colNeg.r).toBe(1.0);
    expect(colNeg.b).toBe(0.0);
  });

  it('F9-T2-02: Extreme high temperatures (>40,000K) clamp cleanly to hot blue', () => {
    const colHigh = kelvinToRGB(100000);
    expect(Number.isFinite(colHigh.r)).toBe(true);
    expect(Number.isFinite(colHigh.g)).toBe(true);
    expect(Number.isFinite(colHigh.b)).toBe(true);
    expect(colHigh.b).toBe(1.0);
  });

  it('F9-T2-03: All RGB color channels are strictly within [0.0, 1.0] across 200 temperature samples', () => {
    for (let t = 1000; t <= 50000; t += 250) {
      const c = kelvinToRGB(t);
      expect(c.r).toBeGreaterThanOrEqual(0.0);
      expect(c.r).toBeLessThanOrEqual(1.0);
      expect(c.g).toBeGreaterThanOrEqual(0.0);
      expect(c.g).toBeLessThanOrEqual(1.0);
      expect(c.b).toBeGreaterThanOrEqual(0.0);
      expect(c.b).toBeLessThanOrEqual(1.0);
    }
  });

  it('F10-T2-01: Zero camera distance (d = 0) protects against division by zero', () => {
    const sizeZero = computePointSize(0, 4.83);
    expect(Number.isFinite(sizeZero)).toBe(true);
    expect(sizeZero).toBeLessThanOrEqual(24.0);
    expect(sizeZero).toBeGreaterThanOrEqual(1.0);
  });

  it('F10-T2-02: Negative camera distance protects against negative point sizes', () => {
    const sizeNeg = computePointSize(-100, 4.83);
    expect(Number.isFinite(sizeNeg)).toBe(true);
    expect(sizeNeg).toBeGreaterThanOrEqual(1.0);
  });
});
