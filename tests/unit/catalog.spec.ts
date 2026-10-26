/**
 * tests/unit/catalog.spec.ts
 * Dual Track Unit & Boundary Test Suite for Astronomical Catalog and Verification CLI (F2, F4)
 */

import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import type { Landmark } from '../../src/types/galaxy.js';
import {
  SUN_GC_DISTANCE_LY,
  SUN_MIDPLANE_Z_LY,
  icrsToThreePosition
} from '../../src/data/coordinates.js';

describe('Feature F2: Curated Astronomical Landmark Catalog (Tier 1 - Feature Coverage)', () => {
  const catalogPath = path.resolve(process.cwd(), 'src/data/landmarks.json');
  let landmarks: Landmark[] = [];

  it('F2-T1-01: Catalog exists and parses as valid non-empty JSON array', () => {
    expect(fs.existsSync(catalogPath)).toBe(true);
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    landmarks = JSON.parse(raw);
    expect(Array.isArray(landmarks)).toBe(true);
    expect(landmarks.length).toBeGreaterThanOrEqual(6);
  });

  it('F2-T1-02: All 6 required landmark IDs are present in the catalog', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    landmarks = JSON.parse(raw);
    const ids = new Set(landmarks.map((l) => l.id));

    expect(ids.has('sagittarius-a')).toBe(true);
    expect(ids.has('sun')).toBe(true);
    expect(ids.has('pleiades')).toBe(true);
    expect(ids.has('orion-nebula')).toBe(true);
    expect(ids.has('eta-carinae')).toBe(true);
    expect(ids.has('crab-nebula')).toBe(true);
  });

  it('F2-T1-03: Every landmark contains required schema fields conforming to Landmark interface', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    landmarks = JSON.parse(raw);

    for (const l of landmarks) {
      expect(typeof l.id).toBe('string');
      expect(typeof l.name).toBe('string');
      expect(typeof l.category).toBe('string');
      expect(typeof l.description).toBe('string');
      expect(l.description.length).toBeGreaterThanOrEqual(50);
      expect(typeof l.cameraDistance).toBe('number');
      expect(l.cameraDistance).toBeGreaterThan(0);
      expect(typeof l.distanceFromGC).toBe('number');
      expect(typeof l.distanceFromSun).toBe('number');
      expect(l.cartesian).toBeDefined();
      expect(l.equatorial).toBeDefined();
      expect(l.galactic).toBeDefined();
    }
  });

  it('F2-T1-04: Astrometric distances from Sun match physical references', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    landmarks = JSON.parse(raw);
    const map = new Map(landmarks.map((l) => [l.id, l]));

    const sgrA = map.get('sagittarius-a')!;
    expect(sgrA.distanceFromSun).toBe(SUN_GC_DISTANCE_LY);
    expect(sgrA.distanceFromGC).toBe(0);

    const sun = map.get('sun')!;
    expect(sun.distanceFromSun).toBe(0);
    expect(sun.distanceFromGC).toBe(SUN_GC_DISTANCE_LY);

    const pleiades = map.get('pleiades')!;
    expect(Math.abs(pleiades.distanceFromSun - 444)).toBeLessThanOrEqual(15);

    const orion = map.get('orion-nebula')!;
    expect(Math.abs(orion.distanceFromSun - 1344)).toBeLessThanOrEqual(30);

    const etaCar = map.get('eta-carinae')!;
    expect(Math.abs(etaCar.distanceFromSun - 7500)).toBeLessThanOrEqual(200);

    const crab = map.get('crab-nebula')!;
    expect(Math.abs(crab.distanceFromSun - 6500)).toBeLessThanOrEqual(200);
  });

  it('F2-T1-05: Coordinates align with Three.js world space conventions (Y is Up/NGP, X-Z plane is disk)', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    landmarks = JSON.parse(raw);
    const map = new Map(landmarks.map((l) => [l.id, l]));

    // Sgr A* at world origin (0, 0, 0)
    const sgrA = map.get('sagittarius-a')!;
    expect(sgrA.cartesian.x).toBe(0);
    expect(sgrA.cartesian.y).toBe(0);
    expect(sgrA.cartesian.z).toBe(0);

    // Sun at (0, 68, 26000)
    const sun = map.get('sun')!;
    expect(sun.cartesian.x).toBe(0);
    expect(sun.cartesian.y).toBe(SUN_MIDPLANE_Z_LY);
    expect(sun.cartesian.z).toBe(SUN_GC_DISTANCE_LY);
  });

  it('F2-T1-06: Betelgeuse astrometric coordinates conform to true Galactic latitude and Cartesian position', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    landmarks = JSON.parse(raw);
    const map = new Map(landmarks.map((l) => [l.id, l]));

    const betelgeuse = map.get('betelgeuse')!;
    expect(betelgeuse).toBeDefined();
    expect(betelgeuse.galactic.bDeg).toBeCloseTo(-8.96, 2);
    expect(betelgeuse.cartesian.x).toBeCloseTo(183.3, 1);
    expect(betelgeuse.cartesian.y).toBeCloseTo(-17.3, 1);
    expect(betelgeuse.cartesian.z).toBeCloseTo(26509.4, 1);
    expect(betelgeuse.threePosition).toEqual([183.3, -17.3, 26509.4]);
    expect(betelgeuse.distanceFromGC).toBe(26510);
  });
});

