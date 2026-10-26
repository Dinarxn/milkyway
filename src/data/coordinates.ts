/**
 * src/data/coordinates.ts
 * High-precision celestial coordinate transformation engine.
 * Fully compliant with IAU 1958 / Hipparcos / SOFA standards.
 * Transforms between Equatorial ICRS (Epoch J2000), Galactic Spherical,
 * Galactocentric Cartesian, and Three.js World Space.
 */

import type {
  GalactocentricCartesian,
  GalacticCoordinates,
  ThreeJsCoordinates
} from '../types/galaxy.js';

export const DEG_TO_RAD = Math.PI / 180.0;
export const RAD_TO_DEG = 180.0 / Math.PI;

// Physical & Astrometric Reference Constants
export const SUN_GC_DISTANCE_LY = 26000.0; // Canonical distance from Sun to Sagittarius A* (ly)
export const SUN_MIDPLANE_Z_LY = 68.0;      // Solar elevation above galactic midplane (ly)
export const LY_PER_PARSEC = 3.261563777;   // 1 parsec in light-years

/**
 * Standard IAU SOFA / Hipparcos 3x3 Rotation Matrix (ICRS to Galactic)
 * Derived from the North Galactic Pole:
 *   RA_G = 192.85948° (12h 51m 26.28s), Dec_G = +27.12825° (+27° 07' 41.7"),
 *   Galactic longitude of NCP = 122.93192°
 */
export const M_ICRS_TO_GAL = [
  [-0.054875560416215368, -0.873437090234883400, -0.483835015548713200],
  [+0.494109427875583700, -0.444829629960011200, +0.746982244497218900],
  [-0.867666149019004700, -0.198076373431201500, +0.455983776175066900]
] as const;

/**
 * Inverse rotation matrix (Galactic to ICRS).
 * Equal to the transpose of M_ICRS_TO_GAL due to orthogonality.
 */
export const M_GAL_TO_ICRS = [
  [-0.054875560416215368, +0.494109427875583700, -0.867666149019004700],
  [-0.873437090234883400, -0.444829629960011200, -0.198076373431201500],
  [-0.483835015548713200, +0.746982244497218900, +0.455983776175066900]
] as const;

/**
 * Converts Equatorial ICRS (RA, Dec in degrees) to Galactic coordinates (l, b in degrees).
 *
 * @param raDeg Right Ascension in degrees [0, 360)
 * @param decDeg Declination in degrees [-90, +90]
 * @param distanceLy Distance in light-years (optional)
 * @returns Galactic coordinates { lDeg, bDeg, distanceLy }
 */
export function equatorialToGalactic(
  raDeg: number,
  decDeg: number,
  distanceLy: number = 1.0
): GalacticCoordinates {
  const ra = raDeg * DEG_TO_RAD;
  const dec = decDeg * DEG_TO_RAD;

  // ICRS Cartesian Unit Vector
  const xEq = Math.cos(dec) * Math.cos(ra);
  const yEq = Math.cos(dec) * Math.sin(ra);
  const zEq = Math.sin(dec);

  // Matrix multiplication: r_gal = M_ICRS_TO_GAL * r_eq
  const xGal =
    M_ICRS_TO_GAL[0][0] * xEq + M_ICRS_TO_GAL[0][1] * yEq + M_ICRS_TO_GAL[0][2] * zEq;
  const yGal =
    M_ICRS_TO_GAL[1][0] * xEq + M_ICRS_TO_GAL[1][1] * yEq + M_ICRS_TO_GAL[1][2] * zEq;
  const zGal =
    M_ICRS_TO_GAL[2][0] * xEq + M_ICRS_TO_GAL[2][1] * yEq + M_ICRS_TO_GAL[2][2] * zEq;

  let l = Math.atan2(yGal, xGal) * RAD_TO_DEG;
  if (l < 0) l += 360.0;
  const b = Math.asin(Math.max(-1.0, Math.min(1.0, zGal))) * RAD_TO_DEG;

  return { lDeg: l, bDeg: b, distanceLy };
}

/**
 * Converts Galactic coordinates (l, b in degrees) back to Equatorial ICRS (RA, Dec in degrees).
 *
 * @param lDeg Galactic longitude in degrees [0, 360)
 * @param bDeg Galactic latitude in degrees [-90, +90]
 * @returns Equatorial coordinates { raDeg, decDeg }
 */
