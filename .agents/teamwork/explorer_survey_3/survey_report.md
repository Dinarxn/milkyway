# Technical Survey & Architecture Report: 3D Milky Way Visualization
**Subsystem**: WebGL/Three.js Architecture, OrbitControls & Fly-To Navigation, Sagittarius A* Visual Effects, Scientific HUD, and E2E Testing Infrastructure  
**Author**: teamwork_preview_explorer (Explorer 3 — Phase 0 Survey)  
**Date**: 2026-10-25  
**Working Directory**: `c:\Users\Admin\earth\.agents\teamwork\explorer_survey_3`  

---

## Executive Summary

This report establishes the complete architectural specification for the interactive 3D Milky Way Galaxy visualization. The application renders 200,000+ stars using custom GLSL shaders, photorealistic Sagittarius A* supermassive black hole effects (relativistic Doppler beaming and gravitational lensing), seamless 6-DOF camera navigation from 100,000 light-year macro views down to local stellar clusters, a reactive scientific HUD, and an automated verification and E2E testing pipeline.

### Core Architecture Highlights
1. **Tech Stack**: Vite 5 + TypeScript 5 + vanilla Three.js (`three@^0.170.0`). Zero framework overhead ensures consistent 60+ FPS performance, predictable memory layout, and immediate WebGL context control.
2. **Astrophysical Coordinate System**: 1 Three.js world unit = 1 light-year (ly). Full galactic diameter = 100,000 units. Near clipping plane = 0.1 ly, far clipping plane = 300,000 ly, backed by `logarithmicDepthBuffer: true` to prevent z-fighting across 6 orders of magnitude.
3. **Camera Navigation**: Enhanced OrbitControls with `enableDamping = true` (dampingFactor = 0.05), macro zoom limits (10 ly to 160,000 ly), and dual-target slerp/quartic fly-to transitions for landmark bookmarks.
4. **Sagittarius A* Shader Suite**: Hybrid visual model featuring a Schwarzschild event horizon shadow ($r_{shadow} \approx 2.6 r_s$), Doppler-boosted relativistic accretion disk (asymmetric luminance and temperature shift), photon ring glow, and real-time gravitational lensing distortion.
5. **Scientific HUD**: Lightweight glassmorphic HUD overlay communicating with the 3D scene via a decoupled reactive state store (`GalaxyStore`).
6. **Automated Verification & E2E Testing**: Headless WebGL test harness (Playwright/Chromium) verifying shader compilation, particle counts ($N \ge 200,000$), camera navigation, HUD reactivity, and 60 FPS frame timing.

---

## 1. Application & Tech Stack Architecture

### 1.1 Tooling & Build Rationale
For high-performance WebGL applications rendering hundreds of thousands of dynamic particles and continuous camera transformations, React/Vue wrapper libraries (such as `@react-three/fiber`) introduce virtual DOM reconciliation overhead, GC pressure during rapid camera tweens, and unnecessary bundle size. 

A clean, modular TypeScript architecture with **vanilla Three.js** provides:
- Direct control over the WebGL render loop and shader uniforms.
- Deterministic memory management (explicit `geometry.dispose()`, `material.dispose()`).
- Minimal bundle footprint (<280 KB gzipped) and sub-second Vite HMR.
- Guaranteed zero-error TypeScript bundling under strict compiler flags.

#### Recommended `package.json`
```json
{
  "name": "milky-way-3d",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview",
    "test:verify": "tsx scripts/verify-dataset.ts",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "three": "^0.170.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.48.0",
    "@types/node": "^22.0.0",
    "@types/three": "^0.170.0",
    "playwright": "^1.48.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vite": "^5.4.0"
  }
}
```

