/**
 * tests/e2e/galaxy.spec.ts
 * Tier 4: End-to-End WebGL Rendering & Particle System Verification
 * Validates WebGL context initialization, zero shader compilation errors,
 * 200,000+ particle budget, and initial scene mount.
 */

import { test, expect } from '@playwright/test';

test.describe('Tier 4: Milky Way 3D WebGL & Particle Architecture Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to local visualization server
    await page.goto('/');
    await page.waitForSelector('canvas#webgl-canvas', { state: 'attached', timeout: 15000 });
  });

  test('F1 & F19: WebGL canvas mounts and initializes WebGL context without errors', async ({ page }) => {
    const canvas = page.locator('#webgl-canvas');
    await expect(canvas).toBeVisible();

    // Check WebGL context status
    const webglStatus = await page.evaluate(() => {
      const canvasEl = document.getElementById('webgl-canvas') as HTMLCanvasElement;
      if (!canvasEl) return { exists: false, error: 'Canvas not found' };

      const gl = canvasEl.getContext('webgl2') || canvasEl.getContext('webgl');
      if (!gl) return { exists: false, error: 'WebGL context creation failed' };

      const hasError = gl.getError() !== gl.NO_ERROR;
      const renderer = gl.getParameter(gl.RENDERER);
      const vendor = gl.getParameter(gl.VENDOR);

      return {
        exists: true,
        hasError,
        renderer,
        vendor
      };
    });

    expect(webglStatus.exists).toBe(true);
    expect(webglStatus.hasError).toBe(false);
  });

  test('F5 & F9: Scene initializes 200,000+ star particles and compiles Planck shaders cleanly', async ({ page }) => {
    // Wait for galaxy scene diagnostic object on window.__GALAXY__
    await page.waitForFunction(() => {
      return (window as any).__GALAXY__ !== undefined;
    }, { timeout: 20000 });

    const sceneDiagnostics = await page.evaluate(async () => {
      const app = (window as any).__GALAXY__;
      if (!app) return { initialized: false };

      const particleCount = app.starfield?.particleCount ?? app.starfield?.geometry?.attributes?.position?.count ?? 0;
      const landmarkCount = app.landmarks?.count ?? app.landmarks?.children?.length ?? 0;

      const gl = app.renderer?.getContext();
      const glError = gl ? gl.getError() !== gl.NO_ERROR : false;

      return {
        initialized: true,
        particleCount,
        landmarkCount,
        glError,
        drawCalls: app.renderer?.info?.render?.calls ?? 0
      };
    });

    expect(sceneDiagnostics.initialized).toBe(true);
    expect(sceneDiagnostics.glError).toBe(false);
    expect(sceneDiagnostics.particleCount).toBeGreaterThanOrEqual(200000);
    expect(sceneDiagnostics.landmarkCount).toBeGreaterThanOrEqual(6);
  });

  test('F16 & F17: Scientific HUD header, bookmark bar, and telemetry panels mount on load', async ({ page }) => {
    // HUD header with title
    const hudTitle = page.locator('#hud-title');
    await expect(hudTitle).toBeVisible();
    await expect(hudTitle).toContainText('Milky Way 3D');

    // Telemetry indicators
    const telemetryFps = page.locator('#telemetry-fps');
    await expect(telemetryFps).toBeVisible();

    const telemetryParticles = page.locator('#telemetry-particles');
    await expect(telemetryParticles).toBeVisible();

    // Bookmark navigation bar
    const bookmarkBar = page.locator('#hud-bookmark-bar');
    await expect(bookmarkBar).toBeVisible();
  });
});
