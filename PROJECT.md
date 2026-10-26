# Project: Photorealistic 3D Milky Way Galaxy Visualization

## Architecture
- **Rendering Engine**: Three.js (`three@^0.170.0`) with Vite 5 and strict TypeScript (`strict: true`).
- **Coordinate Space**: 1 Three.js world unit = 1 light-year ($1\text{ unit} = 1\text{ ly}$).
- **Depth Buffer**: Logarithmic depth buffer (`logarithmicDepthBuffer: true`, near = 0.1 ly, far = 300,000 ly) to support seamless rendering from 15 ly micro-view to 160,000 ly macro-view without z-fighting.
- **Galactic Orientation**: Galactic disk lies in the Three.js $X-Z$ plane; North Galactic Pole points along $+Y$ (`camera.up.set(0, 1, 0)`). Galactic Center (Sagittarius A*) resides at the origin $(0, 0, 0)$.
- **Particle Architecture**: Single-draw-call `THREE.BufferGeometry` with 250,000 stars (32 bytes/vertex, 8.0 MB VRAM footprint) rendered using custom GLSL shaders with Tanner Helland analytical Planck blackbody radiation polynomial color grading.
- **Relativistic Subsystem**: Sagittarius A* black hole with event horizon shadow, Keplerian accretion disk with relativistic Doppler beaming, and gravitational lensing shader with photon ring glow.
- **Navigation Engine**: 6-DOF OrbitControls with inertia damping and quintic smootherstep parabolic arc `CameraFlyTo` engine interpolating both position and look-at target.
- **Scientific HUD**: Reactive glassmorphic UI displaying real-time astronomical metadata cards, landmark bookmark selector, and live FPS diagnostics.
- **Execution Mode**: 100% self-contained and offline; bundled JSON landmarks and deterministic procedural particle generation.

