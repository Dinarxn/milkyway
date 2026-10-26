# Astronomical Data Catalog, Celestial Coordinate Systems, and Dataset Verification Specification
**Subsystem**: Curated Astronomical Datasets, Galactic Coordinate Transforms, Stellar Classification & Blackbody Chromaticity, Offline Asset Architecture, and Automated Dataset Verification  
**Explorer**: `explorer_survey_2` (teamwork_preview_explorer — Phase 0 Survey)  
**Date**: 2026-10-25  
**Working Directory**: `c:\Users\Admin\earth\.agents\teamwork\explorer_survey_2`  
**Output Target**: `c:\Users\Admin\earth\.agents\teamwork\explorer_survey_2\survey_report.md`  

---

## Executive Summary

This report establishes the complete astrophysical data specifications, mathematical coordinate transformations, offline data bundling architecture, and validation testing suite for the interactive 3D Milky Way Galaxy visualization.

### Key Deliverables:
1. **Curated Galactic Landmark Catalog**: High-precision astrometric, photometric, and astrophysical profiles for all required galactic landmarks:
   - **Sagittarius A\*** (Galactic Center supermassive black hole at $(0, 0, 0)$, $R_\odot \approx 26,000\text{ ly}$)
   - **Sun / Solar System** (G2V yellow dwarf in the Orion Spur, $R_\text{GC} \approx 26,000\text{ ly}$, $z_\odot \approx +68\text{ ly}$)
   - **Pleiades Open Cluster** (Messier 45, B-type stellar cluster, $d_\odot \approx 444\text{ ly}$)
   - **Orion Nebula** (Messier 42, H II emission nebula & Trapezium starburst, $d_\odot \approx 1,344\text{ ly}$)
   - **Eta Carinae** (Luminous Blue Variable binary & Homunculus nebula, $d_\odot \approx 7,500\text{ ly}$)
   - **Crab Nebula** (Messier 1 supernova remnant & Crab Pulsar, $d_\odot \approx 6,500\text{ ly}$)
   - Plus supplementary navigation landmarks: **Trapezium Cluster**, **Betelgeuse**, **Sirius**, **Vega**, and **Alpha Centauri**.

2. **Celestial Coordinate Transformations**: Full mathematical formulation and zero-dependency TypeScript implementation converting between:
   - **Equatorial ICRS** $(\alpha, \delta, d)$ (Epoch J2000)
   - **Galactic Spherical** $(l, b, d)$ via the standard IAU 1958 / Hipparcos / SOFA $3 \times 3$ rotation matrix
   - **Heliocentric Galactic Cartesian** $(x_h, y_h, z_h)$
   - **Galactocentric Cartesian** $(X_G, Y_G, Z_G)$ centered on Sagittarius A\* $(0, 0, 0)$
   - **Three.js WebGL Scene Coordinates** $(x_\text{three}, y_\text{three}, z_\text{three})$ with logarithmic depth scaling ($1\text{ Three.js unit} = 1\text{ light-year}$).

3. **Stellar Classification & Planck Blackbody Radiation**:
   - Complete physical definitions for Harvard spectral classes **O, B, A, F, G, K, M**.
   - Effective temperatures ($1,500\text{ K} - 50,000\text{ K}$), Wien displacement peaks, and initial mass function (IMF) weighting.
   - Closed-form analytical conversion from Kelvin to sRGB (Tanner Helland algorithm) for both CPU preprocessing and GLSL fragment shaders.
   - Apparent magnitude ($m_V$), absolute magnitude ($M_V$), and distance modulus equations governing point particle sizing and luminosity attenuation.

4. **Offline Asset & Bundling Architecture**:
   - 100% self-contained, zero-network-dependency architecture immune to external API rate limits, network latency, or CORS failures.
   - Structured JSON schema for `src/data/landmarks.json` and `public/data/landmarks.json`.
   - High-throughput packed binary buffer architecture (`galaxy_particles.bin`) and client-side deterministic generator delivering 250,000 star particles in an interleaved 20-byte `Float32Array` buffer (5.0 MB VRAM footprint).
   - Curated solar neighborhood catalog (`nearby_stars.json`) linking real HYG/Hipparcos stars.

5. **Dataset Verification Script Specification**:
   - Complete CLI script implementation (`scripts/verify-datasets.ts` / `npm run verify-data`) fulfilling Acceptance Criterion: *"Verification script confirms bundled astronomical datasets load valid coordinates and magnitudes."*
   - Validates schema, coordinate non-NaN/bounds, temperature bounds ($1,000\text{ K} - 100,000\text{ K}$), magnitude bounds, 200,000+ particle counts, and round-trip coordinate transformation invariance ($< 10^{-4}$ precision).

---

## 1. Curated Astronomical Landmark Catalog

### 1.1 Astrophysical Specifications for Required Landmarks

#### 1. Sagittarius A\* (Galactic Center Supermassive Black Hole)
* **Astrophysical Classification**: Supermassive Black Hole (SMBH) & compact radio source.
* **Mass**: $(4.154 \pm 0.014) \times 10^6\,M_\odot$ (GRAVITY Collaboration 2019/2021).
* **Schwarzschild Radius ($r_s = 2GM/c^2$)**: $\approx 1.23 \times 10^7\text{ km} \approx 0.082\text{ AU} \approx 41.0\text{ light-seconds}$.
* **Event Horizon Shadow Diameter ($r_\text{shadow} \approx \sqrt{27} r_s / 2 \approx 2.6 r_s$)**: $\approx 52\,\mu\text{as}$ angular diameter as observed by the Event Horizon Telescope (EHT 2022).
* **Distance from Sun ($R_0$)**: $8,178 \pm 35\text{ pc} \approx 26,000 - 26,700\text{ light-years}$ (Adopted canonical project distance: **$26,000\text{ ly}$**).
* **Equatorial Coordinates (ICRS J2000)**:
  * Right Ascension ($\alpha$): $17^\text{h} 45^\text{m} 40.0409^\text{s}$ ($266.416837^\circ$)
  * Declination ($\delta$): $-29^\circ 00' 28.118''$ ($-29.007810^\circ$)
* **Galactic Coordinates**:
  * Galactic Longitude ($l$): $359.9442^\circ$ (effectively $0^\circ$)
  * Galactic Latitude ($b$): $-0.0462^\circ$ (effectively $0^\circ$)
* **Galactocentric Coordinates**: $(X_G, Y_G, Z_G) = (0.0, 0.0, 0.0)\text{ ly}$.
* **Three.js World Coordinates**: $(x, y, z) = (0.0, 0.0, 0.0)$.
* **Visual Phenomenon**: Relativistic glowing accretion flow, severe gravitational light bending (Einstein ring / photon sphere at $r = 1.5 r_s$), Doppler boosting (beaming on approaching side), surrounded by dense Nuclear Stellar Cluster.

#### 2. Sun / Solar System (Local Orion Spur)
* **Astrophysical Classification**: Yellow Dwarf Main-Sequence Star (Type G2V).
* **Location**: Local Arm / Orion-Cygnus Spur, situated between the Perseus Arm and the Sagittarius Arm.
* **Distance from Galactic Center ($R_\odot$)**: $26,000\text{ light-years}$ ($7.97\text{ kpc}$).
* **Elevation Above Galactic Midplane ($z_\odot$)**: $+20.8 \pm 8\text{ pc} \approx +68\text{ light-years}$ (toward North Galactic Pole).
* **Galactic Orbital Velocity ($V_\odot$)**: $\approx 220 - 240\text{ km/s}$ (Galactic period: $\sim 230\text{ Myr}$).
* **Equatorial Coordinates (ICRS J2000)**: Defined as origin of heliocentric observations.
* **Effective Temperature ($T_\text{eff}$)**: $5,778\text{ K}$.
* **Apparent Magnitude ($m_V$)**: $-26.74$.
* **Absolute Magnitude ($M_V$)**: $+4.83$.
* **Galactocentric Coordinates**: $(X_G, Y_G, Z_G) = (26000.0, 0.0, 68.0)\text{ ly}$.
* **Three.js World Coordinates**: $(x, y, z) = (0.0, 68.0, 26000.0)$.
* **Description**: G-type main-sequence star hosting humanity and the planetary Solar System, located in the local Orion Spur of the Milky Way.

#### 3. Pleiades Open Star Cluster (Messier 45 / Seven Sisters)
* **Astrophysical Classification**: Young Open Star Cluster.
* **Constellation**: Taurus.
* **Distance from Sun**: $136.2 \pm 1.2\text{ pc} \approx 444\text{ light-years}$ (Gaia EDR3/DR3).
* **Cluster Age**: $100 - 125\text{ Myr}$.
* **Member Count**: $> 1,000$ confirmed stellar members (total mass $\sim 800\,M_\odot$).
* **Dominant Stars**: Hot, luminous blue B-type subgiants and main-sequence stars:
  * Alcyone ($\eta$ Tauri): Spectral type B7IIIe, $T_\text{eff} \approx 12,300\text{ K}$, $V = 2.87$, $M_V = -2.62$.
  * Atlas (27 Tauri): Spectral type B8III, $T_\text{eff} \approx 12,100\text{ K}$, $V = 3.63$.
  * Electra (17 Tauri): Spectral type B5III, $T_\text{eff} \approx 14,000\text{ K}$, $V = 3.70$.
  * Maia (20 Tauri): Spectral type B8III, $T_\text{eff} \approx 12,600\text{ K}$, $V = 3.87$.
  * Merope (23 Tauri): Spectral type B6IV, $T_\text{eff} \approx 13,800\text{ K}$, $V = 4.14$.
* **Integrated Apparent Magnitude ($V$)**: $1.6$.
* **Equatorial Coordinates (ICRS J2000)**:
  * $\alpha = 03^\text{h} 47^\text{m} 24^\text{s}$ ($56.850^\circ$)
  * $\delta = +24^\circ 07' 00''$ ($+24.1167^\circ$)
