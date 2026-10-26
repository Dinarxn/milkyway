/**
 * src/ui/StateStore.ts
 * Reactive State Management & Astronomical Telemetry Container (F16, F17, F18)
 * Decouples 3D WebGL render loop from DOM HUD presentation layer.
 */

import type { Landmark } from '../types/galaxy.js';

export type StateListener = () => void;

export class StateStore {
  private activeLandmark: Landmark | null = null;
  private fps = 60;
  private particleCount = 250000;
  private cameraPosition: [number, number, number] = [0, 45000, 75000];
  private isFlying = false;
  private listeners: Set<StateListener> = new Set();

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }

  public setActiveLandmark(landmark: Landmark | null): void {
    this.activeLandmark = landmark;
    this.notify();
  }

  public getActiveLandmark(): Landmark | null {
    return this.activeLandmark;
  }

  public updateTelemetry(
    fps: number,
    particleCount: number,
    cameraPosition?: [number, number, number]
  ): void {
    this.fps = Math.max(0, fps);
    this.particleCount = particleCount;
    if (cameraPosition) {
      this.cameraPosition = cameraPosition;
    }
    this.notify();
  }

  public getTelemetry(): {
    fps: number;
    particleCount: number;
    cameraPosition: [number, number, number];
  } {
    return {
      fps: this.fps,
      particleCount: this.particleCount,
      cameraPosition: this.cameraPosition
    };
  }

  public setFlying(flying: boolean): void {
    this.isFlying = flying;
    this.notify();
  }

  public getFlying(): boolean {
    return this.isFlying;
  }
}

// Alias for test compatibility
export { StateStore as GalaxyStateStore };

/**
 * Helper to format landmark metadata into scientific card representation.
 */
export function formatLandmarkCard(landmark: Landmark): {
  title: string;
  category: string;
  distGC: string;
  distSun: string;
  coords: string;
  galacticCoords: string;
  spectral: string;
  description: string;
} {
  const distGC = `${landmark.distanceFromGC.toLocaleString()} ly`;
  const distSun = `${landmark.distanceFromSun.toLocaleString()} ly`;
  const coords = `RA: ${landmark.equatorial.ra} | Dec: ${landmark.equatorial.dec}`;
  const galacticCoords = `l = ${landmark.galactic.lDeg.toFixed(2)}°, b = ${landmark.galactic.bDeg.toFixed(2)}°`;
  const spectral = landmark.spectralType
    ? `${landmark.spectralType} (${landmark.temperatureK?.toLocaleString() ?? 'N/A'} K)`
    : 'N/A';

  return {
    title: landmark.name,
    category: landmark.category.replace(/_/g, ' ').toUpperCase(),
    distGC,
    distSun,
    coords,
    galacticCoords,
    spectral,
    description: landmark.description
  };
}

/**
 * Rolling FPS calculator with moving window average over N frames.
 */
export class FPSProfiler {
  private frameTimes: number[] = [];
  private maxSamples = 60;

  public recordDelta(deltaMs: number): void {
    const clampedDelta = Math.min(Math.max(deltaMs, 0.1), 1000.0);
    this.frameTimes.push(clampedDelta);
    if (this.frameTimes.length > this.maxSamples) {
      this.frameTimes.shift();
    }
  }

  public getAverageFPS(): number {
    if (this.frameTimes.length === 0) return 60;
    const sum = this.frameTimes.reduce((acc, v) => acc + v, 0);
    const avgDelta = sum / this.frameTimes.length;
    return Math.round(1000.0 / avgDelta);
  }

  public getSampleCount(): number {
    return this.frameTimes.length;
  }
}
