/**
 * src/types/galaxy.ts
 * Core astronomical and rendering interface contracts for the 3D Milky Way Galaxy visualization.
 * Conforms strictly to PROJECT.md § Interface Contracts.
 */

import type * as THREE from 'three';

export type LandmarkCategory =
  | 'supermassive_black_hole'
  | 'star_system'
  | 'open_cluster'
  | 'emission_nebula'
  | 'supernova_remnant'
  | 'stellar_system';

export interface EquatorialCoordinates {
  ra: string;      // e.g. "17h 45m 40.04s"
  dec: string;     // e.g. "-29° 00' 28.1\""
  raDeg: number;   // Right Ascension in decimal degrees [0, 360)
  decDeg: number;  // Declination in decimal degrees [-90, +90]
  distanceLy: number; // Distance from Earth/Sun in light-years
}

export interface GalacticCoordinates {
  lDeg: number;    // Galactic longitude in decimal degrees [0, 360)
  bDeg: number;    // Galactic latitude in decimal degrees [-90, +90]
  distanceLy?: number;
}

export interface GalactocentricCartesian {
  x: number;       // Light-years from Galactic Center along Sun-GC axis
  y: number;       // Light-years along galactic rotation (l=90°)
  z: number;       // Light-years above midplane toward North Galactic Pole
}

export interface ThreeJsCoordinates {
  x: number;       // Three.js world space X (ly) = -Y_G
  y: number;       // Three.js world space Y (ly) = Z_G (NGP / Up)
  z: number;       // Three.js world space Z (ly) = X_G (Sun-GC axis)
}

export interface Landmark {
  id: string;
  name: string;
  commonName?: string;
  constellation?: string;
  category: LandmarkCategory;
  equatorial: EquatorialCoordinates;
  galactic: GalacticCoordinates;
  cartesian: ThreeJsCoordinates;
  threePosition?: [number, number, number] | number[];
  distanceFromGC: number;   // Distance to Sagittarius A* in light-years
  distanceFromSun: number;  // Distance to Sun in light-years
  spectralType?: string;
  temperatureK?: number;
  apparentMagnitude?: number;
  absoluteMagnitude?: number | null;
  description: string;
  cameraDistance: number;   // Recommended fly-to viewing distance in ly
  cameraOffset?: [number, number, number] | number[];
  scientificDetails?: Record<string, string | number | boolean>;
}

export interface GalaxyParticleBuffer {
  positions: Float32Array;    // [x, y, z] * count
  temperatures: Float32Array; // [K] * count
  sizes: Float32Array;        // [size] * count
  arms: Float32Array;         // [armIndex] * count
  count: number;              // >= 200,000 (target: 250,000)
}

export interface StarShaderUniforms {
  uTime: { value: number };
  uPixelRatio: { value: number };
  uSizeScale: { value: number };
  uCoreBloom: { value: number };
}

export interface BlackHoleShaderUniforms {
  uTime: { value: number };
  uInnerRadius: { value: number };
  uOuterRadius: { value: number };
  uSpin: { value: number };
  uLensingStrength: { value: number };
}

export interface FlyToOptions {
  durationMs?: number;
  arcHeight?: number;
  offset?: THREE.Vector3;
  onComplete?: () => void;
}

export interface ICameraController {
  flyTo(targetPosition: THREE.Vector3, viewDistance: number, options?: FlyToOptions): void;
  update(delta: number): void;
  isFlying(): boolean;
}
