import { spawn } from 'child_process';
import http from 'http';

const preview = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], { shell: true });

preview.stderr.on('data', (d) => {
  const msg = d.toString();
  if (msg.includes('error')) console.error('[Preview stderr]', msg);
});

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  let connected = false;
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetchUrl('http://localhost:4173/');
      if (res.statusCode === 200) {
        connected = true;
        break;
      }
    } catch (e) {
      await delay(250);
    }
  }

  if (!connected) {
    console.error('Failed to connect to preview server on port 4173');
    try { preview.kill(); } catch {}
    process.exit(1);
  }

  console.log('[TEST] Preview server is up on port 4173');

  // Test 1: Root HTML
  const htmlRes = await fetchUrl('http://localhost:4173/');
  console.log('[TEST 1] Root HTML status:', htmlRes.statusCode, 'Content-Type:', htmlRes.headers['content-type'], 'Body length:', htmlRes.body.length);
  if (htmlRes.statusCode !== 200 || !htmlRes.body.includes('webgl-canvas') || !htmlRes.body.includes('/assets/index-')) {
    console.error('TEST 1 FAILED: HTML missing essential elements');
    try { preview.kill(); } catch {}
    process.exit(1);
  }

  // Extract script path
  const match = htmlRes.body.match(/src="(\/assets\/index-[^"]+\.js)"/);
  if (!match) {
    console.error('TEST 1 FAILED: JS script tag not found in HTML');
    try { preview.kill(); } catch {}
    process.exit(1);
  }
  const scriptPath = match[1];
  console.log('[TEST 2] Found bundle script path in HTML:', scriptPath);

  // Test 2: JS Bundle
  const jsRes = await fetchUrl('http://localhost:4173' + scriptPath);
  console.log('[TEST 2] JS Bundle status:', jsRes.statusCode, 'Content-Type:', jsRes.headers['content-type'], 'Size:', jsRes.body.length);
  if (jsRes.statusCode !== 200 || jsRes.body.length < 1000) {
    console.error('TEST 2 FAILED: JS bundle failed to load or too small');
    try { preview.kill(); } catch {}
    process.exit(1);
  }

  // Test 3: Public Data landmarks.json
  const dataRes = await fetchUrl('http://localhost:4173/data/landmarks.json');
  console.log('[TEST 3] Public landmarks.json status:', dataRes.statusCode, 'Content-Type:', dataRes.headers['content-type'], 'Size:', dataRes.body.length);
  if (dataRes.statusCode !== 200 || !dataRes.body.includes('sagittarius-a')) {
    console.error('TEST 3 FAILED: landmarks.json failed to load or missing sgr A*');
    try { preview.kill(); } catch {}
    process.exit(1);
  }

  // Test 4: Sourcemap
  const mapRes = await fetchUrl('http://localhost:4173' + scriptPath + '.map');
  console.log('[TEST 4] Sourcemap status:', mapRes.statusCode, 'Size:', mapRes.body.length);
  if (mapRes.statusCode !== 200 || !mapRes.body.includes('mappings')) {
    console.error('TEST 4 FAILED: sourcemap failed to load');
    try { preview.kill(); } catch {}
    process.exit(1);
  }

  // Test 5: 404 handling
  const notFoundRes = await fetchUrl('http://localhost:4173/nonexistent-file.xyz');
  console.log('[TEST 5] Non-existent resource status:', notFoundRes.statusCode);
  if (notFoundRes.statusCode !== 404) {
    console.warn('TEST 5 NOTE: Non-existent returned', notFoundRes.statusCode);
  }

  console.log('[ALL PREVIEW TESTS PASSED CLEANLY]');
  try {
    preview.kill();
    // On Windows, child processes spawned with shell: true may need taskkill
    if (preview.pid) {
      spawn('taskkill', ['/pid', preview.pid.toString(), '/T', '/F']);
    }
  } catch {}
  process.exit(0);
})();
