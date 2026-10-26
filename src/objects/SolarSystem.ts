/**
 * src/objects/SolarSystem.ts
 * Physically grounded 3D Solar System simulation conforming to Keplerian orbital mechanics.
 * Solves Kepler's Equation M = E - e*sin(E) using Newton-Raphson iteration,
 * and renders the Sun, 8 major planets, Earth-Moon system, Saturn's rings, and Asteroid Belt.
 */

import * as THREE from 'three';
import { PLANETS_DATA, type PlanetData } from '../data/solarSystemData.js';
import {
  getSunTexture,
  getMercuryTexture,
  getVenusTexture,
  getEarthTexture,
  getMarsTexture,
  getJupiterTexture,
  getSaturnTexture,
  getSaturnRingTexture,
  getUranusTexture,
  getNeptuneTexture,
  getPlutoTexture
} from '../data/planetTextures.js';

export interface PlanetMeshObject {
  data: PlanetData;
  group: THREE.Group;
  mesh: THREE.Mesh;
  orbitLine: THREE.Line;
  moonGroup?: THREE.Group;
  moonMesh?: THREE.Mesh;
  ringMesh?: THREE.Mesh;
}

export class SolarSystem {
  public group = new THREE.Group();
  public planets: PlanetMeshObject[] = [];
  public sunMesh: THREE.Mesh | null = null;
  public sunLight: THREE.PointLight | null = null;
  public asteroidBelt: THREE.Points | null = null;

  private timeScale = 1.0;
  private isPaused = false;
  private accumulatedTimeDays = 0;
  private selectedPlanetId: string | null = null;

  // Scale calibration factor: maps semiMajorAxisAU to Three.js units
  // Using power scaling d = 18 * a^0.65 to ensure inner & outer planets are both readable
  private readonly ORBIT_SCALE_FACTOR = 28.0;
  private readonly ORBIT_EXPONENT = 0.68;

  constructor() {
    this.group.name = 'solar-system';
    // Anchored at Galactic coordinates of the Sun: (0, 68, 26000) ly
    this.group.position.set(0, 68, 26000);

    this.createSun();
    this.createPlanets();
    this.createAsteroidBelt();
  }

  /**
   * Calculates display radius distance in scene units from semi-major axis in AU
   */
  public auToDisplayDistance(au: number): number {
    return Math.pow(au, this.ORBIT_EXPONENT) * this.ORBIT_SCALE_FACTOR;
  }

  /**
   * Solves Kepler's equation M = E - e * sin(E) for Eccentric Anomaly E
   * using the Newton-Raphson iteration method.
   */
  public static solveKeplerEquation(M: number, e: number): number {
    // Initial guess
    let E = M + e * Math.sin(M);
    const tolerance = 1e-6;
    const maxIter = 10;

    for (let i = 0; i < maxIter; i++) {
      const deltaE = (E - e * Math.sin(E) - M) / (1.0 - e * Math.cos(E));
      E -= deltaE;
      if (Math.abs(deltaE) < tolerance) {
        break;
      }
    }
    return E;
  }

  /**
   * Computes heliocentric 3D Cartesian coordinates for a planet at time t (in days)
   */
  public computePlanetPosition(data: PlanetData, timeDays: number): THREE.Vector3 {
    const T = data.orbitalPeriodDays;
    const e = data.eccentricity;
    const aAU = data.semiMajorAxisAU;
    const iRad = (data.inclinationDeg * Math.PI) / 180.0;

    // Mean motion n = 2*PI / T (rad/day)
    const n = (2.0 * Math.PI) / T;
    const M = (n * timeDays) % (2.0 * Math.PI);

    // Solve Kepler's equation for E
    const E = SolarSystem.solveKeplerEquation(M, e);

    // True Anomaly ν
    const trueAnomaly = 2.0 * Math.atan2(
      Math.sqrt(1.0 + e) * Math.sin(E / 2.0),
      Math.sqrt(1.0 - e) * Math.cos(E / 2.0)
    );

    // Keplerian orbital radius r(AU)
    const rAU = (aAU * (1.0 - e * e)) / (1.0 + e * Math.cos(trueAnomaly));
    const rDisplay = this.auToDisplayDistance(rAU);

    // Orbital plane coordinates (before inclination)
    const xOrb = rDisplay * Math.cos(trueAnomaly);
    const zOrb = rDisplay * Math.sin(trueAnomaly);

    // Rotate by inclination angle i around X-axis
    const x = xOrb;
    const y = -zOrb * Math.sin(iRad);
    const z = zOrb * Math.cos(iRad);

    return new THREE.Vector3(x, y, z);
  }

