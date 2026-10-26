## 2026-10-25T16:10:04Z
You are teamwork_preview_worker for Milestone 3: Sagittarius A* Relativistic Subsystem (Accretion Disk & Gravitational Lensing).
Your working directory is: c:\Users\Admin\earth\.agents\teamwork\worker_m3
Original user request path: c:\Users\Admin\earth\ORIGINAL_REQUEST.md
Project plan and scope: c:\Users\Admin\earth\PROJECT.md

Authoritative Specifications & Shaders (Read carefully!):
- Explorer 3 Survey Report (Complete GLSL shader code for blackhole.frag.ts and lensing.frag.ts, Doppler beaming equations, lensing ray deflection): c:\Users\Admin\earth\.agents\teamwork\explorer_survey_3\survey_report.md
- Test specifications: c:\Users\Admin\earth\tests\unit\blackhole.spec.ts

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

File Ownership (You exclusively own these files for Milestone 3):
- src/shaders/blackhole.frag.ts
- src/shaders/lensing.frag.ts
- src/objects/SagittariusA.ts
- src/main.ts (update to mount SagittariusA at origin (0, 0, 0) and advance its rotation/time uniform in the animation loop)

Tasks for Milestone 3:
1. Implement `src/shaders/blackhole.frag.ts`:
   - Relativistic Doppler beaming accretion disk fragment shader.
   - Keplerian differential orbital velocity profile $v(r) \propto 1 / \sqrt{r}$.
   - Doppler factor $\delta = \frac{1}{\gamma(1 - \beta \cos \theta)}$ with intensity scaling $\delta^{3.5}$.
   - High-temperature blue-white shift on approaching side, redshifted dark orange-red on receding side.
   - Inner shadow radius cut-off at ISCO ($r_{isco} \approx 3 r_s$) down to photon orbit shadow ($r_{shadow} \approx 2.6 r_s$).
2. Implement `src/shaders/lensing.frag.ts`:
   - Gravitational lensing distortion shader.
   - Tangential Einstein ring deflection pulling background coordinates inward proportional to $(r_E^2 / r)$.
   - Bright photon ring emission at $r \approx 2.6 r_s$.
3. Implement `src/objects/SagittariusA.ts`:
   - Event horizon central sphere with absolute black material (`THREE.MeshBasicMaterial({ color: 0x000000 })`).
   - Accretion disk mesh (`THREE.RingGeometry` or plane) using `blackhole.frag.ts` with additive blending.
   - Gravitational lensing billboard/mesh using `lensing.frag.ts`.
   - Visual scale: in accordance with public visualization standards, radius scaled to ~25–70 ly so it forms an awe-inspiring, educational destination when zooming into the Galactic Center $(0, 0, 0)$.
   - Expose `update(delta: number, elapsedTime: number): void` to advance `uTime` and internal rotation.
4. Update `src/main.ts`:
   - Instantiate `SagittariusA` at origin $(0, 0, 0)$.
   - Add to scene.
   - In render loop, call `sagittariusA.update(delta, elapsedTime)`.
   - Expose `sagittariusA` on `window.__GALAXY__.blackHole` for test runner inspection.
5. Run Verification Commands:
   - Run `npm test` and verify all 127+ tests pass (especially `blackhole.spec.ts`).
   - Run `npm run verify-data` and verify 87/87 assertions pass.
   - Run `npm run build` and verify clean TypeScript compilation and bundling.
6. Write your comprehensive handoff report to `c:\Users\Admin\earth\.agents\teamwork\worker_m3\handoff.md` and message the orchestrator via send_message.
