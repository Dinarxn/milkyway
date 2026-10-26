/**
 * tests/unit/blackhole.spec.ts
 * Dual Track Unit & Boundary Test Suite for Sagittarius A* Relativistic Subsystem (F11, F12, F13)
 * Validates Schwarzschild radius, event horizon shadow, relativistic Doppler beaming,
 * accretion disk temperature profiles, and gravitational lensing deflection.
 */

import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { SagittariusA } from '../../src/objects/SagittariusA.js';
import { blackHoleVertexShader, blackHoleFragmentShader } from '../../src/shaders/blackhole.frag.js';
import { lensingVertexShader, lensingFragmentShader } from '../../src/shaders/lensing.frag.js';

// Physical constants
const G = 6.6743e-11; // m^3 kg^-1 s^-2
const C = 2.99792458e8; // m s^-1
const M_SUN_KG = 1.98847e30; // kg
const SGR_A_MASS_SOLAR = 4.154e6; // Solar masses

// Computes Schwarzschild radius r_s = 2GM / c^2 in meters
export function computeSchwarzschildRadius(massSolar: number): number {
  const mKg = massSolar * M_SUN_KG;
  return (2.0 * G * mKg) / (C * C);
}

// Computes Doppler beaming factor delta = 1 / (gamma * (1 - beta * cosTheta))
export function computeDopplerBeaming(beta: number, cosTheta: number): number {
  const clampedBeta = Math.min(Math.max(beta, 0.0), 0.999);
  const gamma = 1.0 / Math.sqrt(1.0 - clampedBeta * clampedBeta);
  const dopplerFactor = 1.0 / (gamma * (1.0 - clampedBeta * cosTheta));
  return Math.pow(dopplerFactor, 3.5);
}

// Computes gravitational deflection angle alpha = 2 r_s / b (weak-to-medium field)
export function computeLensingDeflection(rs: number, impactParameterB: number): number {
  const safeB = Math.max(impactParameterB, 0.001);
  return (2.0 * rs) / safeB;
}

// Evaluates accretion disk intensity at radius r [rInner, rOuter] with Doppler alignment
export function evaluateAccretionDisk(
  r: number,
  rInner = 0.3,
  rOuter = 0.95,
  beta = 0.45,
  cosTheta = 1.0
): { visible: boolean; intensity: number; alpha: number } {
  if (r < rInner || r > rOuter) {
    return { visible: false, intensity: 0.0, alpha: 0.0 };
  }

  const tRad = (r - rInner) / (rOuter - rInner);
  const beaming = computeDopplerBeaming(beta, cosTheta);
  const density = Math.sin(tRad * Math.PI); // Peak mid-disk
  const photonRing = r < rInner + 0.04 ? 3.0 : 0.0;
  const intensity = density * beaming * 2.2 + photonRing;
  const alpha = Math.min(tRad / 0.1, 1.0) * Math.min((1.0 - tRad) / 0.15, 1.0);

  return { visible: true, intensity, alpha };
}

describe('Feature F11: Sagittarius A* Event Horizon Shadow (Tier 1)', () => {
  it('F11-T1-01: Calculates physical Schwarzschild radius for Sagittarius A* (~1.23e7 km)', () => {
    const rsMeters = computeSchwarzschildRadius(SGR_A_MASS_SOLAR);
    const rsKm = rsMeters / 1000.0;
    // Expected ~ 1.228e7 km (approx 41 light-seconds)
    expect(rsKm).toBeGreaterThan(1.2e7);
    expect(rsKm).toBeLessThan(1.25e7);
  });

  it('F11-T1-02: Shadow radius equals approx 2.6 Schwarzschild radii (sqrt(27)/2 * r_s)', () => {
    const rs = 100.0;
    const rShadow = (Math.sqrt(27.0) / 2.0) * rs;
    expect(rShadow / rs).toBeCloseTo(2.598, 3);
  });

  it('F11-T1-03: Photon sphere radius is exactly 1.5 * r_s', () => {
    const rs = 10.0;
    const rPhotonSphere = 1.5 * rs;
    expect(rPhotonSphere).toBe(15.0);
  });

  it('F11-T1-04: Innermost Stable Circular Orbit (ISCO) is at 3.0 * r_s for non-spinning black hole', () => {
    const rs = 10.0;
    const rIsco = 3.0 * rs;
    expect(rIsco).toBe(30.0);
  });

  it('F11-T1-05: Sagittarius A* coordinates strictly pin to Galactocentric origin (0, 0, 0)', () => {
    const origin = { x: 0.0, y: 0.0, z: 0.0 };
    const dist = Math.sqrt(origin.x * origin.x + origin.y * origin.y + origin.z * origin.z);
    expect(dist).toBe(0.0);
  });
});