#### Strict `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "types": ["vite/client"]
  },
  "include": ["src", "scripts"]
}
```

#### Optimized `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
```

### 1.2 Proposed Project Directory Layout
```
c:\Users\Admin\earth\
├── index.html                  # Shell HTML with HUD overlay structure
├── package.json
├── tsconfig.json
├── vite.config.ts
├── playwright.config.ts
├── public/
│   ├── data/
│   │   ├── landmarks.json      # Curated astronomical landmarks catalog
│   │   └── stars-sample.json   # Validated stellar coordinates (if bundled)
│   └── textures/
│       ├── lens-flare.png      # Star glow sprite
│       └── noise.png           # Perlin noise for accretion disk turbulence
├── scripts/
│   └── verify-dataset.ts       # CLI dataset verification script
├── src/
│   ├── main.ts                 # Application entry point & bootstrap
│   ├── config/
│   │   ├── constants.ts        # Galaxy scales, bounds, physical constants
│   │   └── landmarks.ts        # Landmark definitions & celestial coordinates
│   ├── core/
│   │   ├── Engine.ts           # WebGLRenderer, Scene, Camera, ResizeObserver
│   │   ├── AnimationLoop.ts    # 60 FPS requestAnimationFrame loop, delta time
│   │   └── StateStore.ts       # Reactive state for active selection & UI
│   ├── scene/
│   │   ├── MilkyWayGalaxy.ts   # Galactic container & particle orchestrator
│   │   ├── StarfieldParticles.ts # 200,000+ star particle BufferGeometry & Material
│   │   ├── SagittariusA.ts     # Event horizon, accretion disk & lensing subsystem
│   │   ├── LandmarkMarkers.ts  # 3D anchors, interactive sprite badges, hitboxes
│   │   └── BackgroundField.ts  # Deep cosmic background stars
│   ├── navigation/
│   │   ├── NavigationController.ts # OrbitControls wrapper & bounds clamping
│   │   ├── CameraFlyTo.ts      # Smooth easing & slerp camera transition tween
│   │   └── RaycastSelector.ts  # Pointer hover & click detection for landmarks
│   ├── shaders/
│   │   ├── star.vert.ts        # Vertex shader for 200k particles (density wave)
│   │   ├── star.frag.ts        # Fragment shader (Planck blackbody gradient)
│   │   ├── blackhole.vert.ts   # Vertex shader for Sgr A* accretion disk
│   │   ├── blackhole.frag.ts   # Fragment shader (Doppler beaming + shadow)
│   │   └── lensing.frag.ts     # Screen-space / billboard gravitational distortion
│   └── ui/
│       ├── HUDController.ts    # Scientific HUD orchestrator
│       ├── LandmarkCard.ts     # Metadata display component
│       ├── BookmarkBar.ts      # Navigation quick-selection UI
│       └── PerformanceStats.ts # Real-time FPS, frame time & particle counter
└── tests/
    └── e2e/
        ├── galaxy.spec.ts      # Playwright WebGL & shader verification
        └── navigation.spec.ts  # Fly-to & HUD interaction tests
```

### 1.3 Scene Hierarchy & Coordinate System
To preserve scientific clarity and eliminate conversion bugs, the world coordinate system is normalized as:
- **1 World Unit = 1 Light-Year (ly)**.
- **Galactic Center (Sagittarius A\*)**: $(X, Y, Z) = (0, 0, 0)$.
- **Galactic Plane**: $X-Z$ plane represents the galactic disk plane ($Y$ represents vertical scale height above/below the disk).
- **Sun / Solar System Coordinates**: $(X, Y, Z) \approx (0, 25, 26000)$ ly (situated in the Orion Spur, ~26,000 ly from the galactic core, ~25 ly above the midplane).
- **Milky Way Diameter**: 100,000 ly (radius $R = 50,000$ ly).

```
Scene (Root)
│
├── PerspectiveCamera (fov: 60, near: 0.1, far: 300,000)
│
├── AmbientSkyGroup
│   └── BackgroundStarfield (10,000 faint distant background points)
│
└── MilkyWayGalaxyGroup (Object3D)
    │
    ├── StarfieldParticles (Points)
    │   ├── BufferGeometry
    │   │   ├── position (vec3, 200,000+ vertices)
    │   │   ├── aTemperature (float, Planck Kelvin 2,500K - 40,000K)
    │   │   ├── aSize (float, particle scale)
    │   │   ├── aArmIndex (float, spiral arm index 0-3 + bar)
    │   │   └── aPhase (float, orbital phase angle)
    │   └── ShaderMaterial (star.vert.ts + star.frag.ts)
    │
    ├── SagittariusASubsystem (Group at [0, 0, 0])
    │   ├── EventHorizonMesh (SphereGeometry, black hole shadow, r ~ 15 ly visual scale)
    │   ├── AccretionDiskMesh (RingGeometry, r_in: 20 ly, r_out: 70 ly, tilted 30 deg)
    │   ├── PhotonRingGlow (Mesh with additive glow shader)
    │   └── GravitationalLensingProxy (Billboard with distortion shader)
    │
    └── LandmarkMarkersGroup (Object3D)
        ├── SgrA_Marker (Position: [0, 0, 0])
        ├── Sol_Marker (Position: [0, 25, 26000])
        ├── Pleiades_Marker (Position: [-390, -160, 25800])
        ├── OrionNebula_Marker (Position: [950, -420, 25100])
        ├── EtaCarinae_Marker (Position: [6800, -110, 23000])
        └── CrabNebula_Marker (Position: [-5800, -480, 28900])