export function galacticToEquatorial(
  lDeg: number,
  bDeg: number
): { raDeg: number; decDeg: number } {
  const l = lDeg * DEG_TO_RAD;
  const b = bDeg * DEG_TO_RAD;

  // Galactic Cartesian Unit Vector
  const xGal = Math.cos(b) * Math.cos(l);
  const yGal = Math.cos(b) * Math.sin(l);
  const zGal = Math.sin(b);

  // Multiply by transpose M_GAL_TO_ICRS
  const xEq =
    M_GAL_TO_ICRS[0][0] * xGal + M_GAL_TO_ICRS[0][1] * yGal + M_GAL_TO_ICRS[0][2] * zGal;
  const yEq =
    M_GAL_TO_ICRS[1][0] * xGal + M_GAL_TO_ICRS[1][1] * yGal + M_GAL_TO_ICRS[1][2] * zGal;
  const zEq =
    M_GAL_TO_ICRS[2][0] * xGal + M_GAL_TO_ICRS[2][1] * yGal + M_GAL_TO_ICRS[2][2] * zGal;

  let ra = Math.atan2(yEq, xEq) * RAD_TO_DEG;
  if (ra < 0) ra += 360.0;
  const dec = Math.asin(Math.max(-1.0, Math.min(1.0, zEq))) * RAD_TO_DEG;

  return { raDeg: ra, decDeg: dec };
}

/**
 * Converts Galactic Coordinates (l, b, distanceLy) to Galactocentric Cartesian coordinates (X, Y, Z in ly).
 * Origin is at Sagittarius A* (0, 0, 0).
 * Sun is located at (X = 26000, Y = 0, Z = +68) ly.
 */
export function galacticToGalactocentric(
  lDeg: number,
  bDeg: number,
  distanceLy: number
): GalactocentricCartesian {
  const l = lDeg * DEG_TO_RAD;
  const b = bDeg * DEG_TO_RAD;

  // Heliocentric Galactic Cartesian (Sun at origin)
  const xH = distanceLy * Math.cos(b) * Math.cos(l);
  const yH = distanceLy * Math.cos(b) * Math.sin(l);
  const zH = distanceLy * Math.sin(b);

  // Galactocentric Cartesian (Sgr A* at origin)
  // xH points from Sun toward Galactic Center
  const xG = SUN_GC_DISTANCE_LY - xH;
  const yG = yH;
  const zG = zH + SUN_MIDPLANE_Z_LY;

  return { x: xG, y: yG, z: zG };
}

/**
 * Converts Galactocentric Cartesian coordinates back to Galactic Spherical (l, b, distanceLy from Sun).
 */
export function galactocentricToGalactic(pos: GalactocentricCartesian): GalacticCoordinates {
  const xH = SUN_GC_DISTANCE_LY - pos.x;
  const yH = pos.y;
  const zH = pos.z - SUN_MIDPLANE_Z_LY;

  const distanceLy = Math.sqrt(xH * xH + yH * yH + zH * zH);
  if (distanceLy === 0) {
    return { lDeg: 0, bDeg: 0, distanceLy: 0 };
  }

  let l = Math.atan2(yH, xH) * RAD_TO_DEG;
  if (l < 0) l += 360.0;
  const b = Math.asin(Math.max(-1.0, Math.min(1.0, zH / distanceLy))) * RAD_TO_DEG;

  return { lDeg: l, bDeg: b, distanceLy };
}

/**
 * Maps Galactocentric coordinates to Three.js world space coordinates.
 * Three.js coordinate mapping:
 *   x_three = -Y_G (along galactic rotation inverted for right-hand view)
 *   y_three = Z_G  (North Galactic Pole / disk elevation = UP)
 *   z_three = X_G  (Galactic Center to Sun Axis)
 */
export function galactocentricToThree(pos: GalactocentricCartesian): ThreeJsCoordinates {
  return {
    x: -pos.y,
    y: pos.z,
    z: pos.x
  };
}

/**
 * Maps Three.js world space coordinates back to Galactocentric Cartesian.
 */
export function threeToGalactocentric(three: ThreeJsCoordinates): GalactocentricCartesian {
  return {
    x: three.z,
    y: -three.x,
    z: three.y
  };
}

/**
 * End-to-end pipeline: Converts ICRS Equatorial coordinates directly to Three.js world position.
 *
 * @param raDeg Right Ascension in degrees
 * @param decDeg Declination in degrees
 * @param distanceLy Distance from Sun in light-years
 * @returns Three.js world coordinates (1 unit = 1 ly)
 */
