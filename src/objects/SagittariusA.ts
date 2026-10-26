/**
 * src/objects/SagittariusA.ts
 * Sagittarius A* Relativistic Subsystem:
 * - Event horizon central sphere with absolute black material (MeshBasicMaterial 0x000000)
 * - Relativistic Doppler beaming accretion disk mesh (RingGeometry) with additive blending
 * - Gravitational lensing distortion billboard (PlaneGeometry) with photon ring glow
 * - Scaled to ~25-70 ly for educational visualization at Galactic Center (0, 0, 0)
 */

import * as THREE from 'three';
import { blackHoleVertexShader, blackHoleFragmentShader } from '../shaders/blackhole.frag.js';
import { lensingVertexShader, lensingFragmentShader } from '../shaders/lensing.frag.js';
import type { BlackHoleShaderUniforms } from '../types/galaxy.js';

export interface SagittariusAUniforms extends BlackHoleShaderUniforms {
  uCameraPosition: { value: THREE.Vector3 };
}

export class SagittariusA extends THREE.Group {
  public eventHorizon: THREE.Mesh;
  public accretionDisk: THREE.Mesh;
  public lensingMesh: THREE.Mesh;

  public eventHorizonGeometry: THREE.SphereGeometry;
  public eventHorizonMaterial: THREE.MeshBasicMaterial;

  public accretionDiskGeometry: THREE.RingGeometry;
  public accretionDiskMaterial: THREE.ShaderMaterial;

  public lensingGeometry: THREE.PlaneGeometry;
  public lensingMaterial: THREE.ShaderMaterial;

  public uniforms: SagittariusAUniforms;

  constructor() {
    super();
    this.name = 'SagittariusA_Subsystem';

    // 1. Central Event Horizon Sphere
    // Absolute black surface capturing all photons inside Schwarzschild radius / shadow
    // Visual radius = 15 ly (diameter = 30 ly)
    this.eventHorizonGeometry = new THREE.SphereGeometry(15, 64, 64);
    this.eventHorizonMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      depthTest: true,
      depthWrite: true
    });
    this.eventHorizon = new THREE.Mesh(this.eventHorizonGeometry, this.eventHorizonMaterial);
    this.eventHorizon.name = 'SagittariusA_EventHorizon';
    this.eventHorizon.renderOrder = 1;
    this.add(this.eventHorizon);

    // 2. Relativistic Doppler Beaming Accretion Disk Mesh
    // Visual span: r_in = 20 ly, r_out = 70 ly (conforming to public visualization scale ~25-70 ly)
    this.accretionDiskGeometry = new THREE.RingGeometry(20, 70, 128, 16);

    // Uniform contracts conforming to BlackHoleShaderUniforms (PROJECT.md)
    this.uniforms = {
      uTime: { value: 0.0 },
      uInnerRadius: { value: 0.30 }, // Normalized r_in / r_out ~ 21/70
      uOuterRadius: { value: 0.95 },
      uSpin: { value: 0.94 },        // High dimensionless Kerr spin parameter
      uLensingStrength: { value: 1.0 },
      uCameraPosition: { value: new THREE.Vector3(0, 45000, 75000) }
    };

    this.accretionDiskMaterial = new THREE.ShaderMaterial({
      vertexShader: blackHoleVertexShader,
      fragmentShader: blackHoleFragmentShader,
      uniforms: this.uniforms as unknown as { [uniform: string]: THREE.IUniform },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });

    this.accretionDisk = new THREE.Mesh(this.accretionDiskGeometry, this.accretionDiskMaterial);
    this.accretionDisk.name = 'SagittariusA_AccretionDisk';
    // Dramatic inclination angle against the Galactic Plane (X-Z)
    this.accretionDisk.rotation.x = Math.PI * 0.35;
    this.accretionDisk.rotation.y = Math.PI * 0.08;
    this.accretionDisk.renderOrder = 2;
    this.add(this.accretionDisk);

    // 3. Gravitational Lensing & Photon Ring Billboard Mesh
    // Dynamic quad billboard oriented towards camera to warp background rays
    this.lensingGeometry = new THREE.PlaneGeometry(160, 160);
    this.lensingMaterial = new THREE.ShaderMaterial({
      vertexShader: lensingVertexShader,
      fragmentShader: lensingFragmentShader,
      uniforms: {
        uTime: { value: 0.0 },
        uEinsteinRadius: { value: 0.35 },
        uLensingStrength: { value: 1.0 },
        uUseTexture: { value: false },
        tDiffuse: { value: null }
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });

    this.lensingMesh = new THREE.Mesh(this.lensingGeometry, this.lensingMaterial);
    this.lensingMesh.name = 'SagittariusA_GravitationalLensing';
    this.lensingMesh.renderOrder = 3;
    this.add(this.lensingMesh);

    // Anchored at Galactic Center origin
    this.position.set(0, 0, 0);
  }

  /**
   * Advances simulation time uniforms and Keplerian internal rotation.
   * Dynamically aligns lensing billboard and view direction to active camera.
   */
  public update(delta: number, elapsedTime?: number, camera?: THREE.Camera): void {
    const timeVal = elapsedTime !== undefined ? elapsedTime : (this.uniforms.uTime.value + delta);
    this.uniforms.uTime.value = timeVal;
    this.lensingMaterial.uniforms.uTime.value = timeVal;

    // Keplerian disk rotation in disk plane
    this.accretionDisk.rotation.z += delta * 0.08;

    // Orient lensing quad toward camera
    if (camera) {
      this.lensingMesh.quaternion.copy(camera.quaternion);
      this.uniforms.uCameraPosition.value.copy(camera.position);
    }
  }

  /**
   * Cleanly frees GPU geometry buffers and shader materials.
   */
  public dispose(): void {
    this.eventHorizonGeometry.dispose();
    this.eventHorizonMaterial.dispose();
    this.accretionDiskGeometry.dispose();
    this.accretionDiskMaterial.dispose();
    this.lensingGeometry.dispose();
    this.lensingMaterial.dispose();
  }
}

export default SagittariusA;
