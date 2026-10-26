/**
 * src/objects/LandmarkMarkers.ts
 * Interactive 3D Astronomical Landmark Beacons & Raycasting Hitboxes (F16, F17)
 * Renders glowing celestial beacons at verified landmark coordinates
 * with distance-attenuated scaling and interactive raycasting.
 */

import * as THREE from 'three';
import type { Landmark } from '../types/galaxy.js';

/**
 * Procedurally generates a glowing radial beacon texture on a canvas.
 * 100% offline and self-contained (zero network or asset loading).
 */
function createBeaconTexture(colorHex: string): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const center = size / 2;
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
  gradient.addColorStop(0.0, '#ffffff');
  gradient.addColorStop(0.2, colorHex);
  gradient.addColorStop(0.6, colorHex + '44');
  gradient.addColorStop(1.0, 'transparent');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center, center, center, 0, Math.PI * 2);
  ctx.fill();

  // Subtle outer holographic ring
  ctx.strokeStyle = colorHex + '88';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(center, center, center * 0.85, 0, Math.PI * 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const CATEGORY_COLORS: Record<string, string> = {
  supermassive_black_hole: '#fbbf24', // Amber gold
  star_system: '#fef08a',             // Warm stellar yellow
  open_cluster: '#60a5fa',            // Electric blue
  emission_nebula: '#c084fc',         // Violet nebula
  supernova_remnant: '#34d399',       // Remnant emerald
  stellar_system: '#38bdf8'           // Radiant cyan
};

export interface LandmarkBeacon {
  landmark: Landmark;
  sprite: THREE.Sprite;
  hitbox: THREE.Mesh;
  baseScale: number;
}

export class LandmarkMarkers {
  public group: THREE.Group;
  private beacons: LandmarkBeacon[] = [];
  private activeLandmarkId: string | null = null;
  private elapsedTime = 0;

  constructor(landmarks: Landmark[]) {
    this.group = new THREE.Group();
    this.group.name = 'LandmarkMarkersGroup';

    for (const lm of landmarks) {
      this.createBeacon(lm);
    }
  }

  private createBeacon(landmark: Landmark): void {
    const colorHex = CATEGORY_COLORS[landmark.category] ?? '#38bdf8';
    const texture = createBeaconTexture(colorHex);

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffffff
    });

    const sprite = new THREE.Sprite(material);
    const pos = landmark.cartesian;
    sprite.position.set(pos.x, pos.y, pos.z);

    // Initial scale tailored to landmark prominence
    const baseScale = landmark.id === 'sagittarius-a' ? 180 : 120;
    sprite.scale.set(baseScale, baseScale, 1.0);
    sprite.name = `BeaconSprite_${landmark.id}`;

    // Invisible spherical hitbox for generous pointer picking across scale orders
    const hitboxGeo = new THREE.SphereGeometry(Math.max(baseScale * 0.8, 60), 8, 8);
    const hitboxMat = new THREE.MeshBasicMaterial({
      visible: false,
      wireframe: true
    });
    const hitbox = new THREE.Mesh(hitboxGeo, hitboxMat);
    hitbox.position.copy(sprite.position);
    hitbox.name = `Hitbox_${landmark.id}`;
    hitbox.userData = { landmark, id: landmark.id };

    const beaconGroup = new THREE.Group();
    beaconGroup.name = `Beacon_${landmark.id}`;
    beaconGroup.add(sprite);
    beaconGroup.add(hitbox);

    this.group.add(beaconGroup);

    this.beacons.push({
      landmark,
      sprite,
      hitbox,
      baseScale
    });
  }

  /**
   * Raycasts against hitboxes to find landmark under pointer.
   */
  public raycast(raycaster: THREE.Raycaster): Landmark | null {
    const hitboxes = this.beacons.map((b) => b.hitbox);
    const intersects = raycaster.intersectObjects(hitboxes, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      return hit.userData.landmark as Landmark;
    }

    // Fallback: direct sprite intersection
    const sprites = this.beacons.map((b) => b.sprite);
    const spriteIntersects = raycaster.intersectObjects(sprites, false);
    if (spriteIntersects.length > 0) {
      const spriteObj = spriteIntersects[0].object;
      const matched = this.beacons.find((b) => b.sprite === spriteObj);
      if (matched) return matched.landmark;
    }

    return null;
  }

  /**
   * Sets highlighted landmark to emphasize selected beacon visually.
   */
  public highlightLandmark(id: string | null): void {
    this.activeLandmarkId = id;
  }

  /**
   * Updates beacon pulsating animation and distance-adaptive beacon scale.
   */
  public update(delta: number, camera?: THREE.Camera): void {
    this.elapsedTime += delta;
    const pulse = 1.0 + Math.sin(this.elapsedTime * 2.5) * 0.12;

    for (const beacon of this.beacons) {
      const isSelected = beacon.landmark.id === this.activeLandmarkId;
      let scale = beacon.baseScale * pulse;

      if (camera) {
        const dist = camera.position.distanceTo(beacon.sprite.position);
        // Adaptive scaling: ensure beacon remains visible at macro view without overwhelming micro view
        const distanceFactor = Math.min(Math.max(dist * 0.004, 0.5), 15.0);
        scale *= distanceFactor;
      }

      if (isSelected) {
        scale *= 1.6;
      }

      beacon.sprite.scale.set(scale, scale, 1.0);
    }
  }

  public get count(): number {
    return this.beacons.length;
  }

  public get children(): THREE.Object3D[] {
    return this.group.children;
  }
}
