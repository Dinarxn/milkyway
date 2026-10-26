/**
 * src/ui/HUD.ts
 * Scientific Glassmorphic Heads-Up Display (F16, F17, F18)
 * Renders astrophysical metadata cards, interactive bookmark navigation bar,
 * and high-frequency real-time telemetry diagnostics.
 */

import * as THREE from 'three';
import type { Landmark } from '../types/galaxy.js';
import { StateStore, FPSProfiler, formatLandmarkCard } from './StateStore.js';
import { fetchNasaApod, fetchNasaLandmarkImage } from '../data/nasaApi.js';
import { NASA_SCIENCE_TOPICS, type NasaScienceTopic } from '../data/nasaTopics.js';
import { PLANETS_DATA, SUN_DATA, type PlanetData } from '../data/solarSystemData.js';

const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  supermassive_black_hole: 'Supermassive Black Hole',
  star_system: 'Star System (G-Dwarf)',
  open_cluster: 'Open Star Cluster',
  emission_nebula: 'Diffuse Emission Nebula & Stellar Nursery',
  supernova_remnant: 'Pulsar Wind Supernova Remnant',
  stellar_system: 'Luminous Blue Variable / Hypergiant Binary'
};

const CATEGORY_EMOJIS: Record<string, string> = {
  supermassive_black_hole: '🕳️',
  star_system: '☀️',
  open_cluster: '🌟',
  emission_nebula: '🌌',
  supernova_remnant: '💥',
  stellar_system: '⭐'
};

export class HUD {
  private stateStore: StateStore;
  private landmarks: Landmark[];
  private onSelectLandmark: (landmark: Landmark) => void;
  private onResetView?: () => void;

  private fpsProfiler = new FPSProfiler();
  private lastTelemetryUpdate = 0;
  private unsubscribeStore?: () => void;
  private onSelectNasaTopic?: (topic: NasaScienceTopic) => void;
  private onSelectPlanet?: (planet: PlanetData | null) => void;
  private onSetTimeScale?: (scale: number) => void;

  // DOM Elements
  private hudCard: HTMLElement | null = null;
  private bookmarkBar: HTMLElement | null = null;
  private telemetryFps: HTMLElement | null = null;
  private telemetryParticles: HTMLElement | null = null;
  private telemetryCamera: HTMLElement | null = null;
  private apodModal: HTMLElement | null = null;
  private currentLandmarkId: string | null = null;
  private nasaTopicCard: HTMLElement | null = null;
  private nasaTopicsBar: HTMLElement | null = null;
  private activeTopicId: string | null = null;
  private solarSystemBar: HTMLElement | null = null;
  private planetCard: HTMLElement | null = null;
  private activePlanetId: string | null = null;

  public getActiveTopicId(): string | null {
    return this.activeTopicId;
  }

  public getActivePlanetId(): string | null {
    return this.activePlanetId;
  }

  constructor(
    stateStore: StateStore,
    landmarks: Landmark[],
    onSelectLandmark: (landmark: Landmark) => void,
    onResetView?: () => void,
    onSelectNasaTopic?: (topic: NasaScienceTopic) => void,
    onSelectPlanet?: (planet: PlanetData | null) => void,
    onSetTimeScale?: (scale: number) => void
  ) {
    this.stateStore = stateStore;
    this.landmarks = landmarks;
    this.onSelectLandmark = onSelectLandmark;
    this.onResetView = onResetView;
    this.onSelectNasaTopic = onSelectNasaTopic;
    this.onSelectPlanet = onSelectPlanet;
    this.onSetTimeScale = onSetTimeScale;

    this.bindDOMElements();
    this.buildBookmarkBar();
    this.buildNasaTopicsBar();
    this.buildSolarSystemBar();
    this.subscribeState();
  }