---

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | Project Tooling & Scaffold | Vite + TypeScript + Three.js build pipeline with zero TS/bundling errors | M1 | ORIGINAL_REQUEST §R4 |
| F2 | Curated Astronomical Landmark Catalog | Bundled JSON data for Sgr A*, Sun/Solar System, Pleiades, Orion Nebula, Eta Carinae, Crab Nebula with physical metadata | M1 | ORIGINAL_REQUEST §R2 |
| F3 | Celestial Coordinate Transformations | IAU SOFA matrix conversion from ICRS (RA, Dec, d) to Galactocentric Cartesian XYZ | M1 | ORIGINAL_REQUEST §R2 |
| F4 | Dataset Verification CLI | Standalone verification script (`scripts/verify-datasets.ts` / `npm run verify-data`) validating coordinates, bounds, and schema | M1 | ORIGINAL_REQUEST Acceptance Criteria |
| F5 | 200,000+ Star Particle Budget | Deterministic generator generating 250,000 stars partitioned across bulge, bar, arms, thin and thick disks | M2 | ORIGINAL_REQUEST §R1 |
| F6 | Lin-Shu Density Wave Spiral Arms | Logarithmic spiral modeling for 4 major arms (Scutum-Centaurus, Perseus, Sagittarius-Carina, Norma) + Orion Spur using Reid et al. BeSSeL VLBI parameters | M2 | ORIGINAL_REQUEST §R1 |
| F7 | Triaxial Bar & Hernquist Bulge | Prolate Gaussian bar ($4.0 \times 1.2 \times 0.6$ kpc at $27^\circ$) and Hernquist spherical bulge ($r_b = 0.7$ kpc) | M2 | ORIGINAL_REQUEST §R1 |
| F8 | Thin & Thick Stellar Disks | Exponential radial/vertical disk profiles ($z_0 = 300$ pc thin, $z_0 = 900$ pc thick) ensuring distinct edge-on and top-down morphology | M2 | ORIGINAL_REQUEST §R1, Acceptance Criteria |
| F9 | Planck Blackbody GLSL Shaders | Custom GLSL vertex & fragment shaders with Tanner Helland analytical polynomial mapping stellar temperatures (O, B, A, F, G, K, M: 2,500K - 35,000K) to sRGB | M2 | ORIGINAL_REQUEST §R2 |
| F10 | Distance-Attenuated Sizing & Bloom | Vertex shader point attenuation with clamp bounds and additive blending for natural core optical bloom | M2 | ORIGINAL_REQUEST §R1, §R4 |
| F11 | Sagittarius A* Event Horizon | Central black sphere modeling event horizon shadow ($r \approx 2.6 r_s$) at origin $(0, 0, 0)$ | M3 | ORIGINAL_REQUEST §R2 |
| F12 | Glowing Accretion Disk Shader | Relativistic Doppler beaming shader with Keplerian rotation and $\delta^{3.5}$ intensity asymmetry | M3 | ORIGINAL_REQUEST §R2, Acceptance Criteria |
| F13 | Gravitational Lensing Effect | Shader pulling background starfield coordinates inward with photon ring edge glow | M3 | ORIGINAL_REQUEST §R2, Acceptance Criteria |
| F14 | 6-DOF OrbitControls with Damping | 360-degree rotation with inertia damping (`dampingFactor: 0.05`) and zoom limits ($15\text{ ly}$ to $160,000\text{ ly}$) | M4 | ORIGINAL_REQUEST §R3, Acceptance Criteria |
| F15 | Camera Fly-To Landmark Interpolation | Parabolic arc smootherstep camera flight interpolating position and look-at target to clicked landmark | M4 | ORIGINAL_REQUEST §R3, Acceptance Criteria |
| F16 | Interactive Scientific HUD | Glassmorphic HUD displaying landmark name, distances (GC and Sun), celestial coordinates, spectral class, and description | M4 | ORIGINAL_REQUEST §R3, Acceptance Criteria |
| F17 | Landmark Bookmark Selector UI | Interactive bookmark buttons triggering smooth fly-to navigation for all required landmarks | M4 | ORIGINAL_REQUEST §R3, Acceptance Criteria |
| F18 | FPS Counter & Performance Diagnostics | Real-time FPS monitor validating 60+ FPS performance | M4 | ORIGINAL_REQUEST §R4 |
| F19 | E2E Testing Suite (Tiers 1-4) | Comprehensive test suite verifying datasets, WebGL shader compilation, particle counts, camera navigation, and HUD cards | Final Milestone (Phase 1) | ORIGINAL_REQUEST Acceptance Criteria |
| F20 | Adversarial Hardening (Tier 5) | Adversarial stress testing for extreme zoom, WebGL context loss resilience, memory leak prevention, and 60 FPS stability | Final Milestone (Phase 2) | Project Pattern Tier 5 |

---

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Scaffold, Astronomical Data & Verification | Project build setup, `coordinates.ts`, `landmarks.json`, and `verify-datasets.ts` CLI | none | DONE |
| M2 | 200,000+ Star Particle System & GLSL Shaders | `GalaxyGenerator.ts`, custom vertex & fragment shaders with Planck colors, spiral arms, bulge, bar, and dual disks | M1 | DONE |
| M3 | Sagittarius A* Relativistic Subsystem | Event horizon sphere, relativistic Doppler beaming accretion disk shader, and gravitational lensing effect | M1 | DONE |
| M4 | Navigation Controls, Camera Fly-To & Scientific HUD | OrbitControls with damping, `CameraFlyTo.ts` parabolic smootherstep engine, glassmorphic HUD and bookmark UI | M1, M2, M3 | IN_PROGRESS (worker: 2b338386-cb78-48af-91cf-22a52fe51ae2) |
| M5 | Final Milestone: E2E Pass & Adversarial Hardening | 100% pass of E2E test suite (Tiers 1-4), Tier 5 adversarial stress testing, and forensic audit verification | M1, M2, M3, M4 | PLANNED |

---

## Interface Contracts