export function icrsToThreePosition(
  raDeg: number,
  decDeg: number,
  distanceLy: number
): ThreeJsCoordinates {
  const gal = equatorialToGalactic(raDeg, decDeg, distanceLy);
  const gCart = galacticToGalactocentric(gal.lDeg, gal.bDeg, distanceLy);
  return galactocentricToThree(gCart);
}

/**
 * Reverse pipeline: Converts Three.js world coordinates back to ICRS Equatorial coordinates and distance from Sun.
 */
export function threePositionToIcrs(three: ThreeJsCoordinates): {
  raDeg: number;
  decDeg: number;
  distanceLy: number;
} {
  const gCart = threeToGalactocentric(three);
  const gal = galactocentricToGalactic(gCart);
  const eq = galacticToEquatorial(gal.lDeg, gal.bDeg);
  return {
    raDeg: eq.raDeg,
    decDeg: eq.decDeg,
    distanceLy: gal.distanceLy ?? 0
  };
}

/**
 * Calculates Euclidean distance between two Three.js positions in light-years.
 */
export function distanceBetweenThreePoints(
  a: ThreeJsCoordinates,
  b: ThreeJsCoordinates
): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Converts stellar parallax in milliarcseconds (mas) to distance in light-years.
 */
export function parallaxToLightYears(parallaxMas: number): number {
  if (parallaxMas <= 0) return 0;
  const parsecs = 1000.0 / parallaxMas;
  return parsecs * LY_PER_PARSEC;
}

/**
 * Parses Right Ascension string ("17h 45m 40.04s" or "17:45:40.04") to decimal degrees [0, 360).
 */
export function parseRaStringToDegrees(raStr: string): number {
  if (!raStr || typeof raStr !== 'string') return 0;
  const trimmed = raStr.trim();

  // If already a simple number (e.g. "266.4168")
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return parseFloat(trimmed);
  }

  // Split on h, m, s, colons, or whitespace
  const tokens = trimmed.replace(/[hmsHMS:]/g, ' ').trim().split(/\s+/).map(Number);
  const hours = tokens[0] || 0;
  const minutes = tokens[1] || 0;
  const seconds = tokens[2] || 0;

  return (hours + minutes / 60.0 + seconds / 3600.0) * 15.0;
}

/**
 * Parses Declination string ("-29° 00' 28.1\"" or "-29:00:28.1") to decimal degrees [-90, +90].
 */
export function parseDecStringToDegrees(decStr: string): number {
  if (!decStr || typeof decStr !== 'string') return 0;
  const trimmed = decStr.trim();

  // Check if string indicates negative
  const isNegative = trimmed.startsWith('-') || trimmed.startsWith('\u2212');

  // If already a simple number
  if (/^[+\-\u2212]?\d+(\.\d+)?$/.test(trimmed)) {
    return parseFloat(trimmed.replace('\u2212', '-'));
  }

  const clean = trimmed.replace(/[+\-\u2212°'"dmsDMS:]/g, ' ').trim();
  const tokens = clean.split(/\s+/).map(Number);
  const deg = Math.abs(tokens[0] || 0);
  const arcmin = tokens[1] || 0;
  const arcsec = tokens[2] || 0;

  const value = deg + arcmin / 60.0 + arcsec / 3600.0;
  return isNegative ? -value : value;
}

/**
 * Formats decimal degrees to RA string ("HHh MMm SS.SSs").
 */
export function degreesToRaString(raDeg: number): string {
  const norm = ((raDeg % 360) + 360) % 360;
  const totalHours = norm / 15.0;
  const h = Math.floor(totalHours);
  const remMinutes = (totalHours - h) * 60.0;
  const m = Math.floor(remMinutes);
  const s = (remMinutes - m) * 60.0;

  const hh = h.toString().padStart(2, '0');
  const mm = m.toString().padStart(2, '0');
  const ss = s.toFixed(2).padStart(5, '0');
  return `${hh}h ${mm}m ${ss}s`;
}

/**
 * Formats decimal degrees to Declination string ("±DD° MM' SS.S\"").
 */
export function degreesToDecString(decDeg: number): string {
  const sign = decDeg < 0 ? '-' : '+';
  const abs = Math.abs(decDeg);
  const d = Math.floor(abs);
  const remArcmin = (abs - d) * 60.0;
  const m = Math.floor(remArcmin);
  const s = (remArcmin - m) * 60.0;

  const dd = d.toString().padStart(2, '0');
  const mm = m.toString().padStart(2, '0');
  const ss = s.toFixed(1).padStart(4, '0');
  return `${sign}${dd}° ${mm}' ${ss}"`;
}
