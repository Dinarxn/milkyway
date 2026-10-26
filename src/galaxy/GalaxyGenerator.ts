/**
 * src/galaxy/GalaxyGenerator.ts
 * Deterministic Procedural Generator for 250,000+ Star Particle System.
 * Conforms to Reid et al. (BeSSeL Survey) spiral arm parameters, triaxial bar,
 * Hernquist oblate bulge, and thin/thick exponential stellar disks.
 */

import type { GalaxyParticleBuffer } from '../types/galaxy.js';

export interface SpiralArmDef {
  id: number;
  name: string;
  theta0Rad: number;
  pitchAngleRad: number;
  rInnerLy: number;
  rOuterLy: number;
  w0Ly: number;
  alpha: number;
  zScaleLy: number;
  count: number;
}

// Reid et al. (2014, 2019 BeSSeL VLBI Astrometry) Reference Spiral Arm Configurations
export const GALAXY_SPIRAL_ARMS: SpiralArmDef[] = [
  {
    id: 0,
    name: 'Scutum-Centaurus',
    theta0Rad: (35.0 * Math.PI) / 180,
    pitchAngleRad: (13.0 * Math.PI) / 180,
    rInnerLy: 9800,
    rOuterLy: 45600,
    w0Ly: 800,
    alpha: 0.045,
    zScaleLy: 650,
    count: 26000
  },
  {
    id: 1,
    name: 'Perseus',
    theta0Rad: (215.0 * Math.PI) / 180,
    pitchAngleRad: (10.5 * Math.PI) / 180,
    rInnerLy: 10400,
    rOuterLy: 50500,
    w0Ly: 800,
    alpha: 0.045,
    zScaleLy: 650,
    count: 26000
  },
  {
    id: 2,
    name: 'Sagittarius-Carina',
    theta0Rad: (125.0 * Math.PI) / 180,
    pitchAngleRad: (12.0 * Math.PI) / 180,
    rInnerLy: 11400,
    rOuterLy: 44000,
    w0Ly: 800,
    alpha: 0.045,
    zScaleLy: 650,
    count: 22000
  },
  {
    id: 3,
    name: 'Norma-Outer',
    theta0Rad: (305.0 * Math.PI) / 180,
    pitchAngleRad: (13.5 * Math.PI) / 180,
    rInnerLy: 9100,
    rOuterLy: 52200,
    w0Ly: 800,
    alpha: 0.045,
    zScaleLy: 650,
    count: 22000
  },
  {
    id: 4,
    name: 'Local Orion Spur',
    theta0Rad: (90.0 * Math.PI) / 180,
    pitchAngleRad: (11.4 * Math.PI) / 180,
    rInnerLy: 24000,
    rOuterLy: 31300,
    w0Ly: 400,
    alpha: 0.025,
    zScaleLy: 450,
    count: 14000
  }
];