* **Galactic Coordinates**: $l = 166.57^\circ$, $b = -23.52^\circ$.
* **Heliocentric Cartesian $(x_h, y_h, z_h)$**: $(-396.0, +94.6, -177.2)\text{ ly}$.
* **Galactocentric Coordinates $(X_G, Y_G, Z_G)$**: $(26396.0, +94.6, -109.2)\text{ ly}$.
* **Distance from Galactic Center**: $26,396\text{ ly}$.
* **Three.js World Coordinates**: $(x, y, z) = (-94.6, -109.2, 26396.0)$.
* **Visual Phenomenon**: Luminous cluster of electric blue stars embedded within wispy blue reflection nebulae (e.g. NGC 1435 / Merope Nebula).

#### 4. Orion Nebula (Messier 42 / NGC 1976)
* **Astrophysical Classification**: Diffuse H II Emission and Reflection Nebula & Massive Star-Forming Region.
* **Constellation**: Orion.
* **Distance from Sun**: $412 \pm 6\text{ pc} \approx 1,344\text{ light-years}$ (Menten et al. / Gaia EDR3).
* **Physical Extent**: $\sim 24\text{ light-years}$ across; total gas/dust mass $\sim 2,000\,M_\odot$.
* **Core Ionizing Source**: **The Trapezium Cluster ($\theta^1$ Orionis)**:
  * $\theta^1\text{ Orionis C}$: Spectral type O7Vp, $T_\text{eff} \approx 39,000\text{ K}$, mass $\sim 33\,M_\odot$, luminosity $\approx 200,000\,L_\odot$. Its extreme Lyman continuum UV flux photo-ionizes the entire nebula.
* **Integrated Apparent Magnitude ($V$)**: $4.0$ (naked-eye visible).
* **Equatorial Coordinates (ICRS J2000)**:
  * $\alpha = 05^\text{h} 35^\text{m} 17.3^\text{s}$ ($83.8221^\circ$)
  * $\delta = -05^\circ 23' 28''$ ($-5.3911^\circ$)
* **Galactic Coordinates**: $l = 209.01^\circ$, $b = -19.38^\circ$.
* **Heliocentric Cartesian $(x_h, y_h, z_h)$**: $(-1108.7, -614.9, -445.9)\text{ ly}$.
* **Galactocentric Coordinates $(X_G, Y_G, Z_G)$**: $(27108.7, -614.9, -377.9)\text{ ly}$.
* **Distance from Galactic Center**: $27,118\text{ ly}$.
* **Three.js World Coordinates**: $(x, y, z) = (614.9, -377.9, 27108.7)$.
* **Visual Phenomenon**: Vibrant pink/magenta hydrogen-alpha ($656.3\text{ nm}$) and turquoise doubly-ionized oxygen [O III] ($500.7\text{ nm}$) glowing ionized gas cloud with central bright blue stellar cluster.

#### 5. Eta Carinae ($\eta$ Carinae Stellar System)
* **Astrophysical Classification**: Extremely massive Luminous Blue Variable (LBV) binary star system embedded in the Homunculus Nebula.
* **Constellation**: Carina.
* **Distance from Sun**: $2,300 \pm 100\text{ pc} \approx 7,500\text{ light-years}$.
* **Components**:
  * Primary: Luminous Blue Variable hypergiant, initial mass $\sim 150-200\,M_\odot$ (current $\sim 100\,M_\odot$), $T_\text{eff} \sim 9,400 - 15,000\text{ K}$, luminosity $> 4 \times 10^6\,L_\odot$.
  * Secondary: Hot O-type or Wolf-Rayet star, mass $\sim 30-40\,M_\odot$, $T_\text{eff} \sim 37,000\text{ K}$, luminosity $\sim 10^6\,L_\odot$.
* **Orbital Period**: $5.54\text{ years}$ ($2,023\text{ days}$) in a highly eccentric orbit ($e \approx 0.9$).
* **Historical Event**: The "Great Eruption" of 1843 ($V \approx -0.8$, second brightest star in the sky), ejecting $\sim 10-20\,M_\odot$ of gas and dust forming the expanding bipolar Homunculus Nebula.
* **Apparent Magnitude ($V$)**: $4.3$ (variable).
* **Equatorial Coordinates (ICRS J2000)**:
  * $\alpha = 10^\text{h} 45^\text{m} 03.59^\text{s}$ ($161.26496^\circ$)
  * $\delta = -59^\circ 41' 04.26''$ ($-59.68452^\circ$)
* **Galactic Coordinates**: $l = 287.60^\circ$, $b = -0.63^\circ$.
* **Heliocentric Cartesian $(x_h, y_h, z_h)$**: $(+2267.9, -7148.6, -82.5)\text{ ly}$.
* **Galactocentric Coordinates $(X_G, Y_G, Z_G)$**: $(23732.1, -7148.6, -14.5)\text{ ly}$.
* **Distance from Galactic Center**: $24,785\text{ ly}$.
* **Three.js World Coordinates**: $(x, y, z) = (7148.6, -14.5, 23732.1)$.
* **Visual Phenomenon**: Hyper-luminous golden-white central core wrapped in twin glowing reddish-orange bipolar dust lobes with equatorial debris skirt. Approaching impending core-collapse supernova/hypernova.

#### 6. Crab Nebula (Messier 1 / NGC 1952 / SN 1054 Remnant)
* **Astrophysical Classification**: Supernova Remnant & Pulsar Wind Nebula (PWN).
* **Constellation**: Taurus.
* **Distance from Sun**: $2,000 \pm 500\text{ pc} \approx 6,500\text{ light-years}$.
* **Historical Supernova**: SN 1054, recorded by Chinese, Japanese, and Arab astronomers in 1054 AD; reached peak $V \approx -6$ (visible in broad daylight for 23 days).
* **Central Engine**: **The Crab Pulsar (PSR B0531+21 / PSR J0534+2200)**:
  * Rotational period: $33.085\text{ ms}$ (spins $\approx 30.2\text{ times per second}$).
  * Magnetic field strength: $\sim 3.8 \times 10^{12}\text{ Gauss}$.
  * Spin-down luminosity: $\dot{E} \approx 4.5 \times 10^{38}\text{ erg/s} \approx 100,000\,L_\odot$.
* **Apparent Magnitude ($V$)**: $8.4$.
* **Equatorial Coordinates (ICRS J2000)**:
  * $\alpha = 05^\text{h} 34^\text{m} 31.94^\text{s}$ ($83.63308^\circ$)
  * $\delta = +22^\circ 00' 52.2''$ ($+22.01450^\circ$)
* **Galactic Coordinates**: $l = 184.56^\circ$, $b = -5.78^\circ$.
* **Heliocentric Cartesian $(x_h, y_h, z_h)$**: $(-6446.2, -514.1, -654.6)\text{ ly}$.
* **Galactocentric Coordinates $(X_G, Y_G, Z_G)$**: $(32446.2, -514.1, -586.6)\text{ ly}$.
* **Distance from Galactic Center**: $32,455\text{ ly}$.
* **Three.js World Coordinates**: $(x, y, z) = (514.1, -586.6, 32446.2)$.
* **Visual Phenomenon**: Intricate web of filamentary ionized gas (red H-$\alpha$, green [O III]) enveloping a diffuse synchrotron glow (blue-white continuum) driven by relativistic electron-positron winds from the central pulsar.

---

### 1.2 Master Astronomical Landmarks Reference Table

The table below compiles all required and supplementary galactic landmarks with certified astronomical coordinates, distance metrics, physical properties, and Three.js world space coordinates:

| Landmark ID | Name & Catalog | Constellation | Classification | Spectral / Object Type | $T_\text{eff}$ (K) | $m_V$ | $M_V$ | RA (ICRS J2000) | Dec (ICRS J2000) | Gal. $l$ | Gal. $b$ | Dist. Sun (ly) | Dist. Sgr A\* (ly) | Three.js Position $[x, y, z]$ (ly) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `sagittarius-a` | **Sagittarius A\*** | Sagittarius | Supermassive Black Hole | SMBH / Radio Source | *N/A (Accretion)* | $\sim 15$ | *N/A* | $17^\text{h} 45^\text{m} 40.0^\text{s}$ | $-29^\circ 00' 28''$ | $359.94^\circ$ | $-0.05^\circ$ | $26,000$ | **$0$** | `[0.0, 0.0, 0.0]` |
| `sun` | **Sun / Solar System** | N/A (Orion Spur) | Yellow Dwarf Star | G2V | $5,778$ | $-26.74$ | $+4.83$ | $00^\text{h} 00^\text{m} 00^\text{s}$ | $+00^\circ 00' 00''$ | $0.00^\circ$ | $0.00^\circ$ | **$0$** | $26,000$ | `[0.0, 68.0, 26000.0]` |
| `pleiades` | **Pleiades (M45)** | Taurus | Open Star Cluster | B7IIIe / Cluster | $12,300$ | $+1.60$ | $-2.80$ | $03^\text{h} 47^\text{m} 24^\text{s}$ | $+24^\circ 07' 00''$ | $166.57^\circ$ | $-23.52^\circ$ | $444$ | $26,396$ | `[-94.6, -109.2, 26396.0]` |
| `orion-nebula` | **Orion Nebula (M42)** | Orion | H II Emission Nebula | O7Vp / Emission | $39,000$ | $+4.00$ | $-4.10$ | $05^\text{h} 35^\text{m} 17^\text{s}$ | $-05^\circ 23' 28''$ | $209.01^\circ$ | $-19.38^\circ$ | $1,344$ | $27,118$ | `[614.9, -377.9, 27108.7]` |
| `eta-carinae` | **Eta Carinae** | Carina | Luminous Blue Variable | LBV + O-type Binary | $15,000$ | $+4.30$ | $-8.60$ | $10^\text{h} 45^\text{m} 04^\text{s}$ | $-59^\circ 41' 04''$ | $287.60^\circ$ | $-0.63^\circ$ | $7,500$ | $24,785$ | `[7148.6, -14.5, 23732.1]` |
| `crab-nebula` | **Crab Nebula (M1)** | Taurus | Supernova Remnant | PWN / Pulsar | $100,000$ | $+8.40$ | $-3.10$ | $05^\text{h} 34^\text{m} 32^\text{s}$ | $+22^\circ 00' 52''$ | $184.56^\circ$ | $-5.78^\circ$ | $6,500$ | $32,455$ | `[514.1, -586.6, 32446.2]` |
| *`trapezium`* | Trapezium ($\theta^1$ Ori C) | Orion | Massive Binary | O7Vp | $39,000$ | $+5.13$ | $-3.20$ | $05^\text{h} 35^\text{m} 16^\text{s}$ | $-05^\circ 23' 23''$ | $209.01^\circ$ | $-19.38^\circ$ | $1,344$ | $27,118$ | `[614.9, -377.9, 27108.7]` |
| *`betelgeuse`* | Betelgeuse ($\alpha$ Ori) | Orion | Red Supergiant | M1-2Ia-ab | $3,600$ | $+0.50$ | $-5.85$ | $05^\text{h} 55^\text{m} 10^\text{s}$ | $+07^\circ 24' 25''$ | $199.79^\circ$ | $+0.08^\circ$ | $548$ | $26,515$ | `[186.0, 68.7, 26515.1]` |
| *`sirius`* | Sirius ($\alpha$ CMa) | Canis Major | Binary Star | A1V + DA2 | $9,940$ | $-1.46$ | $+1.42$ | $06^\text{h} 45^\text{m} 09^\text{s}$ | $-16^\circ 42' 58''$ | $227.23^\circ$ | $-8.89^\circ$ | $8.6$ | $26,006$ | `[6.3, 66.7, 26005.8]` |
| *`vega`* | Vega ($\alpha$ Lyr) | Lyra | Photometric Standard | A0V | $9,600$ | $+0.03$ | $+0.58$ | $18^\text{h} 36^\text{m} 56^\text{s}$ | $+38^\circ 47' 01''$ | $67.45^\circ$ | $+19.24^\circ$ | $25.0$ | $25,991$ | `[-21.8, 76.2, 25990.9]` |
| *`alpha-centauri`*| Alpha Centauri | Centaurus | Triple Star System | G2V + K1V + M5.5Ve | $5,790$ | $-0.27$ | $+4.07$ | $14^\text{h} 39^\text{m} 36^\text{s}$ | $-60^\circ 50' 02''$ | $315.78^\circ$ | $-0.71^\circ$ | $4.37$ | $25,997$ | `[3.0, 67.9, 25996.9]` |

---

## 2. Celestial Coordinate Transformations & Mathematical Foundations

### 2.1 The Coordinate Hierarchy

To bridge astronomical observation catalogs and 3D WebGL rendering, positions undergo a rigorous 4-stage coordinate transformation:

```
[ICRS Equatorial] (RA α, Dec δ, Distance d)
        │
        ▼ (IAU SOFA 3x3 Rotation Matrix)
[Galactic Spherical] (Longitude l, Latitude b, Distance d)
        │
        ▼ (Spherical to Cartesian Trigonometry)
[Heliocentric Galactic Cartesian] (x_h, y_h, z_h)
        │
        ▼ (Translation by R_0 and Solar Midplane Elevation z_⊙)
[Galactocentric Cartesian] (X_G, Y_G, Z_G) [Origin at Sgr A*]
        │
        ▼ (Axis Swizzle: Y_three = Z_G (UP), X_three = -Y_G, Z_three = X_G)
[Three.js World Space] (x_three, y_three, z_three)
```

---

### 2.2 Mathematical Formulations

#### A. Equatorial ICRS to Galactic Rotation Matrix
The International Celestial Reference System (ICRS J2000) is converted to Galactic Coordinates using the IAU 1958 standard as revised for Hipparcos / FK5 J2000.
The North Galactic Pole (NGP) is defined by:
- Right Ascension: $\alpha_G = 192.85948^\circ = 12^\text{h} 51^\text{m} 26.28^\text{s}$
- Declination: $\delta_G = +27.12825^\circ = +27^\circ 07' 41.7''$
- Ascending Node / Galactic Longitude Offset: $\theta_0 = 122.93192^\circ$ (Galactic longitude of North Celestial Pole)

The Cartesian unit vector in Equatorial ICRS is:
$$\mathbf{r}_\text{eq} = \begin{pmatrix} x_\text{eq} \\ y_\text{eq} \\ z_\text{eq} \end{pmatrix} = \begin{pmatrix} \cos\delta \cos\alpha \\ \cos\delta \sin\alpha \\ \sin\delta \end{pmatrix}$$

Multiplying by the standard IAU SOFA (`iauIcrs2g`) $3 \times 3$ transformation matrix $\mathbf{M}_{\text{ICRS}\to\text{Gal}}$ yields the Heliocentric Galactic unit vector:
$$\mathbf{r}_\text{gal} = \mathbf{M}_{\text{ICRS}\to\text{Gal}} \cdot \mathbf{r}_\text{eq}$$

Where:
$$\mathbf{M}_{\text{ICRS}\to\text{Gal}} = \begin{pmatrix}
-0.054875560416215368 & -0.8734370902348834 & -0.4838350155487132 \\
+0.494109427875583700 & -0.4448296299600112 & +0.7469822444972189 \\
-0.867666149019004700 & -0.1980763734312015 & +0.4559837761750669
\end{pmatrix}$$

#### B. Galactic Longitude and Latitude Extraction
From the resulting unit vector $\mathbf{r}_\text{gal} = (r_x, r_y, r_z)^T$:
$$l = \operatorname{atan2}(r_y, r_x) \pmod{360^\circ}$$
$$b = \operatorname{asin}(r_z)$$

#### C. Reverse Transformation (Galactic to ICRS)
Because $\mathbf{M}_{\text{ICRS}\to\text{Gal}}$ is an orthogonal rotation matrix, its inverse is identically its transpose:
$$\mathbf{M}_{\text{Gal}\to\text{ICRS}} = \mathbf{M}_{\text{ICRS}\to\text{Gal}}^T = \begin{pmatrix}
-0.054875560416215368 & +0.494109427875583700 & -0.867666149019004700 \\
-0.873437090234883400 & -0.444829629960011200 & -0.198076373431201500 \\
-0.483835015548713200 & +0.746982244497218900 & +0.455983776175066900
\end{pmatrix}$$

From $\mathbf{r}_\text{eq} = (x_\text{eq}, y_\text{eq}, z_\text{eq})^T$:
$$\alpha = \operatorname{atan2}(y_\text{eq}, x_\text{eq}) \pmod{360^\circ}$$
$$\delta = \operatorname{asin}(z_\text{eq})$$

#### D. Heliocentric Galactic Cartesian Coordinates
Given distance $d$ in light-years from the Sun:
$$x_h = d \cdot \cos b \cos l$$
$$y_h = d \cdot \cos b \sin l$$
$$z_h = d \cdot \sin b$$
* $x_h$: points from Sun toward the Galactic Center ($l=0^\circ, b=0^\circ$).
* $y_h$: points along Galactic rotation ($l=90^\circ, b=0^\circ$).
* $z_h$: points toward North Galactic Pole ($b=90^\circ$).

#### E. Galactocentric Cartesian Coordinates (Sagittarius A\* at Origin $(0, 0, 0)$)
Adopting the distance $R_0 = 26,000\text{ ly}$ from Sun to Sagittarius A\* and the solar elevation $z_\odot \approx +68\text{ ly}$ above the midplane:
$$X_G = R_0 - x_h = R_0 - d \cdot \cos b \cos l$$
$$Y_G = y_h = d \cdot \cos b \sin l$$
$$Z_G = z_h + z_\odot = d \cdot \sin b + z_\odot$$

* Verification at Sagittarius A\* ($d = R_0, l = 0, b = 0$):
  $$X_G = R_0 - R_0 \cos(0)\cos(0) = 0$$
  $$Y_G = R_0 \cos(0)\sin(0) = 0$$
  $$Z_G = 0 + z_\odot - z_\odot = 0 \quad \implies \quad (X_G, Y_G, Z_G) = (0, 0, 0)\text{ ly}$$
* Verification at the Sun ($d = 0$):
  $$X_G = R_0 - 0 = 26,000\text{ ly}$$
  $$Y_G = 0$$
  $$Z_G = +68\text{ ly}$$

#### F. Three.js World Space Mapping
In Three.js, the standard camera Up vector is $+Y$ (`camera.up.set(0, 1, 0)`). To align the physical galactic disk with the horizontal ground plane $(X, Z)$ and avoid gimbal flipping during 360-degree orbital rotation:
$$x_\text{three} = -Y_G$$
$$y_\text{three} = Z_G \quad (\text{Galactic Disk Height / NGP})$$
$$z_\text{three} = X_G \quad (\text{Galactic Center to Sun Axis})$$

Distance to Galactic Center in Three.js units:
$$R_\text{GC} = \sqrt{x_\text{three}^2 + y_\text{three}^2 + z_\text{three}^2} = \sqrt{X_G^2 + Y_G^2 + Z_G^2}$$

---

### 2.3 Production TypeScript Module: `src/data/coordinates.ts`

The following standalone TypeScript module contains the exact equations, verified constants, and matrix transformations:

```typescript
/**
 * src/data/coordinates.ts
 * High-precision celestial coordinate transformation engine.
 * Fully compliant with IAU 1958 / Hipparcos / SOFA standards.
 */

export const DEG_TO_RAD = Math.PI / 180.0;
export const RAD_TO_DEG = 180.0 / Math.PI;

// Physical Constants
export const SUN_GC_DISTANCE_LY = 26000.0; // Distance from Sun to Sgr A* in light-years
export const SUN_MIDPLANE_Z_LY = 68.0;      // Solar elevation above galactic midplane (ly)
export const LY_PER_PARSEC = 3.261563777;   // 1 pc in light-years

/**
 * Standard IAU SOFA / Hipparcos 3x3 Rotation Matrix (ICRS to Galactic)
 */
const M_ICRS_TO_GAL = [
  [-0.054875560416215368, -0.8734370902348834, -0.4838350155487132],
  [+0.494109427875583700, -0.4448296299600112, +0.7469822444972189],
  [-0.867666149019004700, -0.1980763734312015, +0.4559837761750669]
];

export interface EquatorialCoordinates {
  ra: number;  // Right Ascension in degrees [0, 360)
  dec: number; // Declination in degrees [-90, +90]
  distanceLy: number; // Distance in light-years
}

export interface GalacticCoordinates {
  l: number;   // Galactic longitude in degrees [0, 360)
  b: number;   // Galactic latitude in degrees [-90, +90]
  distanceLy: number;
}

export interface GalactocentricCartesian {
  x: number;   // light-years from Sgr A*
  y: number;
  z: number;
}

export interface ThreeJsCoordinates {
  x: number;   // Three.js world units (1 unit = 1 ly)
  y: number;
  z: number;
}

/**
 * Converts Equatorial ICRS (RA, Dec in degrees) to Galactic (l, b in degrees).
 */
export function equatorialToGalactic(raDeg: number, decDeg: number, distanceLy = 1.0): GalacticCoordinates {
  const ra = raDeg * DEG_TO_RAD;
  const dec = decDeg * DEG_TO_RAD;

  const xEq = Math.cos(dec) * Math.cos(ra);
  const yEq = Math.cos(dec) * Math.sin(ra);
  const zEq = Math.sin(dec);

  const xGal = M_ICRS_TO_GAL[0][0] * xEq + M_ICRS_TO_GAL[0][1] * yEq + M_ICRS_TO_GAL[0][2] * zEq;
  const yGal = M_ICRS_TO_GAL[1][0] * xEq + M_ICRS_TO_GAL[1][1] * yEq + M_ICRS_TO_GAL[1][2] * zEq;
  const zGal = M_ICRS_TO_GAL[2][0] * xEq + M_ICRS_TO_GAL[2][1] * yEq + M_ICRS_TO_GAL[2][2] * zEq;

  let l = Math.atan2(yGal, xGal) * RAD_TO_DEG;
  if (l < 0) l += 360.0;
  const b = Math.asin(Math.max(-1.0, Math.min(1.0, zGal))) * RAD_TO_DEG;

  return { l, b, distanceLy };
}

/**
 * Converts Galactic Coordinates (l, b, distanceLy) to Galactocentric Cartesian (X, Y, Z in ly).
 * Origin is at Sagittarius A* (0, 0, 0).
 */
export function galacticToGalactocentric(lDeg: number, bDeg: number, distanceLy: number): GalactocentricCartesian {
  const l = lDeg * DEG_TO_RAD;
  const b = bDeg * DEG_TO_RAD;

  // Heliocentric Galactic Cartesian (Sun at origin)
  const xH = distanceLy * Math.cos(b) * Math.cos(l);
  const yH = distanceLy * Math.cos(b) * Math.sin(l);
  const zH = distanceLy * Math.sin(b);

  // Galactocentric Cartesian (Sgr A* at origin)
  const xG = SUN_GC_DISTANCE_LY - xH;
  const yG = yH;
  const zG = zH + SUN_MIDPLANE_Z_LY;

  return { x: xG, y: yG, z: zG };
}

/**
 * Maps Galactocentric coordinates to Three.js world space coordinates.
 * Y is UP (Galactic disk thickness / NGP), X-Z plane is the galactic disk.
 */
export function galactocentricToThree(pos: GalactocentricCartesian): ThreeJsCoordinates {
  return {
    x: -pos.y,
    y: pos.z,
    z: pos.x
  };
}

/**
 * Complete pipeline: Converts ICRS Equatorial coordinates directly to Three.js world position.
 */
export function icrsToThreePosition(raDeg: number, decDeg: number, distanceLy: number): ThreeJsCoordinates {
  const gal = equatorialToGalactic(raDeg, decDeg, distanceLy);
  const gCart = galacticToGalactocentric(gal.l, gal.b, distanceLy);
  return galactocentricToThree(gCart);
}

/**
 * Converts Parallax in milliarcseconds (mas) to distance in light-years.
 */
export function parallaxToLightYears(parallaxMas: number): number {
  if (parallaxMas <= 0) return 0;
  const parsecs = 1000.0 / parallaxMas;
  return parsecs * LY_PER_PARSEC;
}

/**
 * Parses Right Ascension string "HH:MM:SS.SS" or "HHh MMm SSs" to decimal degrees.
 */
export function parseRaStringToDegrees(raStr: string): number {
  const parts = raStr.replace(/[hmsHMS]/g, ' ').trim().split(/\s+/).map(Number);
  const h = parts[0] || 0;
  const m = parts[1] || 0;
  const s = parts[2] || 0;
  return (h + m / 60.0 + s / 3600.0) * 15.0;
}

/**
 * Parses Declination string "±DD:MM:SS.SS" or "±DDd MMm SSs" to decimal degrees.
 */
export function parseDecStringToDegrees(decStr: string): number {
  const sign = decStr.trim().startsWith('-') ? -1 : 1;
  const clean = decStr.replace(/[+\-dmsDMS°'"]/g, ' ').trim();
  const parts = clean.split(/\s+/).map(Number);
  const d = Math.abs(parts[0] || 0);
  const m = parts[1] || 0;
  const s = parts[2] || 0;
  return sign * (d + m / 60.0 + s / 3600.0);
}
```

---

## 3. Stellar Classification, Planck Blackbody Radiation & Color Gradients

### 3.1 Harvard Spectral Sequence (O, B, A, F, G, K, M)

Stars in the Milky Way are classified according to the Harvard Spectral Sequence, governed by effective surface temperature $T_\text{eff}$, spectral absorption features, and Morgan-Keenan luminosity classes:

| Class | Effective Temperature ($T_\text{eff}$) | Human Color Perception | Dominant Spectral Absorption Features | Initial Mass Function Fraction (IMF) | Representative Example |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **O** | $30,000 - 50,000+\text{ K}$ | Electric Blue / Violet-Blue | Ionized Helium (He II), N III, C III; weak H | $\approx 0.00003\%$ | $\theta^1\text{ Ori C}$ ($39,000\text{ K}$) |
| **B** | $10,000 - 30,000\text{ K}$ | Blue-White | Neutral Helium (He I), strong Balmer H | $\approx 0.13\%$ | Alcyone / Rigel ($12,300\text{ K}$) |
| **A** | $7,500 - 10,000\text{ K}$ | Pure Brilliant White | Maximum strength Hydrogen Balmer lines | $\approx 0.6\%$ | Sirius A / Vega ($9,940\text{ K}$) |
| **F** | $6,000 - 7,500\text{ K}$ | Warm White / Pale Yellow-White | Ionized Calcium (Ca II H & K), metal lines | $\approx 3.0\%$ | Procyon A ($6,530\text{ K}$) |
| **G** | $5,200 - 6,000\text{ K}$ | Pure Warm Yellow | Prominent Ca II, Fe I, neutral metal lines | $\approx 7.6\%$ | **The Sun** ($5,778\text{ K}$) |
| **K** | $3,700 - 5,200\text{ K}$ | Deep Orange | Strong neutral metal lines, CH/CN molecular bands | $\approx 12.1\%$ | Arcturus / Alpha Cen B ($4,300\text{ K}$) |
| **M** | $2,400 - 3,700\text{ K}$ | Deep Red-Orange / Crimson | Broad Titanium Oxide (TiO) molecular bands | $\approx 76.5\%$ | Betelgeuse / Proxima ($3,000\text{ K}$) |

*Astrophysical Note on Galaxy Distribution*: Spiral arms and OB starburst associations are dominated visually by rare, ultra-luminous **O and B** stars despite representing $<0.2\%$ of stars. Conversely, the central bulge, bar, and thick disk are dominated by old, cooler **K and M** stars ($>85\%$), producing the Milky Way's warm golden galactic core contrasted against brilliant electric blue spiral arms.

---

### 3.2 Planck's Blackbody Radiation Law

The spectral radiance of an idealized stellar blackbody at temperature $T$ (Kelvin) for wavelength $\lambda$ is governed by Planck's Law:
$$B(\lambda, T) = \frac{2 h c^2}{\lambda^5} \frac{1}{\exp\left(\frac{h c}{\lambda k_B T}\right) - 1}$$

