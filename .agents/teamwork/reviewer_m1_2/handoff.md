# Milestone 1 Independent Review & Adversarial Challenge Report

**Reviewer**: `teamwork_preview_reviewer` (Reviewer 2 for Milestone 1)  
**Target Milestone**: Milestone 1 (Project Scaffold, Astronomical Data Catalog & Dataset Verification CLI)  
**Worker Under Review**: `worker_m1` (`b280b368-e84f-4aa2-a131-d98b91819450`)  
**Verdict**: **`REQUEST_CHANGES`**  
**Integrity Status**: **CLEAN (No Integrity Violations Detected)**  

---

## Review Summary

| Evaluation Dimension | Status | Assessment |
|---|---|---|
| **Explicit Verdict** | **`REQUEST_CHANGES`** | High overall quality, but requires fixing 1 major data transcription error in `landmarks.json` and closing a verification CLI coverage gap before M2. |
| **Integrity Audit** | **PASS (CLEAN)** | Real astronomical mathematical implementations; zero mock facades, zero hardcoded bypasses, zero fabricated logs. Genuine IAU SOFA Hipparcos transformation matrix. |
| **Build & Tooling** | **PASS** | `npm run build` succeeds cleanly in 322ms with Vite 5.4.21 & TypeScript 5.6.3 producing `dist/index.html` and assets. |
| **Unit Test Suite** | **PASS** | `npm test` executes Vitest cleanly: 8 test suites passed, 101 unit/integration tests passed. |
| **Dataset Verification CLI** | **PASS (with Coverage Gap)** | `npm run verify-data` executes cleanly: 65 assertions pass across 5 diagnostic stages. |
| **Astrometric Consistency** | **FAIL (1 Major Finding)** | Supplementary landmark `betelgeuse` in `landmarks.json` contains a 379.2 ly positioning error ($b = +0.08^\circ$ vs $-8.96^\circ$, $X$ sign inverted, $Y$ offset by +86 ly). |
| **Mandatory Landmarks** | **PASS (100% Accurate)** | All 6 mandatory landmarks (Sagittarius A*, Sun, Pleiades, Orion Nebula, Eta Carinae, Crab Nebula) are present and physically accurate within $<0.7$ ly. |
| **Coordinate Handedness** | **ADVERSARIAL CAVEAT** | Transformation matrix in `galactocentricToThree` has $\det = -1$ (parity reflection); documented for downstream M2 spiral arm chirality alignment. |

---

## 1. Observation

### 1.1 Direct Tool Execution & Verbatim Terminal Outputs

#### Command 1: `npm run verify-data`
- Working Directory: `c:\Users\Admin\earth`
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

#### Command 2: `npm run build`
- Exit Code: `0`
- Duration: 322ms
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
✓ built in 322ms
```

#### Command 3: `npm run test`
- Exit Code: `0`
- Verbatim Output:
```text
> milky-way-3d@1.0.0 test
> vitest run

 RUN  v4.1.12 C:/Users/Admin/earth

 ✓ tests/unit/hud.spec.ts (11 tests) 80ms
 ✓ tests/unit/shaders.spec.ts (15 tests) 78ms
 ✓ tests/unit/particles.spec.ts (17 tests) 839ms
 ✓ tests/unit/coordinates.spec.ts (13 tests) 31ms
 ✓ tests/unit/catalog.spec.ts (10 tests) 48ms
 ✓ tests/unit/blackhole.spec.ts (17 tests) 21ms
 ✓ tests/unit/navigation.spec.ts (13 tests) 22ms
 ✓ tests/integration/cross-feature.spec.ts (5 tests) 15ms

 Test Files  8 passed (8)
      Tests  101 passed (101)
   Duration  3.01s
