# Milestone 1 Independent Review & Adversarial Challenge Report

**Reviewer**: `teamwork_preview_reviewer` (Reviewer 1 for Milestone 1)  
**Target Milestone**: Milestone 1 (Project Scaffold, Astronomical Data Catalog & Dataset Verification CLI)  
**Worker Under Review**: `worker_m1` (`b280b368-e84f-4aa2-a131-d98b91819450`)  
**Verdict**: **`REQUEST_CHANGES`**  
**Integrity Status**: **CLEAN (No Integrity Violations Detected)**  

---

## Review Summary

| Metric | Evaluation |
|---|---|
| **Explicit Verdict** | **`REQUEST_CHANGES`** |
| **Integrity Audit** | **PASS** — Genuine IAU SOFA math and real implementations; no mock facades, no hardcoded bypasses, no fabricated logs. |
| **Build & Tooling** | **PASS** — `npm run build` succeeds cleanly in 364ms with Vite 5.4.21 & TypeScript 5.6.3. |
| **Unit Test Suite** | **PASS** — 8 test suites, 101 tests passed in Vitest (`npm run test`). |
| **Verification CLI** | **PASS (with Coverage Gap)** — `npm run verify-data` passes all 65 assertions with exit code 0. |
| **Data Catalog Accuracy** | **FAIL (1 Major Error)** — `betelgeuse` in `landmarks.json` possesses a 379.2 ly Cartesian error and an erroneous Galactic latitude ($b = +0.08^\circ$ vs $-8.96^\circ$). |

---

## 1. Observation

### 1.1 Direct Tool Execution & Verbatim Terminal Outputs

