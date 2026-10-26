/**
 * src/galaxy/GalaxyView.ts
 * Three.js visualization wrapper for 250,000+ star particle system.
 * Constructs THREE.BufferGeometry from GalaxyParticleBuffer and configures
 * custom THREE.ShaderMaterial with additive blending and Planck blackbody shaders.
 */

import * as THREE from 'three';
import type { GalaxyParticleBuffer, StarShaderUniforms } from '../types/galaxy.js';
import { starVertexShader } from '../shaders/star.vert.js';
import { starFragmentShader } from '../shaders/star.frag.js';

export class GalaxyView extends THREE.Group {
  public geometry: THREE.BufferGeometry;
  public material: THREE.ShaderMaterial;
  public points: THREE.Points;
  public particleCount: number;

  constructor(buffer: GalaxyParticleBuffer) {
    super();
    this.name = 'GalaxyView';
    this.particleCount = buffer.count;

    // 1. Construct single-draw-call BufferGeometry with 4 typed float attributes
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(buffer.positions, 3));
    this.geometry.setAttribute('aTemperature', new THREE.BufferAttribute(buffer.temperatures, 1));
    this.geometry.setAttribute('aSize', new THREE.BufferAttribute(buffer.sizes, 1));
    this.geometry.setAttribute('aArm', new THREE.BufferAttribute(buffer.arms, 1));

    // Compute bounding sphere for camera frustum culling
    this.geometry.computeBoundingSphere();

    // 2. Uniform contract matching StarShaderUniforms & PROJECT.md
    const pixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2.0) : 1.0;
    const uniforms: StarShaderUniforms = {
      uTime: { value: 0.0 },
      uPixelRatio: { value: pixelRatio },
      uSizeScale: { value: 350.0 },
      uCoreBloom: { value: 1.25 }
    };

    // 3. Configure custom ShaderMaterial with AdditiveBlending and depthWrite disabled
    this.material = new THREE.ShaderMaterial({
      vertexShader: starVertexShader,
      fragmentShader: starFragmentShader,
      uniforms: uniforms as unknown as { [uniform: string]: THREE.IUniform },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // 4. Construct THREE.Points and mount into this group
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.name = 'StarfieldPoints';
    this.add(this.points);
  }

  /**
   * Advances differential rotation animation via shader uniforms.
   */
  public update(delta: number, elapsedTime?: number): void {
    if (elapsedTime !== undefined) {
      this.material.uniforms.uTime.value = elapsedTime;
    } else {
      this.material.uniforms.uTime.value += delta;
    }
  }

  /**
   * Updates pixel ratio uniform upon window resize or DPI shift.
   */
  public setPixelRatio(ratio: number): void {
    if (this.material.uniforms.uPixelRatio) {
      this.material.uniforms.uPixelRatio.value = ratio;
    }
  }

  /**
   * Cleanly frees GPU buffers and compiled shaders.
   */
  public dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

export default GalaxyView;

