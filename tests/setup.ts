/**
 * tests/setup.ts
 * Global test environment setup for Vitest unit & integration test suites.
 */

// Ensure performance.now is available in Node test environments
if (typeof performance === 'undefined' || !performance.now) {
  const perf = {
    now: () => Date.now()
  };
  (globalThis as any).performance = perf;
}

// Global mock for requestAnimationFrame if not present
if (typeof requestAnimationFrame === 'undefined') {
  (globalThis as any).requestAnimationFrame = (callback: (time: number) => void) => {
    return setTimeout(() => callback(performance.now()), 16);
  };
  (globalThis as any).cancelAnimationFrame = (id: any) => {
    clearTimeout(id);
  };
}
