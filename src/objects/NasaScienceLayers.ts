/**
 * src/objects/NasaScienceLayers.ts
 * 3D Visualization Layers corresponding to NASA Science Directorate domains:
 * - Galactic Habitable Zone (Search for Life)
 * - Dark Matter Halo (Dark Matter)
 * - Exoplanetary Systems with Orbits (Exoplanets)
 * - Local Group Galaxy Vectors (Galaxies & Andromeda Collision)
 * - Cosmic Expansion Grid (Dark Energy / Big Bang)
 */

import * as THREE from 'three';

export class NasaScienceLayers {
  public group = new THREE.Group();

  private habitableZoneMesh: THREE.Mesh | null = null;
  private darkMatterPoints: THREE.Points | null = null;
  private exoplanetsGroup: THREE.Group | null = null;
  private localGroupGroup: THREE.Group | null = null;

  constructor() {
    this.group.name = 'nasa-science-layers';
    this.createHabitableZone();
    this.createDarkMatterHalo();
    this.createExoplanetSystems();
    this.createLocalGroupVectors();
  }

  /**
   * 1. Galactic Habitable Zone (Search for Life)
   * Goldilocks toroidal ring between 23,000 and 30,000 ly from galactic core.
   */
  private createHabitableZone(): void {
    const innerRadius = 23000;
    const outerRadius = 30000;
    const ringGeo = new THREE.RingGeometry(innerRadius, outerRadius, 96, 8);
    // Rotate ring to lie in the galactic plane (XZ plane)
    ringGeo.rotateX(-Math.PI / 2);

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.habitableZoneMesh = new THREE.Mesh(ringGeo, ringMat);
    this.habitableZoneMesh.name = 'habitable-zone';
    this.habitableZoneMesh.visible = false;
    this.group.add(this.habitableZoneMesh);
  }

  /**
   * 2. Dark Matter Spherical Halo
   * Spherical pseudo-isothermal distribution extending from core to 120,000 ly.
   */
  private createDarkMatterHalo(): void {
    const count = 12000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Navarro-Frenk-White / isothermal density profile
      const r = Math.pow(Math.random(), 0.6) * 110000 + 4000;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.85; // slightly oblate
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Deep violet-cyan hue
      colors[i * 3] = 0.45;
      colors[i * 3 + 1] = 0.2;
      colors[i * 3 + 2] = 0.95;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 450,
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.darkMatterPoints = new THREE.Points(geo, mat);
    this.darkMatterPoints.name = 'dark-matter-halo';
    this.darkMatterPoints.visible = false;
    this.group.add(this.darkMatterPoints);
  }

  /**
   * 3. Confirmed Exoplanet Systems (NASA Kepler/TESS/JWST Discoveries)
   * Highlighting host stars with pulsing orbital discs.
   */
  private createExoplanetSystems(): void {
    this.exoplanetsGroup = new THREE.Group();
    this.exoplanetsGroup.name = 'exoplanets-group';

    const exoplanetCatalogs = [
      { name: 'TRAPPIST-1 (7 Rocky Worlds)', pos: [26000 + 39, 68 - 12, 18], color: 0x38bdf8, worlds: 7 },
      { name: 'Proxima Centauri b (Habitable)', pos: [26000 + 4.24, 68 - 1, 1], color: 0x4ade80, worlds: 3 },
      { name: 'Kepler-452b (Earth Cousin)', pos: [26000 + 1400, 68 + 250, 480], color: 0xfbbf24, worlds: 1 },
      { name: 'Kepler-186f (Habitable Zone)', pos: [26000 + 580, 68 + 120, -180], color: 0x22c55e, worlds: 5 },
      { name: '51 Pegasi b (First Hot Jupiter)', pos: [26000 + 50, 68 - 15, 32], color: 0xf97316, worlds: 1 },
      { name: 'WASP-12b (Ultra-Hot Jupiter)', pos: [26000 + 1410, 68 + 320, -650], color: 0xef4444, worlds: 1 }
    ];

    for (const exo of exoplanetCatalogs) {
      // Orbital beacon ring
      const ringGeo = new THREE.RingGeometry(8, 28, 32);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: exo.color,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(exo.pos[0], exo.pos[1], exo.pos[2]);

      // Planet system center sphere
      const sphereGeo = new THREE.SphereGeometry(6, 16, 16);
      const sphereMat = new THREE.MeshBasicMaterial({ color: exo.color });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(exo.pos[0], exo.pos[1], exo.pos[2]);

      this.exoplanetsGroup.add(ring);
      this.exoplanetsGroup.add(sphere);
    }

    this.exoplanetsGroup.visible = false;
    this.group.add(this.exoplanetsGroup);
  }

  /**
   * 4. Local Group Galaxies & Collision Vectors
   * Andromeda (M31) approach vector, Large Magellanic Cloud (LMC), Small Magellanic Cloud (SMC).
   */
  private createLocalGroupVectors(): void {
    this.localGroupGroup = new THREE.Group();
    this.localGroupGroup.name = 'local-group-vectors';

    // Andromeda Galaxy (M31) - 2.5 million ly away, approaching at 110 km/s
    // Represented in scaled cosmological coordinate preview
    const andromedaDir = new THREE.Vector3(-0.55, 0.35, -0.75).normalize();
    const arrowLength = 95000;
    const arrowHelper = new THREE.ArrowHelper(
      andromedaDir,
      new THREE.Vector3(0, 0, 0),
      arrowLength,
      0xec4899,
      4000,
      2500
    );
    this.localGroupGroup.add(arrowHelper);

    // Magellanic Clouds position indicators
    // LMC: ~160,000 ly in southern halo
    const lmcMarker = new THREE.Mesh(
      new THREE.SphereGeometry(1500, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 })
    );
    lmcMarker.position.set(-15000, -55000, 45000);
    this.localGroupGroup.add(lmcMarker);

    this.localGroupGroup.visible = false;
    this.group.add(this.localGroupGroup);
  }

  /**
   * Activates or toggles specific NASA scientific visualization layer
   */
  public setLayer(layer: string): void {
    if (this.habitableZoneMesh) {
      this.habitableZoneMesh.visible = layer === 'habitable_zone';
    }
    if (this.darkMatterPoints) {
      this.darkMatterPoints.visible = layer === 'dark_matter';
    }
    if (this.exoplanetsGroup) {
      this.exoplanetsGroup.visible = layer === 'exoplanets';
    }
    if (this.localGroupGroup) {
      this.localGroupGroup.visible = layer === 'galaxies';
    }
  }

  /**
   * Animation update for pulsing orbital elements and halo rotation
   */
  public update(time: number): void {
    if (this.darkMatterPoints && this.darkMatterPoints.visible) {
      this.darkMatterPoints.rotation.y = time * 0.008;
    }
    if (this.exoplanetsGroup && this.exoplanetsGroup.visible) {
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.15;
      this.exoplanetsGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.RingGeometry) {
          child.scale.set(pulse, pulse, pulse);
        }
      });
    }
  }
}
