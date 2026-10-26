## 2026-10-25T14:51:34Z
Objective:
Design and build the comprehensive, opaque-box E2E and unit test infrastructure for the 3D Milky Way Galaxy project derived strictly from user requirements and acceptance criteria in ORIGINAL_REQUEST.md and PROJECT.md.

Key Tasks:
1. Create c:\Users\Admin\earth\TEST_INFRA.md following the Dual Track specification:
   - Feature Inventory mapping all features (F1 - F20) to Tiers 1-4.
   - Test Architecture: runner invocation, pass/fail semantics, directory layout.
   - Coverage Thresholds:
     * Tier 1 (Feature Coverage): >= 5 test cases per feature covering representative inputs.
     * Tier 2 (Boundary & Corner Cases): >= 5 test cases per feature (extreme zooms, zero/negative bounds, edge-on view, NaN protection).
     * Tier 3 (Cross-Feature Combinations): pairwise interactions (e.g. camera flight while HUD updates, OrbitControls during animation, WebGL context restore).
     * Tier 4 (Real-World Application Scenarios): complete guided tour of all 6 required galactic landmarks with HUD inspection, sustained 60 FPS verification.
2. Implement the automated test suites in c:\Users\Admin\earth\tests\
   - Set up test runner configurations (Vitest / Playwright).
   - Author tests for coordinate mathematics and distance invariants.
   - Author tests for 200,000+ particle budget, shader attributes, and Planck blackbody temperatures.
   - Author tests for Sagittarius A* relativistic parameters.
   - Author tests for OrbitControls, CameraFlyTo transitions, and scientific HUD metadata rendering.
3. When the test suite infrastructure is fully established and test cases written, publish c:\Users\Admin\earth\TEST_READY.md at the project root with the test runner command and coverage summary.
4. Write handoff.md in your working directory and notify the orchestrator via send_message.

Scope Boundaries:
- Do NOT implement application feature code. Focus exclusively on test infrastructure and test suites in tests/ and test config.
- You may configure test dependencies in package.json or install test devDependencies as needed.
