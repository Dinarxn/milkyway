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
    // Formula: uPixelRatio * aSize * (uSizeScale / -mvPosition.z) * pow(-mvPosition.z, 0.28)
    // Clamped strictly to [1.0, 48.0] to protect GPU rasterizer fill-rate
    float viewDist = max(-mvPosition.z, 1.0);
    vViewDist = viewDist;

    float calculatedSize = uPixelRatio * aSize * (uSizeScale / viewDist) * pow(viewDist, 0.28);
    gl_PointSize = clamp(calculatedSize, 1.0, 48.0);
}
`;

export default starVertexShader;

