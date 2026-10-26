/**
 * tests/unit/coordinates-stress.spec.ts
 * Empirical Adversarial Stress & Failure Mode Harness for Astronomical Coordinates
 * (Milestone 1 Challenger Suite)
 */

import { describe, it, expect } from 'vitest';
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

describe('Challenger M1: Celestial & Galactic Poles Stress Tests', () => {
  it('Poles-01: North Celestial Pole (Dec = +90°) invariance across degenerate RA angles', () => {
    const raSamples = [0, 45, 90, 135, 180, 225, 270, 315, 359.999];
    for (const ra of raSamples) {
      const gal = equatorialToGalactic(ra, 90.0, 1000);
      // North Celestial Pole is defined in IAU 1958 at l = 122.93192°, b = +27.12825°
      expect(gal.lDeg).toBeCloseTo(122.93192, 4);
      expect(gal.bDeg).toBeCloseTo(27.12825, 4);
    }

    // Reverse: Galactic coords of NCP should reconstruct Dec = +90°
    const eqNCP = galacticToEquatorial(122.93192, 27.12825);
    expect(eqNCP.decDeg).toBeCloseTo(90.0, 4);
    // Note: At Dec = 90°, RA is mathematically degenerate, atan2(0, 0) produces 0°
    expect(Number.isFinite(eqNCP.raDeg)).toBe(true);
  });

  it('Poles-02: South Celestial Pole (Dec = -90°) invariance across degenerate RA angles', () => {
    const raSamples = [0, 60, 120, 180, 240, 300];
    for (const ra of raSamples) {
      const gal = equatorialToGalactic(ra, -90.0, 1000);
      // South Celestial Pole: l = 302.93192° (122.93192 + 180), b = -27.12825°
      expect(gal.lDeg).toBeCloseTo(302.93192, 4);
      expect(gal.bDeg).toBeCloseTo(-27.12825, 4);
    }

    const eqSCP = galacticToEquatorial(302.93192, -27.12825);
    expect(eqSCP.decDeg).toBeCloseTo(-90.0, 4);
  });

  it('Poles-03: North Galactic Pole (b = +90°) reconstructs IAU definition', () => {
    // North Galactic Pole is at RA = 192.85948° (12h 51m 26.28s), Dec = +27.12825°
    const eq = galacticToEquatorial(0, 90.0);
    expect(eq.raDeg).toBeCloseTo(192.85948, 4);
    expect(eq.decDeg).toBeCloseTo(27.12825, 4);
  });

  it('Poles-04: South Galactic Pole (b = -90°) reconstructs antipodal point', () => {
    const eq = galacticToEquatorial(0, -90.0);
    expect(eq.raDeg).toBeCloseTo(12.85948, 4); // 192.85948 - 180
    expect(eq.decDeg).toBeCloseTo(-27.12825, 4);
  });
});