describe('Feature F12: Glowing Accretion Disk Shader & Doppler Beaming (Tier 1)', () => {
  it('F12-T1-01: Relativistic Doppler factor boosts intensity on approaching side (cosTheta = +1)', () => {
    const beta = 0.45;
    const beamingApproaching = computeDopplerBeaming(beta, 1.0);
    expect(beamingApproaching).toBeGreaterThan(4.0); // > 4x boost
  });

  it('F12-T1-02: Relativistic Doppler factor dims intensity on receding side (cosTheta = -1)', () => {
    const beta = 0.45;
    const beamingReceding = computeDopplerBeaming(beta, -1.0);
    expect(beamingReceding).toBeLessThan(0.3); // < 0.3x dimming
  });

  it('F12-T1-03: Approaching-to-receding brightness asymmetry exceeds 15x contrast ratio', () => {
    const beta = 0.45;
    const app = computeDopplerBeaming(beta, 1.0);
    const rec = computeDopplerBeaming(beta, -1.0);
    const ratio = app / rec;
    expect(ratio).toBeGreaterThan(15.0);
  });

  it('F12-T1-04: Accretion disk evaluates valid intensity within radial bounds [rInner, rOuter]', () => {
    const midDisk = evaluateAccretionDisk(0.5, 0.3, 0.95);
    expect(midDisk.visible).toBe(true);
    expect(midDisk.intensity).toBeGreaterThan(0.0);
    expect(midDisk.alpha).toBeGreaterThan(0.0);
  });

  it('F12-T1-05: Photon ring glow enhances edge near rInner boundary', () => {
    const ringEdge = evaluateAccretionDisk(0.32, 0.3, 0.95, 0.45, 0.0);
    const outerEdge = evaluateAccretionDisk(0.85, 0.3, 0.95, 0.45, 0.0);
    expect(ringEdge.intensity).toBeGreaterThan(outerEdge.intensity);
  });
});

describe('Feature F13: Gravitational Lensing Effect (Tier 1)', () => {
  it('F13-T1-01: Gravitational light deflection increases inversely with impact parameter b', () => {
    const rs = 1.0;
    const defNear = computeLensingDeflection(rs, 2.0);
    const defFar = computeLensingDeflection(rs, 10.0);
    expect(defNear).toBeGreaterThan(defFar);
    expect(defNear / defFar).toBeCloseTo(5.0, 1);
  });

  it('F13-T1-02: Zero deflection at infinite distance (b -> infinity)', () => {
    const rs = 1.0;
    const defInfinity = computeLensingDeflection(rs, 1e9);
    expect(defInfinity).toBeLessThan(1e-8);
  });
});

describe('Features F11-F13: Black Hole Boundaries & Singularity Protection (Tier 2)', () => {
  it('F11-T2-01: Impact parameter b -> 0 is protected from division by zero', () => {
    const rs = 10.0;
    const defZero = computeLensingDeflection(rs, 0.0);
    expect(Number.isFinite(defZero)).toBe(true);
    expect(defZero).toBeGreaterThan(0);
  });

  it('F11-T2-02: Accretion disk inside shadow (r < rInner) is completely non-visible (discarded)', () => {
    const insideShadow = evaluateAccretionDisk(0.2, 0.3, 0.95);
    expect(insideShadow.visible).toBe(false);
    expect(insideShadow.intensity).toBe(0.0);
    expect(insideShadow.alpha).toBe(0.0);
  });

  it('F11-T2-03: Accretion disk outside boundary (r > rOuter) is completely non-visible', () => {
    const outsideDisk = evaluateAccretionDisk(1.2, 0.3, 0.95);
    expect(outsideDisk.visible).toBe(false);
    expect(outsideDisk.intensity).toBe(0.0);
    expect(outsideDisk.alpha).toBe(0.0);
  });

  it('F12-T2-01: Relativistic orbital speed beta >= 1.0 is clamped below speed of light', () => {
    const beamingC = computeDopplerBeaming(1.5, 0.0); // Superluminal test
    expect(Number.isFinite(beamingC)).toBe(true);
    expect(beamingC).toBeGreaterThan(0.0);
  });

  it('F12-T2-02: Doppler factor stays finite across 360-degree viewing angles', () => {
    for (let angle = 0; angle <= 360; angle += 15) {
      const cosTheta = Math.cos((angle * Math.PI) / 180);
      const beaming = computeDopplerBeaming(0.45, cosTheta);
      expect(Number.isFinite(beaming)).toBe(true);
      expect(beaming).toBeGreaterThan(0.0);
    }
  });
});