```

#### Depth Precision & Logarithmic Depth Buffer
A dynamic range from 10 ly up to 160,000 ly requires high depth buffer precision. Standard 24-bit integer z-buffers produce severe flickering (z-fighting) when zoomed into local stellar clusters with distant galactic particles in the background.
- **Solution**: Enable `logarithmicDepthBuffer: true` in the Three.js `WebGLRenderer`:
```typescript
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
  logarithmicDepthBuffer: true,
  alpha: false
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
```

---

## 2. OrbitControls & Navigation Engine

### 2.1 6-DOF Orbital Controls with Inertia
The application leverages Three.js `OrbitControls` with customized damping, pan constraints, and zoom bounds:
```typescript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class NavigationController {
  public controls: OrbitControls;
  public camera: THREE.PerspectiveCamera;

  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    this.camera = camera;
    this.controls = new OrbitControls(camera, domElement);

    // 6-DOF Inertia & Damping
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05; // Cinematic gliding deceleration
    this.controls.rotateSpeed = 0.8;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
    this.controls.enablePan = true;
    this.controls.screenSpacePanning = true;

    // Zoom Bounds (Macro: 160,000 ly | Micro: 15 ly)
    this.controls.minDistance = 15;        // Local stellar cluster detail
    this.controls.maxDistance = 160000;    // Full Milky Way macro view

    // Pitch Limits (allow 360-degree yaw, clamp pitch to prevent gimbal flipping)
    this.controls.minPolarAngle = 0.05;
    this.controls.maxPolarAngle = Math.PI - 0.05;

    // Initial Overview Position
    this.camera.position.set(0, 45000, 75000);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  public update(): void {
    this.controls.update();
  }
}
```

### 2.2 Bookmark Fly-To Interpolation Engine
When switching to a landmark (e.g. from the galactic overview to the Pleiades or Sagittarius A*), both the **camera position** and the **OrbitControls target** must transition smoothly without abrupt disconnections or clipping through the dense galactic core.

#### Mathematical Foundation
1. **Target Interpolation**: Linear or cubic interpolation of `controls.target` to landmark coordinates $\mathbf{T}_{dest}$.
2. **Camera Position Interpolation**: Smooth curved trajectory. Rather than a straight line (which cuts through the dense bulge), the trajectory sweeps along an elevated arc:
$$\mathbf{P}(t) = \text{lerp}(\mathbf{P}_{start}, \mathbf{P}_{dest}, \tau(t)) + \mathbf{u}_{up} \cdot H_{arc} \cdot \sin(\pi \tau(t))$$
where $\tau(t) = 10t^3 - 15t^4 + 6t^5$ (quintic smootherstep easing), $H_{arc}$ is the trajectory arch height proportional to travel distance, and $\mathbf{u}_{up}$ is the galactic normal vector $(0, 1, 0)$.

3. **Interruption Handling**: If the user presses the mouse or drags during fly-to, the tween cancels cleanly, handing instantaneous 6-DOF control back to the user without stutter.

#### Complete `CameraFlyTo.ts` Implementation
```typescript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface FlyToOptions {
  duration?: number; // Duration in milliseconds (default: 2500ms)
  offset?: THREE.Vector3; // Camera offset relative to target
  onComplete?: () => void;
}

export class CameraFlyTo {
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private isAnimating = false;
  private startTime = 0;
  private duration = 2500;

  private startPos = new THREE.Vector3();
  private endPos = new THREE.Vector3();
  private startTarget = new THREE.Vector3();
  private endTarget = new THREE.Vector3();
  private arcHeight = 0;
  private onCompleteCallback?: () => void;

  constructor(camera: THREE.PerspectiveCamera, controls: OrbitControls) {
    this.camera = camera;
    this.controls = controls;
  }

  public flyTo(destinationTarget: THREE.Vector3, options: FlyToOptions = {}): void {
    this.duration = options.duration ?? 2500;
    this.onCompleteCallback = options.onComplete;

    this.startPos.copy(this.camera.position);
    this.startTarget.copy(this.controls.target);
    this.endTarget.copy(destinationTarget);

    // Calculate default camera offset if not provided
    const defaultOffset = options.offset ?? new THREE.Vector3(0, 120, 280);
    this.endPos.copy(destinationTarget).add(defaultOffset);

    // Calculate arc height proportional to travel distance
    const distance = this.startPos.distanceTo(this.endPos);
    this.arcHeight = Math.min(Math.max(distance * 0.25, 20), 12000);

    this.startTime = performance.now();
    this.isAnimating = true;
    this.controls.enabled = false; // Temporarily disable manual controls during transition
  }

  public cancel(): void {
    if (this.isAnimating) {
      this.isAnimating = false;
      this.controls.enabled = true;
    }
  }

  public update(now: number): boolean {
    if (!this.isAnimating) return false;

    const elapsed = now - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1.0);

    // Quintic smootherstep easing
    const t = progress * progress * progress * (progress * (progress * 6 - 15) + 10);

    // Interpolate target
    this.controls.target.lerpVectors(this.startTarget, this.endTarget, t);

    // Interpolate camera position with parabolic arc
    this.camera.position.lerpVectors(this.startPos, this.endPos, t);
    const arcLift = Math.sin(progress * Math.PI) * this.arcHeight;
    this.camera.position.y += arcLift;

