# Milky Way 3D Galaxy Visualization: Test Infrastructure & Dual Track Specification

## 1. Overview & Test Philosophy

This document defines the comprehensive opaque-box E2E and unit test infrastructure for the interactive 3D Milky Way Galaxy visualization project (`milky-way-3d`), strictly derived from user requirements and acceptance criteria in `ORIGINAL_REQUEST.md` and `PROJECT.md`.

### Core Testing Tenets:
1. **Opaque-Box Verification**: Tests validate scientific behavior, physical invariants, mathematical transformations, WebGL rendering guarantees, and user experience contracts without coupling to private internal variables.
2. **Progressive Testability & Isolation**: Unit and mathematical tests execute independently in NodeJS/Vitest environments with zero network calls and sub-second execution. E2E tests exercise the integrated application in headless Chromium via Playwright.
3. **Mathematical Ground Truth**: Expected values are authoritatively derived from IAU 1958/SOFA standards, Gaia DR3/Hipparcos astrometry, Planck blackbody radiation theory, Schwarzschild general relativity, and Reid et al. (BeSSeL) galactic dynamics.
4. **Deterministic Pass/Fail Semantics**: All test suites strictly return exit code `0` on clean pass and non-zero on assertion failure, with detailed diagnostic reporting.

---

## 2. Dual Track Testing Framework

