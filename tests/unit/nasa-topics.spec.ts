/**
 * tests/unit/nasa-topics.spec.ts
 * Verification of NASA Science Directorate domains and 3D visual layers.
 */

import { describe, it, expect } from 'vitest';
import { NASA_SCIENCE_TOPICS } from '../../src/data/nasaTopics.js';
import { NasaScienceLayers } from '../../src/objects/NasaScienceLayers.js';

describe('NASA Science Exploration Domains (NASA Directorate Modules)', () => {
  it('includes all 8 requested NASA Science exploration topics', () => {
    const topicIds = NASA_SCIENCE_TOPICS.map((t) => t.id);
    expect(topicIds).toContain('exoplanets');
    expect(topicIds).toContain('search-for-life');
    expect(topicIds).toContain('stars');
    expect(topicIds).toContain('galaxies');
    expect(topicIds).toContain('black-holes');
    expect(topicIds).toContain('the-big-bang');
    expect(topicIds).toContain('dark-energy');
    expect(topicIds).toContain('dark-matter');
  });

  it('each topic points to a valid science.nasa.gov URL', () => {
    for (const topic of NASA_SCIENCE_TOPICS) {
      expect(topic.url).toMatch(/^https:\/\/science\.nasa\.gov\//);
      expect(topic.title.length).toBeGreaterThan(0);
      expect(topic.summary.length).toBeGreaterThan(20);
      expect(topic.keyFacts.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('NasaScienceLayers correctly creates and toggles 3D layers', () => {
    const layers = new NasaScienceLayers();
    expect(layers.group).toBeDefined();

    // Test layer activation
    layers.setLayer('habitable_zone');
    const hz = layers.group.getObjectByName('habitable-zone');
    expect(hz?.visible).toBe(true);

    layers.setLayer('dark_matter');
    const dm = layers.group.getObjectByName('dark-matter-halo');
    expect(dm?.visible).toBe(true);
    expect(hz?.visible).toBe(false);

    layers.setLayer('exoplanets');
    const exo = layers.group.getObjectByName('exoplanets-group');
    expect(exo?.visible).toBe(true);
    expect(dm?.visible).toBe(false);

    layers.setLayer('galaxies');
    const lg = layers.group.getObjectByName('local-group-vectors');
    expect(lg?.visible).toBe(true);
    expect(exo?.visible).toBe(false);

    // Turn off layers
    layers.setLayer('');
    expect(hz?.visible).toBe(false);
    expect(dm?.visible).toBe(false);
    expect(exo?.visible).toBe(false);
    expect(lg?.visible).toBe(false);
  });
});