  private bindDOMElements(): void {
    if (typeof document === 'undefined') return;

    this.hudCard = document.getElementById('hud-landmark-card');
    this.bookmarkBar = document.getElementById('hud-bookmark-bar');
    this.telemetryFps = document.getElementById('telemetry-fps');
    this.telemetryParticles = document.getElementById('telemetry-particles');
    this.telemetryCamera = document.getElementById('telemetry-camera');

    // Create NASA Topic Card container on the DOM if not present
    if (!document.getElementById('hud-nasa-topic-card')) {
      this.nasaTopicCard = document.createElement('div');
      this.nasaTopicCard.id = 'hud-nasa-topic-card';
      this.nasaTopicCard.className = 'hud-panel hud-interactive';
      document.body.appendChild(this.nasaTopicCard);
    } else {
      this.nasaTopicCard = document.getElementById('hud-nasa-topic-card');
    }

    // Create Solar System Planet Card container on the DOM if not present
    if (!document.getElementById('hud-planet-card')) {
      this.planetCard = document.createElement('div');
      this.planetCard.id = 'hud-planet-card';
      this.planetCard.className = 'hud-panel hud-interactive';
      document.body.appendChild(this.planetCard);
    } else {
      this.planetCard = document.getElementById('hud-planet-card');
    }

    this.setupNasaApodUI();
  }

  /**
   * Builds the NASA Science Exploration toolbar (Exoplanets, Life, Stars, Galaxies, etc.)
   */
  private buildNasaTopicsBar(): void {
    if (typeof document === 'undefined') return;

    const hudTitle = document.getElementById('hud-title');
    if (!hudTitle) return;

    if (!document.getElementById('hud-nasa-topics-bar')) {
      this.nasaTopicsBar = document.createElement('div');
      this.nasaTopicsBar.id = 'hud-nasa-topics-bar';

      for (const topic of NASA_SCIENCE_TOPICS) {
        const pill = document.createElement('button');
        pill.className = 'nasa-topic-pill';
        pill.setAttribute('data-topic-id', topic.id);
        pill.innerHTML = `<span>${topic.icon}</span> <span>${topic.title}</span>`;
        pill.title = `${topic.title}: ${topic.tagline}`;

        pill.addEventListener('click', () => {
          this.selectNasaTopic(topic);
        });

        this.nasaTopicsBar.appendChild(pill);
      }

      hudTitle.appendChild(this.nasaTopicsBar);
    } else {
      this.nasaTopicsBar = document.getElementById('hud-nasa-topics-bar');
    }
  }