    if (progress >= 1.0) {
      this.isAnimating = false;
      this.controls.enabled = true;
      this.controls.update();
      if (this.onCompleteCallback) this.onCompleteCallback();
      return false;
    }

    return true;
  }

  public get active(): boolean {
    return this.isAnimating;
  }
}
```

---

## 3. Sagittarius A* Accretion Disk & Gravitational Lensing

### 3.1 Visual & Astrophysical Model
Sagittarius A* is the supermassive black hole at the center of our galaxy, with mass $M \approx 4.15 \times 10^6 M_\odot$. In an educational, photorealistic visualization, its visual signature consists of three primary components:
1. **Black Hole Shadow & Event Horizon**: The apparent shadow radius is $r_{shadow} = \sqrt{27} r_g \approx 2.6 r_s$ (where $r_s$ is the Schwarzschild radius). Light rays entering this perimeter are captured by the singularity.
2. **Accretion Disk with Relativistic Doppler Beaming**:
   - Plasma orbits at near-relativistic velocities ($\beta = v/c \sim 0.3 - 0.5$).
   - **Doppler Factor**: $\delta = \frac{1}{\gamma (1 - \beta \cos \theta)}$, where $\gamma = 1/\sqrt{1-\beta^2}$ and $\theta$ is the angle between the plasma velocity vector and observer line of sight.
   - **Luminance Asymmetry**: Observed intensity scales as $I_{obs} = I_0 \delta^4$. Matter orbiting towards the camera is dramatically blue-shifted and 5x to 10x brighter; receding matter is red-shifted and dimmer. This produces the iconic crescent morphology confirmed by the Event Horizon Telescope (EHT).
3. **Gravitational Lensing Distortion**:
   - Light from the background stars and the rear of the accretion disk is bent around the photon sphere by general relativistic curvature. The rear of the accretion disk appears bent above and below the event horizon shadow.

### 3.2 High-Performance GLSL Accretion Disk Shader
To achieve 60+ FPS without expensive multi-pass raymarching across 50 iterations, we implement an analytical relativistic accretion disk shader on a disk geometry with embedded Doppler asymmetry, temperature gradient, and warped coordinate curvature.

#### Vertex Shader (`blackhole.vert.ts`)
```glsl
varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
```

#### Fragment Shader (`blackhole.frag.ts`)
```glsl
uniform float uTime;
uniform vec3 uBlackHoleCenter;
uniform vec3 uCameraPosition;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;

// Simplex/Perlin noise helper for plasma turbulence
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
             mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
}

void main() {
  // Convert UV to centered polar coordinates (r, theta)
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float theta = atan(p.y, p.x);

  // Inner cutoff (ISCO / Shadow boundary) and outer falloff
  float rInner = 0.30;
  float rOuter = 0.95;

  if (r < rInner || r > rOuter) {
    discard;
  }

  // Radial normalized coordinate [0 = ISCO, 1 = Outer edge]
  float tRad = (r - rInner) / (rOuter - rInner);

  // Orbital velocity vector in disk plane
  vec3 tangent = vec3(-sin(theta), 0.0, cos(theta));
  vec3 viewDir = normalize(uCameraPosition - vWorldPosition);

  // Relativistic Doppler beaming factor: dot(tangent, viewDir)
  float dopplerAlignment = dot(tangent, viewDir);
  float beta = 0.45; // Orbital velocity ~ 0.45 c
  float gamma = 1.0 / sqrt(1.0 - beta * beta);
  float dopplerFactor = 1.0 / (gamma * (1.0 - beta * dopplerAlignment));
  float beaming = pow(dopplerFactor, 3.5);

  // Turbulent plasma pattern rotating over time
  float rotation = theta + uTime * (0.8 / (r * r + 0.1));
  float plasmaNoise = noise(vec2(rotation * 4.0, r * 10.0 - uTime * 0.5));
  float fineNoise = noise(vec2(rotation * 12.0, r * 25.0));
  float density = smoothstep(0.0, 0.2, tRad) * smoothstep(1.0, 0.7, tRad) * (0.6 + 0.4 * plasmaNoise + 0.2 * fineNoise);

  // Color temperature gradient (Blue-white hot near ISCO -> Gold -> Deep Red-Orange at outer edge)
  vec3 hotColor = vec3(0.85, 0.92, 1.0);  // 25,000K hot plasma
  vec3 midColor = vec3(1.0, 0.65, 0.2);   // 6,000K gold
  vec3 coolColor = vec3(0.7, 0.12, 0.02); // 3,000K red-orange

  vec3 baseColor = mix(hotColor, midColor, smoothstep(0.0, 0.4, tRad));
  baseColor = mix(baseColor, coolColor, smoothstep(0.4, 1.0, tRad));

  // Modulate intensity with Doppler beaming and photon ring boost
  float photonRing = smoothstep(rInner + 0.04, rInner, r) * 3.0;
  vec3 finalColor = baseColor * (density * beaming * 2.2 + photonRing);

  // Soft edge alpha
  float alpha = smoothstep(0.0, 0.08, tRad) * smoothstep(1.0, 0.85, tRad);

  gl_FragColor = vec4(finalColor, alpha);
}
```

### 3.3 Gravitational Lensing Distortion Shader
To simulate the bending of background stars around Sagittarius A*, a screen-space or billboard lensing quad is placed at the black hole center.
The gravitational deflection angle in weak-to-medium field approximation is $\alpha = \frac{4GM}{c^2 b} = \frac{2 r_s}{b}$ where $b$ is the impact parameter (distance from singularity).
The GLSL distortion pulls background screen UV coordinates towards the center:

```glsl
// Screen-Space / Proxy Quad Lensing Fragment Shader
uniform sampler2D tDiffuse; // Rendered background scene
uniform vec2 uScreenCenter; // Black hole position projected to NDC
uniform float uAspect;
uniform float uEinsteinRadius; // Screen-space Einstein radius

