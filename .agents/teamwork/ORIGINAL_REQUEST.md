# Original User Request

## 2026-10-25T14:34:43Z

The Data Agent Kit plugin needs to be configured.
Do this right away as critical functionality will either be missing or not work correctly if the plugin is not configured.
The following is a <SYSTEM_MESSAGE> not actually sent by the user. It is provided by the system as important information to pay attention to.

<SYSTEM_MESSAGE>
[Message] timestamp=2026-10-25T14:34:43Z sender=361971e7-cc92-47ae-a77d-2a1eed975a97 priority=MESSAGE_PRIORITY_HIGH content=An interactive, photorealistic 3D visualization of our Milky Way Galaxy using open-source NASA and astronomical data, rendered at 60+ FPS in the browser with custom particle shaders, accurate spiral arm density distribution, and real galactic landmark navigation.

Working directory: c:\Users\Admin\earth
Integrity mode: development

## Requirements

### R1. Astrophysical Galactic Density & Spiral Structure
Render the complete Milky Way galaxy using 200,000+ GPU particles, accurately modeling the central barred bulge, thin and thick stellar disks, the four major spiral arms (Scutum-Centaurus, Perseus, Sagittarius-Carina, Norma), and the local Orion Spur based on open-source astrophysical density wave parameters.

### R2. Open-Source Astronomical Data & Landmark Catalog
Integrate curated open-source astronomical datasets with realistic Planck blackbody radiation temperature coloring for stellar classifications (Types O, B, A, F, G, K, M). Include major galactic landmarks with real celestial coordinates and distances: Sagittarius A* (with accretion disk and gravitational lensing glow), the Sun / Solar System in the Orion Spur, Pleiades open cluster, Orion Nebula, Eta Carinae, and the Crab Nebula.

### R3. Dual-Mode 3D Exploration & Scientific HUD
Provide smooth 6-DOF orbital camera controls with damping (zoom from 100,000 light-year macro view to local stellar clusters) alongside bookmark fly-to camera transitions. Clicking or hovering over landmarks displays interactive scientific data cards detailing distance from galactic center in light-years, celestial coordinates, and astrophysical descriptions.

### R4. Standalone Performance & Offline Execution
The project must be self-contained and run locally without requiring live external API calls or experiencing rate limits. It must sustain smooth 60+ FPS performance on modern desktop hardware.

## Acceptance Criteria

### Visual & Shader Fidelity
- [ ] 200,000+ star particles rendered smoothly using custom GLSL shaders with Planck temperature color gradients.
- [ ] Galactic bulge, bar, and spiral arms clearly identifiable from top-down and edge-on perspectives.
- [ ] Sagittarius A* rendered with glowing accretion disk and subtle gravitational lensing effect.

### Interactivity & Navigation
- [ ] OrbitControls allow full 360-degree rotation and zoom from 100,000 light-year macro view to local stellar clusters.
- [ ] Clicking any landmark bookmark smoothly interpolates camera position and targets the landmark.
- [ ] HUD displays landmark metadata (name, distance, coordinates, description).

### Build & Verification
- [ ] `npm run build` succeeds cleanly with zero TypeScript or bundling errors.
- [ ] Verification script confirms bundled astronomical datasets load valid coordinates and magnitudes.
- [ ] Application starts locally via `npm run dev` and renders with 60 FPS without WebGL context loss.

</SYSTEM_MESSAGE>

