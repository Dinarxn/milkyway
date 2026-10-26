import { GalaxyGenerator, GALAXY_SPIRAL_ARMS, computeSpiralAngle } from '../../../src/galaxy/GalaxyGenerator.js';
import { starVertexShader } from '../../../src/shaders/star.vert.js';
import { starFragmentShader } from '../../../src/shaders/star.frag.js';

console.log('--- FORENSIC AUDIT: PROCEDURAL MATH & SHADER VERIFICATION ---');

// 1. Particle Generation
const buffer = GalaxyGenerator.generate(250000, 0x5a17e0);
console.log('Buffer particle count:', buffer.count);
console.log('Positions length:', buffer.positions.length);
console.log('Temperatures length:', buffer.temperatures.length);
console.log('Sizes length:', buffer.sizes.length);
console.log('Arms length:', buffer.arms.length);

if (buffer.count !== 250000) throw new Error('Count mismatch');
if (buffer.positions.length !== 750000) throw new Error('Positions buffer size mismatch');

// 2. Uniqueness & entropy check
const coordSet = new Set<string>();
let nanCount = 0;
let infCount = 0;
let maxR = 0;
let maxY = 0;
const armCounts: Record<number, number> = {};
const tempBuckets: Record<string, number> = {
  O: 0, B: 0, A: 0, F: 0, G: 0, K: 0, M: 0
};

for (let i = 0; i < buffer.count; i++) {
  const x = buffer.positions[i * 3];
  const y = buffer.positions[i * 3 + 1];
  const z = buffer.positions[i * 3 + 2];
  const temp = buffer.temperatures[i];
  const size = buffer.sizes[i];
  const arm = buffer.arms[i];

  if (isNaN(x) || isNaN(y) || isNaN(z)) nanCount++;
  if (!isFinite(x) || !isFinite(y) || !isFinite(z)) infCount++;

  const r = Math.sqrt(x * x + z * z);
  if (r > maxR) maxR = r;
  if (Math.abs(y) > maxY) maxY = Math.abs(y);

  armCounts[arm] = (armCounts[arm] || 0) + 1;

  if (temp >= 30000) tempBuckets.O++;
  else if (temp >= 10000) tempBuckets.B++;
  else if (temp >= 7500) tempBuckets.A++;
  else if (temp >= 6000) tempBuckets.F++;
  else if (temp >= 5200) tempBuckets.G++;
  else if (temp >= 3700) tempBuckets.K++;
  else tempBuckets.M++;

  // sample coordinates for uniqueness test (first 10000)
  if (i < 10000) {
    coordSet.add(`${x.toFixed(2)},${y.toFixed(2)},${z.toFixed(2)}`);
  }
}

console.log('NaN count:', nanCount);
console.log('Inf count:', infCount);
console.log('Max R (ly):', maxR.toFixed(1));
console.log('Max |Y| (ly):', maxY.toFixed(1));
console.log('Arm counts:', armCounts);
console.log('Temperature spectral classification counts:', tempBuckets);
console.log('Unique samples in first 10,000:', coordSet.size);

if (coordSet.size < 9990) {
  throw new Error('Excessive duplicate coordinates detected; possible hardcoded repeating patterns!');
}

// 3. Test different seeds produce different, authentic particle fields
const buffer2 = GalaxyGenerator.generate(250000, 0x123456);
let identicalCount = 0;
for (let i = 0; i < 1000; i++) {
  if (
    buffer.positions[i * 3] === buffer2.positions[i * 3] &&
    buffer.positions[i * 3 + 1] === buffer2.positions[i * 3 + 1] &&
    buffer.positions[i * 3 + 2] === buffer2.positions[i * 3 + 2]
  ) {
    identicalCount++;
  }
}
console.log('Identical coordinates across different seeds (out of 1000):', identicalCount);
if (identicalCount > 0) {
  throw new Error('Seed variation failed to produce independent particle sets!');
}

// 4. Verify Logarithmic Spiral Pitch & Angle Math
for (const arm of GALAXY_SPIRAL_ARMS) {
  const thetaInner = computeSpiralAngle(arm.rInnerLy, arm.rInnerLy, arm.theta0Rad, arm.pitchAngleRad);
  const thetaOuter = computeSpiralAngle(arm.rOuterLy, arm.rInnerLy, arm.theta0Rad, arm.pitchAngleRad);
  console.log(`Arm ${arm.name}: inner=${(thetaInner * 180 / Math.PI).toFixed(1)}°, outer=${(thetaOuter * 180 / Math.PI).toFixed(1)}°, delta=${((thetaOuter - thetaInner) * 180 / Math.PI).toFixed(1)}°`);
  if (thetaOuter <= thetaInner) throw new Error(`Log spiral not opening outward for ${arm.name}`);
}

// 5. Shader code forensics
console.log('Verifying shader code authentic tokens...');
const vertTokens = [
  'attribute float aTemperature',
  'attribute float aSize',
  'attribute float aArm',
  'modelViewMatrix',
  'gl_PointSize',
  'uPixelRatio',
  'uSizeScale',
  'pow(viewDist, 0.28)'
];
for (const tok of vertTokens) {
  if (!starVertexShader.includes(tok)) throw new Error(`Missing token in vertex shader: ${tok}`);
}

const fragTokens = [
  'kelvinToRGB',
  '329.698727446',
  '99.4708025861',
  '138.5177312231',
  'gl_PointCoord',
  'discard',
  'gl_FragColor',
  'uCoreBloom'
];
for (const tok of fragTokens) {
  if (!starFragmentShader.includes(tok)) throw new Error(`Missing token in fragment shader: ${tok}`);
}

console.log('ALL PROCEDURAL MATH & SHADER CHECKS PASSED EMPIRICALLY!');
