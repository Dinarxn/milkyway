/**
 * src/data/nasaApi.ts
 * Integration with NASA Open APIs (APOD & NASA Image Library)
 * Sourced using official NASA API credentials.
 */

export interface NasaApodData {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
  copyright?: string;
}

export interface NasaImageItem {
  title: string;
  description: string;
  imageUrl: string;
  nasaId: string;
  dateCreated?: string;
}

const NASA_API_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_NASA_API_KEY) ||
  '6Rc9hnCBGd9rNwwtMHtjDgGLNk7LnBLjH8FBkGRd';

const imageCache = new Map<string, NasaImageItem | null>();
let apodCache: NasaApodData | null = null;

/**
 * Fetch NASA Astronomy Picture of the Day (APOD)
 */
export async function fetchNasaApod(): Promise<NasaApodData | null> {
  if (apodCache) return apodCache;

  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    if (!res.ok) {
      console.warn(`NASA APOD API returned status ${res.status}`);
      return null;
    }
    const data = (await res.json()) as NasaApodData;
    apodCache = data;
    return data;
  } catch (err) {
    console.warn('Failed to fetch NASA APOD:', err);
    return null;
  }
}

/**
 * Search NASA Image and Video Library for a given landmark name or keyword
 * (Hubble / JWST / Spitzer authentic captures)
 */
export async function fetchNasaLandmarkImage(landmarkName: string): Promise<NasaImageItem | null> {
  const query = landmarkName.trim();
  if (imageCache.has(query)) {
    return imageCache.get(query) ?? null;
  }

  try {
    // NASA Image Library API search
    const searchUrl = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`;
    const res = await fetch(searchUrl);
    if (!res.ok) {
      imageCache.set(query, null);
      return null;
    }

    const json = await res.json();
    const items = json?.collection?.items;
    if (!Array.isArray(items) || items.length === 0) {
      imageCache.set(query, null);
      return null;
    }

    // Pick first item with valid image links and data
    const firstItem = items[0];
    const itemData = firstItem.data?.[0];
    const links = firstItem.links;
    const thumbLink = links?.find((l: { rel?: string; href?: string }) => l.rel === 'preview' || l.href?.endsWith('.jpg'))?.href;

    if (!itemData || !thumbLink) {
      imageCache.set(query, null);
      return null;
    }

    const result: NasaImageItem = {
      title: itemData.title || query,
      description: itemData.description || '',
      imageUrl: thumbLink,
      nasaId: itemData.nasa_id || '',
      dateCreated: itemData.date_created
    };

    imageCache.set(query, result);
    return result;
  } catch (err) {
    console.warn(`Failed to fetch NASA image for landmark "${query}":`, err);
    imageCache.set(query, null);
    return null;
  }
}

