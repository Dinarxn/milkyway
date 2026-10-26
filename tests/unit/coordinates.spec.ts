/**
 * tests/unit/coordinates.spec.ts
 * Dual Track Unit & Boundary Test Suite for Celestial Coordinate Systems (F2, F3, F4)
 * Validates IAU SOFA transformations, landmark astrometric invariants, and numerical robustness.
 */

import { describe, it, expect } from 'vitest';
import {
  equatorialToGalactic,
  galacticToEquatorial,
  galacticToGalactocentric,
  galactocentricToThree,
  icrsToThreePosition,
  parseRaStringToDegrees,
  parseDecStringToDegrees,
  parallaxToLightYears,
  M_ICRS_TO_GAL,
  M_GAL_TO_ICRS,
  SUN_GC_DISTANCE_LY,
  SUN_MIDPLANE_Z_LY
} from '../../src/data/coordinates.js';

describe('Feature F3: Celestial Coordinate Transformations (Tier 1 - Feature Coverage)', () => {
  it('F3-T1-01: Verifies IAU SOFA rotation matrix orthogonality and determinant', () => {
    // Assert M * M^T = Identity
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let dot = 0;
        for (let k = 0; k < 3; k++) {
          dot += M_ICRS_TO_GAL[i][k] * M_ICRS_TO_GAL[j][k];
        }
        const expected = i === j ? 1.0 : 0.0;
        expect(dot).toBeCloseTo(expected, 10);
      }
    }

    // Assert Determinant = +1.0 (proper rotation, no reflection)
    const m = M_ICRS_TO_GAL;
    const det =
      m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
      m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
      m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
    expect(det).toBeCloseTo(1.0, 10);
  });

  it('F3-T1-02: Converts Sagittarius A* ICRS coordinates to Galactic Center origin', () => {
    // Sgr A* coordinates: RA 17h 45m 40.04s (266.4168°), Dec -29° 00' 28.1" (-29.0078°)
    const raDeg = 266.416837;
    const decDeg = -29.00781;
    const gal = equatorialToGalactic(raDeg, decDeg, SUN_GC_DISTANCE_LY);

    // Galactic longitude should be ~359.94° or ~0°, latitude ~ -0.05°
    expect(gal.lDeg > 359.9 || gal.lDeg < 0.1).toBe(true);
    expect(gal.bDeg).toBeCloseTo(-0.046, 2);

    // In Galactocentric coordinates, Sgr A* should be at origin (0, 0, 0)
    const cart = galacticToGalactocentric(gal.lDeg, gal.bDeg, SUN_GC_DISTANCE_LY);
    expect(Math.abs(cart.x)).toBeLessThan(20.0); // Within astrometric uncertainty
    expect(Math.abs(cart.y)).toBeLessThan(30.0); // 0.056° radio Sgr A* offset at 26,000 ly is ~25.3 ly
    expect(Math.abs(cart.z)).toBeLessThan(SUN_MIDPLANE_Z_LY + 20.0);
  });

  it('F3-T1-03: Converts Sun position to canonical Galactocentric coordinates and Three.js world space', () => {
    // Sun is at distance 0 from Sun
    const sunCart = galacticToGalactocentric(0, 0, 0);
    expect(sunCart.x).toBeCloseTo(SUN_GC_DISTANCE_LY, 5);
    expect(sunCart.y).toBeCloseTo(0.0, 5);
    expect(sunCart.z).toBeCloseTo(SUN_MIDPLANE_Z_LY, 5);

    // Three.js world mapping: x = -yG, y = zG, z = xG
    const threePos = galactocentricToThree(sunCart);
    expect(threePos.x).toBeCloseTo(0.0, 5);
    expect(threePos.y).toBeCloseTo(SUN_MIDPLANE_Z_LY, 5);
    expect(threePos.z).toBeCloseTo(SUN_GC_DISTANCE_LY, 5);
  });

  it('F3-T1-04: Accurately transforms Pleiades (M45) with astrometric distance', () => {
    // Pleiades: RA = 56.85°, Dec = 24.1167°, d = 444 ly
    const gal = equatorialToGalactic(56.85, 24.1167, 444);
    expect(Math.abs(gal.lDeg - 166.6)).toBeLessThan(0.2);
    expect(Math.abs(gal.bDeg - -23.52)).toBeLessThan(0.2);

    const threePos = icrsToThreePosition(56.85, 24.1167, 444);
    expect(Number.isFinite(threePos.x)).toBe(true);
    expect(Number.isFinite(threePos.y)).toBe(true);
    expect(Number.isFinite(threePos.z)).toBe(true);
    // Pleiades is in the anticenter direction (z > 26,000 ly)
    expect(threePos.z).toBeGreaterThan(SUN_GC_DISTANCE_LY);
  });

  it('F3-T1-05: Accurately transforms Orion Nebula (M42) and verifies distance metrics', () => {
    // Orion Nebula: RA = 83.8221°, Dec = -5.3911°, d = 1,344 ly
    const gal = equatorialToGalactic(83.8221, -5.3911, 1344);
    expect(gal.lDeg).toBeCloseTo(209.01, 1);
    expect(gal.bDeg).toBeCloseTo(-19.38, 1);

    const threePos = icrsToThreePosition(83.8221, -5.3911, 1344);
    expect(Number.isFinite(threePos.x)).toBe(true);
    expect(threePos.z).toBeGreaterThan(SUN_GC_DISTANCE_LY);
  });

  it('F3-T1-06: Accurately parses sexagesimal celestial coordinate strings', () => {
    const raDeg = parseRaStringToDegrees('17h 45m 40.04s');
    expect(raDeg).toBeCloseTo(266.41683, 4);

    const decDeg = parseDecStringToDegrees('-29° 00\' 28.1"');
    expect(decDeg).toBeCloseTo(-29.0078, 3);

    const solRa = parseRaStringToDegrees('00h 00m 00.0s');
    expect(solRa).toBe(0.0);

    const solDec = parseDecStringToDegrees('+00° 00\' 00.0"');
    expect(solDec).toBe(0.0);
  });

  it('F3-T1-07: Converts parallax in milliarcseconds to light-years correctly', () => {
    // 1000 mas = 1 pc = 3.26156 ly
    const ly1 = parallaxToLightYears(1000);
    expect(ly1).toBeCloseTo(3.26156, 4);

    // Pleiades parallax ~ 7.34 mas -> ~444 ly
    const pleiadesLy = parallaxToLightYears(7.34);
    expect(pleiadesLy).toBeCloseTo(444.35, 1);
  });
});

