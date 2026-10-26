## 2026-10-25T14:51:45Z
You are teamwork_preview_worker for Milestone 1: Project Scaffold, Astronomical Data Catalog & Dataset Verification CLI.
Your working directory is: c:\Users\Admin\earth\.agents\teamwork\worker_m1
Original user request path: c:\Users\Admin\earth\ORIGINAL_REQUEST.md
Project plan and scope: c:\Users\Admin\earth\PROJECT.md

Background Explorer Survey Reports:
- Explorer 2 report (Coordinates, Landmarks JSON, Verification script): c:\Users\Admin\earth\.agents\teamwork\explorer_survey_2\survey_report.md
- Explorer 3 report (Vite, TSConfig, package.json architecture): c:\Users\Admin\earth\.agents\teamwork\explorer_survey_3\survey_report.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

File Ownership (You exclusively own these files for M1):
- package.json
- tsconfig.json
- vite.config.ts
- index.html
- src/types/galaxy.ts
- src/data/coordinates.ts
- src/data/landmarks.json
- scripts/verify-datasets.ts

Tasks for Milestone 1:
1. Scaffold project tooling:
   - Create package.json with dependencies: three (^0.170.0), devDependencies: typescript, vite, @types/three, tsx. Include scripts:
     * "dev": "vite",
     * "build": "tsc && vite build",
     * "preview": "vite preview",
     * "verify-data": "tsx scripts/verify-datasets.ts"
   - Create tsconfig.json (strict TypeScript, moduleResolution: bundler, ES2022 target).
   - Create vite.config.ts and index.html (with full canvas mount and HUD container).
   - Run `npm install` to install all dependencies cleanly.
2. Implement Astronomical Data Catalog & Coordinate Transforms:
   - Implement `src/types/galaxy.ts` adhering to PROJECT.md interface contracts.
   - Implement `src/data/coordinates.ts` implementing the IAU SOFA rotation matrix transformation between Equatorial ICRS (RA, Dec, distance) and Galactic Cartesian / Three.js World Space.
   - Implement `src/data/landmarks.json` bundling the required galactic landmarks:
     * Sagittarius A* (origin 0,0,0; ~26,000 ly from Sun)
     * Sun / Solar System (Orion Spur, 26,000 ly from GC, z = +68 ly)
     * Pleiades open cluster (M45, ~444 ly from Sun)
     * Orion Nebula (M42, ~1,344 ly from Sun)
     * Eta Carinae (~7,500 ly from Sun)
     * Crab Nebula (M1, ~6,500 ly from Sun)
     plus supplementary landmarks (Trapezium cluster, Betelgeuse, etc.) with complete astrometric and astrophysical metadata.
3. Implement Dataset Verification CLI:
   - Implement `scripts/verify-datasets.ts` fulfilling acceptance criterion: "Verification script confirms bundled astronomical datasets load valid coordinates and magnitudes."
   - Must validate schema, non-NaN coordinates, physical distance invariants, temperature bounds (1,000K - 100,000K), magnitude bounds, and coordinate round-trip invariance (<10^-4).
4. Run Verification Commands:
   - Run `npm run verify-data` and verify it exits 0 with full confirmation output.
   - Run `npm run build` and verify TypeScript compiles cleanly with zero bundling errors.
5. Write your comprehensive handoff report to `c:\Users\Admin\earth\.agents\teamwork\worker_m1\handoff.md` with:
   - Observation, Logic Chain, Caveats, Conclusion, Verification Method.
   - Exact terminal commands run and verified passing output logs.
6. Send completion message to orchestrator via send_message.
