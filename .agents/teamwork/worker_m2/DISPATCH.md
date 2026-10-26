## 2026-10-25T15:46:20Z
[Message] timestamp=2026-10-25T15:46:20Z sender=d388f5cc-0223-4326-a6c7-68cdcf9f21f4 priority=MESSAGE_PRIORITY_HIGH content=You are teamwork_preview_worker for Milestone 2: 200,000+ Star Particle System, Custom GLSL Shaders & Galactic Morphology.
Your working directory is: c:\Users\Admin\earth\.agents\teamwork\worker_m2
Original user request path: c:\Users\Admin\earth\ORIGINAL_REQUEST.md
Project plan and scope: c:\Users\Admin\earth\PROJECT.md

Authoritative Specifications & Mathematics (Read carefully!):
- Explorer 1 Survey Report (Exact equations, BeSSeL VLBI pitch angles, GLSL vertex & fragment shaders, Box-Muller sampling, Tanner Helland polynomial): c:\Users\Admin\earth\.agents\teamwork\explorer_survey_1\survey_report.md
- Test specifications: c:\Users\Admin\earth\tests\unit\particles.spec.ts, c:\Users\Admin\earth\tests\unit\shaders.spec.ts

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

File Ownership (You exclusively own these files for Milestone 2):
- src/galaxy/GalaxyGenerator.ts
- src/galaxy/GalaxyView.ts
- src/shaders/star.vert.ts
- src/shaders/star.frag.ts
- src/main.ts (update to mount GalaxyView into the Three.js scene and render loop)

Tasks for Milestone 2:
1. Implement `src/galaxy/GalaxyGenerator.ts`:
   - Generate 250,000 star particles in a single deterministic procedural pass.
   - Partition budget according to Explorer 1 survey:
     * 4 major logarithmic spiral arms (Scutum-Centaurus i=13.0°, Perseus i=10.5°, Sagittarius-Carina i=12.0°, Norma i=13.5°) + Orion Spur (i=11.4°): 44% (~110,000 stars)
     * Triaxial Gaussian galactic bar (a=4.0 kpc, b=1.2 kpc, c=0.6 kpc, phi=27°): 10% (~25,000 stars)
     * Central Hernquist bulge (scale radius rb=0.7 kpc): 14% (~35,000 stars)
     * Dense nuclear core: 2% (~5,000 stars)
     * Thin stellar disk (radial Rd=2.6 kpc, vertical scale height z0=300 pc): 22% (~55,000 stars)
     * Thick stellar disk / halo (radial Rd=3.6 kpc, vertical scale height z0=900 pc): 8% (~20,000 stars)
   - Assign astrophysical stellar populations and temperatures (Harvard OBAFGKM types, 2,500 K - 35,000 K) with young hot stars enriched in spiral arms and cooler stars in bulge, bar, and halo.
   - Output `GalaxyParticleBuffer` with `Float32Array` attributes (`positions`, `temperatures`, `sizes`, `arms`, `count`).
2. Implement Custom GLSL Shaders:
   - `src/shaders/star.vert.ts`: Custom vertex shader with distance-attenuated point sizing (`uPixelRatio * aSize * (uSizeScale / -mvPosition.z) * pow(-mvPosition.z, 0.28)` clamped to [1.0, 48.0]), flat rotation curve time animation, and proper perspective transformation.
   - `src/shaders/star.frag.ts`: Custom fragment shader with circular discards, dual-component radial profile (Airy core + exponential halo), Tanner Helland Planck blackbody polynomial color mapping (effective temperature -> sRGB), and additive blending.
3. Implement `src/galaxy/GalaxyView.ts`:
   - Construct `THREE.BufferGeometry` from `GalaxyParticleBuffer`, configure `THREE.ShaderMaterial` with uniforms (`uTime`, `uPixelRatio`, `uSizeScale`, `uCoreBloom`), and create `THREE.Points` with `THREE.AdditiveBlending` and `depthWrite: false`.
   - Provide `update(delta, elapsedTime)` method advancing rotation.
4. Update `src/main.ts`:
   - Initialize `THREE.WebGLRenderer` with `antialias: true`, `logarithmicDepthBuffer: true`, `powerPreference: 'high-performance'`.
   - Setup `THREE.PerspectiveCamera` (FOV 60°, near 0.1 ly, far 300,000 ly) looking down obliquely at the galaxy.
   - Add `GalaxyView` to scene.
   - Start 60 FPS animation loop with `requestAnimationFrame`.
5. Run Verification Commands:
   - Run `npm test` and verify that all 123+ unit tests pass (especially `particles.spec.ts` and `shaders.spec.ts`).
   - Run `npm run verify-data` and verify it passes with exit code 0.
   - Run `npm run build` and verify clean TypeScript compilation and bundling.
6. Write your comprehensive handoff report to `c:\Users\Admin\earth\.agents\teamwork\worker_m2\handoff.md` and message the orchestrator via send_message.