  /**
   * 1. The Sun with radiant solar corona shader
   */
  private createSun(): void {
    // Calibrated Sun core radius (5.5 units) so it illuminates rather than drowns inner planets
    const sunGeo = new THREE.SphereGeometry(5.5, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      map: getSunTexture(),
      color: 0xfff7ed
    });
    this.sunMesh = new THREE.Mesh(sunGeo, sunMat);
    this.sunMesh.name = 'sun-core';

    // Solar Corona Glow Atmosphere
    const coronaGeo = new THREE.SphereGeometry(6.6, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.28,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const corona = new THREE.Mesh(coronaGeo, coronaMat);
    this.sunMesh.add(corona);

    // Warm Solar Point Light Illuminating Planets (Inverse Square Falloff)
    this.sunLight = new THREE.PointLight(0xfffaed, 2.8, 1500, 0.45);
    this.sunLight.position.set(0, 0, 0);
    this.group.add(this.sunLight);

    // Cosmic Ambient Fill Light so night hemispheres have soft starlight visibility
    const ambientLight = new THREE.AmbientLight(0x384158, 0.75);
    this.group.add(ambientLight);

    this.group.add(this.sunMesh);
  }

  /**
   * 2. The 8 Major Planets + Earth/Moon + Saturn's Rings
   */
  private createPlanets(): void {
    const planetTextureMap: Record<string, () => THREE.CanvasTexture> = {
      mercury: getMercuryTexture,
      venus: getVenusTexture,
      earth: getEarthTexture,
      mars: getMarsTexture,
      jupiter: getJupiterTexture,
      saturn: getSaturnTexture,
      uranus: getUranusTexture,
      neptune: getNeptuneTexture,
      pluto: getPlutoTexture
    };

    for (const data of PLANETS_DATA) {
      const planetGroup = new THREE.Group();
      planetGroup.name = `planet-${data.id}`;

      // Planet Sphere with authentic procedural NASA surface texture
      const sphereGeo = new THREE.SphereGeometry(data.renderRadius, 32, 32);
      const textureFn = planetTextureMap[data.id];
      const planetTexture = textureFn ? textureFn() : null;

      const sphereMat = new THREE.MeshStandardMaterial({
        map: planetTexture,
        roughness: 0.65,
        metalness: 0.05
      });
      const planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
      planetMesh.name = `mesh-${data.id}`;
      // Apply axial tilt
      planetMesh.rotation.z = (data.axialTiltDeg * Math.PI) / 180.0;
      planetGroup.add(planetMesh);

      // Earth Atmospheric Rayleigh Blue Rim & Moon
      let moonGroup: THREE.Group | undefined;
      let moonMesh: THREE.Mesh | undefined;
      if (data.id === 'earth') {
        // Atmospheric Rayleigh scattering shell
        const atmosGeo = new THREE.SphereGeometry(data.renderRadius * 1.04, 32, 32);
        const atmosMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide
        });
        planetGroup.add(new THREE.Mesh(atmosGeo, atmosMat));

        // Luna (Earth's Moon)
        moonGroup = new THREE.Group();
        moonGroup.name = 'earth-moon-group';
        const moonGeo = new THREE.SphereGeometry(0.85, 16, 16);
        const moonMat = new THREE.MeshStandardMaterial({
          map: getMercuryTexture(), // Cratered regolith appearance
          roughness: 0.85
        });
        moonMesh = new THREE.Mesh(moonGeo, moonMat);
        moonMesh.position.set(7.5, 0, 0);
        moonGroup.add(moonMesh);
        planetGroup.add(moonGroup);
      }

      // Saturn's Ring System with Cassini Division & Multi-ring Alpha
      let ringMesh: THREE.Mesh | undefined;
      if (data.hasRings) {
        const innerR = data.renderRadius * 1.35;
        const outerR = data.renderRadius * 2.85;
        const ringGeo = new THREE.RingGeometry(innerR, outerR, 64);
        ringGeo.rotateX(Math.PI / 2);

        const ringMat = new THREE.MeshBasicMaterial({
          map: getSaturnRingTexture(),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.88,
          depthWrite: false
        });
        ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.z = (data.axialTiltDeg * Math.PI) / 180.0;
        planetGroup.add(ringMesh);
      }