describe('Feature F2 & F4: Catalog Boundaries & Verification Invariants (Tier 2)', () => {
  const catalogPath = path.resolve(process.cwd(), 'src/data/landmarks.json');

  it('F2-T2-01: Zero duplicate IDs in the catalog', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);
    const ids = landmarks.map((l) => l.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('F2-T2-02: All coordinates are finite and non-NaN', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      expect(Number.isFinite(l.cartesian.x)).toBe(true);
      expect(Number.isFinite(l.cartesian.y)).toBe(true);
      expect(Number.isFinite(l.cartesian.z)).toBe(true);
      expect(Number.isFinite(l.equatorial.raDeg)).toBe(true);
      expect(Number.isFinite(l.equatorial.decDeg)).toBe(true);
      expect(Number.isFinite(l.galactic.lDeg)).toBe(true);
      expect(Number.isFinite(l.galactic.bDeg)).toBe(true);
    }
  });

  it('F2-T2-03: Temperatures are strictly within astrophysical range [1,000K, 100,000K]', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      if (l.temperatureK !== undefined) {
        expect(l.temperatureK).toBeGreaterThanOrEqual(1000);
        expect(l.temperatureK).toBeLessThanOrEqual(100000);
      }
    }
  });

  it('F2-T2-04: Magnitudes are within physically observable bounds', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      if (l.apparentMagnitude !== undefined) {
        expect(l.apparentMagnitude).toBeGreaterThanOrEqual(-30.0);
        expect(l.apparentMagnitude).toBeLessThanOrEqual(30.0);
      }
      if (l.absoluteMagnitude !== undefined && l.absoluteMagnitude !== null) {
        expect(l.absoluteMagnitude).toBeGreaterThanOrEqual(-15.0);
        expect(l.absoluteMagnitude).toBeLessThanOrEqual(25.0);
      }
    }
  });

  it('F2-T2-05: Angular bounds strictly held (RA in [0, 360), Dec in [-90, +90], l in [0, 360), b in [-90, +90])', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      expect(l.equatorial.raDeg).toBeGreaterThanOrEqual(0.0);
      expect(l.equatorial.raDeg).toBeLessThan(360.0);
      expect(l.equatorial.decDeg).toBeGreaterThanOrEqual(-90.0);
      expect(l.equatorial.decDeg).toBeLessThanOrEqual(90.0);

      expect(l.galactic.lDeg).toBeGreaterThanOrEqual(0.0);
      expect(l.galactic.lDeg).toBeLessThan(360.0);
      expect(l.galactic.bDeg).toBeGreaterThanOrEqual(-90.0);
      expect(l.galactic.bDeg).toBeLessThanOrEqual(90.0);
    }
  });

  it('F2-T2-06: Cross-validation: All static landmark Cartesian coordinates align with runtime icrsToThreePosition (< 1.0 ly)', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      if (l.id === 'sagittarius-a') {
        const distFromOrigin = Math.hypot(l.cartesian.x, l.cartesian.y, l.cartesian.z);
        expect(distFromOrigin).toBeLessThan(1.0);
        continue;
      }

      const computed = icrsToThreePosition(
        l.equatorial.raDeg,
        l.equatorial.decDeg,
        l.equatorial.distanceLy
      );
      const delta = Math.hypot(
        computed.x - l.cartesian.x,
        computed.y - l.cartesian.y,
        computed.z - l.cartesian.z
      );

      expect(delta).toBeLessThan(1.0);
    }
  });

  it('F2-T2-07: Galactocentric distance (distanceFromGC) invariant holds for all landmarks (< 1.0 ly) and is 0 for Sgr A*', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      const calculatedGC = Math.hypot(l.cartesian.x, l.cartesian.y, l.cartesian.z);
      const diff = Math.abs(calculatedGC - l.distanceFromGC);
      expect(diff).toBeLessThan(1.0);

      if (l.id === 'sagittarius-a') {
        expect(l.distanceFromGC).toBe(0);
      }
    }
  });

  it('F2-T2-08: threePosition tuples strictly synchronize with cartesian coordinates for all landmarks', () => {
    const raw = fs.readFileSync(catalogPath, 'utf-8');
    const landmarks: Landmark[] = JSON.parse(raw);

    for (const l of landmarks) {
      expect(l.threePosition).toBeDefined();
      expect(l.threePosition[0]).toBeCloseTo(l.cartesian.x, 3);
      expect(l.threePosition[1]).toBeCloseTo(l.cartesian.y, 3);
      expect(l.threePosition[2]).toBeCloseTo(l.cartesian.z, 3);
    }
  });
});
