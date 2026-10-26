/**
 * src/shaders/star.frag.ts
 * Custom GLSL Fragment Shader for 250,000+ Star Particle System.
 * Implements Tanner Helland Planck blackbody radiation polynomial,
 * dual-component radial profile (Airy core + exponential halo),
 * and circular fragment discard.
 */

export const starFragmentShader = /* glsl */ `
precision highp float;

varying float vTemperature;
varying float vArm;
varying float vViewDist;

uniform float uTime;
uniform float uCoreBloom;

// Tanner Helland Analytical Polynomial Algorithm for Kelvin to sRGB mapping
// Maps effective surface temperature [1000K, 40000K] to physical photon chromaticity
vec3 kelvinToRGB(float kelvin) {
    float temp = clamp(kelvin, 1000.0, 40000.0) / 100.0;
    float r = 0.0;
    float g = 0.0;
    float b = 0.0;

    // 1. Red channel
    if (temp <= 66.0) {
        r = 255.0;
    } else {
        r = 329.698727446 * pow(temp - 60.0, -0.1332047592);
    }

    // 2. Green channel
    if (temp <= 66.0) {
        g = 99.4708025861 * log(temp) - 161.1195681661;
    } else {
        g = 288.1221695283 * pow(temp - 60.0, -0.0755148492);
    }

    // 3. Blue channel
    if (temp >= 66.0) {
        b = 255.0;
    } else if (temp <= 19.0) {
        b = 0.0;
    } else {
        b = 138.5177312231 * log(temp - 10.0) - 305.0447927307;
    }

    return clamp(vec3(r, g, b) / 255.0, 0.0, 1.0);
}

void main() {
    // 1. Circular point coordinate in [-0.5, 0.5]
    vec2 p = gl_PointCoord - vec2(0.5);
    float dist = length(p);

    // Hard clip circular sprite boundaries (eliminates 21.5% square quad overdraw)
    if (dist > 0.5) {
        discard;
    }

    // 2. Dual-Component Radial Luminosity Profile:
    // Component A: Sharp stellar nucleus (Airy disk diffraction core)
    float core = exp(-dist * dist * 38.0);

    // Component B: Soft exponential corona / atmospheric halo
    float halo = exp(-dist * 6.5);

    // Composite profile: 75% core brilliance + 35% ethereal halo
    float intensity = 0.75 * core + 0.35 * halo;

    // 3. Planck Blackbody Chromaticity
    vec3 starColor = kelvinToRGB(vTemperature);

    // Desaturate intense cores of high-temperature stars (O/B type) to brilliant white
    if (vTemperature > 10000.0) {
        starColor = mix(starColor, vec3(1.0, 1.0, 1.0), core * 0.7);
    } else if (vTemperature < 4500.0) {
        // Red dwarfs / giants have warm amber-tinted halos
        starColor = mix(starColor, vec3(1.0, 0.85, 0.5), core * 0.4);
    }

    // 4. Bulge and Core Bloom Enhancement
    // Bar stars (id=5), Bulge stars (id=6), and Nuclear Core stars (id=7) receive bloom multiplier
    float bloomBoost = 1.0;
    if (vArm >= 5.0 && vArm <= 7.0) {
        bloomBoost = uCoreBloom;
    }

    // 5. Final Output for Additive Blending
    vec3 finalRGB = starColor * intensity * bloomBoost;
    float finalAlpha = intensity * clamp(bloomBoost, 0.5, 1.5);

    gl_FragColor = vec4(finalRGB, finalAlpha);
}
`;

export default starFragmentShader;

