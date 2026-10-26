/**
 * scripts/verify-datasets.ts
 * Standalone Astronomical Dataset & Coordinate Verification Suite.
 *
 * Validates:
 * 1. Schema integrity & presence of all required galactic landmarks
 * 2. Non-NaN coordinates and strict astronomical angular bounds
 * 3. Physical temperature bounds (1,000K - 100,000K) and magnitude bounds
 * 4. Physical distance invariants (Sgr A*, Sun, Pleiades, Orion, Eta Carinae, Crab Nebula)
 * 5. Mathematical coordinate round-trip invariance (<10^-4 precision)
 * 6. String coordinate parsing and Planck blackbody color gradient bounds
 *
 * Usage:
 *   npx tsx scripts/verify-datasets.ts
 *   npm run verify-data
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  equatorialToGalactic,
  galacticToEquatorial,
  icrsToThreePosition,
  threePositionToIcrs,
  parseRaStringToDegrees,
  parseDecStringToDegrees,
  SUN_GC_DISTANCE_LY,
  SUN_MIDPLANE_Z_LY
} from '../src/data/coordinates.js';
import type { Landmark } from '../src/types/galaxy.js';

class DatasetVerifier {
  private errors: string[] = [];
  private passes = 0;

  private pass(msg: string): void {
    this.passes++;
    console.log(`\x1b[32m  [PASS]\x1b[0m ${msg}`);
  }

  private fail(msg: string): void {
    this.errors.push(msg);
    console.error(`\x1b[31m  [FAIL]\x1b[0m ${msg}`);
  }

  // Analytical Planck temperature-to-sRGB algorithm (Tanner Helland polynomial)
  private kelvinToRGB(kelvin: number): { r: number; g: number; b: number } {
    const temp = Math.max(1000.0, Math.min(40000.0, kelvin)) / 100.0;
    let r = 0;
    let g = 0;
    let b = 0;

    // 1. Red
    if (temp <= 66.0) {
      r = 255.0;
    } else {
      r = 329.698727446 * Math.pow(temp - 60.0, -0.1332047592);
    }

    // 2. Green
    if (temp <= 66.0) {
      g = 99.4708025861 * Math.log(temp) - 161.1195681661;
    } else {
      g = 288.1221695283 * Math.pow(temp - 60.0, -0.0755148492);
    }

    // 3. Blue
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

  public verifyLandmarkCatalog(filePath: string): Landmark[] {
    console.log(`\n\x1b[1mStage 1: Catalog Integrity & Schema Validation (${filePath})\x1b[0m`);

    if (!fs.existsSync(filePath)) {
      this.fail(`Catalog file missing at: ${filePath}`);
      return [];
    }

    let landmarks: Landmark[] = [];
    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      landmarks = JSON.parse(raw);
      this.pass(`Catalog file successfully parsed as valid JSON (${landmarks.length} landmarks found).`);
    } catch (e: any) {
      this.fail(`JSON parse failure in ${filePath}: ${e.message}`);
      return [];
    }

    // Verify mandatory landmarks
    const requiredLandmarks = [
      'sagittarius-a',
      'sun',
      'pleiades',
      'orion-nebula',
      'eta-carinae',
      'crab-nebula'
    ];
    const foundIds = new Set(landmarks.map((l) => l.id));

    for (const req of requiredLandmarks) {
      if (foundIds.has(req)) {
        this.pass(`Mandatory landmark '${req}' is present.`);
      } else {
        this.fail(`Missing mandatory landmark '${req}'.`);
      }
    }

    console.log(`\n\x1b[1mStage 2: Coordinate Bounds, Physical Invariants & Magnitude Verification\x1b[0m`);

    for (const l of landmarks) {
      // 1. Schema completeness
      if (!l.id || typeof l.id !== 'string') {
        this.fail(`Landmark missing valid 'id' property.`);
      }
      if (!l.name || typeof l.name !== 'string') {
        this.fail(`Landmark '${l.id}' missing valid 'name' property.`);
      }
      if (!l.category || typeof l.category !== 'string') {
        this.fail(`Landmark '${l.id}' missing valid 'category' property.`);
      }
      if (!l.description || typeof l.description !== 'string' || l.description.length < 50) {
        this.fail(`Landmark '${l.id}' description too short or missing (<50 chars).`);
      }
      if (typeof l.cameraDistance !== 'number' || l.cameraDistance <= 0) {
        this.fail(`Landmark '${l.id}' invalid cameraDistance: ${l.cameraDistance}`);
      }

      // 2. Cartesian non-NaN and finite checks
      const { x, y, z } = l.cartesian || {};
      if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        this.fail(`Landmark '${l.id}' has missing or non-number cartesian coordinates.`);
        continue;
      }
      if (isNaN(x) || isNaN(y) || isNaN(z) || !isFinite(x) || !isFinite(y) || !isFinite(z)) {
        this.fail(`NaN or infinite cartesian coordinates in landmark '${l.id}'.`);
      }

      // 3. Equatorial coordinates non-NaN and bounds
      const { raDeg, decDeg, distanceLy } = l.equatorial || {};
      if (typeof raDeg !== 'number' || typeof decDeg !== 'number' || typeof distanceLy !== 'number') {
        this.fail(`Landmark '${l.id}' has missing equatorial coordinate numbers.`);
      } else {
        if (isNaN(raDeg) || raDeg < 0.0 || raDeg >= 360.0) {
          this.fail(`Landmark '${l.id}' RA out of range [0, 360): ${raDeg}°`);
        }
        if (isNaN(decDeg) || decDeg < -90.0 || decDeg > 90.0) {
          this.fail(`Landmark '${l.id}' Dec out of range [-90, +90]: ${decDeg}°`);
        }
        if (isNaN(distanceLy) || distanceLy < 0.0) {
          this.fail(`Landmark '${l.id}' negative or NaN distanceLy: ${distanceLy}`);
        }
      }

      // 4. Galactic coordinates non-NaN and bounds
      const { lDeg, bDeg } = l.galactic || {};
      if (typeof lDeg !== 'number' || typeof bDeg !== 'number') {
        this.fail(`Landmark '${l.id}' has missing galactic coordinates.`);
      } else {
        if (isNaN(lDeg) || lDeg < 0.0 || lDeg >= 360.0) {
          this.fail(`Landmark '${l.id}' Galactic l out of range [0, 360): ${lDeg}°`);
        }
        if (isNaN(bDeg) || bDeg < -90.0 || bDeg > 90.0) {
          this.fail(`Landmark '${l.id}' Galactic b out of range [-90, +90]: ${bDeg}°`);
        }
      }

      // 5. Temperature bounds (1,000K - 100,000K)
      if (l.temperatureK !== undefined) {
        if (isNaN(l.temperatureK) || l.temperatureK < 1000 || l.temperatureK > 100000) {
          this.fail(`Landmark '${l.id}' temperature out of bounds [1000, 100000]: ${l.temperatureK} K`);
        } else {
          this.pass(`Landmark '${l.id}' temperature within bounds: ${l.temperatureK} K.`);
        }
      }

      // 6. Magnitude bounds
      if (l.apparentMagnitude !== undefined) {
        if (isNaN(l.apparentMagnitude) || l.apparentMagnitude < -30.0 || l.apparentMagnitude > 30.0) {
          this.fail(`Landmark '${l.id}' apparent magnitude out of bounds [-30, +30]: ${l.apparentMagnitude}`);
        }
      }
      if (l.absoluteMagnitude !== undefined && l.absoluteMagnitude !== null) {
        if (isNaN(l.absoluteMagnitude) || l.absoluteMagnitude < -15.0 || l.absoluteMagnitude > 25.0) {
          this.fail(`Landmark '${l.id}' absolute magnitude out of bounds [-15, +25]: ${l.absoluteMagnitude}`);
        }
      }

      // 7. Astrometric landmark physical distance invariants
      if (l.id === 'sagittarius-a') {
        const distFromOrigin = Math.sqrt(x * x + y * y + z * z);
        if (distFromOrigin > 0.1) {
          this.fail(`Sagittarius A* not at origin (0,0,0); distance = ${distFromOrigin} ly`);
        } else {
          this.pass(`Sagittarius A* origin invariant confirmed (${distFromOrigin.toFixed(3)} ly from (0,0,0)).`);
        }
        if (Math.abs(l.distanceFromSun - SUN_GC_DISTANCE_LY) > 1000) {
          this.fail(`Sagittarius A* distance from Sun deviates: ${l.distanceFromSun} ly`);
        } else {
          this.pass(`Sagittarius A* distance from Sun verified: ${l.distanceFromSun} ly.`);
        }
      }

      if (l.id === 'sun') {
        const distFromCenter = Math.sqrt(x * x + (y - SUN_MIDPLANE_Z_LY) ** 2 + z * z);
        if (Math.abs(distFromCenter - SUN_GC_DISTANCE_LY) > 100.0) {
          this.fail(`Sun distance from Sgr A* deviates: ${distFromCenter} ly (expected ${SUN_GC_DISTANCE_LY})`);
        } else {
          this.pass(`Sun Galactocentric distance verified: ${distFromCenter.toFixed(1)} ly.`);
        }
        if (l.distanceFromSun !== 0) {
          this.fail(`Sun distance from Sun must be 0, found: ${l.distanceFromSun}`);
        } else {
          this.pass(`Sun distance from Sun is 0 ly.`);
        }
        if (Math.abs(y - SUN_MIDPLANE_Z_LY) > 5) {
          this.fail(`Sun midplane elevation deviates: ${y} ly (expected ${SUN_MIDPLANE_Z_LY})`);
        } else {
          this.pass(`Sun midplane elevation verified: ${y} ly above midplane.`);
        }
      }

      if (l.id === 'pleiades') {
        if (Math.abs(l.distanceFromSun - 444) > 20) {
          this.fail(`Pleiades distance deviates from 444 ly: ${l.distanceFromSun} ly`);
        } else {
          this.pass(`Pleiades distance verified: ${l.distanceFromSun} ly.`);
        }
      }

      if (l.id === 'orion-nebula') {
        if (Math.abs(l.distanceFromSun - 1344) > 50) {
          this.fail(`Orion Nebula distance deviates from 1344 ly: ${l.distanceFromSun} ly`);
        } else {
          this.pass(`Orion Nebula distance verified: ${l.distanceFromSun} ly.`);
        }
      }

      if (l.id === 'eta-carinae') {
        if (Math.abs(l.distanceFromSun - 7500) > 300) {
          this.fail(`Eta Carinae distance deviates from 7500 ly: ${l.distanceFromSun} ly`);
        } else {
          this.pass(`Eta Carinae distance verified: ${l.distanceFromSun} ly.`);
        }
      }

      if (l.id === 'crab-nebula') {
        if (Math.abs(l.distanceFromSun - 6500) > 300) {
          this.fail(`Crab Nebula distance deviates from 6500 ly: ${l.distanceFromSun} ly`);
        } else {
          this.pass(`Crab Nebula distance verified: ${l.distanceFromSun} ly.`);
        }
      }

      // 8. Distance from Galactocentric origin (distanceFromGC) invariant
      if (typeof l.distanceFromGC !== 'number' || isNaN(l.distanceFromGC)) {
        this.fail(`Landmark '${l.id}' missing valid distanceFromGC property.`);
      } else {
        const normGC = Math.sqrt(x * x + y * y + z * z);
        const deltaGC = Math.abs(normGC - l.distanceFromGC);
        if (deltaGC >= 1.0) {
          this.fail(
            `Landmark '${l.id}' distanceFromGC deviates from Cartesian norm: stored=${l.distanceFromGC}, calculated=${normGC.toFixed(2)}, diff=${deltaGC.toFixed(2)} ly (must be < 1.0)`
          );
        } else if (l.id === 'sagittarius-a' && l.distanceFromGC !== 0) {
          this.fail(`Sagittarius A* distanceFromGC must be exactly 0, found: ${l.distanceFromGC}`);
        } else {
          this.pass(
            `Landmark '${l.id}' distanceFromGC invariant verified: ${l.distanceFromGC} ly (Δ=${deltaGC.toFixed(3)} ly < 1.0 ly).`
          );
        }
      }

      // 9. Synchronized threePosition tuple check
      if (l.threePosition) {
        if (
          Math.abs(l.threePosition[0] - x) > 0.01 ||
          Math.abs(l.threePosition[1] - y) > 0.01 ||
          Math.abs(l.threePosition[2] - z) > 0.01
        ) {
          this.fail(
            `Landmark '${l.id}' threePosition [${l.threePosition.join(', ')}] does not match cartesian (${x}, ${y}, ${z}).`
          );
        }
      }
    }

    return landmarks;
  }

  public verifyCatalogCrossValidation(landmarks: Landmark[]): void {
    console.log(`\n\x1b[1mStage 3: Static Cartesian vs Runtime ICRS Coordinate Cross-Validation (< 1.0 ly)\x1b[0m`);

    for (const lm of landmarks) {
      if (lm.id === 'sagittarius-a') {
        const distOrigin = Math.hypot(lm.cartesian.x, lm.cartesian.y, lm.cartesian.z);
        if (distOrigin >= 1.0) {
          this.fail(`Sagittarius A* cartesian deviates from Galactocentric origin (0,0,0): ${distOrigin.toFixed(3)} ly`);
        } else {
          this.pass(`Landmark 'sagittarius-a' anchored at Galactocentric origin (0, 0, 0) within < 1.0 ly.`);
        }
        continue;
      }

      const computed = icrsToThreePosition(
        lm.equatorial.raDeg,
        lm.equatorial.decDeg,
        lm.equatorial.distanceLy
      );

      const delta = Math.hypot(
        computed.x - lm.cartesian.x,
        computed.y - lm.cartesian.y,
        computed.z - lm.cartesian.z
      );

      if (delta >= 1.0) {
        this.fail(
          `Landmark '${lm.id}' static cartesian deviates from icrsToThreePosition by ${delta.toFixed(2)} ly (stored=[${lm.cartesian.x}, ${lm.cartesian.y}, ${lm.cartesian.z}], computed=[${computed.x.toFixed(1)}, ${computed.y.toFixed(1)}, ${computed.z.toFixed(1)}], threshold=1.0 ly)`
        );
      } else {
        this.pass(
          `Landmark '${lm.id}' static cartesian matches runtime icrsToThreePosition (Δ=${delta.toFixed(2)} ly < 1.0 ly).`
        );
      }
    }
  }

  public verifyCoordinateMathInvariance(landmarks: Landmark[]): void {
    console.log(`\n\x1b[1mStage 4: Mathematical Coordinate Round-Trip Invariance (<10^-4)\x1b[0m`);

    for (const lm of landmarks) {
      const { raDeg, decDeg, distanceLy } = lm.equatorial;

      // 1. Test ICRS -> Galactic -> ICRS round-trip
      const gal = equatorialToGalactic(raDeg, decDeg, distanceLy);
      const eqBack = galacticToEquatorial(gal.lDeg, gal.bDeg);

      let dRa = Math.abs(raDeg - eqBack.raDeg);
      if (dRa > 180) dRa = Math.abs(dRa - 360);
      const dDec = Math.abs(decDeg - eqBack.decDeg);

      if (dRa > 1e-4 || dDec > 1e-4) {
        this.fail(
          `ICRS->Galactic->ICRS round-trip drift in '${lm.name}': ΔRA=${dRa.toExponential(4)}°, ΔDec=${dDec.toExponential(4)}°`
        );
      } else {
        this.pass(
          `ICRS->Galactic->ICRS round-trip invariant for '${lm.name}' preserved (<1e-4°): ΔRA=${dRa.toExponential(2)}°, ΔDec=${dDec.toExponential(2)}°`
        );
      }

      // 2. Test ICRS -> Three.js -> ICRS round-trip
      if (distanceLy > 0) {
        const threePos = icrsToThreePosition(raDeg, decDeg, distanceLy);
        const reconstructed = threePositionToIcrs(threePos);

        let dRa3 = Math.abs(raDeg - reconstructed.raDeg);
        if (dRa3 > 180) dRa3 = Math.abs(dRa3 - 360);
        const dDec3 = Math.abs(decDeg - reconstructed.decDeg);
        const dDist = Math.abs(distanceLy - reconstructed.distanceLy);

        if (dRa3 > 1e-4 || dDec3 > 1e-4 || dDist > 1e-3) {
          this.fail(
            `ICRS->Three.js->ICRS round-trip drift in '${lm.name}': ΔRA=${dRa3.toExponential(4)}°, ΔDec=${dDec3.toExponential(4)}°, ΔDist=${dDist.toExponential(4)} ly`
          );
        } else {
          this.pass(
            `ICRS->Three.js->ICRS round-trip invariant for '${lm.name}' preserved (<1e-4°): ΔRA=${dRa3.toExponential(2)}°, ΔDist=${dDist.toExponential(2)} ly`
          );
        }
      }
    }
  }

  public verifyStringParsers(): void {
    console.log(`\n\x1b[1mStage 5: Astrometric String Coordinate Parsers Verification\x1b[0m`);

    const testStrings = [
      { raStr: '17h 45m 40.04s', decStr: "-29° 00' 28.1\"", expectedRa: 266.41683, expectedDec: -29.00780 },
      { raStr: '03h 47m 24.0s', decStr: "+24° 07' 00\"", expectedRa: 56.850, expectedDec: 24.11667 },
      { raStr: '05h 35m 17.3s', decStr: "-05° 23' 28\"", expectedRa: 83.82208, expectedDec: -5.39111 },
      { raStr: '10h 45m 03.6s', decStr: "-59° 41' 04\"", expectedRa: 161.2650, expectedDec: -59.68444 },
      { raStr: '05h 34m 31.9s', decStr: "+22° 00' 52\"", expectedRa: 83.6329, expectedDec: 22.01444 }
    ];

    for (const test of testStrings) {
      const parsedRa = parseRaStringToDegrees(test.raStr);
      const parsedDec = parseDecStringToDegrees(test.decStr);

      const diffRa = Math.abs(parsedRa - test.expectedRa);
      const diffDec = Math.abs(parsedDec - test.expectedDec);

      if (diffRa > 0.01) {
        this.fail(`parseRaStringToDegrees failed on '${test.raStr}': got ${parsedRa}, expected ${test.expectedRa}`);
      } else {
        this.pass(`parseRaStringToDegrees('${test.raStr}') -> ${parsedRa.toFixed(4)}° (diff ${diffRa.toFixed(5)}°)`);
      }

      if (diffDec > 0.01) {
        this.fail(`parseDecStringToDegrees failed on '${test.decStr}': got ${parsedDec}, expected ${test.expectedDec}`);
      } else {
        this.pass(`parseDecStringToDegrees('${test.decStr}') -> ${parsedDec.toFixed(4)}° (diff ${diffDec.toFixed(5)}°)`);
      }
    }
  }

  public verifyPlanckColorGradients(): void {
    console.log(`\n\x1b[1mStage 6: Planck Blackbody Temperature & sRGB Color Gradient Verification\x1b[0m`);

    const spectralClasses = [
      { classType: 'M', temp: 3000, desc: 'M-dwarf / Betelgeuse (Red/Orange)' },
      { classType: 'K', temp: 4500, desc: 'K-dwarf / Alpha Cen B (Warm Orange)' },
      { classType: 'G', temp: 5778, desc: 'G-dwarf / The Sun (Warm Yellow-White)' },
      { classType: 'F', temp: 6800, desc: 'F-type / Procyon A (Pale White)' },
      { classType: 'A', temp: 9600, desc: 'A-type / Vega (Brilliant White)' },
      { classType: 'B', temp: 15000, desc: 'B-type / Pleiades (Blue-White)' },
      { classType: 'O', temp: 39000, desc: 'O-type / Trapezium C (Electric Blue)' }
    ];

    for (const spec of spectralClasses) {
      const rgb = this.kelvinToRGB(spec.temp);

      if (isNaN(rgb.r) || isNaN(rgb.g) || isNaN(rgb.b)) {
        this.fail(`NaN in Planck color calculation for Class ${spec.classType} (${spec.temp} K)`);
      } else if (rgb.r < 0 || rgb.r > 1 || rgb.g < 0 || rgb.g > 1 || rgb.b < 0 || rgb.b > 1) {
        this.fail(`Color channel out of [0, 1] range for Class ${spec.classType}: (${rgb.r}, ${rgb.g}, ${rgb.b})`);
      } else {
        this.pass(
          `Class ${spec.classType} (${spec.temp} K, ${spec.desc}): sRGB=(${rgb.r.toFixed(3)}, ${rgb.g.toFixed(3)}, ${rgb.b.toFixed(3)})`
        );
      }
    }
  }

  public run(): void {
    console.log(`================================================================`);
    console.log(`  MILKY WAY 3D VISUALIZATION: ASTRONOMICAL DATASET VERIFIER`);
    console.log(`================================================================`);

    const catalogPath = path.resolve(process.cwd(), 'src/data/landmarks.json');
    const landmarks = this.verifyLandmarkCatalog(catalogPath);

    if (landmarks.length > 0) {
      this.verifyCatalogCrossValidation(landmarks);
      this.verifyCoordinateMathInvariance(landmarks);
      this.verifyStringParsers();
      this.verifyPlanckColorGradients();
    }

    console.log(`\n================================================================`);
    if (this.errors.length > 0) {
      console.error(`\x1b[31m[FAILED] Verification completed with ${this.errors.length} error(s).\x1b[0m`);
      for (const err of this.errors) {
        console.error(`  - ${err}`);
      }
      process.exit(1);
    } else {
      console.log(`\x1b[32m[SUCCESS] All ${this.passes} astronomical data assertions PASSED cleanly.\x1b[0m`);
      console.log(`================================================================\n`);
      process.exit(0);
    }
  }
}

// Execute CLI
const verifier = new DatasetVerifier();
verifier.run();