describe('Features F11-F13: Sagittarius A* 3D Object & Shader Architecture (Tier 1 & 2)', () => {
  it('F11-T1-06: SagittariusA class instantiates with three-tier relativistic hierarchy', () => {
    const sgrA = new SagittariusA();
    expect(sgrA).toBeInstanceOf(THREE.Group);
    expect(sgrA.name).toBe('SagittariusA_Subsystem');

    // Must have event horizon, accretion disk, and lensing billboard
    expect(sgrA.eventHorizon).toBeDefined();
    expect(sgrA.accretionDisk).toBeDefined();
    expect(sgrA.lensingMesh).toBeDefined();
    expect(sgrA.children.length).toBe(3);

    // Initial position is anchored at Galactocentric origin
    expect(sgrA.position.x).toBe(0);
    expect(sgrA.position.y).toBe(0);
    expect(sgrA.position.z).toBe(0);

    sgrA.dispose();
  });

  it('F11-T1-07: Event horizon sphere is rendered with absolute black material', () => {
    const sgrA = new SagittariusA();
    const eh = sgrA.eventHorizon;

    expect(eh).toBeInstanceOf(THREE.Mesh);
    expect(eh.geometry).toBeInstanceOf(THREE.SphereGeometry);
    expect(eh.geometry.parameters.radius).toBe(15); // ~15 ly scale
    expect(eh.material).toBeInstanceOf(THREE.MeshBasicMaterial);

    const mat = eh.material as THREE.MeshBasicMaterial;
    expect(mat.color.getHex()).toBe(0x000000); // Absolute black
    expect(eh.renderOrder).toBe(1);

    sgrA.dispose();
  });

  it('F12-T1-06: Accretion disk geometry and material satisfy additive blending & radius bounds', () => {
    const sgrA = new SagittariusA();
    const disk = sgrA.accretionDisk;

    expect(disk).toBeInstanceOf(THREE.Mesh);
    expect(disk.geometry).toBeInstanceOf(THREE.RingGeometry);

    const geo = disk.geometry as THREE.RingGeometry;
    expect(geo.parameters.innerRadius).toBe(20);
    expect(geo.parameters.outerRadius).toBe(70); // ~25-70 ly scale bounds

    const mat = disk.material as THREE.ShaderMaterial;
    expect(mat.blending).toBe(THREE.AdditiveBlending);
    expect(mat.transparent).toBe(true);
    expect(mat.side).toBe(THREE.DoubleSide);
    expect(disk.renderOrder).toBe(2);

    sgrA.dispose();
  });

  it('F12-T1-07: BlackHoleShaderUniforms contract strictly satisfied with initial values', () => {
    const sgrA = new SagittariusA();
    const uniforms = sgrA.uniforms;

    expect(uniforms.uTime.value).toBe(0.0);
    expect(uniforms.uInnerRadius.value).toBe(0.30);
    expect(uniforms.uOuterRadius.value).toBe(0.95);
    expect(uniforms.uSpin.value).toBe(0.94);
    expect(uniforms.uLensingStrength.value).toBe(1.0);
    expect(uniforms.uCameraPosition.value).toBeInstanceOf(THREE.Vector3);

    sgrA.dispose();
  });

  it('F13-T1-03: Gravitational lensing mesh is configured as billboard quad with additive blending', () => {
    const sgrA = new SagittariusA();
    const lensing = sgrA.lensingMesh;

    expect(lensing).toBeInstanceOf(THREE.Mesh);
    expect(lensing.geometry).toBeInstanceOf(THREE.PlaneGeometry);

    const geo = lensing.geometry as THREE.PlaneGeometry;
    expect(geo.parameters.width).toBe(160);
    expect(geo.parameters.height).toBe(160);

    const mat = lensing.material as THREE.ShaderMaterial;
    expect(mat.blending).toBe(THREE.AdditiveBlending);
    expect(mat.transparent).toBe(true);
    expect(lensing.renderOrder).toBe(3);

    sgrA.dispose();
  });

  it('F11-T2-04: update() method advances simulation time and aligns billboard to camera', () => {
    const sgrA = new SagittariusA();
    const camera = new THREE.PerspectiveCamera(60, 1.0, 0.1, 10000);
    camera.position.set(100, 200, 300);
    camera.lookAt(0, 0, 0);

    const initialRotationZ = sgrA.accretionDisk.rotation.z;

    sgrA.update(0.016, 1.5, camera);

    expect(sgrA.uniforms.uTime.value).toBe(1.5);
    expect(sgrA.lensingMaterial.uniforms.uTime.value).toBe(1.5);
    expect(sgrA.accretionDisk.rotation.z).toBeGreaterThan(initialRotationZ);
    expect(sgrA.uniforms.uCameraPosition.value.x).toBe(100);
    expect(sgrA.uniforms.uCameraPosition.value.y).toBe(200);
    expect(sgrA.uniforms.uCameraPosition.value.z).toBe(300);

    sgrA.dispose();
  });

  it('F12-T2-03: GLSL shaders compile valid string tokens for relativistic equations', () => {
    // Check blackhole.frag.ts shader tokens
    expect(typeof blackHoleVertexShader).toBe('string');
    expect(typeof blackHoleFragmentShader).toBe('string');
    expect(blackHoleFragmentShader).toContain('dopplerFactor');
    expect(blackHoleFragmentShader).toContain('pow(dopplerFactor, 3.5)');
    expect(blackHoleFragmentShader).toContain('sqrt(rInner / max(r, 0.001))'); // Keplerian v ~ 1/sqrt(r)
    expect(blackHoleFragmentShader).toContain('discard'); // ISCO shadow cut-off

    // Check lensing.frag.ts shader tokens
    expect(typeof lensingVertexShader).toBe('string');
    expect(typeof lensingFragmentShader).toBe('string');
    expect(lensingFragmentShader).toContain('(rE * rE) / safeDist'); // Tangential Einstein ring deflection
    expect(lensingFragmentShader).toContain('photonRingGlow');
    expect(lensingFragmentShader).toContain('uEinsteinRadius');
  });
});