#### 1. Command: `npm run verify-data`
- Exit Code: `0`
- Verbatim Output:
```text
> milky-way-3d@1.0.0 verify-data
> tsx scripts/verify-datasets.ts

================================================================
  MILKY WAY 3D VISUALIZATION: ASTRONOMICAL DATASET VERIFIER
================================================================

Stage 1: Catalog Integrity & Schema Validation (C:\Users\Admin\earth\src\data\landmarks.json)
  [PASS] Catalog file successfully parsed as valid JSON (11 landmarks found).
  [PASS] Mandatory landmark 'sagittarius-a' is present.
  [PASS] Mandatory landmark 'sun' is present.
  [PASS] Mandatory landmark 'pleiades' is present.
  [PASS] Mandatory landmark 'orion-nebula' is present.
  [PASS] Mandatory landmark 'eta-carinae' is present.
  [PASS] Mandatory landmark 'crab-nebula' is present.

Stage 2: Coordinate Bounds, Physical Invariants & Magnitude Verification
  [PASS] Landmark 'sagittarius-a' temperature within bounds: 100000 K.
  [PASS] Sagittarius A* origin invariant confirmed (0.000 ly from (0,0,0)).
  [PASS] Sagittarius A* distance from Sun verified: 26000 ly.
  [PASS] Landmark 'sun' temperature within bounds: 5778 K.
  [PASS] Sun Galactocentric distance verified: 26000.0 ly.
  [PASS] Sun distance from Sun is 0 ly.
  [PASS] Sun midplane elevation verified: 68 ly above midplane.
  [PASS] Landmark 'pleiades' temperature within bounds: 12300 K.
  [PASS] Pleiades distance verified: 444 ly.
  [PASS] Landmark 'orion-nebula' temperature within bounds: 39000 K.
  [PASS] Orion Nebula distance verified: 1344 ly.
  [PASS] Landmark 'eta-carinae' temperature within bounds: 15000 K.
  [PASS] Eta Carinae distance verified: 7500 ly.
  [PASS] Landmark 'crab-nebula' temperature within bounds: 100000 K.
  [PASS] Crab Nebula distance verified: 6500 ly.
  [PASS] Landmark 'trapezium' temperature within bounds: 39000 K.
  [PASS] Landmark 'betelgeuse' temperature within bounds: 3600 K.
  [PASS] Landmark 'sirius' temperature within bounds: 9940 K.
  [PASS] Landmark 'vega' temperature within bounds: 9600 K.
  [PASS] Landmark 'alpha-centauri' temperature within bounds: 5790 K.

Stage 3: Mathematical Coordinate Round-Trip Invariance (<10^-4)
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Sagittarius A*' preserved (<1e-4°): ΔRA=0.00e+0°, ΔDec=7.11e-15°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Sagittarius A*' preserved (<1e-4°): ΔRA=0.00e+0°, ΔDist=0.00e+0 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'The Sun' preserved (<1e-4°): ΔRA=1.59e-15°, ΔDec=3.18e-15°
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Pleiades' preserved (<1e-4°): ΔRA=6.39e-14°, ΔDec=1.42e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Pleiades' preserved (<1e-4°): ΔRA=1.56e-13°, ΔDist=1.25e-12 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Orion Nebula' preserved (<1e-4°): ΔRA=1.42e-14°, ΔDec=3.11e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Orion Nebula' preserved (<1e-4°): ΔRA=1.42e-14°, ΔDist=1.14e-12 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Eta Carinae' preserved (<1e-4°): ΔRA=2.84e-14°, ΔDec=0.00e+0°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Eta Carinae' preserved (<1e-4°): ΔRA=2.84e-14°, ΔDist=9.09e-13 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Crab Nebula' preserved (<1e-4°): ΔRA=2.84e-14°, ΔDec=2.13e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Crab Nebula' preserved (<1e-4°): ΔRA=4.26e-14°, ΔDist=1.82e-12 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Trapezium Cluster' preserved (<1e-4°): ΔRA=0.00e+0°, ΔDec=3.11e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Trapezium Cluster' preserved (<1e-4°): ΔRA=0.00e+0°, ΔDist=1.59e-12 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Betelgeuse' preserved (<1e-4°): ΔRA=1.42e-14°, ΔDec=1.33e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Betelgeuse' preserved (<1e-4°): ΔRA=0.00e+0°, ΔDist=7.96e-13 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Sirius' preserved (<1e-4°): ΔRA=4.26e-14°, ΔDec=5.33e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Sirius' preserved (<1e-4°): ΔRA=2.33e-12°, ΔDist=9.82e-13 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Vega' preserved (<1e-4°): ΔRA=5.68e-14°, ΔDec=7.11e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Vega' preserved (<1e-4°): ΔRA=5.68e-13°, ΔDist=3.84e-13 ly
  [PASS] ICRS->Galactic->ICRS round-trip invariant for 'Alpha Centauri' preserved (<1e-4°): ΔRA=1.71e-13°, ΔDec=2.13e-14°
  [PASS] ICRS->Three.js->ICRS round-trip invariant for 'Alpha Centauri' preserved (<1e-4°): ΔRA=1.82e-11°, ΔDist=7.73e-13 ly

Stage 4: Astrometric String Coordinate Parsers Verification
  [PASS] parseRaStringToDegrees('17h 45m 40.04s') -> 266.4168° (diff 0.00000°)
  [PASS] parseDecStringToDegrees('-29° 00' 28.1"') -> -29.0078° (diff 0.00001°)
  [PASS] parseRaStringToDegrees('03h 47m 24.0s') -> 56.8500° (diff 0.00000°)
  [PASS] parseDecStringToDegrees('+24° 07' 00"') -> 24.1167° (diff 0.00000°)
  [PASS] parseRaStringToDegrees('05h 35m 17.3s') -> 83.8221° (diff 0.00000°)
  [PASS] parseDecStringToDegrees('-05° 23' 28"') -> -5.3911° (diff 0.00000°)
  [PASS] parseRaStringToDegrees('10h 45m 03.6s') -> 161.2650° (diff 0.00000°)
  [PASS] parseDecStringToDegrees('-59° 41' 04"') -> -59.6844° (diff 0.00000°)
  [PASS] parseRaStringToDegrees('05h 34m 31.9s') -> 83.6329° (diff 0.00002°)
  [PASS] parseDecStringToDegrees('+22° 00' 52"') -> 22.0144° (diff 0.00000°)

Stage 5: Planck Blackbody Temperature & sRGB Color Gradient Verification
  [PASS] Class M (3000 K, M-dwarf / Betelgeuse (Red/Orange)): sRGB=(1.000, 0.695, 0.431)
  [PASS] Class K (4500 K, K-dwarf / Alpha Cen B (Warm Orange)): sRGB=(1.000, 0.853, 0.735)
  [PASS] Class G (5778 K, G-dwarf / The Sun (Warm Yellow-White)): sRGB=(1.000, 0.951, 0.904)
  [PASS] Class F (6800 K, F-type / Procyon A (Pale White)): sRGB=(0.980, 0.966, 1.000)
  [PASS] Class A (9600 K, A-type / Vega (Brilliant White)): sRGB=(0.802, 0.862, 1.000)
  [PASS] Class B (15000 K, B-type / Pleiades (Blue-White)): sRGB=(0.710, 0.804, 1.000)
  [PASS] Class O (39000 K, O-type / Trapezium C (Electric Blue)): sRGB=(0.597, 0.729, 1.000)

================================================================
[SUCCESS] All 65 astronomical data assertions PASSED cleanly.
================================================================
```

