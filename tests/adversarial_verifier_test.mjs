import { execSync } from 'child_process';
import fs from 'fs';

console.log('[TEST] Adversarially testing DatasetVerifier failure modes...');

const validCatalog = JSON.parse(fs.readFileSync('src/data/landmarks.json', 'utf8'));
const backupPath = 'src/data/landmarks.json.bak';
fs.copyFileSync('src/data/landmarks.json', backupPath);

try {
  // Test 1: Sgr A* origin invariant (x = 500 ly)
  const corruptOrigin = JSON.parse(JSON.stringify(validCatalog));
  corruptOrigin[0].cartesian.x = 500;
  fs.writeFileSync('src/data/landmarks.json', JSON.stringify(corruptOrigin, null, 2));

  let exitCode = 0;
  try {
    execSync('npx tsx scripts/verify-datasets.ts', { stdio: 'pipe' });
  } catch (err) {
    exitCode = err.status;
  }
  console.log('[TEST 1] Sgr A* cartesian x=500 exit code:', exitCode);
  if (exitCode !== 1) throw new Error('Expected exit code 1 for Sgr A* off-origin');

  // Test 2: Negative temperature (-500 K)
  const corruptTemp = JSON.parse(JSON.stringify(validCatalog));
  corruptTemp[0].temperatureK = -500;
  fs.writeFileSync('src/data/landmarks.json', JSON.stringify(corruptTemp, null, 2));

  exitCode = 0;
  try {
    execSync('npx tsx scripts/verify-datasets.ts', { stdio: 'pipe' });
  } catch (err) {
    exitCode = err.status;
  }
  console.log('[TEST 2] Negative temperature exit code:', exitCode);
  if (exitCode !== 1) throw new Error('Expected exit code 1 for negative temperature');

  // Test 3: Missing mandatory landmark (remove Sagittarius A*)
  const missingMandatory = validCatalog.filter(l => l.id !== 'sagittarius-a');
  fs.writeFileSync('src/data/landmarks.json', JSON.stringify(missingMandatory, null, 2));

  exitCode = 0;
  try {
    execSync('npx tsx scripts/verify-datasets.ts', { stdio: 'pipe' });
  } catch (err) {
    exitCode = err.status;
  }
  console.log('[TEST 3] Missing mandatory landmark exit code:', exitCode);
  if (exitCode !== 1) throw new Error('Expected exit code 1 for missing mandatory landmark');

  // Test 4: Corrupt distanceFromGC on Sgr A* (distanceFromGC = 99999)
  // Sgr A* is at origin (0, 0, 0), so its distanceFromGC MUST be 0.
  const corruptGC = JSON.parse(JSON.stringify(validCatalog));
  corruptGC[0].distanceFromGC = 99999;
  fs.writeFileSync('src/data/landmarks.json', JSON.stringify(corruptGC, null, 2));

  exitCode = 0;
  try {
    execSync('npx tsx scripts/verify-datasets.ts', { stdio: 'pipe' });
  } catch (err) {
    exitCode = err.status;
  }
  console.log('[TEST 4 - ADVERSARIAL GAP] Corrupt distanceFromGC exit code:', exitCode);
  if (exitCode === 0) {
    console.warn('⚠️ VULNERABILITY CONFIRMED: scripts/verify-datasets.ts fails to validate distanceFromGC (passes with exit code 0 even when Sgr A* distanceFromGC is 99999 ly)!');
  }

} finally {
  fs.copyFileSync(backupPath, 'src/data/landmarks.json');
  fs.unlinkSync(backupPath);
}

console.log('[ADVERSARIAL TESTS COMPLETE]');