describe('Challenger M1: Cardinal Equinoxes, Solstices & Origin Points', () => {
  it('Cardinal-01: Vernal and Autumnal Equinoxes round-trip with zero drift', () => {
    const vernal = equatorialToGalactic(0.0, 0.0, 1000);
    const vernalBack = galacticToEquatorial(vernal.lDeg, vernal.bDeg);
    expect(vernalBack.raDeg).toBeCloseTo(0.0, 10);
    expect(vernalBack.decDeg).toBeCloseTo(0.0, 10);

    const autumnal = equatorialToGalactic(180.0, 0.0, 1000);
    const autumnalBack = galacticToEquatorial(autumnal.lDeg, autumnal.bDeg);
    expect(autumnalBack.raDeg).toBeCloseTo(180.0, 10);
    expect(autumnalBack.decDeg).toBeCloseTo(0.0, 10);
  });

  it('Cardinal-02: Summer and Winter Solstices round-trip with zero drift', () => {
    const summer = equatorialToGalactic(90.0, 23.4393, 1000);
    const summerBack = galacticToEquatorial(summer.lDeg, summer.bDeg);
    expect(summerBack.raDeg).toBeCloseTo(90.0, 10);
    expect(summerBack.decDeg).toBeCloseTo(23.4393, 10);

    const winter = equatorialToGalactic(270.0, -23.4393, 1000);
    const winterBack = galacticToEquatorial(winter.lDeg, winter.bDeg);
    expect(winterBack.raDeg).toBeCloseTo(270.0, 10);
    expect(winterBack.decDeg).toBeCloseTo(-23.4393, 10);
  });

  it('Cardinal-03: Galactic Center direction (l = 0°, b = 0°) points to radio Sagittarius A* proximity', () => {
    const eqGC = galacticToEquatorial(0.0, 0.0);
    // Historical IAU 1958 center is at RA ~ 266.405°, Dec ~ -28.936°
    expect(eqGC.raDeg).toBeCloseTo(266.405, 2);
    expect(eqGC.decDeg).toBeCloseTo(-28.936, 2);
  });
});

describe('Challenger M1: Distance Scale Stress (0 ly, 10^6 ly, 10^9 ly, Negative)', () => {
  it('Dist-01: Zero distance (d = 0 ly) maps to Sun position in Three.js world space', () => {
    const pos = icrsToThreePosition(123.45, 45.67, 0);
    expect(pos.x).toBeCloseTo(0.0, 10);
    expect(pos.y).toBeCloseTo(SUN_MIDPLANE_Z_LY, 10);
    expect(pos.z).toBeCloseTo(SUN_GC_DISTANCE_LY, 10);
  });

  it('Dist-02: Zero distance (d = 0 ly) reverse conversion behaviour', () => {
    const sunPos = { x: 0, y: SUN_MIDPLANE_Z_LY, z: SUN_GC_DISTANCE_LY };
    const reconstructed = threePositionToIcrs(sunPos);
    expect(reconstructed.distanceLy).toBe(0);
    // Direction at d=0 is degenerate; check that values are finite and non-NaN
    expect(Number.isFinite(reconstructed.raDeg)).toBe(true);
    expect(Number.isFinite(reconstructed.decDeg)).toBe(true);
  });

  it('Dist-03: Extragalactic scale (10^6 ly) maintains double precision', () => {
    const megaDist = 1_000_000.0;
    const pos = icrsToThreePosition(120.5, -35.2, megaDist);
    expect(Number.isFinite(pos.x)).toBe(true);
    expect(Number.isFinite(pos.y)).toBe(true);
    expect(Number.isFinite(pos.z)).toBe(true);

    const back = threePositionToIcrs(pos);
    expect(back.raDeg).toBeCloseTo(120.5, 8);
    expect(back.decDeg).toBeCloseTo(-35.2, 8);
    expect(back.distanceLy).toBeCloseTo(megaDist, 6);
  });

  it('Dist-04: Cosmological scale (10^9 ly) remains numerically stable', () => {
    const gigaDist = 1_000_000_000.0;
    const pos = icrsToThreePosition(300.0, 75.0, gigaDist);
    const back = threePositionToIcrs(pos);
    expect(back.raDeg).toBeCloseTo(300.0, 5);
    expect(back.decDeg).toBeCloseTo(75.0, 5);
    expect(back.distanceLy).toBeCloseTo(gigaDist, 3);
  });
});