// High-speed deterministic 32-bit pseudo-random number generator
function createMulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return function (): number {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box-Muller transformation generating standard normal deviates N(0, 1)
class BoxMullerSampler {
  private spare: number | null = null;
  private rng: () => number;

  constructor(rng: () => number) {
    this.rng = rng;
  }

  public next(): number {
    if (this.spare !== null) {
      const val = this.spare;
      this.spare = null;
      return val;
    }
    let u1 = this.rng();
    while (u1 <= 1e-15) u1 = this.rng();
    const u2 = this.rng();
    const r = Math.sqrt(-2.0 * Math.log(u1));
    const theta = 2.0 * Math.PI * u2;
    this.spare = r * Math.sin(theta);
    return r * Math.cos(theta);
  }
}

// Lin-Shu density wave logarithmic spiral ridge function
export function computeSpiralAngle(radius: number, r0: number, theta0Rad: number, pitchAngleRad: number): number {
  return theta0Rad + (1.0 / Math.tan(pitchAngleRad)) * Math.log(radius / r0);
}

// Harvard OBAFGKM stellar classification sampling tailored by galactic environment
function sampleSpiralArmStellarProps(rng: () => number): { temp: number; size: number } {
  const p = rng();
  if (p < 0.03) {
    // Class O: 30,000 - 38,000 K (Electric Blue Giants)
    return { temp: 30000 + rng() * 8000, size: 2.8 + rng() * 1.4 };
  } else if (p < 0.25) {
    // Class B: 10,000 - 30,000 K (Brilliant Blue-White)
    return { temp: 10000 + rng() * 20000, size: 2.2 + rng() * 1.0 };
  } else if (p < 0.43) {
    // Class A: 7,500 - 10,000 K (Pure White)
    return { temp: 7500 + rng() * 2500, size: 1.8 + rng() * 0.6 };
  } else if (p < 0.60) {
    // Class F: 6,000 - 7,500 K (Pale Yellow-White)
    return { temp: 6000 + rng() * 1500, size: 1.5 + rng() * 0.5 };
  } else if (p < 0.78) {
    // Class G: 5,200 - 6,000 K (Solar Gold)
    return { temp: 5200 + rng() * 800, size: 1.2 + rng() * 0.4 };
  } else if (p < 0.92) {
    // Class K: 3,700 - 5,200 K (Warm Orange)
    return { temp: 3700 + rng() * 1500, size: 1.1 + rng() * 0.3 };
  } else {
    // Class M: 2,500 - 3,700 K (Red Dwarfs)
    return { temp: 2500 + rng() * 1200, size: 1.0 + rng() * 0.2 };
  }
}

function sampleBulgeStellarProps(rng: () => number): { temp: number; size: number } {
  const p = rng();
  if (p < 0.01) {
    return { temp: 10000 + rng() * 4000, size: 2.0 };
  } else if (p < 0.05) {
    return { temp: 7500 + rng() * 1500, size: 1.7 };
  } else if (p < 0.20) {
    return { temp: 6000 + rng() * 1500, size: 1.5 };
  } else if (p < 0.60) {
    return { temp: 5200 + rng() * 800, size: 1.3 };
  } else if (p < 0.85) {
    return { temp: 3700 + rng() * 1500, size: 1.2 };
  } else {
    return { temp: 2600 + rng() * 1100, size: 1.0 };
  }
}

function sampleNuclearCoreStellarProps(rng: () => number): { temp: number; size: number } {
  const p = rng();
  if (p < 0.08) {
    return { temp: 32000 + rng() * 8000, size: 3.5 + rng() * 1.2 };
  } else if (p < 0.25) {
    return { temp: 12000 + rng() * 18000, size: 2.5 + rng() * 0.8 };
  } else if (p < 0.65) {
    return { temp: 5500 + rng() * 4500, size: 1.8 + rng() * 0.6 };
  } else {
    return { temp: 3500 + rng() * 2000, size: 1.4 + rng() * 0.4 };
  }
}

function sampleThinDiskStellarProps(rng: () => number): { temp: number; size: number } {
  const p = rng();
  if (p < 0.02) {
    return { temp: 10000 + rng() * 15000, size: 2.2 };
  } else if (p < 0.10) {
    return { temp: 7500 + rng() * 2500, size: 1.8 };
  } else if (p < 0.25) {
    return { temp: 6000 + rng() * 1500, size: 1.5 };
  } else if (p < 0.60) {
    return { temp: 5200 + rng() * 800, size: 1.3 };
  } else if (p < 0.85) {
    return { temp: 3700 + rng() * 1500, size: 1.2 };
  } else {
    return { temp: 2500 + rng() * 1200, size: 1.0 };
  }
}

function sampleThickDiskStellarProps(rng: () => number): { temp: number; size: number } {
  const p = rng();
  if (p < 0.05) {
    return { temp: 6000 + rng() * 1500, size: 1.4 };
  } else if (p < 0.30) {
    return { temp: 5200 + rng() * 800, size: 1.3 };
  } else if (p < 0.70) {
    return { temp: 3700 + rng() * 1500, size: 1.2 };
  } else {
    return { temp: 2500 + rng() * 1200, size: 1.0 };
  }
}

export class GalaxyGenerator {
  /**
   * Generates a single-pass deterministic GalaxyParticleBuffer containing 250,000 star particles.
   * Partitions the particle budget across arms (44%), bar (10%), bulge (14%), core (2%),
   * thin disk (22%), and thick disk/halo (8%).
   */
  public static generate(targetCount = 250000, seed = 0x5a17e0): GalaxyParticleBuffer {
    const positions = new Float32Array(targetCount * 3);
    const temperatures = new Float32Array(targetCount);
    const sizes = new Float32Array(targetCount);
    const arms = new Float32Array(targetCount);

    const rng = createMulberry32(seed);
    const sampler = new BoxMullerSampler(rng);

    let idx = 0;

    // Helper to store safely clamped coordinates
    const storeParticle = (x: number, y: number, z: number, temp: number, size: number, armId: number) => {
      if (idx >= targetCount) return;

      // Ensure radial bound within 64,000 ly (galactic boundary R <= 65,000 ly)
      const r = Math.sqrt(x * x + z * z);
      if (r > 64000.0) {
        const factor = 64000.0 / r;
        x *= factor;
        z *= factor;
      }

      // Ensure vertical disk height within |Y| <= 11,500 ly (boundary |Y| <= 12,000 ly)
      if (Math.abs(y) > 11500.0) {
        y = Math.sign(y) * 11500.0;
      }

      // Protect against non-finite values
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
        x = 0;
        y = 0;
        z = 0;
      }

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;
      temperatures[idx] = Math.max(2500.0, Math.min(42000.0, temp));
      sizes[idx] = Math.max(1.0, Math.min(6.0, size));
      arms[idx] = Math.floor(Math.max(0, armId));

      idx++;
    };

    // -------------------------------------------------------------------------
    // 1. Lin-Shu Density Wave Spiral Arms (4 Major + Local Orion Spur): 110,000 stars (44%)
    // -------------------------------------------------------------------------
    for (const arm of GALAXY_SPIRAL_ARMS) {
      for (let i = 0; i < arm.count && idx < targetCount; i++) {
        const u = rng();
        const rNorm = Math.pow(u, 1.2); // slight concentration toward inner/mid arm
        const radius = arm.rInnerLy + rNorm * (arm.rOuterLy - arm.rInnerLy);

        const thetaRidge = computeSpiralAngle(radius, arm.rInnerLy, arm.theta0Rad, arm.pitchAngleRad);
        const armWidth = arm.w0Ly + arm.alpha * radius;
        const angularDispersion = armWidth / radius;

        const deltaTheta = sampler.next() * angularDispersion * 0.75;
        const theta = thetaRidge + deltaTheta;

        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);
        const y = sampler.next() * arm.zScaleLy;

        const props = sampleSpiralArmStellarProps(rng);
        storeParticle(x, y, z, props.temp, props.size, arm.id);
      }
    }

    // -------------------------------------------------------------------------
    // 2. Triaxial Gaussian Galactic Bar (a=13k ly, b=3.9k ly, c=2k ly at 27°): 25,000 stars (10%)
    // -------------------------------------------------------------------------
    const barCount = 25000;
    const aBar = 13000.0;
    const bBar = 3900.0;
    const cBar = 2000.0;
    const phiBar = (27.0 * Math.PI) / 180;
    const cosPhi = Math.cos(phiBar);
    const sinPhi = Math.sin(phiBar);

    for (let i = 0; i < barCount && idx < targetCount; i++) {
      // Gaussian distribution along principal triaxial axes
      const zx = Math.max(-2.6, Math.min(2.6, sampler.next()));
      const zz = Math.max(-2.6, Math.min(2.6, sampler.next()));
      const zy = Math.max(-2.6, Math.min(2.6, sampler.next()));

      const xPrime = zx * (aBar / 2.3);
      const zPrime = zz * (bBar / 2.3);
      const yPrime = zy * (cBar / 2.3);

      // Rotate in galactic X-Z midplane by bar angle phi
      const x = xPrime * cosPhi - zPrime * sinPhi;
      const z = xPrime * sinPhi + zPrime * cosPhi;
      const y = yPrime;

      const props = sampleBulgeStellarProps(rng);
      storeParticle(x, y, z, props.temp, props.size, 5); // 5 = Bar
    }

    // -------------------------------------------------------------------------
    // 3. Central Hernquist Bulge (scale radius rb=0.7 kpc / 2,283 ly, q=0.75): 35,000 stars (14%)
    // -------------------------------------------------------------------------
    const bulgeCount = 35000;
    const rbLy = 2283.0;
    const qFlattening = 0.75;

    for (let i = 0; i < bulgeCount && idx < targetCount; i++) {
      // Inverse CDF sampling of Hernquist mass profile: r = rb * sqrt(u) / (1 - sqrt(u))
      const u = Math.min(0.95, rng());
      const sqrtU = Math.sqrt(u);
      const rHernquist = Math.min(12000.0, rbLy * (sqrtU / (1.0 - sqrtU)));

      // Uniform spherical direction
      const cosTheta = rng() * 2.0 - 1.0;
      const sinTheta = Math.sqrt(Math.max(0.0, 1.0 - cosTheta * cosTheta));
      const phi = rng() * 2.0 * Math.PI;

      const x = rHernquist * sinTheta * Math.cos(phi);
      const z = rHernquist * sinTheta * Math.sin(phi);
      const y = rHernquist * cosTheta * qFlattening;

      const props = sampleBulgeStellarProps(rng);
      storeParticle(x, y, z, props.temp, props.size, 6); // 6 = Bulge
    }

    // -------------------------------------------------------------------------
    // 4. Dense Nuclear Core (Sgr A* environs, R < 500 ly): 5,000 stars (2%)
    // -------------------------------------------------------------------------
    const coreCount = 5000;
    for (let i = 0; i < coreCount && idx < targetCount; i++) {
      const u = Math.min(0.97, rng());
      const rCore = -120.0 * Math.log(1.0 - u);

      const cosTheta = rng() * 2.0 - 1.0;
      const sinTheta = Math.sqrt(Math.max(0.0, 1.0 - cosTheta * cosTheta));
      const phi = rng() * 2.0 * Math.PI;

      const x = rCore * sinTheta * Math.cos(phi);
      const z = rCore * sinTheta * Math.sin(phi);
      const y = rCore * cosTheta * 0.75;

      const props = sampleNuclearCoreStellarProps(rng);
      storeParticle(x, y, z, props.temp, props.size, 7); // 7 = Nuclear Core
    }

    // -------------------------------------------------------------------------
    // 5. Thin Stellar Disk (radial Rd=8,500 ly, vertical z0=980 ly): 55,000 stars (22%)
    // -------------------------------------------------------------------------
    const thinDiskCount = 55000;
    const rdThin = 8500.0;
    const z0ThinBase = 980.0;

    for (let i = 0; i < thinDiskCount && idx < targetCount; i++) {
      // Exponential radial surface density Sigma(R) proportional to R * exp(-R/Rd)
      const u1 = Math.max(1e-6, rng());
      const u2 = Math.max(1e-6, rng());
      let rDisk = -rdThin * Math.log(u1 * u2) * 0.75;
      if (rDisk > 52000.0) rDisk = 52000.0 * Math.pow(rng(), 0.5);

      const phi = rng() * 2.0 * Math.PI;
      const x = rDisk * Math.cos(phi);
      const z = rDisk * Math.sin(phi);

      // Outer disk flaring above 32,600 ly (10 kpc)
      let z0 = z0ThinBase;
      if (rDisk > 32600.0) {
        z0 *= 1.0 + 0.5 * ((rDisk - 32600.0) / 32600.0);
      }

      // Vertical Laplace distribution
      const uZ = Math.max(1e-6, rng());
      const sign = rng() < 0.5 ? -1 : 1;
      const y = -z0 * Math.log(uZ) * sign * 0.65;

      const props = sampleThinDiskStellarProps(rng);
      storeParticle(x, y, z, props.temp, props.size, 8); // 8 = Thin Disk
    }

    // -------------------------------------------------------------------------
    // 6. Thick Stellar Disk / Halo (radial Rd=11,700 ly, vertical z0=2,930 ly): 20,000 stars (8%)
    // -------------------------------------------------------------------------
    const thickDiskCount = 20000;
    const rdThick = 11700.0;
    const z0Thick = 2930.0;

    for (let i = 0; i < thickDiskCount && idx < targetCount; i++) {
      const u1 = Math.max(1e-6, rng());
      const u2 = Math.max(1e-6, rng());
      let rDisk = -rdThick * Math.log(u1 * u2) * 0.8;
      if (rDisk > 58000.0) rDisk = 58000.0 * Math.pow(rng(), 0.5);

      const phi = rng() * 2.0 * Math.PI;
      const x = rDisk * Math.cos(phi);
      const z = rDisk * Math.sin(phi);

      const uZ = Math.max(1e-6, rng());
      const sign = rng() < 0.5 ? -1 : 1;
      const y = -z0Thick * Math.log(uZ) * sign * 0.75;

      const props = sampleThickDiskStellarProps(rng);
      storeParticle(x, y, z, props.temp, props.size, 9); // 9 = Thick Disk / Halo
    }

    // Fill any edge-case remaining particles to exactly match targetCount
    while (idx < targetCount) {
      const u = rng();
      const r = 2000.0 + u * 45000.0;
      const phi = rng() * 2.0 * Math.PI;
      const x = r * Math.cos(phi);
      const z = r * Math.sin(phi);
      const y = sampler.next() * 980.0;
      const props = sampleThinDiskStellarProps(rng);
      storeParticle(x, y, z, props.temp, props.size, 8);
    }

    return {
      positions,
      temperatures,
      sizes,
      arms,
      count: targetCount
    };
  }
}

export function generateGalaxyParticles(targetCount = 250000, seed = 0x5a17e0): GalaxyParticleBuffer {
  return GalaxyGenerator.generate(targetCount, seed);
}

export default GalaxyGenerator;

