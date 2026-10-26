## 2026-10-25T15:21:01Z
Sender: d388f5cc-0223-4326-a6c7-68cdcf9f21f4
Content:
You are teamwork_preview_worker (remediation worker for Milestone 1).
Your working directory is: c:\Users\Admin\earth\.agents\teamwork\worker_m1_fix
Original user request path: c:\Users\Admin\earth\ORIGINAL_REQUEST.md
Project plan and scope: c:\Users\Admin\earth\PROJECT.md
Reviewer 1 handoff: c:\Users\Admin\earth\.agents\teamwork\reviewer_m1_1\handoff.md
Reviewer 2 handoff: c:\Users\Admin\earth\.agents\teamwork\reviewer_m1_2\handoff.md
Challenger 2 handoff: c:\Users\Admin\earth\.agents\teamwork\challenger_m1_2\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Review Feedback Requiring Immediate Fixes:
1. Fix Betelgeuse in c:\Users\Admin\earth\src\data\landmarks.json and c:\Users\Admin\earth\public\data\landmarks.json:
   - Change `bDeg` to `-8.96` (true Galactic latitude).
   - Change `cartesian` to:
     `"x": 183.3, "y": -17.3, "z": 26509.4`
     (aligning with `icrsToThreePosition` output).
2. Harden c:\Users\Admin\earth\scripts\verify-datasets.ts:
   - Add a cross-validation stage verifying that each static `landmark.cartesian` in `landmarks.json` matches the runtime output of `icrsToThreePosition(lm.equatorial.raDeg, lm.equatorial.decDeg, lm.equatorial.distanceLy)` to within 1.0 ly.
   - Add validation for `distanceFromGC` checking that `Math.abs(Math.sqrt(x*x + y*y + z*z) - lm.distanceFromGC) < 1.0` and that Sagittarius A* has `distanceFromGC === 0`.
3. Fix source pollution in c:\Users\Admin\earth\tsconfig.json:
   - Add `"noEmit": true` under `compilerOptions` (and/or ensure `"build"` in `package.json` uses `"tsc --noEmit && vite build"`).
   - Clean up / delete any compiled `.js` files accidentally emitted into `src/` and `scripts/` (e.g. `src/main.js`, `src/data/coordinates.js`, `src/types/galaxy.js`, `scripts/verify-datasets.js`).
4. Verification:
   - Run `npm run verify-data` and verify that all assertions pass cleanly.
   - Run `npm run build` and verify that `tsc` type-checks cleanly and `vite build` succeeds with zero `.js` files emitted into `src/` or `scripts/`.
   - Run `npm test` and verify that all unit tests continue to pass.
5. Write your handoff report to c:\Users\Admin\earth\.agents\teamwork\worker_m1_fix\handoff.md and message the orchestrator.