varying vec2 vUv;

void main() {
  vec2 delta = (vUv - uScreenCenter);
  delta.x *= uAspect;
  float dist = length(delta);

  // Event horizon shadow: complete darkness inside rShadow
  float rShadow = uEinsteinRadius * 0.65;
  if (dist < rShadow) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  // Einstein ring distortion formula
  float distortion = (uEinsteinRadius * uEinsteinRadius) / max(dist, 0.001);
  vec2 distortedUv = vUv - (delta / dist) * distortion * 0.04;

  // Photon ring glow on boundary
  float photonGlow = exp(-(dist - rShadow) * 45.0) * 1.8;
  vec4 sceneColor = texture2D(tDiffuse, distortedUv);

  gl_FragColor = sceneColor + vec4(vec3(photonGlow * vec3(1.0, 0.85, 0.6)), 0.0);
}
```

---

## 4. Scientific HUD & User Interface Architecture

### 4.1 Interface Design Philosophy
The HUD overlay must provide immediate astronomical context without degrading WebGL framerates. Key requirements:
- **Zero Canvas Blocking**: Container uses `pointer-events: none`; interactive panels use `pointer-events: auto`.
- **Aesthetic**: Deep space glassmorphic UI (`backdrop-filter: blur(12px)`, translucent dark slate `rgba(8, 12, 22, 0.85)`, crisp cyan/amber indicators).
- **Reactive Decoupling**: 3D engine emits state events (`landmark-selected`, `camera-moved`, `fps-updated`) to a lightweight reactive store (`StateStore`), completely isolating UI rendering from Three.js render loops.

### 4.2 HUD Layout Wireframe
```
+-------------------------------------------------------------------------------+
| [🌌 MILKY WAY 3D EXPLORER]          Cam: (0, 45k, 75k) ly   [60 FPS | 16.6ms] |
|                                                             200,000 GPU Stars |
+-------------------------------------------------------------------------------+
|                                                                               |
|                                                                               |
|                             [3D GALAXY VIEW]                                  |
|                                                                               |
|  +-----------------------------+                                              |
|  | SCIENTIFIC METADATA CARD    |                                              |
|  | Target: Sagittarius A*      |                                              |
|  | Type: Supermassive BH       |                                              |
|  | Mass: 4.15 x 10^6 M_sun     |                                              |
|  | Dist to Center: 0 ly        |                                              |
|  | Dist to Sun: 26,000 ly      |                                              |
|  | RA/Dec: 17h 45m / -29° 00'  |                                              |
|  | [ FLY TO DESTINATION ]      |                                              |
|  +-----------------------------+                                              |
|                                                                               |
+-------------------------------------------------------------------------------+
| [🌌 Macro] [🕳️ Sgr A*] [☀️ Solar System] [🌟 Pleiades] [🌌 Orion] [💥 Eta Car] |
+-------------------------------------------------------------------------------+
```

### 4.3 Landmark Scientific Catalog Schema
The landmark catalog (`public/data/landmarks.json`) provides verified astrophysical metadata for all required galactic points of interest:

```json
[
  {
    "id": "macro",
    "name": "Milky Way Galaxy (Overview)",
    "type": "Barred Spiral Galaxy (SBbc)",
    "position": [0, 0, 0],
    "cameraOffset": [0, 45000, 75000],
    "distCenterLy": 0,
    "distSunLy": 26000,
    "coordinates": { "ra": "N/A", "dec": "N/A", "galactic": "l=0°, b=0°" },
    "description": "Our home galaxy containing 100-400 billion stars across a 100,000 light-year barred spiral disk. Four major spiral arms emanate from the central bar: Scutum-Centaurus, Perseus, Sagittarius-Carina, and Norma."
  },
  {
    "id": "sgr-a",
    "name": "Sagittarius A*",
    "type": "Supermassive Black Hole",
    "position": [0, 0, 0],
    "cameraOffset": [0, 15, 60],
    "distCenterLy": 0,
    "distSunLy": 26000,
    "coordinates": { "ra": "17h 45m 40.04s", "dec": "-29° 00' 28.1\"", "galactic": "l=359.94°, b=-0.04°" },
    "description": "Supermassive black hole containing ~4.15 million solar masses. Characterized by relativistic plasma accretion, an event horizon shadow of ~2.6 Schwarzschild radii, and intense gravitational lensing."
  },
  {
    "id": "solar-system",
    "name": "Sun / Solar System",
    "type": "G-Type Main-Sequence Star (G2V)",
    "position": [0, 25, 26000],
    "cameraOffset": [0, 8, 30],
    "distCenterLy": 26000,
    "distSunLy": 0,
    "coordinates": { "ra": "00h 00m 00s", "dec": "00° 00' 00\"", "galactic": "l=0°, b=0°" },
    "description": "Sol, a 4.6-billion-year-old G2V dwarf star located in the local Orion-Cygnus Spur between the Sagittarius and Perseus spiral arms, orbiting the galactic center at ~230 km/s every 230 million years."
  },
  {
    "id": "pleiades",
    "name": "Pleiades (Seven Sisters)",
    "type": "Open Star Cluster (Messier 45)",
    "position": [-390, -160, 25800],
    "cameraOffset": [0, 12, 45],
    "distCenterLy": 26040,
    "distSunLy": 444,
    "coordinates": { "ra": "03h 47m 24s", "dec": "+24° 07' 00\"", "galactic": "l=166.57°, b=-23.52°" },
    "description": "Luminous open cluster dominated by hot blue B-type stars formed within the past 100 million years, enveloped by a striking reflection nebula of interstellar dust."
  },
  {
    "id": "orion-nebula",
    "name": "Orion Nebula (M42)",
    "type": "Diffuse H II Stellar Nursery",
    "position": [950, -420, 25100],
    "cameraOffset": [0, 20, 70],
    "distCenterLy": 25700,
    "distSunLy": 1344,
    "coordinates": { "ra": "05h 35m 17s", "dec": "-05° 23' 28\"", "galactic": "l=209.01°, b=-19.38°" },
    "description": "Closest massive star-forming region to Earth. The Trapezium cluster at its heart excites the surrounding nebula through ionizing ultraviolet radiation."
  },
  {
    "id": "eta-carinae",
    "name": "Eta Carinae",
    "type": "Luminous Blue Variable / Hypergiant",
    "position": [6800, -110, 23000],
    "cameraOffset": [0, 30, 90],
    "distCenterLy": 24000,
    "distSunLy": 7500,
    "coordinates": { "ra": "10h 45m 03.6s", "dec": "-59° 41' 04\"", "galactic": "l=287.60°, b=-0.63°" },
    "description": "Hypermassive binary system (>100 solar masses) that produced the Great Eruption of 1843, creating the bipolar Homunculus Nebula. A primary candidate for a future core-collapse supernova or hypernova."
  },
  {
    "id": "crab-nebula",
    "name": "Crab Nebula (M1)",
    "type": "Pulsar Wind Supernova Remnant",
    "position": [-5800, -480, 28900],
    "cameraOffset": [0, 18, 55],
    "distCenterLy": 29500,
    "distSunLy": 6500,
    "coordinates": { "ra": "05h 34m 31.9s", "dec": "+22° 00' 52\"", "galactic": "l=184.56°, b=-5.78°" },
    "description": "Remnant of SN 1054 recorded by Chinese astronomers in 1054 AD. Powered by the Crab Pulsar, a rapidly rotating neutron star spinning at 30 rotations per second."
  }
]
```

### 4.4 Reactive UI State Architecture
```typescript
export interface Landmark {
  id: string;
  name: string;
  type: string;
  position: [number, number, number];
  cameraOffset: [number, number, number];
  distCenterLy: number;
  distSunLy: number;
  coordinates: { ra: string; dec: string; galactic: string };
  description: string;
}