### Data & Coordinate Contracts (`src/types/galaxy.ts`)
```typescript
export interface Landmark {
  id: string;
  name: string;
  category: 'supermassive_black_hole' | 'star_system' | 'open_cluster' | 'emission_nebula' | 'supernova_remnant' | 'stellar_system';
  equatorial: {
    ra: string;      // e.g. "17h 45m 40.04s"
    dec: string;     // e.g. "-29° 00' 28.1\""
    raDeg: number;
    decDeg: number;
    distanceLy: number;
  };
  galactic: {
    lDeg: number;
    bDeg: number;
  };
  cartesian: {
    x: number;       // Three.js world space coordinates (ly)
    y: number;       // NGP (+Y)
    z: number;
  };
  distanceFromGC: number;   // ly
  distanceFromSun: number;  // ly
  spectralType?: string;
  temperatureK?: number;
  apparentMagnitude?: number;
  absoluteMagnitude?: number;
  description: string;
  cameraDistance: number;   // Recommended fly-to viewing distance in ly
}

export interface GalaxyParticleBuffer {
  positions: Float32Array;   // [x, y, z] * count
  temperatures: Float32Array;// [K] * count
  sizes: Float32Array;       // [size] * count
  arms: Float32Array;        // [armIndex] * count
  count: number;             // >= 200,000 (target: 250,000)
}
```

### Shader Uniforms Contract (`src/shaders/`)
```typescript
export interface StarShaderUniforms {
  uTime: { value: number };
  uPixelRatio: { value: number };
  uSizeScale: { value: number };
  uCoreBloom: { value: number };
}

export interface BlackHoleShaderUniforms {
  uTime: { value: number };
  uInnerRadius: { value: number };
  uOuterRadius: { value: number };
  uSpin: { value: number };
  uLensingStrength: { value: number };
}
```

### Camera Fly-To Contract (`src/camera/CameraFlyTo.ts`)
```typescript
export interface FlyToOptions {
  durationMs?: number;
  arcHeight?: number;
  onComplete?: () => void;
}

export interface ICameraController {
  flyTo(targetPosition: THREE.Vector3, viewDistance: number, options?: FlyToOptions): void;
  update(delta: number): void;
  isFlying(): boolean;
}
```

---

## Code Layout
```
c:\Users\Admin\earth\
├── index.html                   # Entry HTML with canvas & HUD mounting points
├── package.json                 # Dependencies, build scripts, verify-data script, test scripts
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
├── scripts/
│   └── verify-datasets.ts       # Standalone CLI script asserting catalog schema & physical bounds
├── src/
│   ├── main.ts                  # Application entry point, render loop, event orchestration
│   ├── types/
│   │   └── galaxy.ts            # Core TypeScript interfaces & contracts
│   ├── data/
│   │   ├── coordinates.ts       # ICRS -> Galactic -> Three.js world coordinate transform engine
│   │   └── landmarks.json       # Master curated astronomical catalog (7 verified landmarks)
│   ├── galaxy/
│   │   ├── GalaxyGenerator.ts   # 250,000-particle Lin-Shu density wave procedural generator
│   │   └── GalaxyView.ts        # THREE.Points mesh wrapper and animation update
│   ├── shaders/
│   │   ├── star.vert.ts         # Vertex shader with distance attenuation & rotation
│   │   ├── star.frag.ts         # Fragment shader with Tanner Helland Planck blackbody polynomial
│   │   ├── blackhole.frag.ts    # Sagittarius A* accretion disk shader with Doppler beaming
│   │   └── lensing.frag.ts      # Gravitational lensing distortion shader
│   ├── objects/
│   │   ├── SagittariusA.ts      # Event horizon sphere, accretion disk, and lensing billboard
│   │   └── LandmarkMarkers.ts   # Interactive 3D landmark beacons/sprites
│   ├── camera/
│   │   └── CameraFlyTo.ts       # Parabolic arc smootherstep camera & target interpolator
│   └── ui/
│       ├── HUD.ts               # Glassmorphic overlay, scientific data card & bookmark controls
│       ├── StateStore.ts        # Reactive state container for selected landmark and camera state
│       └── styles.css           # Glassmorphism, animations, responsive layout styling
└── tests/
    └── e2e/
        ├── galaxy.spec.ts       # Playwright E2E test suite covering Tiers 1-4
        └── playwright.config.ts # Playwright runner configuration
```
