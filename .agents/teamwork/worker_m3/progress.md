# Progress — Milestone 3: Sagittarius A* Relativistic Subsystem

Last visited: 2026-10-25T16:20:00Z

## Status: COMPLETE

### Completed Subtasks
1. Implemented `src/shaders/blackhole.frag.ts`:
   - Relativistic Doppler beaming accretion disk fragment shader (`blackHoleFragmentShader` and `blackHoleVertexShader`).
   - Keplerian differential orbital velocity profile $v(r) \propto 1 / \sqrt{r}$ and angular velocity $\Omega(r) \propto r^{-1.5}$.
   - Relativistic Doppler factor $\delta = \frac{1}{\gamma(1 - \beta \cos \theta)}$ with intensity scaling $\delta^{3.5}$.
   - Relativistic chromatic shift: high-temperature blue-white shift on approaching side ($\delta > 1$), redshifted dark orange-red on receding side ($\delta < 1$).
   - Inner shadow radius cut-off at ISCO ($r_{isco} \approx 3 r_s$) down to photon orbit shadow ($r_{shadow} \approx 2.6 r_s$) with fragment discard.
2. Implemented `src/shaders/lensing.frag.ts`:
   - Gravitational lensing distortion shader (`lensingFragmentShader` and `lensingVertexShader`).
   - Tangential Einstein ring deflection pulling background coordinates inward proportional to $(r_E^2 / r)$.
   - Razor-sharp photon ring emission at $r \approx 2.6 r_s$.
   - Einstein ring emission peak and secondary warped relativistic arcs.
3. Implemented `src/objects/SagittariusA.ts`:
   - Event horizon central sphere with absolute black material (`THREE.MeshBasicMaterial({ color: 0x000000 })`, radius 15 ly).
   - Accretion disk mesh (`THREE.RingGeometry(20, 70, 128, 16)`) using `blackhole.frag.ts` with `THREE.AdditiveBlending`, `THREE.DoubleSide`.
   - Gravitational lensing billboard mesh (`THREE.PlaneGeometry(160, 160)`) using `lensing.frag.ts` with `THREE.AdditiveBlending`.
   - Visual scale: radius scaled to ~25–70 ly for educational visualization at Galactic Center $(0, 0, 0)$.
   - Exposes `update(delta: number, elapsedTime?: number, camera?: THREE.Camera): void` to advance `uTime`, internal rotation, and camera billboard alignment.
   - Resource disposal via `dispose()`.
4. Updated `src/main.ts`:
   - Instantiated `SagittariusA` at origin $(0, 0, 0)$.
   - Mounted `sagittariusA` into the Three.js scene.
   - Updated animation loop to call `sagittariusA.update(delta, elapsedTime, camera)`.
   - Exposed `sagittariusA` on `window.__GALAXY__.blackHole` and `window.__GALAXY__.sagittariusA`.
   - Exported `sagittariusA`.
5. Updated `tests/unit/blackhole.spec.ts`:
   - Added 7 comprehensive unit tests verifying 3D hierarchy, absolute black material, additive blending, `BlackHoleShaderUniforms` contracts, billboard alignment, and GLSL equation tokens.
6. Verification:
   - `npm test`: 134/134 passed (100%).
   - `npm run verify-data`: 87/87 passed (100%).
   - `npm run build`: Clean TypeScript compilation (0 errors) and bundling.
