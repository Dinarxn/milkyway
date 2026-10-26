/**
 * src/shaders/lensing.frag.ts
 * Gravitational Lensing Distortion Shader for Sagittarius A*.
 * Implements tangential Einstein ring deflection pulling background coordinates inward
 * proportional to (r_E^2 / r), razor-sharp photon ring emission at r ~ 2.6 r_s,
 * Einstein ring peak emission at r ~ r_E, and secondary relativistic arcs.
 */

export const lensingVertexShader = /* glsl */ `
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

export const lensingFragmentShader = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uEinsteinRadius; // Screen-space / quad Einstein radius (e.g. 0.35)
uniform float uLensingStrength; // Deflection scaling multiplier (default: 1.0)
uniform sampler2D tDiffuse;
uniform bool uUseTexture;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {
  // Center of the quad is at (0.5, 0.5)
  vec2 delta = vUv - vec2(0.5);
  float dist = length(delta);

  // Einstein radius and shadow boundary (rShadow ~ 0.65 * rE ~ 2.6 r_s)
  float rE = uEinsteinRadius > 0.0 ? uEinsteinRadius : 0.35;
  float rShadow = rE * 0.65; // Photon orbit shadow radius ~ 2.6 r_s

  // Inside the photon shadow radius, the event horizon absorbs all incoming geodesics
  // Discard interior to let the central black sphere form the absolute black shadow
  if (dist < rShadow * 0.96) {
    discard;
  }

  // 1. Tangential Einstein ring gravitational deflection angle alpha ~ 2 * r_s / b = r_E^2 / r
  // Deflection pulls background coordinates inward inversely proportional to impact parameter
  float safeDist = max(dist, 0.001);
  float deflection = (rE * rE) / safeDist * (uLensingStrength > 0.0 ? uLensingStrength : 1.0);

  // 2. Razor-sharp photon ring emission spike at r ~ 2.6 r_s (rShadow boundary)
  // Extreme magnification of photons orbiting multiple times before escaping
  float photonRingGlow = exp(-abs(dist - rShadow) * 55.0) * 3.5;

  // 3. Einstein ring glow peak at r ~ rE
  float einsteinGlow = exp(-pow((dist - rE) * 20.0, 2.0)) * 1.5;

  // 4. Secondary relativistic warped arcs (tangential light-bending of background and disk)
  float theta = atan(delta.y, delta.x);
  float arcWave = pow(abs(cos(theta + uTime * 0.2)), 2.0);
  float lensedArc = exp(-pow((dist - rE * 1.15) * 16.0, 2.0)) * arcWave * 1.2;

  // 5. Subtle outer gravitational halo falloff
  float outerHaze = exp(-dist * 7.5) * 0.35;

  // Chromatic composition of relativistic emission components
  vec3 photonRingColor = vec3(1.0, 0.95, 0.88); // Brilliant white-gold photon ring
  vec3 einsteinRingColor = vec3(1.0, 0.72, 0.25); // Warm golden Einstein ring
  vec3 arcColor = vec3(0.92, 0.85, 1.0);          // Violet-tinted lensed arcs
  vec3 hazeColor = vec3(0.80, 0.45, 0.15);         // Deep amber coronal haze

  vec3 emission = photonRingColor * photonRingGlow
                + einsteinRingColor * einsteinGlow
                + arcColor * lensedArc
                + hazeColor * outerHaze;

  // 6. Optional background texture sampling with gravitational coordinate deflection
  vec4 sceneColor = vec4(0.0);
  if (uUseTexture) {
    vec2 distortedUv = vUv - (delta / safeDist) * deflection * 0.04;
    sceneColor = texture2D(tDiffuse, distortedUv);
  }

  // 7. Soft alpha edge falloff at quad boundary (dist ~ 0.5)
  float edgeAlpha = smoothstep(0.5, 0.40, dist);
  float alpha = clamp((photonRingGlow + einsteinGlow + lensedArc + outerHaze) * edgeAlpha, 0.0, 1.0);

  gl_FragColor = vec4(sceneColor.rgb + emission, alpha);
}
`;

export default lensingFragmentShader;