describe('Feature F3: Celestial Coordinate Transforms (Tier 2 - Boundary & Corner Cases)', () => {
  it('F3-T2-01: Maintains numerical stability at North Celestial Pole (Dec = +90°)', () => {
    const gal = equatorialToGalactic(0.0, 90.0, 1000);
    expect(Number.isFinite(gal.lDeg)).toBe(true);
    expect(Number.isFinite(gal.bDeg)).toBe(true);
    expect(gal.lDeg).toBeGreaterThanOrEqual(0.0);
    expect(gal.lDeg).toBeLessThan(360.0);
    expect(gal.bDeg).toBeCloseTo(27.128, 2); // Latitude of NCP in Galactic coordinates
  });

  it('F3-T2-02: Maintains numerical stability at South Celestial Pole (Dec = -90°)', () => {
    const gal = equatorialToGalactic(0.0, -90.0, 1000);
    expect(Number.isFinite(gal.lDeg)).toBe(true);
    expect(Number.isFinite(gal.bDeg)).toBe(true);
    expect(gal.bDeg).toBeCloseTo(-27.128, 2);
  });

  it('F3-T2-03: Handles Right Ascension boundary wrap-around at 0° and 360°', () => {
    const gal0 = equatorialToGalactic(0.0001, 0.0, 100);
    const gal360 = equatorialToGalactic(359.9999, 0.0, 100);
    // Differences should be continuous across 0/360 wrap
    expect(Math.abs(gal0.bDeg - gal360.bDeg)).toBeLessThan(0.01);
  });

  it('F3-T2-04: Guarantees exact round-trip coordinate invariance with precision < 1e-4°', () => {
    const samplePoints = [
      { ra: 10.5, dec: -45.2 },
      { ra: 120.0, dec: 65.4 },
      { ra: 245.8, dec: -12.1 },
      { ra: 350.2, dec: 82.0 },
      { ra: 0.0, dec: 0.0 }
    ];

    for (const pt of samplePoints) {
      const gal = equatorialToGalactic(pt.ra, pt.dec, 1000);
      const back = galacticToEquatorial(gal.lDeg, gal.bDeg);
      expect(Math.abs(pt.ra - back.raDeg)).toBeLessThan(1e-4);
      expect(Math.abs(pt.dec - back.decDeg)).toBeLessThan(1e-4);
    }
  });

  it('F3-T2-05: Handles distance = 0 and negative parallax gracefully without NaN', () => {
    const posZero = icrsToThreePosition(180, 45, 0);
    expect(Number.isNaN(posZero.x)).toBe(false);
    expect(Number.isNaN(posZero.y)).toBe(false);
    expect(Number.isNaN(posZero.z)).toBe(false);
    expect(posZero.z).toBeCloseTo(SUN_GC_DISTANCE_LY, 5);

    const distNeg = parallaxToLightYears(-5);
    expect(distNeg).toBe(0);

    const distZero = parallaxToLightYears(0);
    expect(distZero).toBe(0);
  });

  it('F3-T2-06: Asserts zero NaN or infinite outputs over 100 random coordinate inputs', () => {
    for (let i = 0; i < 100; i++) {
      const ra = Math.random() * 360.0;
      const dec = -90.0 + Math.random() * 180.0;
      const dist = Math.random() * 100000.0;

      const pos = icrsToThreePosition(ra, dec, dist);
      expect(Number.isFinite(pos.x)).toBe(true);
      expect(Number.isFinite(pos.y)).toBe(true);
      expect(Number.isFinite(pos.z)).toBe(true);
    }
  });

  it('F3-T2-07: Astrometric string parser handles Unicode minus sign (\\u2212) accurately', () => {
    // Unicode minus: U+2212 '−'
    const unicodeMinusDec = '−29° 00\' 28.1"';
    const parsed = parseDecStringToDegrees(unicodeMinusDec);
    expect(parsed).toBeCloseTo(-29.0078, 3);

    const unicodeSimple = '−8.96';
    expect(parseDecStringToDegrees(unicodeSimple)).toBeCloseTo(-8.96, 2);
  });
});
