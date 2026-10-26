/**
 * src/shaders/star.vert.ts
 * Custom GLSL Vertex Shader for 250,000+ Star Particle System.
 * Implements flat rotation curve dynamics and distance-attenuated point sizing.
 */

export const starVertexShader = /* glsl */ `
precision highp float;

attribute float aTemperature;
attribute float aSize;
attribute float aArm;

uniform float uTime;
uniform float uPixelRatio;
uniform float uSizeScale;
uniform float uCoreBloom;

varying float vTemperature;
varying float vArm;
varying float vViewDist;

void main() {
    vTemperature = aTemperature;
    vArm = aArm;

    // 1. Astrophysical Differential Rotation (Flat Rotation Curve v ~ constant)
    // In galactic dynamics, angular velocity Omega(R) = v0 / (R + R_core).
    vec3 animatedPos = position;
    float r = length(animatedPos.xz);
    if (r > 10.0) {
        // Inner bar/bulge rotates quasi-rigidly; outer arms and disk follow flat rotation
        float omega = 0.012 * (12000.0 / (r + 4000.0));
        float angle = uTime * omega;
        float cosA = cos(angle);
        float sinA = sin(angle);
        animatedPos.x = position.x * cosA - position.z * sinA;
        animatedPos.z = position.x * sinA + position.z * cosA;
    }

    // 2. Perspective Model-View Transformation
    vec4 mvPosition = modelViewMatrix * vec4(animatedPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // 3. Distance Attenuation for Point Sizing
    // Adaptive macro-to-micro scaling: maintains soft, visible stellar disks (2.5 - 7.0 px)
    // at galactic macro overview (100,000 ly) while scaling smoothly during local zoom
    float viewDist = max(-mvPosition.z, 1.0);
    vViewDist = viewDist;

    float macroBase = 2.5;
    float adaptiveFactor = (uSizeScale / (viewDist + 15000.0)) * 5.5;
    float calculatedSize = uPixelRatio * aSize * (macroBase + adaptiveFactor);
    gl_PointSize = clamp(calculatedSize, 1.5, 48.0);
}
`;

export default starVertexShader;

