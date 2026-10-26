/**
 * src/objects/GalaxyNebulaClouds.ts
 * Volumetric Interstellar Gas & H II Emission Nebulae System.
 * Matches the NASA/JPL-Caltech Spitzer Space Telescope reference illustration:
 * 1. Warm golden-amber starlight envelope around the central bar
 * 2. Luminous electric-blue gas clouds tracing the 4 major spiral arms
 * 3. Hot-magenta & ruby-pink H II star-forming emission nebulae (H-alpha 656.3 nm)
 * 4. Silhouetted dark bronze-brown interstellar dust lanes
 */

import * as THREE from 'three';
import { GALAXY_SPIRAL_ARMS, computeSpiralAngle } from '../galaxy/GalaxyGenerator.js';

export class GalaxyNebulaClouds extends THREE.Group {
  public gasPoints: THREE.Points;
  public hiiPoints: THREE.Points;
  public dustPoints: THREE.Points;

  constructor() {
    super();
    this.name = 'GalaxyNebulaClouds';

    this.gasPoints = this.createSpiralArmGasClouds();
    this.hiiPoints = this.createHIIEmissionNebulae();
    this.dustPoints = this.createDustLanes();

    this.add(this.gasPoints);
    this.add(this.hiiPoints);
    this.add(this.dustPoints);
  }

  /**
   * 1. Luminous Diffuse Interstellar Gas (Electric Blue Arms + Golden Bar)
   */
  private createSpiralArmGasClouds(): THREE.Points {
    const count = 16000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    let idx = 0;

    // A. Golden Bar Interstellar Starlight Envelope (4,000 particles)
    const barAngle = (28.0 * Math.PI) / 180.0;
    const cosB = Math.cos(barAngle);
    const sinB = Math.sin(barAngle);

    for (let i = 0; i < 4000; i++) {
      const u = Math.random() * 2.0 - 1.0;
      const xLocal = u * 15500.0 * Math.pow(Math.abs(u), 0.3);
      const zLocal = (Math.random() - 0.5) * 6200.0 * (1.0 - Math.abs(u) * 0.4);
      const yLocal = (Math.random() - 0.5) * 2200.0 * (1.0 - Math.abs(u) * 0.5);

      const x = xLocal * cosB - zLocal * sinB;
      const z = xLocal * sinB + zLocal * cosB;

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = yLocal;
      positions[idx * 3 + 2] = z;

      // Golden-amber & champagne yellow starlight glow
      colors[idx * 3] = 1.0;
      colors[idx * 3 + 1] = 0.82 + Math.random() * 0.12;
      colors[idx * 3 + 2] = 0.35 + Math.random() * 0.15;
      idx++;
    }

    // B. Luminous Cerulean & Cyan Spiral Arm Gas Clouds (12,000 particles)
    const armCount = 12000;
    const perArm = Math.floor(armCount / GALAXY_SPIRAL_ARMS.length);

    for (const arm of GALAXY_SPIRAL_ARMS) {
      for (let i = 0; i < perArm && idx < count; i++) {
        const u = Math.random();
        const r = arm.rInnerLy + u * (arm.rOuterLy - arm.rInnerLy);
        const theta = computeSpiralAngle(r, arm.rInnerLy, arm.theta0Rad, arm.pitchAngleRad);

        // Soft lateral Gaussian distribution across arm width
        const width = arm.w0Ly + r * arm.alpha * 1.8;
        const offset = (Math.random() - 0.5) * width;
        const normTheta = theta + Math.PI / 2;

        const x = r * Math.cos(theta) + offset * Math.cos(normTheta);
        const z = r * Math.sin(theta) + offset * Math.sin(normTheta);
        const y = (Math.random() - 0.5) * arm.zScaleLy * 1.6;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        // Vibrant cerulean / electric blue
        colors[idx * 3] = 0.25 + Math.random() * 0.2;
        colors[idx * 3 + 1] = 0.65 + Math.random() * 0.25;
        colors[idx * 3 + 2] = 1.0;
        idx++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1400.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pts = new THREE.Points(geo, mat);
    pts.name = 'spiral-gas-clouds';
    return pts;
  }

  /**
   * 2. Ionized Hydrogen H II Emission Nebulae (Ruby-Pink & Hot Magenta)
   * Matches the prominent pink starburst knots in the NASA reference image.
   */
  private createHIIEmissionNebulae(): THREE.Points {
    const count = 3500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    let idx = 0;
    const perArm = Math.floor(count / GALAXY_SPIRAL_ARMS.length);

    for (const arm of GALAXY_SPIRAL_ARMS) {
      for (let i = 0; i < perArm && idx < count; i++) {
        const u = Math.random();
        const r = arm.rInnerLy + u * (arm.rOuterLy - arm.rInnerLy);
        const theta = computeSpiralAngle(r, arm.rInnerLy, arm.theta0Rad, arm.pitchAngleRad);

        // H II regions concentrate along the leading edge of the density wave
        const width = arm.w0Ly * 0.8 + r * arm.alpha * 0.9;
        const offset = (Math.random() - 0.45) * width;
        const normTheta = theta + Math.PI / 2;

        const x = r * Math.cos(theta) + offset * Math.cos(normTheta);
        const z = r * Math.sin(theta) + offset * Math.sin(normTheta);
        const y = (Math.random() - 0.5) * 350.0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        // Vivid H-alpha 656.3nm Magenta / Ruby Pink / Carmine
        colors[idx * 3] = 1.0;
        colors[idx * 3 + 1] = 0.15 + Math.random() * 0.22;
        colors[idx * 3 + 2] = 0.48 + Math.random() * 0.35;
        idx++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1600.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pts = new THREE.Points(geo, mat);
    pts.name = 'hii-emission-nebulae';
    return pts;
  }

  /**
   * 3. Silhouetted Interstellar Dust Extinction Lanes
   * Reddish-brown / dark bronze lanes threading along the inner edges of spiral arms.
   */
  private createDustLanes(): THREE.Points {
    const count = 4500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    let idx = 0;
    const perArm = Math.floor(count / GALAXY_SPIRAL_ARMS.length);

    for (const arm of GALAXY_SPIRAL_ARMS) {
      for (let i = 0; i < perArm && idx < count; i++) {
        const u = Math.random();
        const r = arm.rInnerLy + u * (arm.rOuterLy - arm.rInnerLy);
        const theta = computeSpiralAngle(r, arm.rInnerLy, arm.theta0Rad, arm.pitchAngleRad);

        // Dust lanes run inside the inner concave edge of the arm
        const offset = -arm.w0Ly * 0.9 - Math.random() * (r * arm.alpha * 0.6);
        const normTheta = theta + Math.PI / 2;

        const x = r * Math.cos(theta) + offset * Math.cos(normTheta);
        const z = r * Math.sin(theta) + offset * Math.sin(normTheta);
        const y = (Math.random() - 0.5) * 280.0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        // Dark reddish-brown interstellar dust absorption
        colors[idx * 3] = 0.28;
        colors[idx * 3 + 1] = 0.12;
        colors[idx * 3 + 2] = 0.05;
        idx++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1800.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false
    });

    const pts = new THREE.Points(geo, mat);
    pts.name = 'dust-lanes';
    return pts;
  }

  /**
   * Animation update step for slow differential galactic rotation
   */
  public update(time: number): void {
    if (this.gasPoints) {
      this.gasPoints.rotation.y = time * 0.005;
    }
    if (this.hiiPoints) {
      this.hiiPoints.rotation.y = time * 0.005;
    }
    if (this.dustPoints) {
      this.dustPoints.rotation.y = time * 0.005;
    }
  }
}