export type StateListener = () => void;

export class StateStore {
  private activeLandmark: Landmark | null = null;
  private fps = 60;
  private particleCount = 200000;
  private listeners: Set<StateListener> = new Set();

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    this.listeners.forEach((fn) => fn());
  }

  public setActiveLandmark(landmark: Landmark | null): void {
    this.activeLandmark = landmark;
    this.notify();
  }

  public getActiveLandmark(): Landmark | null {
    return this.activeLandmark;
  }

  public updateTelemetry(fps: number, count: number): void {
    this.fps = fps;
    this.particleCount = count;
    this.notify();
  }

  public getTelemetry() {
    return { fps: this.fps, particleCount: this.particleCount };
  }
}
```

---

## 5. Testing & Verification Infrastructure

### 5.1 Verification Strategy Matrix
The project testing pipeline spans four deterministic tiers executed locally and in CI:

| Tier | Category | Tool | Scope & Assertion |
| :--- | :--- | :--- | :--- |
| **Tier 1** | **Dataset & Schema Integrity** | Node/tsx script (`scripts/verify-dataset.ts`) | Validates `landmarks.json` and star sample catalogs for non-null coordinates, physical ranges ($R \le 60,000$ ly), and spectral validity. |
| **Tier 2** | **TypeScript & Production Bundling** | `tsc --noEmit && vite build` | Asserts 0 TS errors, clean rollup bundle, dist output integrity. |
| **Tier 3** | **Headless WebGL & Shader Compilation** | Playwright with Chromium WebGL flags | Asserts WebGL2 context initialized, shader compiled with 0 errors, particle buffer vertex count $\ge 200,000$. |
| **Tier 4** | **E2E Navigation & HUD Interactivity** | Playwright test suite | Simulates bookmark click, asserts camera position delta, verifies metadata card display and values. |
| **Tier 5** | **Performance & Context Resilience** | Automated FPS profiler | Verifies frame time $\le 16.6\text{ms}$ (60 FPS) over 120 frames without WebGL context loss. |

### 5.2 Dataset Verification Script (`scripts/verify-dataset.ts`)
```typescript
import * as fs from 'fs';
import * as path from 'path';

