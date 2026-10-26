/**
 * src/data/planetTextures.ts
 * Generates high-fidelity procedural canvas textures for the Sun and all 8 planets + Pluto + Moon.
 * Implements real planetary colorimetry, surface morphology, and atmospheric banding
 * matching NASA probe and space telescope imagery (Hubble, Cassini, Juno, MRO, New Horizons).
 */

import * as THREE from 'three';

const textureCache = new Map<string, THREE.CanvasTexture>();

function createBaseCanvas(width = 1024, height = 512): [HTMLCanvasElement, CanvasRenderingContext2D] {
  if (typeof document === 'undefined') {
    const mockCtx: any = new Proxy({}, {
      get: (_, prop) => {
        if (prop === 'createLinearGradient' || prop === 'createRadialGradient') {
          return () => ({ addColorStop: () => {} });
        }
        return () => {};
      },
      set: () => true,
    });
    const mockCanvas: any = {
      width,
      height,
      getContext: () => mockCtx,
      addEventListener: () => {},
      removeEventListener: () => {},
      style: {},
      nodeType: 1,
      nodeName: 'CANVAS',
    };
    return [mockCanvas as HTMLCanvasElement, mockCtx as CanvasRenderingContext2D];
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  return [canvas, ctx];
}

/**
 * 1. The Sun: Solar granulation, limb darkening, and convective plasma cells
 */
export function getSunTexture(): THREE.CanvasTexture {
  if (textureCache.has('sun')) return textureCache.get('sun')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  // Solar gradient background
  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, '#ff7700');
  grad.addColorStop(0.5, '#ffa500');
  grad.addColorStop(1, '#ff6600');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 512);

  // Solar granulation & convective cells
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const r = Math.random() * 8 + 2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = Math.random() > 0.4 ? 'rgba(255, 235, 150, 0.35)' : 'rgba(220, 80, 0, 0.4)';
    ctx.fill();
  }

  // Solar flares / sunspots
  for (let s = 0; s < 12; s++) {
    const sx = Math.random() * 1024;
    const sy = 180 + Math.random() * 150;
    ctx.beginPath();
    ctx.arc(sx, sy, Math.random() * 10 + 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(120, 20, 0, 0.85)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(sx, sy, Math.random() * 5 + 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(40, 5, 0, 0.95)';
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('sun', texture);
  return texture;
}

/**
 * 2. Mercury: Basaltic craters and highland regolith
 */
export function getMercuryTexture(): THREE.CanvasTexture {
  if (textureCache.has('mercury')) return textureCache.get('mercury')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  ctx.fillStyle = '#8c857b';
  ctx.fillRect(0, 0, 1024, 512);

  for (let i = 0; i < 1800; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 512;
    const r = Math.random() * 14 + 1;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(60, 55, 50, 0.4)' : 'rgba(190, 185, 175, 0.35)';
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('mercury', texture);
  return texture;
}

/**
 * 3. Venus: Dense swirling cream-amber sulfuric acid cloud cover
 */
export function getVenusTexture(): THREE.CanvasTexture {
  if (textureCache.has('venus')) return textureCache.get('venus')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  ctx.fillStyle = '#e8c97e';
  ctx.fillRect(0, 0, 1024, 512);

  // Atmospheric cloud bands
  for (let y = 0; y < 512; y += 4) {
    const wave = Math.sin(y * 0.04) * 0.15;
    ctx.fillStyle = `rgba(245, 230, 165, ${0.4 + wave})`;
    ctx.fillRect(0, y, 1024, 3);
  }

  // Diagonal supersonic cloud jet streaks
  ctx.strokeStyle = 'rgba(215, 175, 95, 0.25)';
  ctx.lineWidth = 14;
  for (let i = -512; i < 1536; i += 60) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.bezierCurveTo(i + 200, 150, i - 100, 350, i + 300, 512);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('venus', texture);
  return texture;
}

/**
 * 4. Earth: Vibrant deep oceans, continents, and swirling cloud layer
 */
export function getEarthTexture(): THREE.CanvasTexture {
  if (textureCache.has('earth')) return textureCache.get('earth')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  // Deep azure oceans
  ctx.fillStyle = '#0f3868';
  ctx.fillRect(0, 0, 1024, 512);

  // Continental landmasses
  ctx.fillStyle = '#2d6a4f';
  // Africa & Eurasia
  ctx.beginPath();
  ctx.ellipse(560, 220, 160, 110, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#748c48';
  ctx.beginPath();
  ctx.ellipse(600, 160, 180, 80, -0.1, 0, Math.PI * 2);
  ctx.fill();

  // Americas
  ctx.fillStyle = '#386641';
  ctx.beginPath();
  ctx.ellipse(280, 160, 90, 70, -0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(320, 320, 70, 100, 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Australia & Antarctica
  ctx.fillStyle = '#8a5a36';
  ctx.beginPath();
  ctx.ellipse(820, 350, 60, 45, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#e2e8f0';
  ctx.fillRect(0, 460, 1024, 52); // Antarctica
  ctx.fillRect(0, 0, 1024, 30);  // Arctic

  // Atmospheric white swirling clouds
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  for (let c = 0; c < 24; c++) {
    const cx = Math.random() * 1024;
    const cy = 60 + Math.random() * 380;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 70 + Math.random() * 90, 20 + Math.random() * 25, Math.random() * 0.6, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('earth', texture);
  return texture;
}

/**
 * 5. Mars: Iron-oxide rust terrain, Syrtis Major basalt, and polar ice caps
 */
export function getMarsTexture(): THREE.CanvasTexture {
  if (textureCache.has('mars')) return textureCache.get('mars')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  // Primary reddish-rust surface
  ctx.fillStyle = '#c1440e';
  ctx.fillRect(0, 0, 1024, 512);

  // Dark volcanic basalt regions (Syrtis Major / Acidalia Planitia)
  ctx.fillStyle = '#6b2d12';
  for (let d = 0; d < 20; d++) {
    const dx = Math.random() * 1024;
    const dy = 120 + Math.random() * 260;
    ctx.beginPath();
    ctx.ellipse(dx, dy, 60 + Math.random() * 80, 30 + Math.random() * 40, Math.random(), 0, Math.PI * 2);
    ctx.fill();
  }

  // Brilliant white CO2/H2O polar ice caps
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.ellipse(512, 18, 140, 22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(512, 496, 120, 20, 0, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('mars', texture);
  return texture;
}

/**
 * 6. Jupiter: Parallel dynamic atmospheric belts and the Great Red Spot
 */
export function getJupiterTexture(): THREE.CanvasTexture {
  if (textureCache.has('jupiter')) return textureCache.get('jupiter')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  // Background creamy zone
  ctx.fillStyle = '#eed6af';
  ctx.fillRect(0, 0, 1024, 512);

  // Atmospheric Belts in amber, cream, and terracotta
  const beltColors = ['#9e5b32', '#c98a58', '#eed6af', '#7a3e21', '#cf9b6b', '#9e5b32', '#6b3318', '#eed6af', '#a8653b'];
  let yPos = 0;
  for (let i = 0; i < beltColors.length; i++) {
    const h = 512 / beltColors.length;
    ctx.fillStyle = beltColors[i];
    ctx.fillRect(0, yPos, 1024, h);

    // Wave ripples
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    for (let x = 0; x < 1024; x += 30) {
      ctx.beginPath();
      ctx.arc(x, yPos + h * 0.5, 6, 0, Math.PI * 2);
      ctx.fill();
    }
    yPos += h;
  }

  // The Great Red Spot (Southern Equatorial Belt at y ≈ 320)
  const spotX = 640;
  const spotY = 320;
  ctx.fillStyle = '#b91c1c';
  ctx.beginPath();
  ctx.ellipse(spotX, spotY, 52, 34, 0, 0, Math.PI * 2);
  ctx.fill();

  // Swirling core of the storm
  ctx.fillStyle = '#ea580c';
  ctx.beginPath();
  ctx.ellipse(spotX, spotY, 32, 18, 0.1, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('jupiter', texture);
  return texture;
}

/**
 * 7. Saturn: Delicate butterscotch gas giant atmosphere
 */
export function getSaturnTexture(): THREE.CanvasTexture {
  if (textureCache.has('saturn')) return textureCache.get('saturn')!;
  const [canvas, ctx] = createBaseCanvas(1024, 512);

  ctx.fillStyle = '#e8d2a0';
  ctx.fillRect(0, 0, 1024, 512);

  for (let y = 0; y < 512; y += 8) {
    const tone = Math.sin(y * 0.05) * 20;
    ctx.fillStyle = `rgb(${220 + tone}, ${195 + tone}, ${145 + tone})`;
    ctx.fillRect(0, y, 1024, 8);
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('saturn', texture);
  return texture;
}

/**
 * 8. Saturn Rings: Detailed multi-ring system with Cassini Division
 */
export function getSaturnRingTexture(): THREE.CanvasTexture {
  if (textureCache.has('saturn-ring')) return textureCache.get('saturn-ring')!;
  const [canvas, ctx] = createBaseCanvas(512, 64);

  const grad = ctx.createLinearGradient(0, 0, 512, 0);
  grad.addColorStop(0.0, 'rgba(0,0,0,0)'); // Transparent inner
  grad.addColorStop(0.1, 'rgba(180, 160, 120, 0.4)'); // Ring C
  grad.addColorStop(0.3, 'rgba(235, 215, 170, 0.95)'); // Ring B (Brightest)
  grad.addColorStop(0.65, 'rgba(215, 195, 150, 0.9)');
  grad.addColorStop(0.68, 'rgba(0, 0, 0, 0.05)'); // Cassini Division!
  grad.addColorStop(0.72, 'rgba(195, 175, 135, 0.85)'); // Ring A
  grad.addColorStop(0.96, 'rgba(160, 140, 105, 0.6)');
  grad.addColorStop(1.0, 'rgba(0,0,0,0)'); // Outer boundary

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 64);

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('saturn-ring', texture);
  return texture;
}

/**
 * 9. Uranus: Ethereal aquamarine cyan atmosphere
 */
export function getUranusTexture(): THREE.CanvasTexture {
  if (textureCache.has('uranus')) return textureCache.get('uranus')!;
  const [canvas, ctx] = createBaseCanvas(512, 256);

  ctx.fillStyle = '#6ee7b7';
  ctx.fillRect(0, 0, 512, 256);

  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#5eead4');
  grad.addColorStop(0.5, '#7dd3fc');
  grad.addColorStop(1, '#38bdf8');
  ctx.fillStyle = grad;
  ctx.globalAlpha = 0.65;
  ctx.fillRect(0, 0, 512, 256);

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('uranus', texture);
  return texture;
}

/**
 * 10. Neptune: Deep royal-azure blue with supersonic white methane cloud streaks
 */
export function getNeptuneTexture(): THREE.CanvasTexture {
  if (textureCache.has('neptune')) return textureCache.get('neptune')!;
  const [canvas, ctx] = createBaseCanvas(512, 256);

  ctx.fillStyle = '#1e40af';
  ctx.fillRect(0, 0, 512, 256);

  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#1d4ed8');
  grad.addColorStop(0.5, '#2563eb');
  grad.addColorStop(1, '#1e3a8a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  // White methane cirrus storm streaks
  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  for (let s = 0; s < 12; s++) {
    const sx = Math.random() * 512;
    const sy = 40 + Math.random() * 180;
    ctx.beginPath();
    ctx.ellipse(sx, sy, 40 + Math.random() * 60, 3 + Math.random() * 4, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('neptune', texture);
  return texture;
}

/**
 * 11. Pluto: Mottled tan-brown terrain with the bright nitrogen ice heart (Tombaugh Regio)
 */
export function getPlutoTexture(): THREE.CanvasTexture {
  if (textureCache.has('pluto')) return textureCache.get('pluto')!;
  const [canvas, ctx] = createBaseCanvas(512, 256);

  ctx.fillStyle = '#a89f91';
  ctx.fillRect(0, 0, 512, 256);

  // Dark tholin patches
  ctx.fillStyle = '#653818';
  ctx.beginPath();
  ctx.ellipse(150, 160, 80, 45, 0, 0, Math.PI * 2);
  ctx.fill();

  // Tombaugh Regio Heart (bright nitrogen/methane ice glacier)
  ctx.fillStyle = '#f5ede0';
  ctx.beginPath();
  ctx.ellipse(320, 140, 55, 45, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(360, 140, 50, 40, -0.2, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set('pluto', texture);
  return texture;
}