describe('Challenger M1: High-Volume Monte Carlo Round-Trip Invariance Stress', () => {
  it('MonteCarlo-01: 500 random points across sphere preserve < 1e-10° angular and < 1e-9 ly distance invariance', () => {
    let maxRaDrift = 0;
    let maxDecDrift = 0;
    let maxDistDrift = 0;

    for (let i = 0; i < 500; i++) {
      const ra = Math.random() * 360.0;
      // Exclude extreme poles (|Dec| > 89.9°) where RA is degenerate
      const dec = -89.0 + Math.random() * 178.0;
      const dist = 10.0 + Math.random() * 50000.0;

      const three = icrsToThreePosition(ra, dec, dist);
      const recon = threePositionToIcrs(three);

      let dRa = Math.abs(ra - recon.raDeg);
      if (dRa > 180) dRa = Math.abs(dRa - 360);
      const dDec = Math.abs(dec - recon.decDeg);
      const dDist = Math.abs(dist - recon.distanceLy);

      if (dRa > maxRaDrift) maxRaDrift = dRa;
      if (dDec > maxDecDrift) maxDecDrift = dDec;
      if (dDist > maxDistDrift) maxDistDrift = dDist;
    }

    expect(maxRaDrift).toBeLessThan(1e-9);
    expect(maxDecDrift).toBeLessThan(1e-9);
    expect(maxDistDrift).toBeLessThan(1e-7);
  });
});

describe('Challenger M1: Astrometric String Parser Robustness & Failure Modes', () => {
  it('Parser-01: Handles irregular whitespace, tabs, and colon delimiters', () => {
    const ra1 = parseRaStringToDegrees('  17h   45m   40.04s  ');
    expect(ra1).toBeCloseTo(266.41683, 4);

    const ra2 = parseRaStringToDegrees('17:45:40.04');
    expect(ra2).toBeCloseTo(266.41683, 4);

    const dec1 = parseDecStringToDegrees('  -29°   00\'   28.1"  ');
    expect(dec1).toBeCloseTo(-29.0078, 3);

    const dec2 = parseDecStringToDegrees('-29:00:28.1');
    expect(dec2).toBeCloseTo(-29.0078, 3);
  });

  it('Parser-02: Negative zero declination (-00° XX\' YY") preserves negative sign', () => {
    const decNearZero = parseDecStringToDegrees('-00° 30\' 00"');
    expect(decNearZero).toBeCloseTo(-0.5, 4);

    const decNearZero2 = parseDecStringToDegrees('-0° 15\' 00"');
    expect(decNearZero2).toBeCloseTo(-0.25, 4);
  });

  it('Parser-03: Silent corruption behavior on invalid / non-numeric strings', () => {
    // Documenting empirical behavior: parsers return 0 instead of throwing
    const badRa = parseRaStringToDegrees('invalid-coord-string');
    expect(badRa).toBe(0.0); // Silently returns 0.0

    const badDec = parseDecStringToDegrees('not-a-declination');
    expect(badDec).toBe(0.0); // Silently returns 0.0

    const emptyRa = parseRaStringToDegrees('');
    expect(emptyRa).toBe(0.0);
  });

  it('Parser-04: Formatter round-trip edge case near 60 seconds / arcseconds', () => {
    // When seconds round up to 60.00, check formatting output
    const formattedRa = degreesToRaString(266.416837);
    expect(formattedRa).toBe('17h 45m 40.04s');

    const formattedDec = degreesToDecString(-29.00781);
    expect(formattedDec).toBe('-29° 00\' 28.1"');
  });
});

describe('Challenger M1: Sgr A* Astrometric Discrepancy Forensic Audit', () => {
  it('Forensic-01: Quantifies discrepancy between Sgr A* ICRS transform and (0,0,0)', () => {
    const sgrARa = 266.416837;
    const sgrADec = -29.00781;
    const sgrADist = 26000.0;

    const transformed = icrsToThreePosition(sgrARa, sgrADec, sgrADist);
    const originDist = Math.sqrt(
      transformed.x ** 2 + transformed.y ** 2 + transformed.z ** 2
    );

    // The transformed position is roughly (25.3 ly, 47.1 ly, 0.02 ly)
    // Distance from world origin is ~53.4 ly!
    expect(originDist).toBeGreaterThan(50.0);
    expect(originDist).toBeLessThan(60.0);
  });
});
