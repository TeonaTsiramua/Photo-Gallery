// useCachedPhotos.ts
import { useEffect } from 'react';
import { Photos } from '../interface/interfaces';

function useCachedPhotos(setCachedPhotos: Function) {
  useEffect(() => {
    const cachedData: { [key: string]: string } = { ...sessionStorage };

    const photosWithKeys = Object.entries(cachedData)
      .filter(
        ([key, value]) =>
          !key.endsWith('_timestamp') && JSON.parse(value).length > 0
      )
      .map(([key, value]) => {
        try {
          const parsedValue = JSON.parse(value);
          return { key, photos: parsedValue };
        } catch (error) {
          console.error('Error parsing JSON:', error);
          return null;
        }
      })
      .filter((parsedValue) => parsedValue !== null) as {
      key: string;
      photos: Photos[];
    }[];

    setCachedPhotos(photosWithKeys);
  }, [setCachedPhotos]);
}

export default useCachedPhotos;
