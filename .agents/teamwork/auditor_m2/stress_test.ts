import { GalaxyGenerator, computeSpiralAngle } from '../../../src/galaxy/GalaxyGenerator.js';

console.log('--- ADVERSARIAL STRESS TESTING ---');

// Stress 1: Unusual targetCount budgets
const countsToTest = [0, 1, 10, 500, 200000, 500000];
for (const count of countsToTest) {
  const buf = GalaxyGenerator.generate(count);
  console.log(`generate(${count}) -> actual count: ${buf.count}, positions length: ${buf.positions.length}`);
  if (buf.count !== count) throw new Error(`Count mismatch for target ${count}`);
  if (buf.positions.length !== count * 3) throw new Error(`Positions length mismatch for ${count}`);
}

// Stress 2: Floating point degenerate inputs to computeSpiralAngle
try {
  const angleZero = computeSpiralAngle(0, 10000, 0, 0.2);
  console.log('computeSpiralAngle(0):', angleZero);
} catch (e) {
  console.log('computeSpiralAngle(0) caught:', e);
}

// Tanner Helland algorithm standalone test:
function kelvinToRGB(kelvin: number): { r: number; g: number; b: number } {
  const temp = Math.max(1000.0, Math.min(40000.0, kelvin)) / 100.0;
  let r = 0;
  let g = 0;
  let b = 0;

  if (temp <= 66.0) {
    r = 255.0;
  } else {
    r = 329.698727446 * Math.pow(temp - 60.0, -0.1332047592);
  }

  if (temp <= 66.0) {
    g = 99.4708025861 * Math.log(temp) - 161.1195681661;
  } else {
    g = 288.1221695283 * Math.pow(temp - 60.0, -0.0755148492);
  }

  if (temp >= 66.0) {
    b = 255.0;
  } else if (temp <= 19.0) {
    b = 0.0;
  } else {
    b = 138.5177312231 * Math.log(temp - 10.0) - 305.0447927307;
  }

  return {
    r: Math.max(0.0, Math.min(1.0, r / 255.0)),
    g: Math.max(0.0, Math.min(1.0, g / 255.0)),
    b: Math.max(0.0, Math.min(1.0, b / 255.0))
  };
}

function computePointSize(
  distToCamera: number,
  absoluteMagnitude: number,
  baseSize = 400.0,
  scale = 1.0
): number {
  const lumFactor = Math.min(Math.max(Math.pow(10.0, -0.15 * (absoluteMagnitude - 4.83)), 0.6), 5.0);
  const pointSize = (baseSize * lumFactor * scale) / Math.max(distToCamera, 10.0);
  return Math.min(Math.max(pointSize, 1.0), 24.0);
}

// Stress 3: kelvinToRGB extreme inputs
const extremes = [-1e9, -1, 0, 100, 999, 1000, 40000, 40001, 1e9];
for (const k of extremes) {
  const rgb = kelvinToRGB(k);
  if (isNaN(rgb.r) || isNaN(rgb.g) || isNaN(rgb.b)) throw new Error(`NaN for kelvin ${k}`);
  if (rgb.r < 0 || rgb.r > 1 || rgb.g < 0 || rgb.g > 1 || rgb.b < 0 || rgb.b > 1) {
    throw new Error(`Out of range [0, 1] for kelvin ${k}`);
  }
}
console.log('kelvinToRGB survived all extreme inputs [ -1e9 .. 1e9 ].');

// Stress 4: Point size extreme inputs
const dists = [-1e6, -1, 0, 0.001, 1, 10, 1e5, 1e9];
for (const d of dists) {
  const size = computePointSize(d, 4.83);
  if (isNaN(size) || !isFinite(size)) throw new Error(`Invalid size for dist ${d}`);
  if (size < 1.0 || size > 24.0) throw new Error(`Size out of clamp bounds [1.0, 24.0] for dist ${d}: ${size}`);
}
console.log('computePointSize survived all distance extremes [-1e6 .. 1e9].');

console.log('ADVERSARIAL STRESS TESTING COMPLETE: ALL PASSED.');
