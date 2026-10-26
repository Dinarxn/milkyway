/**
 * src/main.ts
 * Application bootstrap for the 3D Milky Way Galaxy visualization (Milestones 1-4).
 * Mounts 250,000-particle GalaxyView, Sagittarius A* relativistic subsystem,
 * 6-DOF OrbitControls, smootherstep parabolic CameraFlyTo, LandmarkMarkers,
 * and scientific reactive glassmorphic HUD.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import landmarks from './data/landmarks.json';
import { SUN_GC_DISTANCE_LY, SUN_MIDPLANE_Z_LY } from './data/coordinates.js';
import type { Landmark } from './types/galaxy.js';
import { GalaxyGenerator } from './galaxy/GalaxyGenerator.js';
import { GalaxyView } from './galaxy/GalaxyView.js';
import { GalaxyNebulaClouds } from './objects/GalaxyNebulaClouds.js';
import { SagittariusA } from './objects/SagittariusA.js';
import { LandmarkMarkers } from './objects/LandmarkMarkers.js';
import { NasaScienceLayers } from './objects/NasaScienceLayers.js';
import { SolarSystem } from './objects/SolarSystem.js';
import type { NasaScienceTopic } from './data/nasaTopics.js';
import type { PlanetData } from './data/solarSystemData.js';
import { CameraFlyTo } from './camera/CameraFlyTo.js';
import { StateStore } from './ui/StateStore.js';
import { HUD } from './ui/HUD.js';
import './ui/styles.css';

console.log(
  `[MilkyWay3D] Initialized with ${landmarks.length} verified astronomical landmarks.`
);
console.log(
  `[MilkyWay3D] Solar parameters: R_0 = ${SUN_GC_DISTANCE_LY} ly, z_0 = ${SUN_MIDPLANE_Z_LY} ly.`
);

const typedLandmarks = landmarks as unknown as Landmark[];

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer | null = null;
let controls: OrbitControls | null = null;
let cameraFlyTo: CameraFlyTo | null = null;
let galaxyView: GalaxyView | null = null;
let galaxyNebulaClouds: GalaxyNebulaClouds | null = null;
let sagittariusA: SagittariusA | null = null;
let landmarkMarkers: LandmarkMarkers | null = null;
let nasaScienceLayers: NasaScienceLayers | null = null;
let solarSystem: SolarSystem | null = null;
let stateStore: StateStore | null = null;
let hud: HUD | null = null;
let animationFrameId: number | null = null;
let isContextLost = false;

function initThreeScene(canvas: HTMLCanvasElement): void {
  // 1. Scene
  scene = new THREE.Scene();
  scene.name = 'MilkyWayScene';

  // 2. Perspective Camera (FOV 60°, near 0.1 ly, far 300,000 ly)
  // Oblique viewpoint looking down at galactic disk
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 300000.0);
  camera.position.set(0, 45000, 75000);
  camera.up.set(0, 1, 0); // North Galactic Pole (+Y)
  camera.lookAt(0, 0, 0); // Galactic Center (Sagittarius A*)

  // 3. WebGLRenderer with high-performance configuration and logarithmic depth buffer
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    logarithmicDepthBuffer: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));

  // 4. Configure 6-DOF OrbitControls with inertia damping (F14)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;
  controls.enablePan = true;
  controls.screenSpacePanning = true;
  controls.minDistance = 15.0; // Local cluster micro limit
  controls.maxDistance = 160000.0; // Full Milky Way macro limit
  controls.minPolarAngle = 0.05; // Prevent gimbal pole flipping
  controls.maxPolarAngle = Math.PI - 0.05;
  controls.target.set(0, 0, 0);
  controls.update();

  // 5. Initialize Reactive StateStore (F16)
  stateStore = new StateStore();

  // 6. Mount Parabolic Smootherstep CameraFlyTo Interpolation Engine (F15)
  cameraFlyTo = new CameraFlyTo(camera, controls, stateStore);

  // Immediate cancellation/release on user manual drag
  controls.addEventListener('start', () => {
    if (cameraFlyTo?.isFlying()) {
      cameraFlyTo.cancel();
    }
  });

  canvas.addEventListener('pointerdown', () => {
    if (cameraFlyTo?.isFlying()) {
      cameraFlyTo.cancel();
    }
  });

  canvas.addEventListener(
    'wheel',
    () => {
      if (cameraFlyTo?.isFlying()) {
        cameraFlyTo.cancel();
      }
    },
    { passive: true }
  );

  // 7. Generate 250,000 procedural stars and mount GalaxyView (F5-F10)
  const particleBuffer = GalaxyGenerator.generate(250000);
  galaxyView = new GalaxyView(particleBuffer);
  scene.add(galaxyView);

  // 7b. Mount Volumetric Interstellar Gas & H II Emission Nebulae Clouds (NASA Spitzer Model)
  galaxyNebulaClouds = new GalaxyNebulaClouds();
  scene.add(galaxyNebulaClouds);

  // 8. Mount Sagittarius A* Relativistic Subsystem at origin (0, 0, 0) (F11-F13)
  sagittariusA = new SagittariusA();
  sagittariusA.position.set(0, 0, 0);
  if (!sagittariusA.accretionDiskMaterial.fragmentShader.includes('uniform mat4 modelMatrix;')) {
    sagittariusA.accretionDiskMaterial.fragmentShader =
      'uniform mat4 modelMatrix;\n' + sagittariusA.accretionDiskMaterial.fragmentShader;
    sagittariusA.accretionDiskMaterial.needsUpdate = true;
  }
  scene.add(sagittariusA);

  // 9. Mount Landmark Markers & Interactive Beacons (F16, F17)
  landmarkMarkers = new LandmarkMarkers(typedLandmarks);
  scene.add(landmarkMarkers.group);

  // 10. Mount NASA Science Directorate Visualization Layers
  nasaScienceLayers = new NasaScienceLayers();
  scene.add(nasaScienceLayers.group);

  // 11. Mount 3D Solar System (Sun, 8 Planets, Earth-Moon, Saturn Rings, Asteroid Belt)
  solarSystem = new SolarSystem();
  scene.add(solarSystem.group);

  // Landmark Selection Dispatcher
  function selectLandmark(id: string): void {
    const landmark = typedLandmarks.find((l) => l.id === id);
    if (!landmark || !cameraFlyTo) return;
    stateStore?.setActiveLandmark(landmark);
    landmarkMarkers?.highlightLandmark(landmark.id);
    cameraFlyTo.flyToLandmark(landmark);
  }

  function resetToOverview(): void {
    if (!cameraFlyTo) return;
    stateStore?.setActiveLandmark(null);
    landmarkMarkers?.highlightLandmark(null);
    nasaScienceLayers?.setLayer('');
    solarSystem?.setSelectedPlanet(null);
    hud?.selectNasaTopic(null);
    hud?.selectPlanet(null);
    cameraFlyTo.flyTo(new THREE.Vector3(0, 0, 0), {
      offset: new THREE.Vector3(0, 45000, 75000),
      duration: 2500
    });
  }

  function onSelectNasaTopic(topic: NasaScienceTopic): void {
    if (!nasaScienceLayers || !cameraFlyTo) return;
    nasaScienceLayers.setLayer(topic.visualLayer);
    if (topic.cameraPreset) {
      cameraFlyTo.flyTo(
        new THREE.Vector3(
          topic.cameraPreset.target[0],
          topic.cameraPreset.target[1],
          topic.cameraPreset.target[2]
        ),
        {
          offset: new THREE.Vector3(
            topic.cameraPreset.x - topic.cameraPreset.target[0],
            topic.cameraPreset.y - topic.cameraPreset.target[1],
            topic.cameraPreset.z - topic.cameraPreset.target[2]
          ),
          duration: 2200
        }
      );
    }
  }

  function onSelectPlanet(planet: PlanetData | null): void {
    if (!solarSystem || !cameraFlyTo) return;
    solarSystem.setSelectedPlanet(planet?.id ?? null);
    if (!planet) return;

    // The Sun's galactic coordinates: (0, 68, 26000) ly
    const sunWorldPos = new THREE.Vector3(0, 68, 26000);
    const planetLocalPos = solarSystem.computePlanetPosition(planet, 0);
    const targetWorldPos = sunWorldPos.clone().add(planetLocalPos);

    // Camera offset for close planetary inspection
    const camOffset = new THREE.Vector3(
      0,
      planet.renderRadius * 4.0 + 12,
      planet.renderRadius * 5.5 + 20
    );

    cameraFlyTo.flyTo(targetWorldPos, {
      offset: camOffset,
      duration: 2200
    });
  }

  function onSetTimeScale(scale: number): void {
    if (!solarSystem) return;
    solarSystem.setTimeScale(scale);
  }

  // 12. Initialize Scientific HUD Overlay (F16, F17, F18)
  hud = new HUD(
    stateStore,
    typedLandmarks,
    (lm) => selectLandmark(lm.id),
    resetToOverview,
    onSelectNasaTopic,
    onSelectPlanet,
    onSetTimeScale
  );

  // 11. Interactive Raycasting on Canvas
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let pointerDownCoords = { x: 0, y: 0 };

  canvas.addEventListener('pointerdown', (e) => {
    pointerDownCoords = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!landmarkMarkers) return;
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const hit = landmarkMarkers.raycast(raycaster);
    canvas.style.cursor = hit ? 'pointer' : 'default';
  });

  canvas.addEventListener('pointerup', (e) => {
    if (!landmarkMarkers) return;
    const dx = Math.abs(e.clientX - pointerDownCoords.x);
    const dy = Math.abs(e.clientY - pointerDownCoords.y);

    // Treat as selection click only if not a drag action
    if (dx < 6 && dy < 6) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const hit = landmarkMarkers.raycast(raycaster);
      if (hit) {
        selectLandmark(hit.id);
      }
    }
  });

  // 12. Expose global diagnostic interface on window.__GALAXY__ for automated test runners
  (window as any).__GALAXY__ = {
    renderer,
    scene,
    camera,
    controls,
    cameraFlyTo,
    navigation: {
      controls,
      cameraFlyTo,
      get flyToActive() {
        return cameraFlyTo?.isFlying() ?? false;
      }
    },
    hud,
    stateStore,
    store: stateStore,
    starfield: galaxyView,
    galaxyView,
    blackHole: sagittariusA,
    sagittariusA,
    landmarks: {
      count: typedLandmarks.length,
      children: landmarkMarkers.group.children,
      group: landmarkMarkers.group,
      list: typedLandmarks
    },
    landmarkMarkers,
    nasaScienceLayers,
    solarSystem,
    galaxyNebulaClouds,
    selectLandmark: (id: string) => selectLandmark(id),
    resetToOverview
  };

  // 13. WebGL context loss prevention & recovery
  canvas.addEventListener(
    'webglcontextlost',
    (event: Event) => {
      event.preventDefault();
      isContextLost = true;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      console.warn('[MilkyWay3D] WebGL context lost. Simulation loop paused.');
    },
    false
  );

  canvas.addEventListener(
    'webglcontextrestored',
    () => {
      console.info('[MilkyWay3D] WebGL context restored. Resuming simulation loop...');
      isContextLost = false;
      lastTime = performance.now();
      animationFrameId = requestAnimationFrame(animate);
    },
    false
  );

  // 14. Dynamic resize handling
  window.addEventListener('resize', () => {
    if (!renderer || !camera) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const pixelRatio = Math.min(window.devicePixelRatio, 2.0);
    renderer.setPixelRatio(pixelRatio);
    if (galaxyView) {
      galaxyView.setPixelRatio(pixelRatio);
    }
  });

  // 15. 60 FPS Render loop with telemetry diagnostics
  let lastTime = performance.now();

  function animate(currentTime: number): void {
    if (isContextLost) return;
    animationFrameId = requestAnimationFrame(animate);

    const delta = Math.min(0.1, (currentTime - lastTime) / 1000.0);
    lastTime = currentTime;
    const elapsedTime = currentTime / 1000.0;

    // Update camera navigation controls and fly-to interpolator
    if (controls) {
      controls.update();
    }
    if (cameraFlyTo) {
      cameraFlyTo.update(delta);
    }

    if (galaxyView) {
      galaxyView.update(delta, elapsedTime);
    }

    if (galaxyNebulaClouds) {
      galaxyNebulaClouds.update(elapsedTime);
    }

    if (sagittariusA) {
      sagittariusA.update(delta, elapsedTime, camera);
    }

    if (landmarkMarkers) {
      landmarkMarkers.update(delta, camera);
    }

    if (nasaScienceLayers) {
      nasaScienceLayers.update(elapsedTime);
    }

    if (solarSystem) {
      solarSystem.update(delta);
    }

    if (hud) {
      hud.update(delta, camera, galaxyView?.particleCount ?? 250000);
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  animationFrameId = requestAnimationFrame(animate);
}

// DOM mount
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement | null;
    if (canvas) {
      console.log('[MilkyWay3D] Initializing WebGL scene, OrbitControls, and HUD...');
      initThreeScene(canvas);
      console.log('[MilkyWay3D] WebGL Canvas mounted and render loop active.');
    }
  });
}

export {
  typedLandmarks,
  scene,
  camera,
  renderer,
  controls,
  cameraFlyTo,
  galaxyView,
  galaxyNebulaClouds,
  sagittariusA,
  landmarkMarkers,
  nasaScienceLayers,
  solarSystem,
  stateStore,
  hud
};
