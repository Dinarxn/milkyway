/**
 * tests/e2e/tour.spec.ts
 * Tier 4: Real-World Guided Tour of All 6 Required Galactic Landmarks
 * Validates smooth navigation transitions and scientific HUD inspection for:
 * 1. Sagittarius A*
 * 2. Sun / Solar System
 * 3. Pleiades Open Cluster
 * 4. Orion Nebula
 * 5. Eta Carinae
 * 6. Crab Nebula
 */

import { test, expect } from '@playwright/test';

interface LandmarkTourExpectation {
  id: string;
  name: string;
  categoryKeyword: string;
  expectedDistGCLy: string;
  expectedDistSunLy: string;
}

const TOUR_LANDMARKS: LandmarkTourExpectation[] = [
  {
    id: 'sagittarius-a',
    name: 'Sagittarius A*',
    categoryKeyword: 'Black Hole',
    expectedDistGCLy: '0',
    expectedDistSunLy: '26,000'
  },
  {
    id: 'sun',
    name: 'The Sun',
    categoryKeyword: 'Star',
    expectedDistGCLy: '26,000',
    expectedDistSunLy: '0'
  },
  {
    id: 'pleiades',
    name: 'Pleiades',
    categoryKeyword: 'Cluster',
    expectedDistGCLy: '26,396',
    expectedDistSunLy: '444'
  },
  {
    id: 'orion-nebula',
    name: 'Orion Nebula',
    categoryKeyword: 'Nebula',
    expectedDistGCLy: '27,118',
    expectedDistSunLy: '1,344'
  },
  {
    id: 'eta-carinae',
    name: 'Eta Carinae',
    categoryKeyword: 'Variable',
    expectedDistGCLy: '24,785',
    expectedDistSunLy: '7,500'
  },
  {
    id: 'crab-nebula',
    name: 'Crab Nebula',
    categoryKeyword: 'Remnant',
    expectedDistGCLy: '32,455',
    expectedDistSunLy: '6,500'
  }
];

test.describe('Tier 4: Comprehensive 6-Landmark Guided Tour & HUD Inspection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('canvas#webgl-canvas', { state: 'attached', timeout: 15000 });
  });

  for (const lm of TOUR_LANDMARKS) {
    test(`F15 & F16: Navigates to ${lm.name} and inspects scientific metadata card`, async ({ page }) => {
      // 1. Locate bookmark navigation button
      const bookmarkBtn = page.locator(
        `button[data-landmark="${lm.id}"], .bookmark-btn[data-id="${lm.id}"], button:has-text("${lm.name}")`
      ).first();
      await expect(bookmarkBtn).toBeVisible({ timeout: 10000 });

      // 2. Click bookmark to trigger CameraFlyTo
      await bookmarkBtn.click();

      // 3. Wait for camera fly-to transition to complete (duration ~2.5s)
      await page.waitForTimeout(3000);

      // 4. Verify Scientific HUD card is active and visible
      const hudCard = page.locator('#hud-landmark-card');
      await expect(hudCard).toBeVisible({ timeout: 5000 });

      // 5. Inspect card content matches astrometric parameters
      await expect(hudCard).toContainText(lm.name);
      await expect(hudCard).toContainText(lm.categoryKeyword, { ignoreCase: true });

      // Verify distance to Galactic Center or Sun is displayed
      const cardText = await hudCard.innerText();
      expect(
        cardText.includes(lm.expectedDistGCLy) || cardText.includes(lm.expectedDistSunLy)
      ).toBe(true);
    });
  }
});