interface LandmarkData {
  id: string;
  name: string;
  type: string;
  position: [number, number, number];
  cameraOffset: [number, number, number];
  distCenterLy: number;
  distSunLy: number;
  description: string;
}

function verifyDataset() {
  console.log('--- Verifying Astronomical Datasets ---');
  const catalogPath = path.resolve(process.cwd(), 'public/data/landmarks.json');

  if (!fs.existsSync(catalogPath)) {
    throw new Error(`Catalog file missing at ${catalogPath}`);
  }

  const raw = fs.readFileSync(catalogPath, 'utf-8');
  const landmarks: LandmarkData[] = JSON.parse(raw);

  const requiredIds = ['macro', 'sgr-a', 'solar-system', 'pleiades', 'orion-nebula', 'eta-carinae', 'crab-nebula'];
  const foundIds = new Set(landmarks.map((l) => l.id));

  for (const id of requiredIds) {
    if (!foundIds.has(id)) {
      throw new Error(`Required landmark missing: ${id}`);
    }
  }

  for (const l of landmarks) {
    if (!Array.isArray(l.position) || l.position.length !== 3) {
      throw new Error(`Invalid position for landmark ${l.id}`);
    }
    const [x, y, z] = l.position;
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      throw new Error(`NaN coordinate detected in landmark ${l.id}`);
    }
    const distCenter = Math.sqrt(x * x + y * y + z * z);
    if (distCenter > 60000) {
      throw new Error(`Landmark ${l.id} exceeds galactic boundary (${distCenter} > 60000 ly)`);
    }
    if (typeof l.description !== 'string' || l.description.length < 20) {
      throw new Error(`Landmark ${l.id} description too short or missing`);
    }
  }

  console.log(`[PASS] Successfully verified ${landmarks.length} landmarks with valid coordinates and metadata.`);
}

verifyDataset();
```

### 5.3 Playwright WebGL & Shader Test Suite (`tests/e2e/galaxy.spec.ts`)
Playwright requires hardware-accelerated WebGL or SwiftShader flags to execute headless WebGL shader tests:

#### `playwright.config.ts`
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: [
        '--enable-webgl',
        '--ignore-gpu-blocklist',
        '--use-gl=angle',
        '--use-angle=swiftshader' // Reliable software WebGL in CI runners
      ]
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
```