```

### 1.2 Direct Code Inspection Observations

1. **`src/data/landmarks.json` & `public/data/landmarks.json` (lines 282–319)**:
   ```json
   {
     "id": "betelgeuse",
     "name": "Betelgeuse",
     "commonName": "Alpha Orionis",
     "constellation": "Orion",
     "category": "stellar_system",
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
   ...
   ```
   - Observed: `bDeg` is entered as `0.08`.
   - Observed: `cartesian` is entered as `{"x": -186.0, "y": 68.7, "z": 26515.1}`.

2. **Mathematical Verification of Betelgeuse Coordinates**:
   - Calling `equatorialToGalactic(88.7929, 7.4071, 548)` yields:
     - $l = 199.787^\circ \approx 199.79^\circ$
     - $b = \mathbf{-8.959^\circ \approx -8.96^\circ}$ (diff from stored $+0.08^\circ$ is $\mathbf{9.04^\circ}$)
   - Calling `icrsToThreePosition(88.7929, 7.4071, 548)` yields:
     - $X_{\text{three}} = \mathbf{+183.25\text{ ly}}$ (stored: $-186.0\text{ ly}$, diff: $\mathbf{369.25\text{ ly}}$)
     - $Y_{\text{three}} = \mathbf{-17.34\text{ ly}}$ (stored: $+68.7\text{ ly}$, diff: $\mathbf{86.04\text{ ly}}$)
     - $Z_{\text{three}} = \mathbf{+26509.35\text{ ly}}$ (stored: $+26515.1\text{ ly}$, diff: $\mathbf{5.75\text{ ly}}$)
   - Total Euclidean positioning error: $\sqrt{369.25^2 + 86.04^2 + 5.75^2} = \mathbf{379.2\text{ ly}}$.

3. **`scripts/verify-datasets.ts` (lines 270–315)**:
   - In `verifyCoordinateMathInvariance`:
     ```typescript
     const gal = equatorialToGalactic(raDeg, decDeg, distanceLy);
     const eqBack = galacticToEquatorial(gal.lDeg, gal.bDeg);
     ...
     const threePos = icrsToThreePosition(raDeg, decDeg, distanceLy);
     const reconstructed = threePositionToIcrs(threePos);
     ```
   - Observed: The script verifies round-trip math within `coordinates.ts`, but **never compares** the precomputed static fields `lm.cartesian`, `lm.threePosition`, or `lm.galactic` in `landmarks.json` against `threePos` or `gal`!

4. **`src/data/coordinates.ts` (lines 163–186)**:
   ```typescript
   export function galactocentricToThree(pos: GalactocentricCartesian): ThreeJsCoordinates {
     return {
       x: -pos.y,
       y: pos.z,
       z: pos.x
     };
   }
   ```
   - Matrix of transformation from $(X_G, Y_G, Z_G)$ to $(x, y, z)_{\text{three}}$ is:
     $$
     T = \begin{pmatrix} 0 & -1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}
     $$
   - Matrix determinant: $\det(T) = -1.0$.
   - Observed: The transformation reflects the chirality (swaps orientation). Looking down from $+Y$ (NGP), galactic rotation angle $\theta$ increases clockwise instead of counterclockwise.

5. **`tsconfig.json` (lines 1–25)**:
   - Observed: Lacks `"noEmit": true`.
   - Running `npm run build` runs `tsc && vite build`, which writes emitted `.js` files into source directories (`src/data/coordinates.js`, `src/types/galaxy.js`, `src/main.js`, `scripts/verify-datasets.js`).

---

## 2. Logic Chain

1. **Integrity Audit**:
   - Checked for hardcoded test cheats: Verified that `coordinates.ts` uses analytical spherical trigonometry and matrix multiplication for all arbitrary inputs ($M_{\text{ICRS}\to\text{GAL}}$ is standard IAU SOFA with determinant 1.0 down to $10^{-15}$).
   - Checked for facade implementations: All exported functions execute real astrometric transformations.
   - Checked for fabricated verification logs: All commands were executed directly in terminal; 65 CLI assertions and 101 Vitest unit tests run and pass dynamically.
   - Result: **CLEAN (Zero Integrity Violations)**.

2. **Mandatory Landmark Verification**:
   - Inspected all 6 mandatory landmarks required by `ORIGINAL_REQUEST.md` § R2:
     - `sagittarius-a`: Galactic center, origin $(0, 0, 0)$ ly, $d_{\text{Sun}} = 26,000$ ly, $T = 100,000$ K.
     - `sun`: Solar system, $(0, 68, 26000)$ ly, $d_{\text{Sun}} = 0$ ly, $T = 5,778$ K, $G2V$.
     - `pleiades`: Open cluster, $d = 444$ ly, Three.js $(-94.6, -109.2, 26396.0)$ ly vs computed $(-94.1, -108.8, 26396.3)$ ly (diff $<0.5$ ly).
     - `orion-nebula`: Emission nursery, $d = 1,344$ ly, Three.js $(614.9, -377.9, 27108.7)$ ly vs computed $(614.9, -378.0, 27108.7)$ ly (diff $<0.1$ ly).
     - `eta-carinae`: LBV hypergiant, $d = 7,500$ ly, Three.js $(7148.6, -14.5, 23732.1)$ ly vs computed $(7148.6, -14.4, 23732.7)$ ly (diff $<0.6$ ly).
     - `crab-nebula`: Pulsar remnant, $d = 6,500$ ly, Three.js $(514.1, -586.6, 32446.2)$ ly vs computed $(513.9, -587.1, 32446.5)$ ly (diff $<0.5$ ly).
   - Result: **All 6 mandatory landmarks are astrometrically accurate and conform to physical invariants**.

3. **Identification of Betelgeuse Discrepancy (Finding 1)**:
   - For supplementary landmark `betelgeuse`:
     - Astronomical Galactic coordinates: $l = 199.787^\circ, b = -8.959^\circ$.
     - Catalog entry records: `bDeg: 0.08`. The negative sign and leading digit were dropped ($08.959 \to 0.08$).
     - This caused the precomputed $Z_G$ (and Three.js $Y$) to be elevated above the solar midplane ($Y = +68.7$ ly) instead of below it ($Y = -17.3$ ly).
     - Simultaneously, `x` was negated to `-186.0` instead of `+183.3`.
     - Net error: **379.2 light-years** in 3D world space. In Milestone 4, this would place Betelgeuse on the opposite side of the solar meridian and in the wrong galactic hemisphere.

4. **Identification of Verification CLI Coverage Gap (Finding 2)**:
   - `scripts/verify-datasets.ts` verifies that `equatorialToGalactic` round-trips with `galacticToEquatorial`, and that `icrsToThreePosition` round-trips with `threePositionToIcrs`.
   - Because it tests the functions against themselves and not against the catalog's static JSON values, static data errors in `landmarks.json` escape detection.
   - Cross-validating `lm.cartesian` against `icrsToThreePosition` directly addresses this vulnerability.

5. **Adversarial Assessment of Coordinate Handedness**:
   - `galactocentricToThree` sets $x_{\text{three}} = -Y_G, y_{\text{three}} = Z_G, z_{\text{three}} = X_G$, yielding $\det(T) = -1.0$.
   - Why was this done? When an observer at Sol looks along $-Z$ toward Sgr A*, $+X$ is to the right and $-X$ is to the left. In the real night sky, Galactic East ($l = 90^\circ, Y_G > 0$) is to the left. Inverting $Y_G$ puts Galactic East at $-X$ (left), matching Earth-based celestial views.
   - However, because it is an improper rotation (reflection), top-down views of the galaxy will display spiral arms with inverted chirality (clockwise vs counterclockwise) unless Milestone 2's density wave formula accounts for this reflection.

---

## 3. Findings

### [Major] Finding 1: Astrometric Latitude & Coordinate Inversion for Betelgeuse
- **What**: `betelgeuse` in `src/data/landmarks.json` and `public/data/landmarks.json` contains an incorrect Galactic latitude ($b = +0.08^\circ$ instead of $-8.96^\circ$) and an erroneous Cartesian position (`[-186.0, 68.7, 26515.1]` instead of `[+183.3, -17.3, 26509.4]`), resulting in a 379.2 light-year 3D positioning discrepancy.
- **Where**: `c:\Users\Admin\earth\src\data\landmarks.json` (lines 282–319) and `c:\Users\Admin\earth\public\data\landmarks.json` (lines 282–319).
- **Why**: Places Betelgeuse above the galactic midplane instead of below it, and mirrors it across the Sun-GC axis. When camera navigation and 3D landmark markers are built in Milestone 4, Betelgeuse will render in the wrong position relative to the local Orion spur.
- **Suggested Fix**: Update `landmarks.json` and `public/data/landmarks.json`:
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
- **What**: `scripts/verify-datasets.ts` tests algorithmic round-trips of `coordinates.ts`, but fails to assert that the precomputed static coordinates in `landmarks.json` match `icrsToThreePosition`.
- **Where**: `c:\Users\Admin\earth\scripts\verify-datasets.ts` (Stage 3, lines 270–315).
- **Why**: Allows corrupted or mis-transcribed static catalog data to pass CLI verification undetected.
- **Suggested Fix**: Add cross-validation in `verifyLandmarkCatalog`:
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

### [Minor] Finding 3: Missing `"noEmit": true` in `tsconfig.json` Causing Source Directory Clutter
- **What**: Running `npm run build` (`tsc && vite build`) emits compiled `.js` files next to `.ts` files in `src/` and `scripts/`.
- **Where**: `c:\Users\Admin\earth\tsconfig.json`.
- **Why**: Vite handles bundling into `dist/`; `tsc` should be used strictly for type checking. Emitting `.js` files in `src/` risks importing outdated compiled JavaScript instead of TypeScript source files.
- **Suggested Fix**: Add `"noEmit": true` to `compilerOptions` in `tsconfig.json` and delete emitted `.js` files from `src/` and `scripts/`.

### [Minor] Finding 4: Unicode Minus Character Resilience in Sexagesimal String Parser
- **What**: `parseDecStringToDegrees` checks `trimmed.startsWith('-')` for ASCII minus (`-`, U+002D), but astronomical catalogs and papers frequently use Unicode minus (`−`, U+2212).
- **Where**: `c:\Users\Admin\earth\src\data\coordinates.ts` (line 275).
- **Why**: If a declination string containing Unicode minus is supplied (e.g. `−29° 00' 28.1"`), it will be parsed as positive declination $+29.0078^\circ$.
- **Suggested Fix**: Update line 275 to:
  ```typescript
  const isNegative = trimmed.startsWith('-') || trimmed.startsWith('\u2212');
  ```

---

## 4. Adversarial Review & Attack Surface Challenges

| Stress Test / Attack Vector | Target Function | Expected Behavior | Actual Behavior | Result |
|---|---|---|---|---|
| **IAU SOFA Matrix Orthonormality** | `M_ICRS_TO_GAL` | $M \cdot M^T = I$, $\det(M) = 1.0$ | Max error $2.88 \times 10^{-15}$, $\det = 0.9999999999999987$ | **PASS** |
| **Polar Singularity ($Dec = \pm 90^\circ$)** | `equatorialToGalactic` | Finite floats, $b = \pm 27.128^\circ$, no NaN | $b = +27.128^\circ$ (NCP), $b = -27.128^\circ$ (SCP), no NaN | **PASS** |
| **Coordinate Wrap-Around Seam** | `equatorialToGalactic` | Metric continuity across $0^\circ / 360^\circ$ | $\Delta b < 0.01^\circ$ across boundary | **PASS** |
| **Zero Distance Point** | `icrsToThreePosition(..., 0)` | Return Sol position without division by zero | Returns `[0, 68, 26000]` cleanly | **PASS** |
| **Three.js Handedness / Parity** | `galactocentricToThree` | Pure rotation ($\det = +1$) | Transformation matrix has $\det = -1$ (reflection) | **CHALLENGE FLAGGED (M2 Caution)** |
| **Catalog Static vs Computed** | `landmarks.json` vs `icrsToThreePosition` | Matching coordinates $< 1\text{ ly}$ | `betelgeuse` deviates by $\mathbf{379.2\text{ ly}}$ | **CHALLENGE CONFIRMED (Finding 1)** |
| **Negative Parallax Handling** | `parallaxToLightYears` | Graceful zero clamp, no negative distance | Returns `0` cleanly | **PASS** |

---

## 5. Verified Claims vs Coverage Gaps

### Verified Claims
- Claim: `npm run verify-data` passes all 65 assertions cleanly. -> **VERIFIED** (exit code 0).
- Claim: `npm run build` succeeds cleanly with zero errors. -> **VERIFIED** (exit code 0, 322ms).
- Claim: All 6 mandatory landmarks exist with physical metadata. -> **VERIFIED** (Sgr A*, Sun, Pleiades, Orion Nebula, Eta Carinae, Crab Nebula).
- Claim: Round-trip transformation drift $< 10^{-4\circ}$. -> **VERIFIED** (drift $< 10^{-11\circ}$).
- Claim: Planck blackbody temperature color mapping across O, B, A, F, G, K, M spectral classes. -> **VERIFIED**.

### Coverage Gaps
- Static catalog coordinates in `landmarks.json` were not cross-validated against the transformation pipeline in `scripts/verify-datasets.ts`.

---

## 6. Caveats

- **No live API network dependency**: The local offline catalog design satisfies Requirement R4.
- **Logarithmic depth buffer**: As noted by Worker M1 and PROJECT.md, downstream Milestones 2 and 4 must initialize Three.js `WebGLRenderer` with `logarithmicDepthBuffer: true` to support viewing ranges from 15 ly to 160,000 ly.

---

## 7. Conclusion

Milestone 1 establishes an astrometrically sound foundation with genuine IAU SOFA rotation mathematics, a fast build pipeline, and 101 passing unit tests. However, because of the **379.2 light-year coordinate error in Betelgeuse** (Finding 1) and the **missing static-to-computed cross-validation in the verification CLI** (Finding 2), the official verdict is:

### **VERDICT: `REQUEST_CHANGES`**

#### Required Action Items for Worker M1:
1. **Correct Betelgeuse in `src/data/landmarks.json` and `public/data/landmarks.json`**:
   - `bDeg: -8.96`
   - `cartesian: {"x": 183.3, "y": -17.3, "z": 26509.4}`
   - `threePosition: [183.3, -17.3, 26509.4]`
   - `distanceFromGC: 26510`
2. **Enhance `scripts/verify-datasets.ts`**:
   - Add static-to-computed cross-validation asserting $||\text{lm.cartesian} - \text{icrsToThreePosition}(\dots)|| \le 2.0\text{ ly}$ for all non-origin landmarks.
3. **Update `tsconfig.json`**:
   - Add `"noEmit": true` under `compilerOptions` and remove emitted `.js` files from `src/` and `scripts/`.
4. **Re-run `npm run verify-data` and `npm run build`** to confirm clean pass.

---

## 8. Verification Method

To independently verify the resolution of these issues:

1. **Verify Static vs Computed Alignment in Catalog**:
   ```powershell
   npm run verify-data
   ```
   - **Expected Result**: All assertions pass, including new cross-validation assertion verifying that `betelgeuse` cartesian coordinates match `icrsToThreePosition` within 2.0 ly.
   - **Invalidation Conditions**: Betelgeuse $\Delta > 2.0\text{ ly}$, negative latitude unhandled, or exit code $\ne 0$.

2. **Verify Clean Production Build Without Source Tree Pollution**:
   ```powershell
   npm run build
   ```
   - **Expected Result**: Builds to `dist/` cleanly without emitting `.js` files into `src/` or `scripts/`.
   - **Invalidation Conditions**: Any TypeScript compilation error or emitted `.js` files in `src/`.
