## 2026-10-25T16:29:22Z
You are teamwork_preview_worker for Milestone 4: OrbitControls, Camera Fly-To Interpolation & Scientific HUD.
Your working directory is: c:\Users\Admin\earth\.agents\teamwork\worker_m4
Original user request path: c:\Users\Admin\earth\ORIGINAL_REQUEST.md
Project plan and scope: c:\Users\Admin\earth\PROJECT.md

Authoritative Specifications & Code References:
- Explorer 3 Survey Report (Complete CameraFlyTo parabolic smootherstep engine, HUD glassmorphic layout, StateStore): c:\Users\Admin\earth\.agents\teamwork\explorer_survey_3\survey_report.md
- Test specifications: c:\Users\Admin\earth\tests\unit\navigation.spec.ts, c:\Users\Admin\earth\tests\unit\hud.spec.ts, c:\Users\Admin\earth\tests\integration\cross-feature.spec.ts

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

File Ownership (You exclusively own these files for Milestone 4):
- src/camera/CameraFlyTo.ts
- src/objects/LandmarkMarkers.ts
- src/ui/StateStore.ts
- src/ui/HUD.ts
- src/ui/styles.css
- src/main.ts (update to mount OrbitControls, CameraFlyTo, LandmarkMarkers, HUD, raycasting click/hover handlers, and render loop)

Tasks for Milestone 4:
1. Implement OrbitControls & 6-DOF Navigation:
   - Configure Three.js `OrbitControls` with:
     * `enableDamping: true`
     * `dampingFactor: 0.05`
     * `minDistance: 15.0` (cluster scale)
     * `maxDistance: 160000.0` (100,000+ ly macro view)
     * Full 360-degree azimuthal rotation.
2. Implement `src/camera/CameraFlyTo.ts`:
   - Synchronously interpolate `camera.position` and `controls.target` to target landmark position.
   - Use quintic smootherstep easing: tau(t) = 10t^3 - 15t^4 + 6t^5.
   - Parabolic elevation arc: P(t) = lerp(P_start, P_dest, tau) + up * H_arc * sin(pi * tau) so camera does not clip through dense galactic core.
   - Smoothly transition controls.target from origin to landmark.
   - Support immediate cancellation/release on user manual drag.
3. Implement `src/objects/LandmarkMarkers.ts`:
   - 3D visual beacon sprites / glowing points at each landmark coordinate (Sagittarius A*, Sun, Pleiades, Orion Nebula, Eta Carinae, Crab Nebula, etc.).
   - Interactive raycasting support so clicking in 3D scene selects landmark and triggers fly-to.
4. Implement `src/ui/StateStore.ts` & `src/ui/HUD.ts` & `src/ui/styles.css`:
   - Glassmorphic UI container mounted to `#hud-container`.
   - Landmark Bookmark Bar: clickable buttons for all landmarks triggering `cameraFlyTo` and selecting landmark.
   - Interactive Scientific Data Card:
     * Landmark name & classification badge
     * Distance from Galactic Center (ly)
     * Distance from Sun (ly)
     * Celestial Coordinates (RA, Dec) & Galactic Coordinates (l, b)
     * Spectral Type & Temperature (Kelvin)
     * Astrophysical description
     * Fly-to camera action button
   - Live Telemetry & Performance Overlay:
     * Real-time FPS monitor (running frame average)
     * Current camera distance in light-years
     * Active coordinate readout
5. Update `src/main.ts`:
   - Initialize OrbitControls, CameraFlyTo, LandmarkMarkers, StateStore, and HUD.
   - Wire raycaster on canvas click/pointerdown.
   - In render loop: update `controls.update()`, `cameraFlyTo.update(delta)`, `hud.update(delta)`.
   - Expose on `window.__GALAXY__`: `controls`, `cameraFlyTo`, `hud`, `stateStore`, `landmarks`, `selectLandmark(id)`.
6. Run Verification Commands:
   - Run `npm test` and verify that all 134+ tests pass (especially `navigation.spec.ts`, `hud.spec.ts`, `cross-feature.spec.ts`).
   - Run `npm run verify-data` and verify 87/87 assertions pass.
   - Run `npm run build` and verify clean TypeScript compilation and bundling.
7. Write your comprehensive handoff report to `c:\Users\Admin\earth\.agents\teamwork\worker_m4\handoff.md` and message the orchestrator via send_message.
