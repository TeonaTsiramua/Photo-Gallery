// useFetchMorePhotos.ts
import { useEffect } from 'react';
import { fetchSearchPhotos } from '../api/api';
import { Photos } from '../interface/interfaces';

interface Props {
  selectedKey: string | null;
  page: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCachedPhotos: React.Dispatch<
    React.SetStateAction<{ key: string; photos: Photos[] }[]>
  >;
  shouldFetch: boolean;
}

function useFetchMorePhotos({
  selectedKey,
  page,
  setLoading,
  setCachedPhotos,
  shouldFetch,
}: Props) {
  useEffect(() => {
    if (shouldFetch && selectedKey) {
      const fetchMorePhotos = async () => {
        try {
          setLoading(true);
          const newPhotos = await fetchSearchPhotos(selectedKey || '', page);
          setCachedPhotos((prevPhotos) =>
            prevPhotos.map((item) =>
              item.key === selectedKey
                ? {
                    ...item,
                    photos: [...item.photos, ...(newPhotos || [])] as Photos[],
                  }
                : item
            )
          );
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error('Error fetching more photos:', error);
        }
      };

      const debounceTimeout = setTimeout(fetchMorePhotos, 500);
      return () => {
        clearTimeout(debounceTimeout);
      };
    }
  }, [selectedKey, page, setLoading, setCachedPhotos, shouldFetch]);
}

export default useFetchMorePhotos;