  /**
   * Activates a NASA Science Topic card and triggers camera / 3D layer
   */
  public selectNasaTopic(topic: NasaScienceTopic | null): void {
    this.activeTopicId = topic?.id ?? null;

    // Update pill active classes
    if (this.nasaTopicsBar) {
      const pills = this.nasaTopicsBar.querySelectorAll('.nasa-topic-pill');
      pills.forEach((p) => {
        if (topic && p.getAttribute('data-topic-id') === topic.id) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    if (!this.nasaTopicCard) return;

    if (!topic) {
      this.nasaTopicCard.classList.remove('active');
      this.nasaTopicCard.style.display = 'none';
      return;
    }

    this.nasaTopicCard.style.display = 'block';
    this.nasaTopicCard.classList.add('active');

    const factsHtml = topic.keyFacts
      .map(
        (f) => `
        <div class="nasa-fact-item">
          <span class="nasa-fact-label">${f.label}</span>
          <span class="nasa-fact-val">${f.value}</span>
        </div>`
      )
      .join('');

    this.nasaTopicCard.innerHTML = `
      <div class="nasa-topic-header">
        <div>
          <h2>${topic.icon} ${topic.title}</h2>
          <div class="nasa-topic-tagline">${topic.tagline}</div>
        </div>
        <button id="nasa-topic-close" class="landmark-close-btn" aria-label="Close">✕</button>
      </div>

      <p class="landmark-description">${topic.summary}</p>

      <div class="nasa-facts-grid">
        ${factsHtml}
      </div>

      <a href="${topic.url}" target="_blank" rel="noopener noreferrer" class="nasa-official-link">
        <span>🚀</span> <span>Explore on Official NASA Science ↗</span>
      </a>
    `;

    const closeBtn = document.getElementById('nasa-topic-close');
    closeBtn?.addEventListener('click', () => {
      this.selectNasaTopic(null);
    });

    if (this.onSelectNasaTopic) {
      this.onSelectNasaTopic(topic);
    }
  }

  /**
   * Builds the Solar System interactive planet navigation & time control bar
   */
  private buildSolarSystemBar(): void {
    if (typeof document === 'undefined') return;

    const footer = document.getElementById('hud-footer');
    if (!footer) return;

    if (!document.getElementById('hud-solar-system-bar')) {
      this.solarSystemBar = document.createElement('div');
      this.solarSystemBar.id = 'hud-solar-system-bar';
      this.solarSystemBar.className = 'hud-interactive';

      const titleSpan = document.createElement('span');
      titleSpan.style.cssText =
        'font-size:0.7rem;font-weight:700;color:#fbbf24;text-transform:uppercase;letter-spacing:0.06em;margin-right:4px;';
      titleSpan.textContent = '☀️ Solar System:';
      this.solarSystemBar.appendChild(titleSpan);

      // Sun button
      const sunBtn = document.createElement('button');
      sunBtn.className = 'planet-pill';
      sunBtn.setAttribute('data-planet-id', 'sun');
      sunBtn.innerHTML = `<span>☀️</span> <span>Sun</span>`;
      sunBtn.title = `${SUN_DATA.name} — ${SUN_DATA.spectralClass}`;
      sunBtn.addEventListener('click', () => {
        this.selectSun();
      });
      this.solarSystemBar.appendChild(sunBtn);

      const PLANET_EMOJIS: Record<string, string> = {
        mercury: '⚪',
        venus: '🟡',
        earth: '🌍',
        mars: '🔴',
        jupiter: '🟤',
        saturn: '🪐',
        uranus: '🔵',
        neptune: '🔷',
        pluto: '❄️'
      };

      for (const p of PLANETS_DATA) {
        const btn = document.createElement('button');
        btn.className = 'planet-pill';
        btn.setAttribute('data-planet-id', p.id);
        const emoji = PLANET_EMOJIS[p.id] ?? '🪐';
        btn.innerHTML = `<span>${emoji}</span> <span>${p.name}</span>`;
        btn.title = `${p.name} — a = ${p.semiMajorAxisAU} AU, Period = ${p.orbitalPeriodDays.toFixed(1)} days`;

        btn.addEventListener('click', () => {
          this.selectPlanet(p);
        });

        this.solarSystemBar.appendChild(btn);
      }

      // Time control group
      const timeGroup = document.createElement('div');
      timeGroup.className = 'time-control-group';

      const speeds = [
        { label: '⏸️', scale: 0 },
        { label: '1x', scale: 1 },
        { label: '5x', scale: 5 },
        { label: '25x', scale: 25 },
        { label: '100x', scale: 100 }
      ];

      for (const sp of speeds) {
        const tBtn = document.createElement('button');
        tBtn.className = `time-btn ${sp.scale === 1 ? 'active' : ''}`;
        tBtn.textContent = sp.label;
        tBtn.title = `Simulation speed: ${sp.label}`;
        tBtn.addEventListener('click', () => {
          timeGroup.querySelectorAll('.time-btn').forEach((b) => b.classList.remove('active'));
          tBtn.classList.add('active');
          if (this.onSetTimeScale) {
            this.onSetTimeScale(sp.scale);
          }
        });
        timeGroup.appendChild(tBtn);
      }

      this.solarSystemBar.appendChild(timeGroup);

      // Insert above landmark bookmark bar
      if (this.bookmarkBar) {
        footer.insertBefore(this.solarSystemBar, this.bookmarkBar);
      } else {
        footer.appendChild(this.solarSystemBar);
      }
    } else {
      this.solarSystemBar = document.getElementById('hud-solar-system-bar');
    }
  }

  /**
   * Focuses on a planet and opens its NASA Planetary Fact Sheet card
   */
  public selectPlanet(planet: PlanetData | null): void {
    this.activePlanetId = planet?.id ?? null;

    if (this.solarSystemBar) {
      const pills = this.solarSystemBar.querySelectorAll('.planet-pill');
      pills.forEach((p) => {
        if (planet && p.getAttribute('data-planet-id') === planet.id) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    if (!this.planetCard) return;

    if (!planet) {
      this.planetCard.classList.remove('active');
      this.planetCard.style.display = 'none';
      return;
    }

    this.planetCard.style.display = 'block';
    this.planetCard.classList.add('active');

    const distKm = Math.round(planet.semiMajorAxisAU * 149597870.7).toLocaleString();
    const missionsHtml = planet.nasaMissions
      .map((m) => `<span class="mission-tag">${m}</span>`)
      .join('');

    this.planetCard.innerHTML = `
      <div class="planet-card-header">
        <div>
          <h2>${planet.name}</h2>
          <div class="planet-type-badge">${planet.type.replace('_', ' ')}</div>
        </div>
        <button id="planet-card-close" class="landmark-close-btn" aria-label="Close">✕</button>
      </div>

      <div class="planet-grid">
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Orbital Distance (a)</span>
          <span class="landmark-grid-value">${planet.semiMajorAxisAU} AU (${distKm} km)</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Orbital Period (T)</span>
          <span class="landmark-grid-value">${planet.orbitalPeriodDays.toFixed(1)} days (${(planet.orbitalPeriodDays / 365.25).toFixed(2)} yr)</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Eccentricity (e)</span>
          <span class="landmark-grid-value">${planet.eccentricity}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Surface Gravity</span>
          <span class="landmark-grid-value">${planet.surfaceGravityMs2} m/s²</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Mean Temperature</span>
          <span class="landmark-grid-value">${planet.meanTempC}°C</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Moons</span>
          <span class="landmark-grid-value">${planet.moonsCount} ${planet.notableMoons ? `(${planet.notableMoons.join(', ')})` : ''}</span>
        </div>
      </div>

      <div style="font-size:0.75rem;margin-bottom:8px;">
        <span class="landmark-grid-label">Atmosphere:</span>
        <span style="color:#cbd5e1;"> ${planet.atmosphere}</span>
      </div>

      <p class="landmark-description" style="margin-bottom:10px;">${planet.description}</p>

      <div>
        <span class="landmark-grid-label">NASA Missions:</span>
        <div class="planet-mission-tags">${missionsHtml}</div>
      </div>
    `;

    const closeBtn = document.getElementById('planet-card-close');
    closeBtn?.addEventListener('click', () => {
      this.selectPlanet(null);
    });

    if (this.onSelectPlanet) {
      this.onSelectPlanet(planet);
    }
  }

  public selectSun(): void {
    this.activePlanetId = 'sun';
    if (this.solarSystemBar) {
      const pills = this.solarSystemBar.querySelectorAll('.planet-pill');
      pills.forEach((p) => {
        if (p.getAttribute('data-planet-id') === 'sun') {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    if (!this.planetCard) return;
    this.planetCard.style.display = 'block';
    this.planetCard.classList.add('active');

    this.planetCard.innerHTML = `
      <div class="planet-card-header">
        <div>
          <h2>${SUN_DATA.name}</h2>
          <div class="planet-type-badge">${SUN_DATA.spectralClass}</div>
        </div>
        <button id="planet-card-close" class="landmark-close-btn" aria-label="Close">✕</button>
      </div>

      <div class="planet-grid">
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Surface Temperature</span>
          <span class="landmark-grid-value">${SUN_DATA.surfaceTempK.toLocaleString()} K</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Core Temperature</span>
          <span class="landmark-grid-value">${SUN_DATA.coreTempK.toLocaleString()} K</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Equatorial Radius</span>
          <span class="landmark-grid-value">${SUN_DATA.radiusKm.toLocaleString()} km</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Total Luminosity</span>
          <span class="landmark-grid-value">${SUN_DATA.luminosityWatts}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Mass</span>
          <span class="landmark-grid-value">${SUN_DATA.massKg}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Stellar Age</span>
          <span class="landmark-grid-value">${SUN_DATA.ageBillionYears} Billion Years</span>
        </div>
      </div>

      <div style="font-size:0.75rem;margin-bottom:8px;">
        <span class="landmark-grid-label">Chemical Composition:</span>
        <span style="color:#cbd5e1;"> ${SUN_DATA.composition}</span>
      </div>

      <p class="landmark-description">${SUN_DATA.description}</p>
    `;

    const closeBtn = document.getElementById('planet-card-close');
    closeBtn?.addEventListener('click', () => {
      this.selectPlanet(null);
    });

    if (this.onSelectPlanet) {
      this.onSelectPlanet(null);
    }
  }

  private setupNasaApodUI(): void {
    if (typeof document === 'undefined') return;

    // Attach NASA APOD button to HUD title if not already present
    const hudTitle = document.getElementById('hud-title');
    if (hudTitle && !document.getElementById('hud-nasa-apod-btn')) {
      const apodBtn = document.createElement('button');
      apodBtn.id = 'hud-nasa-apod-btn';
      apodBtn.className = 'nasa-apod-btn';
      apodBtn.innerHTML = `<span>🛰️</span> <span>NASA Daily Observation</span>`;
      apodBtn.title = 'View NASA Astronomy Picture of the Day (Live API)';
      apodBtn.addEventListener('click', () => {
        this.openNasaApodModal();
      });
      hudTitle.appendChild(apodBtn);
    }

    // Create Modal Element if not present
    if (!document.getElementById('nasa-apod-modal')) {
      this.apodModal = document.createElement('div');
      this.apodModal.id = 'nasa-apod-modal';
      this.apodModal.innerHTML = `
        <div class="nasa-modal-card">
          <div class="nasa-modal-header">
            <div>
              <h2 id="apod-modal-title">NASA Astronomy Picture of the Day</h2>
              <p id="apod-modal-date">Connecting to NASA Open API...</p>
            </div>
            <button id="apod-modal-close" class="landmark-close-btn" aria-label="Close">✕</button>
          </div>
          <div id="apod-modal-body" style="text-align: center; color: #94a3b8; font-size: 0.85rem;">
            Loading official NASA telescope feed...
          </div>
        </div>
      `;
      document.body.appendChild(this.apodModal);

      // Close when clicking outside card or close button
      const closeBtn = document.getElementById('apod-modal-close');
      closeBtn?.addEventListener('click', () => {
        this.apodModal?.classList.remove('active');
      });

      this.apodModal.addEventListener('click', (e) => {
        if (e.target === this.apodModal) {
          this.apodModal?.classList.remove('active');
        }
      });
    } else {
      this.apodModal = document.getElementById('nasa-apod-modal');
    }
  }

  public async openNasaApodModal(): Promise<void> {
    if (!this.apodModal) return;
    this.apodModal.classList.add('active');

    const titleEl = document.getElementById('apod-modal-title');
    const dateEl = document.getElementById('apod-modal-date');
    const bodyEl = document.getElementById('apod-modal-body');

    if (bodyEl) {
      bodyEl.innerHTML = `<div style="padding: 30px; color: #38bdf8;">🛰️ Contacting NASA Open API (api.nasa.gov)...</div>`;
    }

    const apod = await fetchNasaApod();
    if (!apod) {
      if (bodyEl) {
        bodyEl.innerHTML = `<div style="padding: 20px; color: #f87171;">Unable to connect to NASA API feed. Please check network connection.</div>`;
      }
      return;
    }

    if (titleEl) titleEl.textContent = apod.title;
    if (dateEl) dateEl.textContent = `Date: ${apod.date} ${apod.copyright ? `| © ${apod.copyright}` : ''}`;
    if (bodyEl) {
      const isImage = apod.media_type === 'image';
      bodyEl.innerHTML = `
        ${isImage ? `<img src="${apod.url}" alt="${apod.title}" class="nasa-modal-img" />` : `<iframe src="${apod.url}" style="width:100%;height:320px;border:none;border-radius:8px;"></iframe>`}
        <p class="nasa-modal-text" style="margin-top: 14px; text-align: left;">${apod.explanation}</p>
        ${apod.hdurl ? `<div style="margin-top: 10px; text-align: right;"><a href="${apod.hdurl}" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; font-size: 0.78rem; text-decoration: underline;">Open NASA Full-Resolution Original ↗</a></div>` : ''}
      `;
    }
  }

  /**
   * Builds interactive landmark bookmark buttons.
   */
  private buildBookmarkBar(): void {
    if (!this.bookmarkBar) return;
    this.bookmarkBar.innerHTML = '';

    // 1. Overview / Macro Button
    const macroBtn = document.createElement('button');
    macroBtn.className = 'bookmark-btn';
    macroBtn.setAttribute('data-landmark', 'macro');
    macroBtn.setAttribute('data-id', 'macro');
    macroBtn.innerHTML = `<span>🌌</span> <span>Galactic Overview</span>`;
    macroBtn.title = 'Fly to Macro 100,000 ly Milky Way Overview';
    macroBtn.addEventListener('click', () => {
      this.stateStore.setActiveLandmark(null);
      if (this.onResetView) {
        this.onResetView();
      }
    });
    this.bookmarkBar.appendChild(macroBtn);

    // 2. Curated Landmark Buttons
    for (const lm of this.landmarks) {
      const btn = document.createElement('button');
      btn.className = 'bookmark-btn';
      btn.setAttribute('data-landmark', lm.id);
      btn.setAttribute('data-id', lm.id);

      const emoji = CATEGORY_EMOJIS[lm.category] ?? '✨';
      btn.innerHTML = `<span>${emoji}</span> <span>${lm.name}</span>`;
      btn.title = `${lm.name} (${CATEGORY_DISPLAY_NAMES[lm.category] ?? lm.category}) — ${lm.distanceFromSun.toLocaleString()} ly from Sun`;

      btn.addEventListener('click', () => {
        this.onSelectLandmark(lm);
      });

      this.bookmarkBar.appendChild(btn);
    }
  }

  /**
   * Subscribes to state updates to render the Scientific Landmark Card.
   */
  private subscribeState(): void {
    this.unsubscribeStore = this.stateStore.subscribe(() => {
      const activeLandmark = this.stateStore.getActiveLandmark();
      this.renderLandmarkCard(activeLandmark);
      this.updateActiveBookmark(activeLandmark?.id ?? null);
    });
  }

  /**
   * Renders the glassmorphic metadata card for the active celestial body.
   */
  private renderLandmarkCard(landmark: Landmark | null): void {
    if (!this.hudCard) return;

    if (!landmark) {
      this.hudCard.classList.remove('active');
      this.hudCard.style.display = 'none';
      this.hudCard.innerHTML = '';
      return;
    }

    const formatted = formatLandmarkCard(landmark);
    const categoryLabel = CATEGORY_DISPLAY_NAMES[landmark.category] ?? formatted.category;

    this.hudCard.style.display = 'block';
    this.hudCard.classList.add('active');

    this.hudCard.innerHTML = `
      <div class="landmark-card-header">
        <div>
          <h2>${landmark.name}</h2>
          <div class="landmark-category-badge">${categoryLabel}</div>
        </div>
        <button id="hud-card-close" class="landmark-close-btn" title="Close Inspection Card" aria-label="Close">✕</button>
      </div>

      <div class="landmark-grid">
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Galactic Center Dist.</span>
          <span class="landmark-grid-value">${formatted.distGC}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Solar Distance</span>
          <span class="landmark-grid-value">${formatted.distSun}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Equatorial (ICRS)</span>
          <span class="landmark-grid-value">${formatted.coords}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Galactic Coordinates</span>
          <span class="landmark-grid-value">${formatted.galacticCoords}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Spectral & Temperature</span>
          <span class="landmark-grid-value">${formatted.spectral}</span>
        </div>
        <div class="landmark-grid-item">
          <span class="landmark-grid-label">Viewing Scale</span>
          <span class="landmark-grid-value">${landmark.cameraDistance.toLocaleString()} ly</span>
        </div>
      </div>

      <div id="landmark-nasa-section" class="landmark-nasa-section">
        <div class="landmark-nasa-header">
          <span class="landmark-nasa-badge">🔭 NASA Archive Observation</span>
          <span class="landmark-nasa-verified">✓ NASA API Connected</span>
        </div>
        <div id="landmark-nasa-content" class="landmark-nasa-content">
          <span style="font-size:0.74rem;color:#94a3b8;">Retrieving telescope imagery...</span>
        </div>
      </div>

      <p class="landmark-description">${landmark.description}</p>

      <button id="hud-fly-to-btn" class="landmark-fly-btn">
        <span>🚀</span> <span>Re-center Camera on Target</span>
      </button>
    `;

    // Asynchronously load authentic NASA imagery for this landmark
    this.loadNasaObservation(landmark);

    // Wire Card Actions
    const closeBtn = document.getElementById('hud-card-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.stateStore.setActiveLandmark(null);
      });
    }

    const flyBtn = document.getElementById('hud-fly-to-btn');
    if (flyBtn) {
      flyBtn.addEventListener('click', () => {
        this.onSelectLandmark(landmark);
      });
    }
  }

  /**
   * Fetches authentic NASA imagery for the active landmark.
   */
  private async loadNasaObservation(landmark: Landmark): Promise<void> {
    const currentId = landmark.id;
    this.currentLandmarkId = currentId;

    const data = await fetchNasaLandmarkImage(landmark.name);
    // If user has navigated away from this landmark before fetch completes, abort
    if (this.currentLandmarkId !== currentId) return;

    const container = document.getElementById('landmark-nasa-content');
    if (!container) return;

    if (!data) {
      container.innerHTML = `<span style="font-size:0.72rem;color:#94a3b8;">Telescope surveys registered under standard celestial coordinates.</span>`;
      return;
    }

    container.innerHTML = `
      <img src="${data.imageUrl}" alt="${data.title}" class="landmark-nasa-thumb" />
      <div class="landmark-nasa-meta">
        <div class="landmark-nasa-title" title="${data.title}">${data.title}</div>
        <div class="landmark-nasa-id">NASA ID: ${data.nasaId}</div>
      </div>
    `;
  }

  /**
   * Highlights active bookmark button corresponding to current selection.
   */
  private updateActiveBookmark(activeId: string | null): void {
    if (!this.bookmarkBar) return;
    const buttons = this.bookmarkBar.querySelectorAll('.bookmark-btn');
    buttons.forEach((btn) => {
      const dataId = btn.getAttribute('data-id');
      if (activeId && dataId === activeId) {
        btn.classList.add('active');
      } else if (!activeId && dataId === 'macro') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  /**
   * High-frequency render loop update step for FPS telemetry and camera distance.
   */
  public update(delta: number, camera?: THREE.Camera, particleCount = 250000): void {
    const deltaMs = delta * 1000.0;
    this.fpsProfiler.recordDelta(deltaMs);

    const now = performance.now();
    if (now - this.lastTelemetryUpdate >= 200) {
      this.lastTelemetryUpdate = now;
      const avgFps = this.fpsProfiler.getAverageFPS();

      if (this.telemetryFps) {
        this.telemetryFps.innerHTML = `<span class="telemetry-indicator"></span> ${avgFps} FPS`;
      }

      if (this.telemetryParticles) {
        this.telemetryParticles.textContent = `${particleCount.toLocaleString()} Stars`;
      }

      if (this.telemetryCamera && camera) {
        const cx = Math.round(camera.position.x / 1000);
        const cy = Math.round(camera.position.y / 1000);
        const cz = Math.round(camera.position.z / 1000);
        const distCenter = Math.round(camera.position.length()).toLocaleString();
        this.telemetryCamera.textContent = `Coord: (${cx}k, ${cy}k, ${cz}k) ly | GC: ${distCenter} ly`;
      }

      if (camera) {
        this.stateStore.updateTelemetry(avgFps, particleCount, [
          camera.position.x,
          camera.position.y,
          camera.position.z
        ]);
      }
    }
  }

  public destroy(): void {
    if (this.unsubscribeStore) {
      this.unsubscribeStore();
      this.unsubscribeStore = undefined;
    }
  }
}
