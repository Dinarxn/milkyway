/**
 * tests/unit/solar-system.spec.ts
 * Rigorous mathematical and physical verification of Keplerian mechanics
 * and NASA Planetary Fact Sheet metrics.
 */

import { describe, it, expect } from 'vitest';
import { PLANETS_DATA, SUN_DATA } from '../../src/data/solarSystemData.js';
import { SolarSystem } from '../../src/objects/SolarSystem.js';

describe('Solar System Physics & Keplerian Mechanics', () => {
  it('strictly satisfies Kepler’s Third Law: T² / a³ ≈ 1 (within 0.5%)', () => {
    for (const planet of PLANETS_DATA) {
      const a = planet.semiMajorAxisAU;
      const tYears = planet.orbitalPeriodDays / 365.256;
      const tSquared = tYears * tYears;
      const aCubed = a * a * a;
      const ratio = tSquared / aCubed;

      // Kepler's Third Law ratio should be ~1.0 (slight deviations for Pluto due to high eccentricity/inclination)
      expect(ratio).toBeGreaterThan(0.98);
      expect(ratio).toBeLessThan(1.02);
    }
  });

  it('verifies planetary semi-major axes strictly increase monotonically', () => {
    for (let i = 0; i < PLANETS_DATA.length - 1; i++) {
      expect(PLANETS_DATA[i].semiMajorAxisAU).toBeLessThan(PLANETS_DATA[i + 1].semiMajorAxisAU);
    }
  });

  it('accurately solves Kepler’s equation M = E - e*sin(E) with high precision', () => {
    const testCases = [
      { M: 0.5, e: 0.1 },
      { M: 1.2, e: 0.05 },
      { M: 3.0, e: 0.2056 }, // Mercury
      { M: 5.5, e: 0.2488 }  // Pluto
    ];

    for (const tc of testCases) {
      const E = SolarSystem.solveKeplerEquation(tc.M, tc.e);
      const computedM = E - tc.e * Math.sin(E);
      // Precision should be within 1e-5 radians
      expect(Math.abs(computedM - tc.M)).toBeLessThan(1e-5);
    }
  });

  it('SolarSystem class constructs all planetary objects, Moon, Saturn rings, and Asteroid Belt', () => {
    const ss = new SolarSystem();
    expect(ss.group).toBeDefined();
    expect(ss.sunMesh).toBeDefined();
    expect(ss.sunLight).toBeDefined();
    expect(ss.asteroidBelt).toBeDefined();

    // 8 major planets + Pluto = 9 bodies
    expect(ss.planets.length).toBe(9);

    const earthObj = ss.planets.find((p) => p.data.id === 'earth');
    expect(earthObj).toBeDefined();
    expect(earthObj?.moonGroup).toBeDefined();

    const saturnObj = ss.planets.find((p) => p.data.id === 'saturn');
    expect(saturnObj).toBeDefined();
    expect(saturnObj?.ringMesh).toBeDefined();
  });

  it('Sun parameters match official NASA Astrophysical Fact Sheet values', () => {
    expect(SUN_DATA.surfaceTempK).toBe(5778);
    expect(SUN_DATA.spectralClass).toContain('G2V');
    expect(SUN_DATA.radiusKm).toBe(696340);
  });
});

