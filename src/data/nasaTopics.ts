/**
 * src/data/nasaTopics.ts
 * Curated NASA Science Directorate exploration domains:
 * Exoplanets, Search for Life, Stars, Galaxies, Black Holes, The Big Bang, Dark Energy, and Dark Matter.
 */

export interface NasaScienceTopic {
  id: string;
  title: string;
  url: string;
  icon: string;
  tagline: string;
  summary: string;
  keyFacts: { label: string; value: string }[];
  visualLayer: 'exoplanets' | 'habitable_zone' | 'stars' | 'galaxies' | 'black_holes' | 'big_bang' | 'dark_energy' | 'dark_matter';
  cameraPreset?: { x: number; y: number; z: number; target: [number, number, number] };
}

export const NASA_SCIENCE_TOPICS: NasaScienceTopic[] = [
  {
    id: 'exoplanets',
    title: 'Exoplanets',
    url: 'https://science.nasa.gov/exoplanets/',
    icon: '🪐',
    tagline: 'Planets Beyond Our Solar System',
    summary:
      'Over 5,500 confirmed worlds orbit other stars in our galaxy. NASA missions like Kepler, TESS, and the James Webb Space Telescope explore their atmospheres, orbital dynamics, and surface conditions.',
    keyFacts: [
      { label: 'Confirmed Exoplanets', value: '5,500+' },
      { label: 'Candidate Worlds', value: '10,000+' },
      { label: 'Key Discoveries', value: 'TRAPPIST-1, Proxima b, Kepler-186f' },
      { label: 'Detection Methods', value: 'Transit Photometry & Radial Velocity' }
    ],
    visualLayer: 'exoplanets',
    cameraPreset: { x: 26050, y: 350, z: 26150, target: [26000, 68, 0] }
  },
  {
    id: 'search-for-life',
    title: 'The Search for Life in the Universe',
    url: 'https://science.nasa.gov/universe/search-for-life/',
    icon: '🧬',
    tagline: 'Galactic Habitable Zone & Biosignatures',
    summary:
      'The Galactic Habitable Zone (GHZ) spans 23,000 to 30,000 light-years from the galactic core—far enough from dangerous central gamma radiation, yet rich enough in heavy elements for rocky planet formation.',
    keyFacts: [
      { label: 'Galactic Habitable Zone', value: '23,000 – 30,000 ly from core' },
      { label: 'Biosignature Targets', value: 'O2, O3, CH4, H2O, CO2' },
      { label: 'Key Ocean Worlds', value: 'Europa, Enceladus, Titan' },
      { label: 'Primary Telescopes', value: 'James Webb (JWST) & Habitable Worlds Obs.' }
    ],
    visualLayer: 'habitable_zone',
    cameraPreset: { x: 0, y: 48000, z: 42000, target: [0, 0, 0] }
  },
  {
    id: 'stars',
    title: 'Stars & Stellar Evolution',
    url: 'https://science.nasa.gov/universe/stars/',
    icon: '⭐',
    tagline: 'From Protostars to Supernovae',
    summary:
      'Stars are cosmic nuclear engines that forge the heavy elements necessary for life. The Milky Way harbors between 100 to 400 billion stars spanning spectral classes from blistering Class O blue giants to long-lived Class M red dwarfs.',
    keyFacts: [
      { label: 'Milky Way Star Count', value: '100 – 400 Billion' },
      { label: 'Dominant Class', value: 'Class M Red Dwarfs (~76%)' },
      { label: 'Core Temperature', value: '15,000,000 K (Sun)' },
      { label: 'Star Formation Rate', value: '~1.5 to 2 Solar Masses / Year' }
    ],
    visualLayer: 'stars',
    cameraPreset: { x: 18000, y: 15000, z: 25000, target: [0, 0, 0] }
  },
  {
    id: 'galaxies',
    title: 'Galaxies & Local Group',
    url: 'https://science.nasa.gov/universe/galaxies/',
    icon: '🌀',
    tagline: 'Cosmic Islands & Galactic Collisions',
    summary:
      'The Milky Way is a barred spiral galaxy with a diameter of ~100,000 light-years. It is part of the Local Group alongside Andromeda (M31) and the Triangulum Galaxy (M33), and will merge with Andromeda in approximately 4.5 billion years.',
    keyFacts: [
      { label: 'Milky Way Diameter', value: '~100,000 Light-Years' },
      { label: 'Local Group Members', value: '80+ Dwarf & Major Galaxies' },
      { label: 'Andromeda Distance', value: '2.5 Million Light-Years' },
      { label: 'Milkdromeda Collision', value: 'In ~4.5 Billion Years' }
    ],
    visualLayer: 'galaxies',
    cameraPreset: { x: 0, y: 75000, z: 95000, target: [0, 0, 0] }
  },
  {
    id: 'black-holes',
    title: 'Black Holes & Sagittarius A*',
    url: 'https://science.nasa.gov/universe/black-holes/',
    icon: '🕳️',
    tagline: 'Gravitational Singularities & Accretion',
    summary:
      'At the epicenter of our galaxy lies Sagittarius A*, a supermassive black hole with 4.15 million times the mass of the Sun. Its immense gravity warps spacetime, bends light around its photon sphere, and powers a relativistic accretion disk.',
    keyFacts: [
      { label: 'Sgr A* Mass', value: '4.154 ± 0.014 Million M☉' },
      { label: 'Schwarzschild Radius', value: '12.27 Million km (~0.082 AU)' },
      { label: 'Photon Ring Radius', value: '1.5 × rs (3.0 × GM/c²)' },
      { label: 'Distance from Earth', value: '26,000 Light-Years' }
    ],
    visualLayer: 'black_holes',
    cameraPreset: { x: 300, y: 120, z: 350, target: [0, 0, 0] }
  },
  {
    id: 'the-big-bang',
    title: 'The Big Bang & Cosmic Dawn',
    url: 'https://science.nasa.gov/universe/the-big-bang/',
    icon: '💥',
    tagline: '13.8 Billion Years of Cosmic Expansion',
    summary:
      'The universe ignited 13.8 billion years ago. The oldest stars in the Milky Way halo formed approximately 13.6 billion years ago, just a few hundred million years after the Big Bang, during the era of cosmic reionization.',
    keyFacts: [
      { label: 'Age of Universe', value: '13.787 ± 0.020 Billion Years' },
      { label: 'Oldest Milky Way Stars', value: '~13.6 Billion Years' },
      { label: 'CMB Temperature', value: '2.7255 K' },
      { label: 'Primordial Composition', value: '75% Hydrogen, 25% Helium' }
    ],
    visualLayer: 'big_bang',
    cameraPreset: { x: 0, y: 110000, z: 120000, target: [0, 0, 0] }
  },
  {
    id: 'dark-energy',
    title: 'Dark Energy',
    url: 'https://science.nasa.gov/dark-energy',
    icon: '⚡',
    tagline: 'The Accelerated Expansion of Spacetime',
    summary:
      'Dark energy makes up approximately 68% of the universe. Unlike gravity which pulls matter together, dark energy acts as a repulsive force driving the accelerating expansion of the cosmos.',
    keyFacts: [
      { label: 'Cosmic Abundance', value: '~68% of the Total Universe' },
      { label: 'Discovery Year', value: '1998 (Type Ia Supernovae)' },
      { label: 'Cosmological Constant', value: 'Λ ≈ 1.1 × 10⁻⁵² m⁻²' },
      { label: 'NASA Mission', value: 'Nancy Grace Roman Space Telescope' }
    ],
    visualLayer: 'dark_energy',
    cameraPreset: { x: 35000, y: 55000, z: 65000, target: [0, 0, 0] }
  },
  {
    id: 'dark-matter',
    title: 'Dark Matter',
    url: 'https://science.nasa.gov/dark-matter',
    icon: '🌌',
    tagline: 'The Invisible Cosmic Scaffold',
    summary:
      'Accounting for roughly 85% of the Milky Way’s total mass, dark matter forms a vast spherical halo extending over 300,000 light-years, preventing the galaxy’s outer spiral arms from flying apart due to high rotational velocities.',
    keyFacts: [
      { label: 'Milky Way Dark Matter', value: '~85% of Galactic Mass' },
      { label: 'Dark Matter Halo Span', value: '> 300,000 Light-Years' },
      { label: 'Evidence', value: 'Flat Galactic Rotation Curves' },
      { label: 'Detection Methods', value: 'Gravitational Lensing & Velocity Dispersion' }
    ],
    visualLayer: 'dark_matter',
    cameraPreset: { x: 0, y: 65000, z: 85000, target: [0, 0, 0] }
  }
];

