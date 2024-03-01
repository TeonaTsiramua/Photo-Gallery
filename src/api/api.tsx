import { createApi, OrderBy } from 'unsplash-js';
import { ACCESS_KEY } from './config';

const api = createApi({
  accessKey: ACCESS_KEY,
});

export async function fetchPopularPhotos(page?: number) {
  try {
    const result = await api.photos.list({
      orderBy: OrderBy.POPULAR,
      perPage: 20,
      page: page,
    });
    return result.response?.results || [];
  } catch (error) {
    console.error('Error fetching popular photos:', error);
    throw error;
  }
}

export async function fetchSearchPhotos(query: string, page?: number) {
  try {
    const cacheKey = `${query}_page_${page}`;
    const cachedPhotos = sessionStorage.getItem(cacheKey);
    if (cachedPhotos) {
      return JSON.parse(cachedPhotos);
    } else {
      const result = await api.search.getPhotos({
        query,
        perPage: 20,
        page: page,
      });
      if (result.response) {
        const storageLimit = 40;
        if (sessionStorage.length >= storageLimit) {
          let oldestTimestamp = Infinity;
          let oldestKey = null;
          for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            if (key) {
              const timestamp = sessionStorage.getItem(`${key}_timestamp`);
              if (timestamp && parseInt(timestamp) < oldestTimestamp) {
                oldestTimestamp = parseInt(timestamp);
                oldestKey = key;
              }
            }
          }

          if (oldestKey) {
            sessionStorage.removeItem(oldestKey);
            sessionStorage.removeItem(`${oldestKey}_timestamp`);
          }
        }

        const currentTime = Date.now();
        sessionStorage.setItem(query, JSON.stringify(result.response.results));
        sessionStorage.setItem(`${query}_timestamp`, currentTime.toString());
        return result.response.results || [];
      } else {
        console.log('Response is undefined');
        return [];
      }
    }
  } catch (error) {
    console.error('Error fetching search photos:', error);
    throw error;
  }
}

export async function fetchPhotoStatistics(photoId: string) {
  try {
    const result = await api.photos.getStats({ photoId });
    return result.response || [];
  } catch (error) {
    console.error('Error fetching photo statistics:', error);
    throw error;
  }
}