      // Keplerian Orbit Trajectory Line (Delicate, anti-aliased semi-transparent loop)
      const orbitLine = this.generateOrbitLine(data);
      this.group.add(orbitLine);

      // Initial placement
      const initPos = this.computePlanetPosition(data, 0);
      planetGroup.position.copy(initPos);

      this.group.add(planetGroup);

      this.planets.push({
        data,
        group: planetGroup,
        mesh: planetMesh,
        orbitLine,
        moonGroup,
        moonMesh,
        ringMesh
      });
    }
  }

  /**
   * Generates continuous Keplerian elliptical orbit loop line
   */
  private generateOrbitLine(data: PlanetData): THREE.Line {
    const segments = 128;
    const points: THREE.Vector3[] = [];
    const T = data.orbitalPeriodDays;

    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * T;
      points.push(this.computePlanetPosition(data, t));
    }

    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: data.color,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending
    });

    const line = new THREE.Line(geo, lineMat);
    line.name = `orbit-${data.id}`;
    return line;
  }

  /**
   * 3. Main Asteroid Belt between Mars and Jupiter (2.2 to 3.2 AU)
   */
  private createAsteroidBelt(): void {
    const count = 3500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const innerAU = 2.2;
    const outerAU = 3.2;

    for (let i = 0; i < count; i++) {
      // Semi-major axis distributed across belt
      const au = innerAU + Math.random() * (outerAU - innerAU);
      const r = this.auToDisplayDistance(au);
      const theta = Math.random() * Math.PI * 2.0;
      // Slight vertical inclination scatter
      const y = (Math.random() - 0.5) * 6.5;

      positions[i * 3] = r * Math.cos(theta);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = r * Math.sin(theta);

      // Stony / Carbonaceous asteroid grey-brown palette
      const shade = 0.5 + Math.random() * 0.4;
      colors[i * 3] = shade * 0.85;
      colors[i * 3 + 1] = shade * 0.8;
      colors[i * 3 + 2] = shade * 0.75;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.65
    });

    this.asteroidBelt = new THREE.Points(geo, mat);
    this.asteroidBelt.name = 'asteroid-belt';
    this.group.add(this.asteroidBelt);
  }

  /**
   * Time controls
   */
  public setTimeScale(scale: number): void {
    this.timeScale = scale;
  }

  public togglePause(): boolean {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  public setSelectedPlanet(planetId: string | null): void {
    this.selectedPlanetId = planetId;
    for (const p of this.planets) {
      if (p.data.id === planetId) {
        (p.orbitLine.material as THREE.LineBasicMaterial).opacity = 0.85;
      } else {
        (p.orbitLine.material as THREE.LineBasicMaterial).opacity = 0.22;
      }
    }
  }

  public getSelectedPlanet(): PlanetMeshObject | null {
    if (!this.selectedPlanetId) return null;
    return this.planets.find((p) => p.data.id === this.selectedPlanetId) ?? null;
  }

  /**
   * Animation update step: propagates planets along Keplerian orbits
   */
  public update(deltaSeconds: number): void {
    if (!this.isPaused) {
      // 1 second real-time = 1 Earth day * timeScale (standard planetary visualization speed)
      this.accumulatedTimeDays += deltaSeconds * 2.5 * this.timeScale;
    }

    // Update Sun rotation
    if (this.sunMesh) {
      this.sunMesh.rotation.y += deltaSeconds * 0.2;
    }

    // Update each planet position according to Kepler's laws
    for (const p of this.planets) {
      const newPos = this.computePlanetPosition(p.data, this.accumulatedTimeDays);
      p.group.position.copy(newPos);

      // Planet diurnal axial rotation
      if (p.data.rotationPeriodHours !== 0) {
        const rotSpeed = (24.0 / p.data.rotationPeriodHours) * deltaSeconds;
        p.mesh.rotation.y += rotSpeed;
      }

      // Moon orbit around Earth
      if (p.moonGroup) {
        // Moon orbital period ~27.3 days
        p.moonGroup.rotation.y = (this.accumulatedTimeDays / 27.3) * (2.0 * Math.PI);
      }
    }

    // Slow drift of asteroid belt
    if (this.asteroidBelt) {
      this.asteroidBelt.rotation.y += deltaSeconds * 0.015;
    }
  }
}
