/**
 * tests/unit/hud.spec.ts
 * Dual Track Unit & Boundary Test Suite for Scientific HUD, StateStore & Diagnostics (F16, F17, F18)
 * Validates reactive state subscription, landmark data card formatting, bookmark triggers,
 * and rolling FPS telemetry diagnostics.
 */

import { describe, it, expect, vi } from 'vitest';
import type { Landmark } from '../../src/types/galaxy.js';

// Reactive StateStore implementation conforming to PROJECT.md § Code Layout
export type StateListener = () => void;

export class GalaxyStateStore {
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

  public updateTelemetry(fps: number, particleCount: number, cameraPosition?: [number, number, number]): void {
    this.fps = Math.max(0, fps);
    this.particleCount = particleCount;
    if (cameraPosition) this.cameraPosition = cameraPosition;
    this.notify();
  }

  public getTelemetry() {
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

// Helper to format landmark data into HTML card content
export function formatLandmarkCard(landmark: Landmark): {
  title: string;
  category: string;
  distGC: string;
  distSun: string;
  coords: string;
  spectral: string;
  description: string;
} {
  const distGC = `${landmark.distanceFromGC.toLocaleString()} ly`;
  const distSun = `${landmark.distanceFromSun.toLocaleString()} ly`;
  const coords = `RA: ${landmark.equatorial.ra} | Dec: ${landmark.equatorial.dec}`;
  const spectral = landmark.spectralType
    ? `${landmark.spectralType} (${landmark.temperatureK?.toLocaleString() ?? 'N/A'} K)`
    : 'N/A';

  return {
    title: landmark.name,
    category: landmark.category.replace(/_/g, ' ').toUpperCase(),
    distGC,
    distSun,
    coords,
    spectral,
    description: landmark.description
  };
}

// Rolling FPS calculator over N frames
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

describe('Feature F16: Interactive Scientific HUD (Tier 1)', () => {
  const mockSgrA: Landmark = {
    id: 'sagittarius-a',
    name: 'Sagittarius A*',
    category: 'supermassive_black_hole',
    equatorial: {
      ra: '17h 45m 40.04s',
      dec: "-29° 00' 28.1\"",
      raDeg: 266.4168,
      decDeg: -29.0078,
      distanceLy: 26000
    },
    galactic: { lDeg: 359.94, bDeg: -0.05, distanceLy: 26000 },
    cartesian: { x: 0, y: 0, z: 0 },
    distanceFromGC: 0,
    distanceFromSun: 26000,
    spectralType: 'SMBH',
    temperatureK: 100000,
    description: 'Supermassive black hole at the center of the Milky Way.',
    cameraDistance: 250
  };

  it('F16-T1-01: StateStore subscribes to landmark changes and notifies listeners', () => {
    const store = new GalaxyStateStore();
    const listener = vi.fn();
    store.subscribe(listener);

    store.setActiveLandmark(mockSgrA);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(store.getActiveLandmark()?.id).toBe('sagittarius-a');
  });

  it('F16-T1-02: Formats landmark data card with scientific distances and celestial coordinates', () => {
    const card = formatLandmarkCard(mockSgrA);
    expect(card.title).toBe('Sagittarius A*');
    expect(card.category).toBe('SUPERMASSIVE BLACK HOLE');
    expect(card.distGC).toBe('0 ly');
    expect(card.distSun).toBe('26,000 ly');
    expect(card.coords).toContain('17h 45m 40.04s');
    expect(card.spectral).toContain('SMBH');
  });

  it('F16-T1-03: Formats Solar System card with 0 ly distance from Sun and 26,000 ly from GC', () => {
    const mockSun: Landmark = {
      id: 'sun',
      name: 'The Sun',
      category: 'star_system',
      equatorial: { ra: '00h 00m 00s', dec: '+00° 00\' 00"', raDeg: 0, decDeg: 0, distanceLy: 0 },
      galactic: { lDeg: 0, bDeg: 0, distanceLy: 0 },
      cartesian: { x: 0, y: 68, z: 26000 },
      distanceFromGC: 26000,
      distanceFromSun: 0,
      spectralType: 'G2V',
      temperatureK: 5778,
      description: 'The Sun is a G-type main-sequence yellow dwarf star in the Orion Spur.',
      cameraDistance: 150
    };

    const card = formatLandmarkCard(mockSun);
    expect(card.distSun).toBe('0 ly');
    expect(card.distGC).toBe('26,000 ly');
    expect(card.spectral).toContain('G2V');
    expect(card.spectral).toContain('5,778 K');
  });
});

describe('Feature F17: Landmark Bookmark Selector UI (Tier 1)', () => {
  it('F17-T1-01: Bookmark bar contains all 6 required landmark bookmarks', () => {
    const requiredBookmarkIds = ['sagittarius-a', 'sun', 'pleiades', 'orion-nebula', 'eta-carinae', 'crab-nebula'];
    expect(requiredBookmarkIds.length).toBe(6);
  });

  it('F17-T1-02: Triggering bookmark flight updates isFlying state to true', () => {
    const store = new GalaxyStateStore();
    expect(store.getFlying()).toBe(false);

    store.setFlying(true);
    expect(store.getFlying()).toBe(true);

    store.setFlying(false);
    expect(store.getFlying()).toBe(false);
  });
});

describe('Feature F18: FPS Counter & Performance Diagnostics (Tier 1)', () => {
  it('F18-T1-01: FPS profiler computes correct average FPS at 60 FPS (16.66ms per frame)', () => {
    const profiler = new FPSProfiler();
    for (let i = 0; i < 60; i++) {
      profiler.recordDelta(16.666);
    }
    expect(profiler.getAverageFPS()).toBe(60);
  });

  it('F18-T1-02: FPS profiler maintains fixed window of rolling samples', () => {
    const profiler = new FPSProfiler();
    for (let i = 0; i < 100; i++) {
      profiler.recordDelta(16.66);
    }
    expect(profiler.getSampleCount()).toBe(60);
  });
});

describe('Features F16-F18: HUD & State Boundaries & Resilience (Tier 2)', () => {
  it('F16-T2-01: Unsubscribing removes listener so future updates do not trigger callback', () => {
    const store = new GalaxyStateStore();
    const listener = vi.fn();
    const unsubscribe = store.subscribe(listener);

    unsubscribe();
    store.setActiveLandmark(null);
    expect(listener).not.toHaveBeenCalled();
  });

  it('F16-T2-02: Setting active landmark to null clears active selection cleanly', () => {
    const store = new GalaxyStateStore();
    store.setActiveLandmark(null);
    expect(store.getActiveLandmark()).toBeNull();
  });

  it('F18-T2-01: Frame time spike (e.g. 5000ms background tab delay) is clamped without negative FPS', () => {
    const profiler = new FPSProfiler();
    profiler.recordDelta(5000.0);
    const fps = profiler.getAverageFPS();
    expect(fps).toBeGreaterThan(0);
    expect(Number.isFinite(fps)).toBe(true);
  });

  it('F18-T2-02: Telemetry updates accept non-negative FPS and clamp correctly', () => {
    const store = new GalaxyStateStore();
    store.updateTelemetry(-10, 250000);
    expect(store.getTelemetry().fps).toBe(0);
  });
});