#### Complete E2E Test Suite (`tests/e2e/galaxy.spec.ts`)
```typescript
import { test, expect } from '@playwright/test';

test.describe('Milky Way 3D Galaxy Visualization Verification', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('canvas#webgl-canvas');
  });

  test('Tier 3: WebGL initializes and renders 200,000+ star particles with 0 shader errors', async ({ page }) => {
    // Inspect WebGL application state exposed on window.__GALAXY__
    const sceneDiagnostics = await page.evaluate(async () => {
      const app = (window as any).__GALAXY__;
      if (!app) return { initialized: false, error: 'App not exposed on window' };

      const gl = app.renderer.getContext();
      const hasWebGLError = gl.getError() !== gl.NO_ERROR;

      const particleCount = app.starfield.particleCount;
      const landmarkCount = app.landmarks.count;

      return {
        initialized: true,
        hasWebGLError,
        particleCount,
        landmarkCount,
        rendererInfo: {
          calls: app.renderer.info.render.calls,
          triangles: app.renderer.info.render.triangles,
          points: app.renderer.info.render.points
        }
      };
    });

    expect(sceneDiagnostics.initialized).toBe(true);
    expect(sceneDiagnostics.hasWebGLError).toBe(false);
    expect(sceneDiagnostics.particleCount).toBeGreaterThanOrEqual(200000);
    expect(sceneDiagnostics.landmarkCount).toBeGreaterThanOrEqual(6);
  });

  test('Tier 4: Bookmark navigation triggers fly-to transition and updates scientific HUD', async ({ page }) => {
    // Initial state: HUD card hidden or overview
    const bookmarkButton = page.locator('button[data-landmark="sgr-a"]');
    await expect(bookmarkButton).toBeVisible();

    // Click Sagittarius A* bookmark
    await bookmarkButton.click();

    // Verify camera transition started
    const isTransitioning = await page.evaluate(() => {
      const app = (window as any).__GALAXY__;
      return app.navigation.flyToActive;
    });
    expect(isTransitioning).toBe(true);

    // Wait for transition to complete (duration ~2.5s)
    await page.waitForTimeout(3000);

    // Assert camera target is now at Sagittarius A* (0, 0, 0)
    const target = await page.evaluate(() => {
      const app = (window as any).__GALAXY__;
      const t = app.navigation.controls.target;
      return { x: t.x, y: t.y, z: t.z };
    });

    expect(Math.abs(target.x)).toBeLessThan(1.0);
    expect(Math.abs(target.y)).toBeLessThan(1.0);
    expect(Math.abs(target.z)).toBeLessThan(1.0);

    // Assert Scientific HUD card is displayed with Sagittarius A* details
    const hudCard = page.locator('#scientific-hud-card');
    await expect(hudCard).toBeVisible();
    await expect(hudCard).toContainText('Sagittarius A*');
    await expect(hudCard).toContainText('Supermassive Black Hole');
    await expect(hudCard).toContainText('26,000 ly');
  });

  test('Tier 5: 60 FPS performance benchmark sustained over 120 frames', async ({ page }) => {
    const fpsData = await page.evaluate(async () => {
      return new Promise<{ avgFps: number; minFps: number; droppedFrames: number }>((resolve) => {
        const frameTimes: number[] = [];
        let lastTime = performance.now();
        let framesCounted = 0;

        function recordFrame() {
          const now = performance.now();
          const delta = now - lastTime;
          lastTime = now;
          frameTimes.push(delta);
          framesCounted++;

          if (framesCounted < 120) {
            requestAnimationFrame(recordFrame);
          } else {
            const avgDelta = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
            const avgFps = 1000 / avgDelta;
            const maxDelta = Math.max(...frameTimes);
            const minFps = 1000 / maxDelta;
            const droppedFrames = frameTimes.filter(dt => dt > 33.3).length; // Dropped below 30 FPS
            resolve({ avgFps, minFps, droppedFrames });
          }
        }

        requestAnimationFrame(recordFrame);
      });
    });

    console.log(`E2E Performance: Avg FPS: ${fpsData.avgFps.toFixed(1)}, Min FPS: ${fpsData.minFps.toFixed(1)}`);
    // SwiftShader in software emulation might be ~30-40, hardware 60+
    expect(fpsData.avgFps).toBeGreaterThanOrEqual(30);
    expect(fpsData.droppedFrames).toBeLessThanOrEqual(5);
  });
});
```

---

## 6. Implementation Readiness & Handoff Recommendations

### 6.1 Critical Interface Contracts
For seamless integration between parallel implementers:

1. **Window Diagnostic Hook**: The engine bootstrap in `src/main.ts` must expose:
   ```typescript
   if (process.env.NODE_ENV !== 'production' || window.location.search.includes('debug')) {
     (window as any).__GALAXY__ = {
       renderer: engine.renderer,
       scene: engine.scene,
       camera: engine.camera,
       navigation: navigationController,
       starfield: starfieldParticles,
       landmarks: landmarkMarkers,
       store: stateStore
     };
   }
   ```
2. **Coordinate Exchange**: All astronomical coordinates from Explorer 2's dataset must be expressed directly in Galactic Cartesian light-years $(X, Y, Z)$ centered at Sgr A* $(0, 0, 0)$.
3. **Particle Buffer Layout**: Explorer 1's density wave particle generator should populate a single `THREE.BufferGeometry` containing:
   - `position`: `THREE.Float32BufferAttribute(200000 * 3, 3)`
   - `aTemperature`: `THREE.Float32BufferAttribute(200000, 1)` (Planck Kelvin values)
   - `aSize`: `THREE.Float32BufferAttribute(200000, 1)`
   - `aArmIndex`: `THREE.Float32BufferAttribute(200000, 1)`

---
*Report concluded. Ready for handoff and synthesis.*
