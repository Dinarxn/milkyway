import * as THREE from 'three';
import { quinticSmootherstep, computeArcHeight, evaluateTrajectory } from '../../../src/camera/CameraFlyTo.js';
import { StateStore, FPSProfiler, formatLandmarkCard } from '../../../src/ui/StateStore.js';

console.log('[AUDIT STRESS-TEST] Starting forensic stress-testing...');

// 1. quinticSmootherstep edge cases
if (quinticSmootherstep(-999) !== 0.0) throw new Error('Failed negative clamp on smootherstep');
if (quinticSmootherstep(999) !== 1.0) throw new Error('Failed positive clamp on smootherstep');
if (quinticSmootherstep(0.0) !== 0.0) throw new Error('Failed t=0 smootherstep');
if (quinticSmootherstep(0.5) !== 0.5) throw new Error('Failed t=0.5 smootherstep');
if (quinticSmootherstep(1.0) !== 1.0) throw new Error('Failed t=1.0 smootherstep');

// 2. computeArcHeight bounds
if (computeArcHeight(0) !== 20.0) throw new Error('Failed min clamp on arc height');
if (computeArcHeight(10) !== 20.0) throw new Error('Failed min clamp on arc height');
if (computeArcHeight(80) !== 20.0) throw new Error('Failed min clamp on arc height (80*0.25=20)');
if (computeArcHeight(1000) !== 250.0) throw new Error('Failed mid arc height');
if (computeArcHeight(1000000) !== 12000.0) throw new Error('Failed max clamp on arc height');

// 3. evaluateTrajectory with zero distance
const pZero = evaluateTrajectory({x: 10, y: 20, z: 30}, {x: 10, y: 20, z: 30}, 20, 0.5);
if (pZero.x !== 10 || pZero.z !== 30 || Math.abs(pZero.y - 40) > 0.001) {
  throw new Error('Zero distance trajectory failed: ' + JSON.stringify(pZero));
}

// 4. evaluateTrajectory with negative / overflow t
const pNeg = evaluateTrajectory({x: 0, y: 0, z: 0}, {x: 100, y: 0, z: 100}, 50, -5.0);
if (pNeg.x !== 0 || pNeg.z !== 0 || Math.abs(pNeg.y) > 1e-12) {
  throw new Error('Negative t trajectory clamp failed: ' + JSON.stringify(pNeg));
}
const pOver = evaluateTrajectory({x: 0, y: 0, z: 0}, {x: 100, y: 0, z: 100}, 50, 5.0);
if (pOver.x !== 100 || pOver.z !== 100 || Math.abs(pOver.y) > 1e-12) {
  throw new Error('Overflow t trajectory clamp failed: ' + JSON.stringify(pOver));
}

// 5. FPSProfiler extreme values
const profiler = new FPSProfiler();
if (profiler.getAverageFPS() !== 60) throw new Error('Empty profiler should return default 60');
profiler.recordDelta(-100);   // negative clamped to 0.1
profiler.recordDelta(0);      // zero clamped to 0.1
profiler.recordDelta(100000); // massive spike clamped to 1000
const avgFps = profiler.getAverageFPS();
if (!Number.isFinite(avgFps) || avgFps <= 0) throw new Error('Profiler failed on extreme delta handling: ' + avgFps);

// 6. formatLandmarkCard with null / missing optional fields
const minimalLandmark: any = {
  id: 'test-obj',
  name: 'Test Object',
  category: 'custom_category',
  equatorial: { ra: '00h', dec: '+00°', raDeg: 0, decDeg: 0, distanceLy: 100 },
  galactic: { lDeg: 0, bDeg: 0, distanceLy: 100 },
  cartesian: { x: 0, y: 0, z: 100 },
  distanceFromGC: 100,
  distanceFromSun: 100,
  description: 'Minimal object'
};
const card = formatLandmarkCard(minimalLandmark);
if (card.spectral !== 'N/A') throw new Error('Missing spectral should format as N/A');
if (card.category !== 'CUSTOM CATEGORY') throw new Error('Category replacement failed');

// 7. StateStore unsubscribe robustness & telemetry clamps
const store = new StateStore();
let count = 0;
const unsub = store.subscribe(() => { count++; });
store.setFlying(true);
if (count !== 1) throw new Error('StateStore notification count mismatch');
unsub();
store.setFlying(false);
if (count !== 1) throw new Error('StateStore unsubscribe failed');

store.updateTelemetry(-50, 100000);
if (store.getTelemetry().fps !== 0) throw new Error('Negative FPS should clamp to 0');

console.log('[AUDIT STRESS-TEST] ALL 7 FORENSIC STRESS CHECKS PASSED CLEANLY.');