#### 2. Command: `npm run build`
- Exit Code: `0`
- Duration: 364ms
- Verbatim Output:
```text
> milky-way-3d@1.0.0 build
> tsc && vite build

vite v5.4.21 building for production...
transforming...
✓ 6 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                 3.98 kB │ gzip: 1.34 kB
dist/assets/index-BmNRL2yy.js  12.89 kB │ gzip: 5.00 kB │ map: 14.51 kB
✓ built in 364ms
```

#### 3. Command: `npm run test`
- Exit Code: `0`
- Verbatim Output:
```text
> milky-way-3d@1.0.0 test
> vitest run

 RUN  v4.1.12 C:/Users/Admin/earth

 ✓ tests/integration/cross-feature.spec.ts (5 tests) 14ms
 ✓ tests/unit/shaders.spec.ts (15 tests) 89ms
 ✓ tests/unit/particles.spec.ts (17 tests) 752ms
 ✓ tests/unit/hud.spec.ts (11 tests) 117ms
 ✓ tests/unit/catalog.spec.ts (10 tests) 34ms
 ✓ tests/unit/coordinates.spec.ts (13 tests) 34ms
 ✓ tests/unit/navigation.spec.ts (13 tests) 18ms
 ✓ tests/unit/blackhole.spec.ts (17 tests) 20ms

 Test Files  8 passed (8)
      Tests  101 passed (101)
   Duration  3.23s
```

### 1.2 Inspection of Implementation Code & Data Discrepancies

1. **`src/data/landmarks.json` (lines 282-319)**:
```json
    "id": "betelgeuse",
    "name": "Betelgeuse",
    "equatorial": {
      "ra": "05h 55m 10.3s",
      "dec": "+07° 24' 25\"",
      "raDeg": 88.7929,
      "decDeg": 7.4071,
      "distanceLy": 548
    },
    "galactic": {
      "lDeg": 199.79,
      "bDeg": 0.08,
      "distanceLy": 548
    },
    "cartesian": {
      "x": -186.0,
      "y": 68.7,
      "z": 26515.1
    },
    "threePosition": [-186.0, 68.7, 26515.1],
    "distanceFromGC": 26515,
    "distanceFromSun": 548,
```

2. **Astrometric Transformation Discrepancy Verification**:
When passing Betelgeuse's real ICRS coordinates (`raDeg = 88.7929`, `decDeg = 7.4071`, `distanceLy = 548`) into `icrsToThreePosition`:
- Calculated `icrsToThreePosition`:
  - $X_{\text{three}} = +183.25\text{ ly}$
  - $Y_{\text{three}} = -17.34\text{ ly}$
  - $Z_{\text{three}} = +26509.35\text{ ly}$
- Calculated `equatorialToGalactic`:
  - $l = 199.79^\circ$
  - $b = -8.96^\circ$
- Discrepancy with values stored in `landmarks.json`:
  - $\Delta X = |-186.0 - (+183.25)| = \mathbf{369.25\text{ ly}}$
  - $\Delta Y = |68.7 - (-17.34)| = \mathbf{86.04\text{ ly}}$
  - $\Delta Z = |26515.1 - 26509.35| = \mathbf{5.75\text{ ly}}$
  - Total 3D positioning distance error: $\sqrt{369.25^2 + 86.04^2 + 5.75^2} = \mathbf{379.2\text{ ly}}$!
  - Galactic latitude error: $b_{\text{stored}} = +0.08^\circ$ vs $b_{\text{astronomical}} = \mathbf{-8.96^\circ}$.

