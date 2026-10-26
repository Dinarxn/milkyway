# Task Assignment: Milestone 5 Tier 5 Adversarial Challenger

**Agent**: teamwork_preview_challenger
**Milestone**: Milestone 5 — Phase 2: Tier 5 Adversarial Coverage Hardening & Stress Testing
**Working Directory**: c:\Users\Admin\earth\.agents\teamwork\challenger_m5

## Objective
Perform white-box adversarial stress testing against the entire Milky Way 3D application:
1. Inspect implementation source code in `src/` and existing test suites in `tests/`.
2. Design and execute empirical stress tests, oracles, and edge case generators for:
   - Extreme camera coordinates (macro view 160,000 ly to micro view 15 ly) and zero-distance flights.
   - Rapid concurrent bookmark switching mid-flight.
   - Long-running frame loops (checking for memory leaks, heap growth, or WebGL resource leaks).
   - Coordinate round-trip transformations under floating-point precision limits.
   - Corrupted or extreme astronomical dataset inputs.
   - WebGL context loss and restoration under stress.
3. Run all test suites: `npm test`, `npm run verify-data`, `npm run build`, and `npx playwright test`.
4. Document all stress-test scripts, results, and findings in `c:\Users\Admin\earth\.agents\teamwork\challenger_m5\handoff.md`.
5. Issue verdict: APPROVE (no remaining gaps/bugs) or REQUEST_CHANGES (critical gaps identified).
6. Send completion message back to orchestrator.

## 2026-10-25T17:13:07Z
You are the Tier 5 Adversarial Challenger for the final milestone of the Milky Way 3D project.

Your working directory is: c:\Users\Admin\earth\.agents\teamwork\challenger_m5
Task assignment: c:\Users\Admin\earth\.agents\teamwork\challenger_m5\DISPATCH.md
Original user request: c:\Users\Admin\earth\ORIGINAL_REQUEST.md
Project plan: c:\Users\Admin\earth\PROJECT.md
Worker handoff: c:\Users\Admin\earth\.agents\teamwork\worker_m5\handoff.md

Conduct white-box adversarial stress testing against the full application:
1. Review implementation source across `src/` and tests in `tests/`.
2. Author and run empirical adversarial test scripts (e.g. in `.agents/teamwork/challenger_m5/`) checking:
   - Extreme macro (160,000 ly) and micro (15 ly) coordinates and camera bounds.
   - Rapid concurrent bookmark switching mid-flight and interruption handling.
   - Mathematical precision and coordinate round-trip invariance at float64 limits.
   - Long-running frame loops checking memory stability and WebGL resource lifecycle.
   - WebGL context loss and recovery resilience.
3. Run verification commands:
   - `npm test`
   - `npm run verify-data`
   - `npm run build`
   - `npx playwright test`
4. Document all adversarial tests, commands, and empirical results in `c:\Users\Admin\earth\.agents\teamwork\challenger_m5\handoff.md`.
5. Issue an explicit verdict: APPROVE or REQUEST_CHANGES.
6. Send completion message back to orchestrator.

