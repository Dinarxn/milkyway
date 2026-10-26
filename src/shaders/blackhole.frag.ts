/**
 * src/shaders/blackhole.frag.ts
 * Relativistic Doppler Beaming Accretion Disk Fragment Shader for Sagittarius A*.
 * Implements Keplerian differential orbital velocity profile v(r) ~ 1/sqrt(r),
 * relativistic Doppler factor delta = 1 / (gamma * (1 - beta * cosTheta)),
 * relativistic beaming intensity scaling delta^3.5,
 * chromatic blueshift on approaching side / redshift on receding side,
 * and ISCO shadow cut-off down to photon orbit shadow (r ~ 2.6 r_s).
 */

export const blackHoleVertexShader = /* glsl */ `
precision highp float;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec3 vLocalPosition;

void main() {
  vUv = uv;
  vLocalPosition = position;
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

export const blackHoleFragmentShader = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uSpin;
uniform float uLensingStrength;
uniform vec3 uCameraPosition;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec3 vLocalPosition;

// Pseudo-random and 2D Perlin noise helpers for plasma turbulence
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

void main() {
  // Convert UV to centered polar coordinates [-1.0, 1.0]
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  float theta = atan(p.y, p.x);

  // Radial cutoff boundaries: ISCO shadow boundary & outer accretion disk edge
  float rInner = uInnerRadius > 0.0 ? uInnerRadius : 0.30;
  float rOuter = uOuterRadius > 0.0 ? uOuterRadius : 0.95;

  if (r < rInner || r > rOuter) {
    discard;
  }

  // Normalized radial coordinate [0 = ISCO, 1 = Outer edge]
  float tRad = (r - rInner) / (rOuter - rInner);

  // 1. Keplerian differential orbital velocity profile v(r) ~ 1 / sqrt(r)
  // At ISCO (r ~ rInner), beta ~ 0.45 c; decreases outward with 1/sqrt(r)
  float betaNorm = 0.45 * sqrt(rInner / max(r, 0.001));
  float beta = clamp(betaNorm * (0.8 + 0.2 * uSpin), 0.05, 0.65);

  // Lorentz factor gamma = 1 / sqrt(1 - beta^2)
  float gamma = 1.0 / sqrt(max(1.0 - beta * beta, 0.0001));

  // 2. Tangent vector in disk orbital plane
  // In disk plane, orbital velocity vector is perpendicular to radial vector
  vec3 localTangent = vec3(-sin(theta), cos(theta), 0.0);
  vec3 worldTangent = normalize((modelMatrix * vec4(localTangent, 0.0)).xyz);

  // Observer view direction towards camera
  vec3 camPos = length(uCameraPosition) > 0.001 ? uCameraPosition : cameraPosition;
  vec3 viewDir = normalize(camPos - vWorldPosition);

  // Doppler alignment cos(theta): line of sight projection
  float cosTheta = clamp(dot(worldTangent, viewDir), -1.0, 1.0);

  // 3. Relativistic Doppler factor: delta = 1 / (gamma * (1 - beta * cosTheta))
  float dopplerFactor = 1.0 / (gamma * (1.0 - beta * cosTheta));

  // 4. Relativistic Doppler beaming intensity scaling: I ~ delta^3.5
  float beaming = pow(dopplerFactor, 3.5);

  // 5. Keplerian differential angular velocity: Omega(r) ~ r^(-1.5)
  float omega = 1.0 / (pow(r, 1.5) + 0.05);
  float rotation = theta + uTime * omega * 0.6;

  // Turbulent plasma density structure (spiral shockwaves & magnetohydrodynamic turbulence)
  float spiralWave = sin(rotation * 3.0 - log(max(r, 0.01)) * 4.0);
  float plasmaTurbulence = noise(vec2(rotation * 4.0, r * 12.0 - uTime * 0.4));
  float fineNoise = noise(vec2(rotation * 14.0 + spiralWave, r * 28.0));
  float diskDensity = sin(tRad * 3.14159265);
  float density = diskDensity * (0.6 + 0.25 * plasmaTurbulence + 0.15 * fineNoise);

  // 6. Blackbody temperature gradient across accretion disk:
  // Ultra-hot (25,000K+ blue-white) near ISCO -> Golden yellow (6,000K) -> Cool crimson red (3,000K) at outer rim
  vec3 hotColor = vec3(0.85, 0.92, 1.0);   // Approaching / ISCO high-T plasma
  vec3 midColor = vec3(1.0, 0.65, 0.18);   // Intermediate accretion zone
  vec3 coolColor = vec3(0.70, 0.12, 0.02); // Outer low-T edge

  vec3 baseColor = mix(hotColor, midColor, smoothstep(0.0, 0.45, tRad));
  baseColor = mix(baseColor, coolColor, smoothstep(0.45, 1.0, tRad));

  // 7. Relativistic Doppler chromatic shift:
  // Approaching side (dopplerFactor > 1.0) undergoes severe blueshift to incandescent blue-white
  // Receding side (dopplerFactor < 1.0) undergoes severe redshift to dim dark crimson-red
  vec3 shiftedColor = baseColor;
  if (dopplerFactor > 1.0) {
    float blueShift = clamp((dopplerFactor - 1.0) / 0.7, 0.0, 1.0);
    shiftedColor = mix(shiftedColor, vec3(0.92, 0.96, 1.0), blueShift * 0.75);
  } else {
    float redShift = clamp((1.0 - dopplerFactor) / 0.5, 0.0, 1.0);
    shiftedColor = mix(shiftedColor, vec3(0.45, 0.04, 0.01), redShift * 0.8);
  }

  // 8. Photon ring emission: sharp optical spike at inner ISCO edge (r ~ rInner)
  float photonRing = smoothstep(rInner + 0.04, rInner, r) * 3.0;

  // 9. Final intensity composition
  float totalIntensity = density * beaming * 2.2 + photonRing;
  vec3 finalColor = shiftedColor * totalIntensity;

  // 10. Soft alpha edge falloff at inner and outer boundaries
  float alphaInner = smoothstep(0.0, 0.08, tRad);
  float alphaOuter = smoothstep(1.0, 0.85, tRad);
  float alpha = alphaInner * alphaOuter;

  gl_FragColor = vec4(finalColor, alpha);
}
`;

export default blackHoleFragmentShader;