3. **`scripts/verify-datasets.ts` (lines 270-315)**:
In `Stage 3`, `verifyCoordinateMathInvariance`:
```typescript
      // 2. Test ICRS -> Three.js -> ICRS round-trip
      if (distanceLy > 0) {
        const threePos = icrsToThreePosition(raDeg, decDeg, distanceLy);
        const reconstructed = threePositionToIcrs(threePos);

        let dRa3 = Math.abs(raDeg - reconstructed.raDeg);
        ...
```
The verifier calls `icrsToThreePosition(raDeg, decDeg, distanceLy)` and checks that `threePositionToIcrs(threePos)` reconstructs `raDeg` and `decDeg`. It **never checks** whether the static `lm.cartesian` or `lm.threePosition` stored in `landmarks.json` matches `threePos`! Because of this missing check, the 379.2 ly error on Betelgeuse escaped detection by the CLI.

4. **`tsconfig.json` (lines 1-19)**:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "strict": true,
    ...
```
Does not set `"noEmit": true`. Running `npm run build` runs `tsc && vite build`, which emits compiled `.js` files into `src/` (`src/data/coordinates.js`, `src/types/galaxy.js`, `src/main.js`, `scripts/verify-datasets.js`).

---

## 2. Logic Chain

1. **Scaffold & Build Pipeline Evaluation**:
   - The Vite 5, TypeScript 5.6.3, and Three.js 0.170.0 setup is correctly configured and functional.
   - `npm run build` generates `dist/index.html` and bundled assets with zero TypeScript compiler errors under `strict: true`.
   - However, because `tsconfig.json` lacks `"noEmit": true`, `tsc` emits transpiled JavaScript files directly into source directories (`src/` and `scripts/`), cluttering the source tree and risking desynchronization between `.ts` and `.js` files.

2. **Astrophysical Coordinate Engine (`src/data/coordinates.ts`)**:
   - The IAU SOFA $3 \times 3$ transformation matrix (`M_ICRS_TO_GAL`) was verified for orthogonality ($M \cdot M^T = I$, error $< 10^{-10}$) and proper rotation ($\det(M) = +1.0$).
   - Round-trip transformation tests confirmed numerical drift is $< 10^{-11\circ}$, outperforming the required threshold of $< 10^{-4\circ}$.
   - Boundary tests for North and South Celestial Poles ($\pm 90^\circ$), Right Ascension wrap-around ($0^\circ / 360^\circ$), and zero distance were verified.

3. **Catalog Data Accuracy (`src/data/landmarks.json`)**:
   - All 6 mandatory landmarks (Sagittarius A*, Sun, Pleiades, Orion Nebula, Eta Carinae, Crab Nebula) are present and their Cartesian positions match the coordinate transformation functions within astrometric rounding tolerances ($< 0.7\text{ ly}$).
   - However, for supplementary landmark `betelgeuse`:
     - Its Galactic latitude was incorrectly transcribed as $b = +0.08^\circ$ instead of $-8.96^\circ$.
     - Its Cartesian coordinates were entered as `[-186.0, 68.7, 26515.1]` instead of `[183.3, -17.3, 26509.4]`.
     - This causes a 379.2 light-year discrepancy in 3D world space. If uncorrected, in Milestone 4 when camera navigation flies to Betelgeuse or places 3D sprites, Betelgeuse will appear in the wrong galactic quadrant and above the midplane instead of below it.

4. **Dataset Verification CLI (`scripts/verify-datasets.ts`)**:
   - The CLI executes cleanly across 65 assertions with exit code 0.
   - However, it contains a significant coverage gap: it tests the internal mathematical consistency of the transformation formulas, but never asserts that the pre-computed static coordinates in `landmarks.json` match the transformation engine's outputs.
   - Adding a cross-validation step ($||\text{lm.cartesian} - \text{icrsToThreePosition}(\dots)|| \le 2\text{ ly}$) would have immediately caught the Betelgeuse defect.

---

## 3. Findings

### [Major] Finding 1: Astrometric Coordinate & Latitude Inversion for Betelgeuse
- **What**: Betelgeuse has an incorrect Galactic latitude ($b = +0.08^\circ$ instead of $-8.96^\circ$) and an inverted X/elevated Y coordinate in `landmarks.json` and `public/data/landmarks.json`, causing a 379.2 light-year 3D positioning discrepancy.
- **Where**: `c:\Users\Admin\earth\src\data\landmarks.json` (lines 282–319) and `c:\Users\Admin\earth\public\data\landmarks.json` (lines 282–319).
- **Why**: Stored Cartesian is `[-186.0, 68.7, 26515.1]`. Computed from Betelgeuse's real equatorial coordinates ($\text{RA } 05^{\text{h}} 55^{\text{m}} 10.3^{\text{s}}$, $\text{Dec } +07^\circ 24' 25''$, $d = 548\text{ ly}$) is `[+183.3, -17.3, 26509.4]`. In 3D space, Betelgeuse is placed on the opposite side of the solar meridian and above the galactic midplane.
- **Suggestion**: Update `landmarks.json` (and `public/data/landmarks.json`) for `betelgeuse`:
  ```json
  "galactic": {
    "lDeg": 199.79,
    "bDeg": -8.96,
    "distanceLy": 548
  },
  "cartesian": {
    "x": 183.3,
    "y": -17.3,
    "z": 26509.4
  },
  "threePosition": [183.3, -17.3, 26509.4],
  "distanceFromGC": 26510,
  ```

### [Major] Finding 2: Verification CLI Lacks Static-to-Computed Cross-Validation
- **What**: `scripts/verify-datasets.ts` validates round-trip mathematical consistency of `coordinates.ts`, but never cross-checks whether `landmark.cartesian` in `landmarks.json` matches `icrsToThreePosition(lm.equatorial.raDeg, lm.equatorial.decDeg, lm.equatorial.distanceLy)`.
- **Where**: `c:\Users\Admin\earth\scripts\verify-datasets.ts` (lines 270–315).
- **Why**: Allows corrupted or mis-transcribed static catalog coordinates to pass CLI verification undetected.
- **Suggestion**: Add a validation step in `verifyLandmarkCatalog`:
  ```typescript
  if (l.id !== 'sun' && l.id !== 'sagittarius-a') {
    const computed = icrsToThreePosition(l.equatorial.raDeg, l.equatorial.decDeg, l.equatorial.distanceLy);
    const delta = Math.hypot(computed.x - l.cartesian.x, computed.y - l.cartesian.y, computed.z - l.cartesian.z);
    if (delta > 2.0) {
      this.fail(`Landmark '${l.id}' cartesian deviates from equatorial transform by ${delta.toFixed(1)} ly`);
    } else {
      this.pass(`Landmark '${l.id}' cartesian aligns with ICRS transform (Δ=${delta.toFixed(2)} ly).`);
    }
  }
  ```

### [Minor] Finding 3: Missing `"noEmit": true` in `tsconfig.json`
- **What**: Running `npm run build` (`tsc && vite build`) emits compiled `.js` files next to `.ts` files in `src/` and `scripts/`.
- **Where**: `c:\Users\Admin\earth\tsconfig.json`.
- **Why**: Vite performs bundling into `dist/`; `tsc` is only intended for type-checking. Emitting `.js` files into source directories creates duplicate artifacts and risks importing stale compiled files.
- **Suggestion**: Add `"noEmit": true` to `compilerOptions` in `tsconfig.json`, and delete the stray `.js` files in `src/` and `scripts/`.

### [Minor] Finding 4: Redundant Private `kelvinToRGB` Implementation in CLI Script
- **What**: `scripts/verify-datasets.ts` implements a private `kelvinToRGB` method that duplicates the polynomial logic tested in `tests/unit/shaders.spec.ts`.
- **Where**: `c:\Users\Admin\earth\scripts\verify-datasets.ts` (lines 46–81).
- **Why**: Milestone 2 will need this exact polynomial in shader and generator contexts.
- **Suggestion**: When implementing Milestone 2, extract Planck polynomial color mapping into a shared utility (e.g. `src/shaders/planck.ts`).

---

## 4. Adversarial Challenge & Stress-Test Results

| Attack Scenario / Assumption Tested | Predicted / Expected Result | Actual Result | Status |
|---|---|---|---|
| **Zero-distance singularity**: `equatorialToGalactic` / `icrsToThreePosition` with $d = 0$ | Should not divide by zero or yield `NaN` | Correctly returns canonical solar coordinates `[0, 68, 26000]` | **PASS** |
| **Polar singularity**: North Celestial Pole ($\text{Dec} = +90^\circ$) and South Celestial Pole ($\text{Dec} = -90^\circ$) | Galactic latitude $b$ must match NCP galactic coords ($+27.128^\circ$) | Exact match; finite floats, no trigonometric NaN | **PASS** |
| **Coordinate wrap-around**: $\text{RA} = 0.0001^\circ$ vs $\text{RA} = 359.9999^\circ$ | Metric distance must be continuous across the $0^\circ/360^\circ$ seam | Continuous, $\Delta b < 0.01^\circ$ | **PASS** |
| **Catalog vs Transform Consistency**: Comparing stored `cartesian` in `landmarks.json` against `icrsToThreePosition` | All landmarks must match calculated world positions within 1 ly | **FAIL** on `betelgeuse` ($\Delta = 379.2\text{ ly}$) | **CHALLENGE CONFIRMED** |
| **Negative / Infinite inputs**: Negative parallax, negative camera distance, extreme Kelvin | Must clamp cleanly without crashing runtime | Negative parallax clamps to 0; Kelvin clamps to Harvard O/M bounds | **PASS** |

---

## 5. Verified Claims vs Unverified Items

### Verified Claims
- Claim: `npm run verify-data` passes all assertions with exit code 0. -> **VERIFIED** (65 assertions passed).
- Claim: `npm run build` compiles with zero TypeScript errors. -> **VERIFIED** (364ms, exit code 0).
- Claim: All 6 mandatory landmarks exist with real coordinates. -> **VERIFIED** (Sgr A*, Sun, Pleiades, Orion, Eta Carinae, Crab Nebula all accurate).
- Claim: IAU SOFA rotation matrix is orthogonal and norm-preserving. -> **VERIFIED** ($M \cdot M^T = I$, $\det(M) = 1.0$).
- Claim: Harvard spectral blackbody temperature gradient correctly maps O, B, A, F, G, K, M classes. -> **VERIFIED** (Tested across 200 samples).

### Coverage Gaps Identified
- Stored static `cartesian` and `galactic` attributes in `landmarks.json` were not asserted against the coordinate engine outputs in `verify-datasets.ts`.

### Unverified Items
- None. All claims and files in Milestone 1 scope were independently verified.

---

## 6. Caveats

- **WebGL Canvas Rendering in Headless Mode**: Milestone 1 implements the HTML shell and data catalog. Full WebGL GPU rendering with particle point meshes begins in Milestone 2. Headless verification confirmed DOM element mounting and WebGL context creation compatibility.
- **Supplementary Landmarks**: Betelgeuse is a supplementary landmark beyond the 6 strictly required by R2, but because it is bundled in the primary catalog and wired to UI bookmarks, its coordinate error must be corrected before Milestone 4.

---

## 7. Conclusion & Next Steps

The work product of Milestone 1 provides a high-quality foundation with genuine astrometric math, a solid build pipeline, and comprehensive unit tests. However, due to the **379.2 light-year coordinate error in Betelgeuse** (Finding 1) and the **corresponding verification CLI gap** (Finding 2), the official verdict is **`REQUEST_CHANGES`**.

### Required Action Items for Worker M1:
1. **Fix Betelgeuse in `src/data/landmarks.json` and `public/data/landmarks.json`**:
   - Set `bDeg: -8.96`
   - Set `cartesian`: `{"x": 183.3, "y": -17.3, "z": 26509.4}`
   - Set `threePosition`: `[183.3, -17.3, 26509.4]`
   - Set `distanceFromGC`: `26510`
2. **Update `scripts/verify-datasets.ts`**:
   - Add cross-validation asserting that each landmark's stored `cartesian` coordinates match `icrsToThreePosition` to within 2.0 light-years.
3. **Update `tsconfig.json`**:
   - Add `"noEmit": true` under `compilerOptions` and remove the emitted `.js` files from `src/` and `scripts/`.
4. Re-run `npm run verify-data` and `npm run build` to confirm clean pass.

---

## 8. Verification Method

To independently verify the resolution of these findings:

1. **Verify Static vs Computed Catalog Alignment**:
   ```powershell
   npm run verify-data
   ```
   **Expected Result**: All assertions pass, including the new cross-validation assertion verifying that `betelgeuse` cartesian coordinates match `icrsToThreePosition` within 2.0 ly.
   **Invalidation Conditions**: Betelgeuse $\Delta > 2.0\text{ ly}$, negative latitudes not handled, or script exits with non-zero code.

2. **Verify Clean Build Without Source Pollution**:
   ```powershell
   npm run build
   ```
   **Expected Result**: Build succeeds cleanly into `dist/` without emitting any `.js` files into `src/` or `scripts/`.
   **Invalidation Conditions**: Presence of newly generated `src/data/coordinates.js` or TypeScript compiler errors.