The testing architecture follows the **Dual Track Specification** organized into 4 primary testing tiers (with Tier 5 adversarial stress testing):

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DUAL TRACK TEST SUITE                           │
├────────────────────────────────┬───────────────────────────────────────┤
│ TRACK A: Fast Algorithmic,     │ TRACK B: WebGL, DOM & E2E System      │
│ Mathematical & Unit Validation │ Validation                            │
│ (Runner: Vitest / tsx)         │ (Runner: Playwright + Chromium WebGL) │
├────────────────────────────────┼───────────────────────────────────────┤
│ • Tier 1: Feature Coverage     │ • Tier 3: Cross-Feature Interactions  │
│   (>= 5 test cases / feature)  │ • Tier 4: Real-World Scenarios        │
│ • Tier 2: Boundary & Corners   │ • Tier 5: Adversarial Stress &        │
│   (>= 5 test cases / feature)  │   60 FPS Sustained Stability          │
└────────────────────────────────┴───────────────────────────────────────┘
```

---

## 3. Feature Inventory & Tier Mapping (F1 - F20)

Every project feature is explicitly mapped across the four test tiers:

| # | Feature Description | Tier 1: Feature Coverage (>=5 cases) | Tier 2: Boundary & Corner (>=5 cases) | Tier 3: Cross-Feature Combinations | Tier 4: Real-World Scenarios |
|---|---|---|---|---|---|
| **F1** | **Project Tooling & Scaffold** | Package scripts, Vite config, TS strict mode, Three.js peer dependency, module type | Malformed TS types, missing imports, bad paths, circular dependency check, bundle size cap | Build step feeding test runner, production preview server availability | Zero console error on bootstrap in production build |
| **F2** | **Curated Astronomical Catalog** | 6 mandatory landmarks presence (Sgr A*, Sun, Pleiades, Orion, Eta Carinae, Crab), schema validity | Missing fields, empty strings, distance out of bounds, invalid JSON structure, duplicate IDs | Catalog loading triggers HUD marker creation and bookmark UI generation | Complete tour inspecting all 6 landmark metadata cards |
| **F3** | **Celestial Coordinate Transforms** | ICRS -> Galactic -> Galactocentric -> Three.js world coordinates, IAU matrix accuracy | North/South Celestial Poles (Dec ±90°), RA wrap-around (0°/360°), Galactic Center origin, negative coords, distance = 0 | Coordinate changes dynamically update Three.js object positions and camera distances | Round-trip coordinate invariant tests across all catalog objects |
| **F4** | **Dataset Verification CLI** | CLI script execution (`verify-data`), schema checks, exit code 0 on valid data | Invalid catalog schema detection, missing landmark catch, NaN coordinate trap, exit code 1 on bad data | CLI verifying runtime data consumed by Vite bundler | Pre-commit and CI verification pipeline execution |
| **F5** | **200,000+ Star Particle Budget** | Total count $\ge 200,000$ (target 250,000), Float32Array allocations, buffer stride format | Count clamping, zero/negative particle count protection, Float32Array boundary overrun, memory footprint $\le 10$ MB | Generator output directly feeds `THREE.BufferGeometry` attributes | Single-draw-call rendering verification without frame stalls |
| **F6** | **Lin-Shu Density Wave Arms** | 4 major arms (Scutum-Centaurus, Perseus, Sagittarius-Carina, Norma) + Orion Spur equations | Arm boundary radii ($R_{inner}, R_{max}$), extreme pitch angles ($0^\circ, 90^\circ$), dispersion width scaling, negative radii | Particle arm attributes correctly map to vertex shader uniforms | Visual top-down spiral morphology identification |
| **F7** | **Triaxial Bar & Hernquist Bulge** | Bar dimensions ($4.0 \times 1.2 \times 0.6$ kpc at $27^\circ$), Hernquist bulge radius ($r_b = 0.7$ kpc) | Bar rotation limits, origin density singularity protection, $z$-flattening ratios, extreme semi-axes | Bulge and bar particle superposition with nuclear core | Top-down barred structure and edge-on peanut bulge verification |
| **F8** | **Thin & Thick Stellar Disks** | Exponential radial ($R_d = 2.6, 3.6$ kpc), vertical scale heights ($z_0 = 300, 900$ pc), outer flaring | Extreme scale heights, galactic boundary cutoff ($R > 65,000$ ly), midplane $z=0$ stability | Disk stars blending seamlessly with density wave arms | Edge-on view verifying distinct thin vs thick vertical profile |
| **F9** | **Planck Blackbody Shaders** | Tanner Helland polynomial Kelvin to sRGB mapping for Types O, B, A, F, G, K, M | Clamping outside $[1,000\text{ K}, 40,000\text{ K}]$, color channels strictly $\in [0, 1]$, non-NaN output | Vertex shader passing temperature attribute to fragment shader | Visual color contrast between electric blue arms and warm golden core |
| **F10** | **Distance-Attenuated Sizing & Bloom** | Point size attenuation formula, absolute magnitude sizing factor, core bloom additive blend | Clamping point sizes $[1.0, 24.0]$ px, camera distance $\to 0$ singularity, extreme far camera ($160,000$ ly) | Particle sizing reacting dynamically to camera zoom in OrbitControls | High-density nuclear core optical bloom without artifacting |
| **F11** | **Sagittarius A* Event Horizon** | Black sphere geometry at $(0, 0, 0)$, shadow radius $r \approx 2.6 r_s$, black hole center invariant | Zero-radius protection, non-origin position rejection, clipping plane interaction | Event horizon occluding central accretion disk and starfield | Macro to micro zoom directly observing black hole shadow |
| **F12** | **Glowing Accretion Disk Shader** | Keplerian rotation speed, relativistic Doppler beaming asymmetry ($\delta^{3.5}$), temperature gradient | Disk inner/outer radius boundaries ($r_{in}, r_{out}$), view angle edge-on vs face-on, extreme camera angles | Accretion disk rotation animation in render loop | Visual confirmation of asymmetric Doppler brightening on approaching side |
| **F13** | **Gravitational Lensing Effect** | Einstein radius deflection formula, photon ring edge glow, background coordinate distortion | Singularity at center ($r \to 0$), zero-mass limit, field-of-view scaling | Lensing distortion applied to star particles behind Sgr A* | Fly-around Sgr A* observing distorted background starfield |
| **F14** | **6-DOF OrbitControls with Damping** | 360° yaw rotation, polar angle limits, damping factor $0.05$, inertia glide | Polar angle boundary clamping ($0.05 \le \theta \le \pi - 0.05$), zoom limits ($15 \le d \le 160,000$ ly) | Manual drag interruption during CameraFlyTo animation | Seamless zoom from $100,000$ ly macro view to $15$ ly local cluster |
| **F15** | **Camera Fly-To Interpolation** | Quintic smootherstep easing, parabolic arc trajectory, target + position slerp | Zero-duration flight, flight to current position, mid-flight interruption, rapid re-targeting | Flight progress triggers HUD telemetry and landmark selection state | Smooth automated navigation between all 6 landmarks |
| **F16** | **Interactive Scientific HUD** | Glassmorphic overlay rendering name, distances (GC & Sun), coordinates, spectral class, description | Missing metadata resilience, text overflow, window resize responsive reflow | StateStore updates on 3D landmark click immediately refresh HUD card | Real-time verification of HUD card content for each visited landmark |
| **F17** | **Bookmark Selector UI** | Clickable landmark bookmark buttons, active state styling, keyboard accessibility | Rapid successive clicks, clicking active landmark, non-existent landmark ID | Bookmark button click triggers CameraFlyTo transition | Full tour orchestrated via bookmark selector |
| **F18** | **FPS Counter & Diagnostics** | Frame time calculation, FPS averaging over 60/120 frames, particle counter display | Zero delta time protection, large frame spike handling, background tab throttling | FPS counter updating without causing DOM layout thrashing or WebGL stalls | Sustained 60+ FPS verification over 120 consecutive frames |
| **F19** | **E2E Testing Suite (Tiers 1-4)** | Vitest unit test suite, Playwright browser test harness, zero-failure execution | Headless WebGL / SwiftShader emulation, timeout resilience, clean error diagnostics | Automated CI execution running unit + E2E suites | Comprehensive test suite reporting 100% pass across all tiers |
| **F20** | **Adversarial Hardening (Tier 5)** | WebGL context loss recovery (`WEBGL_lose_context`), memory leak detection, extreme zoom stress | Rapid zoom cycling ($15 \leftrightarrow 160,000$ ly), rapid bookmark switching, window resizing | WebGL context restored without page refresh or memory retention | Sustained 60 FPS under continuous 360° rotation for 5 minutes |

---

## 4. Coverage Thresholds & Assertion Rules

### Tier 1: Feature Coverage (Minimum >= 5 test cases per feature)
- Validates happy paths and standard operational specifications for each feature.
- Explicit assertion against authoritative scientific constants and schemas.
- Minimum requirement: 20 features $\times$ 5 tests = **100 Tier 1 test assertions**.

### Tier 2: Boundary & Corner Cases (Minimum >= 5 test cases per feature)
- Validates resilience against physical and computational limits:
  1. **Extreme Zooms**: Camera distances at minimum ($15\text{ ly}$) and maximum ($160,000\text{ ly}$).
  2. **Mathematical Singularities**: Distance $d=0$, division by zero, $\tan(\pi/2)$, $\ln(0)$.
  3. **Angular Wraps**: Right Ascension $0^\circ \leftrightarrow 360^\circ$, Declination at poles $\pm 90^\circ$, polar angle clamping.
  4. **Data Corruptions**: Missing fields, negative temperatures, out-of-gamut sRGB, invalid spectral classes.
  5. **NaN/Infinity Protection**: Strict assertions that all coordinate arrays, buffer attributes, and shader uniforms are finite numbers.
- Minimum requirement: 20 features $\times$ 5 tests = **100 Tier 2 test assertions**.

### Tier 3: Cross-Feature Combinations (Pairwise & Integration Interactions)
- Validates subsystems operating concurrently:
  1. **CameraFlyTo + HUD Card Update**: Verifies active landmark state changes and HUD card renders metadata synchronously during camera flight.
  2. **OrbitControls + Active Fly-To Interruption**: Verifies user mouse/pointer drag cancels automated camera tween cleanly without position snapping.
  3. **WebGL Particle Shaders + Camera Zoom**: Verifies particle point sizing and brightness attenuation smoothly rescale as camera zooms 4 orders of magnitude.
  4. **Bookmark Selector + Rapid Re-targeting**: Verifies switching bookmarks mid-flight smoothly retargets without accumulating runaway animation frames.
  5. **WebGL Context Loss & Restoration**: Verifies simulated `loseContext()` triggers clean re-initialization of geometries, shaders, and particle buffers without memory leaks.

### Tier 4: Real-World Application Scenarios
- End-to-end integration workflows simulating authentic user exploration:
  1. **Complete 6-Landmark Guided Tour**:
     - Begins at Macro Overview ($75,000\text{ ly}$).
     - Fly to **Sagittarius A\***: Inspect event horizon shadow, accretion disk, and HUD card showing $d_\text{GC} = 0\text{ ly}$, $d_\odot = 26,000\text{ ly}$.
     - Fly to **The Sun / Solar System**: Inspect G2V classification, $d_\text{GC} = 26,000\text{ ly}$, elevation $z = 68\text{ ly}$.
     - Fly to **Pleiades Open Cluster**: Inspect B-type stars, $d_\odot = 444\text{ ly}$, reflection nebula metadata.
     - Fly to **Orion Nebula**: Inspect H II region, Trapezium starburst, $d_\odot = 1,344\text{ ly}$.
     - Fly to **Eta Carinae**: Inspect LBV hypergiant, Homunculus nebula, $d_\odot = 7,500\text{ ly}$.
     - Fly to **Crab Nebula**: Inspect pulsar wind remnant, SN 1054 history, $d_\odot = 6,500\text{ ly}$.
     - Return to Macro Overview.
  2. **Sustained 60+ FPS Performance Benchmark**:
     - Measures 120 consecutive frames during continuous orbital rotation.
     - Asserts average frametime $\le 16.6\text{ms}$ ($\ge 60\text{ FPS}$) on hardware WebGL or $\ge 30\text{ FPS}$ on software SwiftShader.
     - Asserts dropped frames ($> 33.3\text{ms}$) $\le 5$.

---

## 5. Test Architecture & Directory Layout

```
c:\Users\Admin\earth\
├── vitest.config.ts              # Vitest runner configuration for unit/integration tests
├── playwright.config.ts          # Playwright configuration for headless WebGL & E2E tests
├── scripts/
│   └── verify-datasets.ts        # Standalone dataset verification CLI (npm run verify-data)
└── tests/
    ├── setup.ts                  # Test environment initialization & WebGL mocks
    ├── unit/
    │   ├── coordinates.spec.ts   # Celestial coordinate transforms & round-trip math (F2, F3, F4)
    │   ├── particles.spec.ts     # 250,000-particle generator, arms, bar, bulge, disks (F5, F6, F7, F8)
    │   ├── shaders.spec.ts       # Tanner Helland Planck blackbody mapping & sizing formulas (F9, F10)
    │   ├── blackhole.spec.ts     # Sgr A* event horizon, Doppler beaming, lensing math (F11, F12, F13)
    │   ├── navigation.spec.ts    # OrbitControls clamping & CameraFlyTo easing curves (F14, F15)
    │   └── hud.spec.ts           # StateStore reactivity, HUD formatting, FPS diagnostics (F16, F17, F18)
    ├── integration/
    │   └── cross-feature.spec.ts # Tier 3 pairwise integration tests (camera + HUD, re-targeting, etc.)
    └── e2e/
        ├── galaxy.spec.ts        # Tier 4 WebGL rendering, 200k particles, shader compilation
        ├── tour.spec.ts          # Tier 4 complete 6-landmark guided tour & HUD verification
        └── performance.spec.ts   # Tier 4 & 5 60 FPS frame timing & WebGL resilience
```

---

## 6. Execution Commands & Exit Code Contract

| Target Suite | Command | Runner | Scope | Expected Exit Code |
|---|---|---|---|---|
| **Unit & Math Suites** | `npm run test:unit` | Vitest | Mathematical transforms, particle algorithms, shader logic, state management | `0` on clean pass |
| **Integration Suite** | `npm run test:int` | Vitest | Tier 3 cross-feature pairwise interactions | `0` on clean pass |
| **All Vitest Tests** | `npm test` | Vitest | All unit + integration test specifications | `0` on clean pass |
| **Dataset CLI** | `npm run verify-data` | tsx | Standalone dataset schema and coordinate integrity assertion | `0` on clean pass |
| **E2E Browser Tests** | `npm run test:e2e` | Playwright | Full WebGL rendering, 6-landmark tour, 60 FPS performance | `0` on clean pass |
| **Complete Full Suite**| `npm run test:all` | Vitest + Playwright | End-to-end execution of all tiers (Tiers 1-4) | `0` on clean pass |

All automated CI pipelines and verification checks require strict exit code `0`. Any assertion failure, unhandled rejection, or WebGL context error triggers exit code `1` with formatted diagnostic traces.