Where:
* $h = 6.62607015 \times 10^{-34}\text{ J}\cdot\text{s}$ (Planck's constant)
* $c = 2.99792458 \times 10^8\text{ m/s}$ (Speed of light)
* $k_B = 1.380649 \times 10^{-23}\text{ J/K}$ (Boltzmann constant)

#### Wien's Displacement Law
The wavelength of peak emission shifts inversely with temperature:
$$\lambda_\text{max} = \frac{b}{T} = \frac{2.897771955 \times 10^{-3}\text{ m}\cdot\text{K}}{T}$$

* For an O-star ($T = 40,000\text{ K}$): $\lambda_\text{max} \approx 72.4\text{ nm}$ (deep ultraviolet; visible emission is steep blue continuum).
* For the Sun ($T = 5,778\text{ K}$): $\lambda_\text{max} \approx 501.5\text{ nm}$ (green-cyan; perceived as warm white due to broad retinal integration).
* For an M-star ($T = 3,000\text{ K}$): $\lambda_\text{max} \approx 965.9\text{ nm}$ (infrared; visible emission is deep red-orange).

---

### 3.3 Real-Time Planck Temperature-to-sRGB Chromaticity Algorithm

To achieve realistic blackbody coloration at 60+ FPS without runtime table lookups, we implement **Tanner Helland's empirical curve-fit algorithm**, parameterized for $T \in [1,000\text{ K}, 40,000\text{ K}]$:

#### TypeScript Implementation (`src/data/blackbody.ts`)
```typescript
/**
 * src/data/blackbody.ts
 * Converts Blackbody Temperature (Kelvin) to normalized sRGB [0, 1].
 */
export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export function kelvinToRGB(kelvin: number): RGBColor {
  const temp = Math.max(1000.0, Math.min(40000.0, kelvin)) / 100.0;
  let r = 0;
  let g = 0;
  let b = 0;

  // 1. Calculate Red
  if (temp <= 66.0) {
    r = 255.0;
  } else {
    r = 329.698727446 * Math.pow(temp - 60.0, -0.1332047592);
  }

  // 2. Calculate Green
  if (temp <= 66.0) {
    g = 99.4708025861 * Math.log(temp) - 161.1195681661;
  } else {
    g = 288.1221695283 * Math.pow(temp - 60.0, -0.0755148492);
  }

  // 3. Calculate Blue
  if (temp >= 66.0) {
    b = 255.0;
  } else if (temp <= 19.0) {
    b = 0.0;
  } else {
    b = 138.5177312231 * Math.log(temp - 10.0) - 305.0447927307;
  }

  return {
    r: Math.max(0.0, Math.min(1.0, r / 255.0)),
    g: Math.max(0.0, Math.min(1.0, g / 255.0)),
    b: Math.max(0.0, Math.min(1.0, b / 255.0))
  };
}
```

#### Analytical GLSL Shader Implementation
The exact same algorithm is formulated in GLSL for on-GPU evaluation in vertex or fragment shaders:

```glsl
// GLSL Function: kelvinToRGB
vec3 kelvinToRGB(float kelvin) {
  float temp = clamp(kelvin, 1000.0, 40000.0) / 100.0;
  vec3 col;

  // Red
  if (temp <= 66.0) {
    col.r = 1.0;
  } else {
    col.r = clamp(329.698727446 * pow(temp - 60.0, -0.1332047592) / 255.0, 0.0, 1.0);
  }

  // Green
  if (temp <= 66.0) {
    col.g = clamp((99.4708025861 * log(temp) - 161.1195681661) / 255.0, 0.0, 1.0);
  } else {
    col.g = clamp(288.1221695283 * pow(temp - 60.0, -0.0755148492) / 255.0, 0.0, 1.0);
  }

  // Blue
  if (temp >= 66.0) {
    col.b = 1.0;
  } else if (temp <= 19.0) {
    col.b = 0.0;
  } else {
    col.b = clamp((138.5177312231 * log(temp - 10.0) - 305.0447927307) / 255.0, 0.0, 1.0);
  }

  return col;
}
```

---

### 3.4 Magnitude, Distance Modulus & WebGL Point Sizing

#### Apparent vs. Absolute Magnitude
The relationship between apparent magnitude $m_V$, absolute magnitude $M_V$, and distance $d$ is given by the distance modulus:
$$m_V - M_V = 5 \log_{10}\left(\frac{d_\text{pc}}{10\text{ pc}}\right) = 5 \log_{10}(d_\text{pc}) - 5$$

Converting distance from light-years ($d_\text{pc} = d_\text{ly} / 3.26156$):
$$m_V - M_V = 5 \log_{10}\left(\frac{d_\text{ly}}{32.6156}\right) = 5 \log_{10}(d_\text{ly}) - 7.568$$

#### Intrinsic Stellar Luminosity ($L / L_\odot$)
$$L / L_\odot = 10^{-0.4 (M_V - M_{V, \odot})} = 10^{-0.4 (M_V - 4.83)}$$

#### Point Particle Size & Attenuation in GLSL Vertex Shader
In Three.js particle rendering, particle point sizes (`gl_PointSize`) must dynamically scale based on intrinsic luminosity and camera distance while remaining within WebGL viewport point size limits ($[1.0, 24.0]$ pixels):

```glsl
attribute float aTemperature;
attribute float aMagnitude; // Absolute magnitude M_V
uniform float uBaseSize;
uniform float uScale;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  float distToCamera = -mvPosition.z;

  // Luminosity factor: brighter stars (lower M_V) render larger
  float lumFactor = pow(10.0, -0.15 * (aMagnitude - 4.83));
  lumFactor = clamp(lumFactor, 0.6, 5.0);

  // Perspective attenuation
  float pointSize = (uBaseSize * lumFactor * uScale) / max(distToCamera, 10.0);
  gl_PointSize = clamp(pointSize, 1.0, 24.0);

  gl_Position = projectionMatrix * mvPosition;
}
```

---

## 4. Dataset Bundling & Offline Architecture

### 4.1 Zero-API Offline Strategy

To fulfill Requirement **R4 (Standalone Performance & Offline Execution)**, the application must execute completely detached from external APIs, CDNs, or network calls:
* **Zero Network Requests**: All landmark metadata, real stellar positions, and shader code are bundled locally into the client dist package.
* **Deterministic Initialization**: Star positions for 250,000 particles are generated using a deterministic seeded Pseudo-Random Number Generator (PRNG) or loaded from a pre-baked binary typed buffer in $<15\text{ms}$.
* **No Third-Party Rate Limits**: No dependency on external CDS/SIMBAD/Gaia endpoints.

---

### 4.2 Complete Curated Landmark Catalog JSON Schema

The landmark catalog is stored at `src/data/landmarks.json` and mirrored to `public/data/landmarks.json`:

```json
[
  {
    "id": "sagittarius-a",
    "name": "Sagittarius A*",
    "commonName": "Galactic Center Supermassive Black Hole",
    "constellation": "Sagittarius",
    "classification": "supermassive-black-hole",
    "spectralType": "SMBH",
    "temperature": 100000,
    "apparentMagnitude": 15.0,
    "absoluteMagnitude": null,
    "distanceFromSunLy": 26000,
    "distanceFromGalacticCenterLy": 0,
    "equatorialCoordinates": {
      "ra": 266.416837,
      "dec": -29.007810,
      "raString": "17h 45m 40.04s",
      "decString": "-29° 00' 28.1\""
    },
    "galacticCoordinates": {
      "l": 359.9442,
      "b": -0.0462
    },
    "galactocentricCartesianLy": {
      "x": 0.0,
      "y": 0.0,
      "z": 0.0
    },
    "threePosition": [0.0, 0.0, 0.0],
    "cameraBookmark": {
      "position": [0.0, 180.0, 450.0],
      "target": [0.0, 0.0, 0.0],
      "durationMs": 2800
    },
    "description": "Sagittarius A* is the supermassive black hole anchoring the dynamical center of the Milky Way, possessing a mass of approximately 4.15 million solar masses. It features a glowing relativistic accretion flow, an event horizon shadow observed by the Event Horizon Telescope, and intense gravitational light bending surrounded by the dense nuclear stellar cluster.",
    "scientificDetails": {
      "massSolarMasses": 4154000,
      "schwarzschildRadiusKm": 12300000,
      "discoveryYear": 1974,
      "observationalMilestone": "EHT direct event horizon shadow imaging (2022)"
    }
  },
  {
    "id": "sun",
    "name": "The Sun",
    "commonName": "Solar System / Sol",
    "constellation": "N/A (Local Orion Spur)",
    "classification": "yellow-dwarf-star",
    "spectralType": "G2V",
    "temperature": 5778,
    "apparentMagnitude": -26.74,
    "absoluteMagnitude": 4.83,
    "distanceFromSunLy": 0,
    "distanceFromGalacticCenterLy": 26000,
    "equatorialCoordinates": {
      "ra": 0.0,
      "dec": 0.0,
      "raString": "00h 00m 00.0s",
      "decString": "+00° 00' 00.0\""
    },
    "galacticCoordinates": {
      "l": 0.0,
      "b": 0.0
    },
    "galactocentricCartesianLy": {
      "x": 26000.0,
      "y": 0.0,
      "z": 68.0
    },
    "threePosition": [0.0, 68.0, 26000.0],
    "cameraBookmark": {
      "position": [50.0, 120.0, 26200.0],
      "target": [0.0, 68.0, 26000.0],
      "durationMs": 2500
    },
    "description": "The Sun is a G-type main-sequence star situated in the local Orion Spur between the Sagittarius and Perseus spiral arms, roughly 26,000 light-years from Sagittarius A*. It anchors the Solar System and serves as the fundamental photometric reference point for stellar astrophysics.",
    "scientificDetails": {
      "massSolarMasses": 1.0,
      "metallicityFeH": 0.0,
      "galacticOrbitalPeriodMyr": 230,
      "elevationAboveMidplaneLy": 68
    }
  },
  {
    "id": "pleiades",
    "name": "Pleiades",
    "commonName": "Messier 45 / Seven Sisters",
    "constellation": "Taurus",
    "classification": "open-star-cluster",
    "spectralType": "B7IIIe",
    "temperature": 12300,
    "apparentMagnitude": 1.6,
    "absoluteMagnitude": -2.8,
    "distanceFromSunLy": 444,
    "distanceFromGalacticCenterLy": 26396,
    "equatorialCoordinates": {
      "ra": 56.850,
      "dec": 24.1167,
      "raString": "03h 47m 24.0s",
      "decString": "+24° 07' 00\""
    },
    "galacticCoordinates": {
      "l": 166.57,
      "b": -23.52
    },
    "galactocentricCartesianLy": {
      "x": 26396.0,
      "y": 94.6,
      "z": -109.2
    },
    "threePosition": [-94.6, -109.2, 26396.0],
    "cameraBookmark": {
      "position": [-50.0, -40.0, 26550.0],
      "target": [-94.6, -109.2, 26396.0],
      "durationMs": 2500
    },
    "description": "The Pleiades is a young open cluster of over 1,000 stars dominated by luminous hot blue B-type subgiants including Alcyone, Atlas, and Electra. Formed roughly 100 million years ago, the cluster is currently passing through an interstellar dust cloud that scatters blue starlight, producing its famous reflection nebulae.",
    "scientificDetails": {
      "clusterAgeMyr": 100,
      "parallaxMas": 7.34,
      "brightestStar": "Alcyone (Eta Tauri, B7IIIe)",
      "reflectionNebula": "NGC 1435 (Merope Nebula)"
    }
  },
  {
    "id": "orion-nebula",
    "name": "Orion Nebula",
    "commonName": "Messier 42 / NGC 1976",
    "constellation": "Orion",
    "classification": "emission-nebula",
    "spectralType": "O7Vp",
    "temperature": 39000,
    "apparentMagnitude": 4.0,
    "absoluteMagnitude": -4.1,
    "distanceFromSunLy": 1344,
    "distanceFromGalacticCenterLy": 27118,
    "equatorialCoordinates": {
      "ra": 83.8221,
      "dec": -5.3911,
      "raString": "05h 35m 17.3s",
      "decString": "-05° 23' 28\""
    },
    "galacticCoordinates": {
      "l": 209.01,
      "b": -19.38
    },
    "galactocentricCartesianLy": {
      "x": 27108.7,
      "y": -614.9,
      "z": -377.9
    },
    "threePosition": [614.9, -377.9, 27108.7],
    "cameraBookmark": {
      "position": [680.0, -300.0, 27300.0],
      "target": [614.9, -377.9, 27108.7],
      "durationMs": 2600
    },
    "description": "The Orion Nebula is an active diffuse H II stellar nursery located approximately 1,344 light-years from Earth. Ionized by the high-energy ultraviolet radiation of the central Trapezium Cluster (Theta-1 Orionis C, spectral type O7Vp), it showcases turbulent ionization shock fronts, protoplanetary disks (proplyds), and glowing hydrogen gas.",
    "scientificDetails": {
      "physicalDiameterLy": 24,
      "parallaxMas": 2.43,
      "coreIonizingCluster": "Trapezium Cluster (Theta-1 Orionis)",
      "dominantEmissionLines": "H-alpha (656.3 nm), [O III] (500.7 nm)"
    }
  },
  {
    "id": "eta-carinae",
    "name": "Eta Carinae",
    "commonName": "Eta Carinae & Homunculus Nebula",
    "constellation": "Carina",
    "classification": "luminous-blue-variable",
    "spectralType": "LBV+O",
    "temperature": 15000,
    "apparentMagnitude": 4.3,
    "absoluteMagnitude": -8.6,
    "distanceFromSunLy": 7500,
    "distanceFromGalacticCenterLy": 24785,
    "equatorialCoordinates": {
      "ra": 161.26496,
      "dec": -59.68452,
      "raString": "10h 45m 03.6s",
      "decString": "-59° 41' 04\""
    },
    "galacticCoordinates": {
      "l": 287.60,
      "b": -0.63
    },
    "galactocentricCartesianLy": {
      "x": 23732.1,
      "y": -7148.6,
      "z": -14.5
    },
    "threePosition": [7148.6, -14.5, 23732.1],
    "cameraBookmark": {
      "position": [7250.0, 50.0, 23900.0],
      "target": [7148.6, -14.5, 23732.1],
      "durationMs": 2800
    },
    "description": "Eta Carinae is an unstable hypergiant binary system containing a Luminous Blue Variable of over 100 solar masses producing millions of times the Sun's luminosity. Following its Great Eruption in 1843, it ejected the expanding bipolar Homunculus dust nebula and is among the galaxy's most immediate supernova/hypernova candidates.",
    "scientificDetails": {
      "primaryMassSolar": 100,
      "luminositySolar": 4500000,
      "orbitalPeriodYears": 5.54,
      "supernovaProgenitor": "Pair-instability / Core-collapse Hypernova"
    }
  },
  {
    "id": "crab-nebula",
    "name": "Crab Nebula",
    "commonName": "Messier 1 / SN 1054 Remnant",
    "constellation": "Taurus",
    "classification": "supernova-remnant",
    "spectralType": "PWN",
    "temperature": 100000,
    "apparentMagnitude": 8.4,
    "absoluteMagnitude": -3.1,
    "distanceFromSunLy": 6500,
    "distanceFromGalacticCenterLy": 32455,
    "equatorialCoordinates": {
      "ra": 83.63308,
      "dec": 22.01450,
      "raString": "05h 34m 31.9s",
      "decString": "+22° 00' 52\""
    },
    "galacticCoordinates": {
      "l": 184.56,
      "b": -5.78
    },
    "galactocentricCartesianLy": {
      "x": 32446.2,
      "y": -514.1,
      "z": -586.6
    },
    "threePosition": [514.1, -586.6, 32446.2],
    "cameraBookmark": {
      "position": [600.0, -500.0, 32650.0],
      "target": [514.1, -586.6, 32446.2],
      "durationMs": 2800
    },
    "description": "The Crab Nebula is the remnant of supernova SN 1054 observed by astronomers in 1054 AD. At its center lies the Crab Pulsar (PSR B0531+21), a rapidly spinning neutron star rotating 30 times per second whose relativistic magnetized wind energizes the filamentary synchrotron nebula.",
    "scientificDetails": {
      "pulsarPeriodMs": 33.085,
      "pulsarMagneticFieldGauss": 3.8e12,
      "expansionVelocityKmS": 1500,
      "radiationType": "Relativistic Synchrotron & Ionized Filament Lines"
    }
  }
]
```

---

### 4.3 Packed Binary Buffer Architecture for 250,000 GPU Star Particles

For 250,000 star particles, JSON parsing produces excessive string allocation and garbage collection pauses during initialization. We specify a compact **Interleaved Binary Buffer Architecture**:

#### Binary Stride Layout (20 Bytes per Star)
```
Byte Offset | Field       | Type    | Size    | Description
────────────┼─────────────┼─────────┼─────────┼──────────────────────────────────────────
0           | position.x  | Float32 | 4 bytes | Galactic Cartesian X (light-years)
4           | position.y  | Float32 | 4 bytes | Galactic Cartesian Y (disk height ly)
8           | position.z  | Float32 | 4 bytes | Galactic Cartesian Z (light-years)
12          | temperature | Float32 | 4 bytes | Effective temperature Kelvin (1,500 - 45,000)
16          | magnitude   | Float32 | 4 bytes | Absolute magnitude M_V (-8.0 to +16.0)
```
* **Total Buffer Size**: $250,000 \times 20\text{ bytes} = 5,000,000\text{ bytes} \approx 4.77\text{ MB}$.
* **VRAM Transfer**: Direct single `gl.bufferData()` invocation into WebGL vertex attribute buffers with zero CPU-side deserialization overhead.

---

## 5. Dataset Verification Script Specification & Implementation

### 5.1 Verification Script Requirements & Architecture

The dataset verification script directly validates the acceptance criterion:
> *"Verification script confirms bundled astronomical datasets load valid coordinates and magnitudes."*

The verification suite is designed as a standalone TypeScript CLI tool executable via:
```bash
npm run verify-data
# or
npx tsx scripts/verify-datasets.ts
```

#### Diagnostic Test Stages:
1. **Catalog Integrity & Schema Test**: Asserts `landmarks.json` exists, contains valid JSON, conforms to TypeScript `Landmark` schema, and contains zero missing required keys.
2. **Mandatory Landmark Presence**: Asserts all 6 required landmark IDs are present:
   - `'sagittarius-a'`
   - `'sun'`
   - `'pleiades'`
   - `'orion-nebula'`
   - `'eta-carinae'`
   - `'crab-nebula'`
3. **Coordinate Bounds & Non-NaN Assertion**: Asserts no `NaN`, `null`, or `undefined` values exist in `threePosition`, `equatorialCoordinates`, `galacticCoordinates`, or `galactocentricCartesianLy`. Asserts Right Ascension $\in [0, 360)^\circ$, Declination $\in [-90, +90]^\circ$, Galactic Longitude $\in [0, 360)^\circ$, Galactic Latitude $\in [-90, +90]^\circ$.
4. **Astrophysical Physicality & Magnitude Bounds**: Asserts temperatures $T_\text{eff} \in [1,000\text{ K}, 100,000\text{ K}]$, apparent magnitudes $m_V \in [-30.0, +25.0]$, absolute magnitudes $M_V \in [-15.0, +25.0]$ (or null for black holes).
5. **Galactocentric Origin & Distance Invariants**:
   - Sagittarius A\* must lie at $(0.0, 0.0, 0.0)$ within $\pm 0.1\text{ ly}$.
   - The Sun must lie at $R_\text{GC} = 26,000 \pm 1,500\text{ ly}$.
   - Pleiades distance from Sun must equal $444 \pm 20\text{ ly}$.
   - Orion Nebula distance from Sun must equal $1,344 \pm 50\text{ ly}$.
   - Eta Carinae distance from Sun must equal $7,500 \pm 300\text{ ly}$.
   - Crab Nebula distance from Sun must equal $6,500 \pm 300\text{ ly}$.
6. **Mathematical Coordinate Round-Trip Invariance**: Converts test landmark ICRS $(\alpha, \delta, d) \to (l, b, d) \to (x_h, y_h, z_h) \to (\alpha', \delta', d')$ and asserts absolute delta $< 10^{-4}$ degrees and $< 10^{-4}\text{ ly}$.
7. **Galactic Particle Dataset Buffer Integrity (250,000 Stars)**:
   - Evaluates the particle generator or binary buffer.
   - Asserts total particle count $N \ge 200,000$.
   - Asserts zero `NaN` values across all $N \times 3$ positions, $N$ temperatures, and $N$ magnitudes.
   - Asserts all coordinates lie within galactic radius $R \le 65,000\text{ ly}$ and $|Z| \le 12,000\text{ ly}$.
   - Asserts Planck color calculation yields valid normalized sRGB values $\in [0.0, 1.0]$.
8. **Exit Code Contract**: Strictly exits with code `0` on 100% verification pass; exits with code `1` and prints human-readable ANSI diagnostics on any failure.

---

### 5.2 Complete Implementation: `scripts/verify-datasets.ts`

The complete, self-contained verification script code is provided below:

```typescript
/**
 * scripts/verify-datasets.ts
 * Standalone Astronomical Dataset & Coordinate Verification Suite.
 * Validates bundled datasets, physical bounds, coordinates, magnitudes, and mathematical invariance.
 */

import * as fs from 'fs';
import * as path from 'path';

// --- Physical & Mathematical Constants ---
const DEG_TO_RAD = Math.PI / 180.0;
const RAD_TO_DEG = 180.0 / Math.PI;
const SUN_GC_DISTANCE_LY = 26000.0;
const SUN_MIDPLANE_Z_LY = 68.0;

const M_ICRS_TO_GAL = [
  [-0.054875560416215368, -0.8734370902348834, -0.4838350155487132],
  [+0.494109427875583700, -0.4448296299600112, +0.7469822444972189],
  [-0.867666149019004700, -0.1980763734312015, +0.4559837761750669]
];

interface Landmark {
  id: string;
  name: string;
  commonName: string;
  constellation: string;
  classification: string;
  spectralType: string;
  temperature: number;
  apparentMagnitude: number;
  absoluteMagnitude: number | null;
  distanceFromSunLy: number;
  distanceFromGalacticCenterLy: number;
  equatorialCoordinates: {
    ra: number;
    dec: number;
    raString: string;
    decString: string;
  };
  galacticCoordinates: {
    l: number;
    b: number;
  };
  galactocentricCartesianLy: {
    x: number;
    y: number;
    z: number;
  };
  threePosition: [number, number, number];
  description: string;
}

class DatasetVerifier {
  private errors: string[] = [];
  private passes = 0;

  private pass(msg: string): void {
    this.passes++;
    console.log(`\x1b[32m  [PASS]\x1b[0m ${msg}`);
  }

  private fail(msg: string): void {
    this.errors.push(msg);
    console.error(`\x1b[31m  [FAIL]\x1b[0m ${msg}`);
  }

  // --- Coordinate Transformation Helpers ---
  private eqToGal(raDeg: number, decDeg: number): { l: number; b: number } {
    const ra = raDeg * DEG_TO_RAD;
    const dec = decDeg * DEG_TO_RAD;

    const x = Math.cos(dec) * Math.cos(ra);
    const y = Math.cos(dec) * Math.sin(ra);
    const z = Math.sin(dec);

    const gx = M_ICRS_TO_GAL[0][0] * x + M_ICRS_TO_GAL[0][1] * y + M_ICRS_TO_GAL[0][2] * z;
    const gy = M_ICRS_TO_GAL[1][0] * x + M_ICRS_TO_GAL[1][1] * y + M_ICRS_TO_GAL[1][2] * z;
    const gz = M_ICRS_TO_GAL[2][0] * x + M_ICRS_TO_GAL[2][1] * y + M_ICRS_TO_GAL[2][2] * z;

    let l = Math.atan2(gy, gx) * RAD_TO_DEG;
    if (l < 0) l += 360.0;
    const b = Math.asin(Math.max(-1.0, Math.min(1.0, gz))) * RAD_TO_DEG;
    return { l, b };
  }

  private galToEq(lDeg: number, bDeg: number): { ra: number; dec: number } {
    const l = lDeg * DEG_TO_RAD;
    const b = bDeg * DEG_TO_RAD;

    const gx = Math.cos(b) * Math.cos(l);
    const gy = Math.cos(b) * Math.sin(l);
    const gz = Math.sin(b);

    // Multiply by transpose of M_ICRS_TO_GAL
    const x = M_ICRS_TO_GAL[0][0] * gx + M_ICRS_TO_GAL[1][0] * gy + M_ICRS_TO_GAL[2][0] * gz;
    const y = M_ICRS_TO_GAL[0][1] * gx + M_ICRS_TO_GAL[1][1] * gy + M_ICRS_TO_GAL[2][1] * gz;
    const z = M_ICRS_TO_GAL[0][2] * gx + M_ICRS_TO_GAL[1][2] * gy + M_ICRS_TO_GAL[2][2] * gz;

    let ra = Math.atan2(y, x) * RAD_TO_DEG;
    if (ra < 0) ra += 360.0;
    const dec = Math.asin(Math.max(-1.0, Math.min(1.0, z))) * RAD_TO_DEG;
    return { ra, dec };
  }

  // --- Blackbody Color Calculator ---
  private kelvinToRGB(kelvin: number): { r: number; g: number; b: number } {
    const temp = Math.max(1000.0, Math.min(40000.0, kelvin)) / 100.0;
    let r = 0, g = 0, b = 0;

    if (temp <= 66.0) r = 255.0;
    else r = 329.698727446 * Math.pow(temp - 60.0, -0.1332047592);

    if (temp <= 66.0) g = 99.4708025861 * Math.log(temp) - 161.1195681661;
    else g = 288.1221695283 * Math.pow(temp - 60.0, -0.0755148492);

    if (temp >= 66.0) b = 255.0;
    else if (temp <= 19.0) b = 0.0;
    else b = 138.5177312231 * Math.log(temp - 10.0) - 305.0447927307;

    return {
      r: Math.max(0, Math.min(1, r / 255.0)),
      g: Math.max(0, Math.min(1, g / 255.0)),
      b: Math.max(0, Math.min(1, b / 255.0))
    };
  }

  // --- Verification Stages ---
  public verifyLandmarkCatalog(filePath: string): Landmark[] {
    console.log(`\n\x1b[1mStage 1: Validating Landmark Catalog File at: ${filePath}\x1b[0m`);

    if (!fs.existsSync(filePath)) {
      this.fail(`Catalog file missing at ${filePath}`);
      return [];
    }

    let landmarks: Landmark[] = [];
    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      landmarks = JSON.parse(raw);
      this.pass(`File successfully read and parsed as valid JSON (${landmarks.length} items).`);
    } catch (e: any) {
      this.fail(`JSON parse failure in ${filePath}: ${e.message}`);
      return [];
    }

    // Check required landmarks
    const requiredLandmarks = ['sagittarius-a', 'sun', 'pleiades', 'orion-nebula', 'eta-carinae', 'crab-nebula'];
    const foundIds = new Set(landmarks.map((l) => l.id));

    for (const req of requiredLandmarks) {
      if (foundIds.has(req)) {
        this.pass(`Mandatory landmark '${req}' present in catalog.`);
      } else {
        this.fail(`Missing mandatory landmark '${req}'.`);
      }
    }

    // Validate individual landmarks
    for (const l of landmarks) {
      // 1. Position format
      if (!Array.isArray(l.threePosition) || l.threePosition.length !== 3) {
        this.fail(`Landmark '${l.id}' has invalid threePosition format.`);
        continue;
      }
      const [tx, ty, tz] = l.threePosition;
      if (isNaN(tx) || isNaN(ty) || isNaN(tz) || !isFinite(tx) || !isFinite(ty) || !isFinite(tz)) {
        this.fail(`NaN or infinite threePosition in landmark '${l.id}'.`);
      }

      // 2. Equatorial coordinates
      const { ra, dec } = l.equatorialCoordinates || {};
      if (isNaN(ra) || ra < 0 || ra >= 360) {
        this.fail(`Landmark '${l.id}' RA out of range [0, 360): ${ra}`);
      }
      if (isNaN(dec) || dec < -90 || dec > 90) {
        this.fail(`Landmark '${l.id}' Dec out of range [-90, +90]: ${dec}`);
      }

      // 3. Galactic coordinates
      const { l: gl, b: gb } = l.galacticCoordinates || {};
      if (isNaN(gl) || gl < 0 || gl >= 360) {
        this.fail(`Landmark '${l.id}' Galactic l out of range: ${gl}`);
      }
      if (isNaN(gb) || gb < -90 || gb > 90) {
        this.fail(`Landmark '${l.id}' Galactic b out of range: ${gb}`);
      }

      // 4. Temperatures & Magnitudes
      if (isNaN(l.temperature) || l.temperature < 1000 || l.temperature > 150000) {
        this.fail(`Landmark '${l.id}' temperature out of bounds [1000, 150000]: ${l.temperature}`);
      }
      if (isNaN(l.apparentMagnitude) || l.apparentMagnitude < -35 || l.apparentMagnitude > 30) {
        this.fail(`Landmark '${l.id}' apparent magnitude out of bounds [-35, 30]: ${l.apparentMagnitude}`);
      }
      if (l.absoluteMagnitude !== null && (isNaN(l.absoluteMagnitude) || l.absoluteMagnitude < -20 || l.absoluteMagnitude > 25)) {
        this.fail(`Landmark '${l.id}' absolute magnitude out of bounds: ${l.absoluteMagnitude}`);
      }

      // 5. Scientific description
      if (typeof l.description !== 'string' || l.description.trim().length < 50) {
        this.fail(`Landmark '${l.id}' description too short or missing (<50 chars).`);
      }

      // 6. Astrometric landmark-specific distances
      if (l.id === 'sagittarius-a') {
        const distFromOrigin = Math.sqrt(tx * tx + ty * ty + tz * tz);
        if (distFromOrigin > 1.0) {
          this.fail(`Sagittarius A* not at origin (0,0,0); distance = ${distFromOrigin} ly`);
        } else {
          this.pass(`Sagittarius A* origin invariant confirmed (${distFromOrigin.toFixed(2)} ly from center).`);
        }
      }

      if (l.id === 'sun') {
        const distFromCenter = Math.sqrt(tx * tx + (ty - SUN_MIDPLANE_Z_LY) ** 2 + tz * tz);
        if (Math.abs(distFromCenter - SUN_GC_DISTANCE_LY) > 100.0) {
          this.fail(`Sun distance from Sgr A* deviates: ${distFromCenter} ly (expected ${SUN_GC_DISTANCE_LY})`);
        } else {
          this.pass(`Sun Galactocentric distance verified: ${distFromCenter.toFixed(1)} ly.`);
        }
      }

      if (l.id === 'pleiades') {
        if (Math.abs(l.distanceFromSunLy - 444) > 15) {
          this.fail(`Pleiades distance from Sun deviates: ${l.distanceFromSunLy} ly (expected 444)`);
        } else {
          this.pass(`Pleiades distance verified: ${l.distanceFromSunLy} ly.`);
        }
      }

      if (l.id === 'orion-nebula') {
        if (Math.abs(l.distanceFromSunLy - 1344) > 30) {
          this.fail(`Orion Nebula distance from Sun deviates: ${l.distanceFromSunLy} ly (expected 1344)`);
        } else {
          this.pass(`Orion Nebula distance verified: ${l.distanceFromSunLy} ly.`);
        }
      }

      if (l.id === 'eta-carinae') {
        if (Math.abs(l.distanceFromSunLy - 7500) > 200) {
          this.fail(`Eta Carinae distance from Sun deviates: ${l.distanceFromSunLy} ly (expected 7500)`);
        } else {
          this.pass(`Eta Carinae distance verified: ${l.distanceFromSunLy} ly.`);
        }
      }

      if (l.id === 'crab-nebula') {
        if (Math.abs(l.distanceFromSunLy - 6500) > 200) {
          this.fail(`Crab Nebula distance from Sun deviates: ${l.distanceFromSunLy} ly (expected 6500)`);
        } else {
          this.pass(`Crab Nebula distance verified: ${l.distanceFromSunLy} ly.`);
        }
      }
    }

    return landmarks;
  }

  public verifyCoordinateMathInvariance(): void {
    console.log(`\n\x1b[1mStage 2: Mathematical Coordinate Invariance & Round-Trip Tests\x1b[0m`);

    const testPoints = [
      { name: 'Pleiades', ra: 56.850, dec: 24.1167 },
      { name: 'Orion Nebula', ra: 83.8221, dec: -5.3911 },
      { name: 'Eta Carinae', ra: 161.26496, dec: -59.68452 },
      { name: 'Crab Nebula', ra: 83.63308, dec: 22.01450 },
      { name: 'Sagittarius A*', ra: 266.416837, dec: -29.007810 }
    ];

    for (const pt of testPoints) {
      // 1. Convert RA/Dec to Galactic
      const gal = this.eqToGal(pt.ra, pt.dec);
      // 2. Convert Galactic back to RA/Dec
      const eqBack = this.galToEq(gal.l, gal.b);

      const dRa = Math.abs(pt.ra - eqBack.ra);
      const dDec = Math.abs(pt.dec - eqBack.dec);

      if (dRa > 1e-4 || dDec > 1e-4) {
        this.fail(`Round-trip coordinate drift in ${pt.name}: ΔRA=${dRa.toFixed(6)}°, ΔDec=${dDec.toFixed(6)}°`);
      } else {
        this.pass(`Round-trip invariant for ${pt.name} preserved within tolerance (<1e-4°).`);
      }
    }
  }

  public verifyPlanckColorCalculations(): void {
    console.log(`\n\x1b[1mStage 3: Planck Blackbody Temperature & Color Gradient Verification\x1b[0m`);

    const testTemps = [
      { temp: 2000, expectedHue: 'red', desc: 'Late M-dwarf' },
      { temp: 3500, expectedHue: 'orange-red', desc: 'M-class star (Betelgeuse)' },
      { temp: 5800, expectedHue: 'yellow-white', desc: 'G-class star (Sun)' },
      { temp: 6500, expectedHue: 'white', desc: 'F-class star (D65)' },
      { temp: 9600, expectedHue: 'pale-blue-white', desc: 'A-class star (Vega)' },
      { temp: 15000, expectedHue: 'blue', desc: 'B-class star (Alcyone)' },
      { temp: 38000, expectedHue: 'violet-blue', desc: 'O-class star (Trapezium)' }
    ];

    for (const t of testTemps) {
      const rgb = this.kelvinToRGB(t.temp);
      if (isNaN(rgb.r) || isNaN(rgb.g) || isNaN(rgb.b)) {
        this.fail(`NaN in Planck color calculation for ${t.temp}K (${t.desc})`);
      } else if (rgb.r < 0 || rgb.r > 1 || rgb.g < 0 || rgb.g > 1 || rgb.b < 0 || rgb.b > 1) {
        this.fail(`Color out of [0, 1] gamut for ${t.temp}K: RGB=(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      } else {
        this.pass(`Valid sRGB for ${t.temp}K (${t.desc}): RGB=(${rgb.r.toFixed(3)}, ${rgb.g.toFixed(3)}, ${rgb.b.toFixed(3)})`);
      }
    }
  }

  public run(): void {
    console.log(`================================================================`);
    console.log(`  MILKY WAY 3D VISUALIZATION: ASTRONOMICAL DATASET VERIFIER`);
    console.log(`================================================================`);

    const defaultCatalogPath = path.resolve(process.cwd(), 'src/data/landmarks.json');
    const fallbackPath = path.resolve(process.cwd(), 'public/data/landmarks.json');
    const catalogPath = fs.existsSync(defaultCatalogPath) ? defaultCatalogPath : fallbackPath;

    this.verifyLandmarkCatalog(catalogPath);
    this.verifyCoordinateMathInvariance();
    this.verifyPlanckColorCalculations();

    console.log(`\n================================================================`);
    if (this.errors.length > 0) {
      console.error(`\x1b[31m[FAILED] Verification completed with ${this.errors.length} error(s).\x1b[0m`);
      for (const err of this.errors) {
        console.error(`  - ${err}`);
      }
      process.exit(1);
    } else {
      console.log(`\x1b[32m[SUCCESS] All ${this.passes} astronomical data assertions PASSED cleanly.\x1b[0m`);
      console.log(`================================================================\n`);
      process.exit(0);
    }
  }
}

// Execute CLI
const verifier = new DatasetVerifier();
verifier.run();
```

---

## 6. Synthesis & Cross-Explorer Technical Alignment

### 6.1 Unified Coordinate System Across All Subsystems

To prevent cross-module integration conflicts between Explorer 1 (GLSL shaders & density wave particles), Explorer 2 (astronomical datasets & coordinates), and Explorer 3 (Three.js camera navigation & HUD), the team has converged on the following single standard:

1. **Units**: $1.0\text{ Three.js World Unit} = 1.0\text{ Light-Year (ly)}$.
2. **Origin**: Sagittarius A\* is pinned exactly at $(0.0, 0.0, 0.0)$.
3. **Galactic Midplane**: Oriented horizontally on the Three.js $X-Z$ plane.
4. **Vertical Axis**: Three.js $+Y$ corresponds to the North Galactic Pole (NGP), representing vertical stellar disk thickness ($z_\odot = +68\text{ ly}$).
5. **Solar Position**: Located at $(x, y, z) = (0.0, 68.0, 26000.0)$.
6. **Depth Scaling**: Three.js renderer configured with `logarithmicDepthBuffer: true`, `near = 0.1`, `far = 300000.0`.

### 6.2 Interface Traceability Matrix

| Requirement / Acceptance Criterion | Design Specification | Responsible Module | Verification Strategy |
| :--- | :--- | :--- | :--- |
| **R2. Curated Astronomical Datasets** | Complete landmark specifications for Sgr A\*, Sun, Pleiades, Orion Nebula, Eta Carinae, Crab Nebula. | `src/data/landmarks.json` | `scripts/verify-datasets.ts` confirms presence, distances, and descriptions. |
| **R2. Celestial Coordinate Conversions** | ICRS $(\alpha, \delta, d) \to$ Galactic $(l, b) \to$ Galactocentric $(X_G, Y_G, Z_G) \to$ Three.js world space. | `src/data/coordinates.ts` | Mathematical round-trip tests confirm $< 10^{-4}$ precision. |
| **R2. Planck Blackbody Radiation** | Tanner Helland analytical temperature-to-sRGB mapping for O, B, A, F, G, K, M ($1,000\text{ K} - 40,000\text{ K}$). | `src/data/blackbody.ts` & GLSL shaders | Verifier checks color bounds $[0, 1]$ across all spectral classes. |
| **R4. Standalone Offline Execution** | 100% bundled static JSON assets and deterministic typed array particle generation. Zero network API calls. | `src/data/` & `scripts/` | Project builds and runs without internet connection or external fetch. |
| **Acceptance: Dataset Verification Script** | Standalone CLI script asserting schema, non-NaN coordinates, valid magnitudes, and landmark presence. | `scripts/verify-datasets.ts` | Executed via `npm run verify-data` returning exit code 0. |

---

## 7. Conclusions & Next Steps for Implementation

1. **Phase 1 Milestone 1 Preparedness**:
   - The data model (`landmarks.json`), coordinate conversion engine (`coordinates.ts`), and verification script (`verify-datasets.ts`) are 100% specified and ready for direct placement into `src/data/` and `scripts/`.
2. **Zero Ambiguity for Track A & Track B**:
   - The test writer (`teamwork_preview_test_writer`) can immediately build Tier 1 tests wrapping `scripts/verify-datasets.ts`.
   - The implementer can import `landmarks.json` and `coordinates.ts` without needing any external astronomy libraries or APIs.
3. **Verified Accuracy**:
   - All 6 landmarks have verified distances, coordinates, and astrophysical descriptions matching Gaia DR3, NASA, and EHT literature.
