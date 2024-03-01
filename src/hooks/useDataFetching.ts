import { useEffect, useState, useCallback } from 'react';
import { Photos } from '../interface/interfaces';
import { fetchPopularPhotos, fetchSearchPhotos } from '../api/api';

const DEBOUNCE_TIMEOUT = 700;

function useDataFetching(query: string, page: number) {
  const [data, setData] = useState<Photos[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    let photos: Photos[] | null = null;
    if (!query) {
      photos = await fetchPopularPhotos(page);
    } else {
      photos = await fetchSearchPhotos(query, page);
    }
    if (photos) {
      setData((prevData) => [...prevData, ...photos!]);
    }
    setLoading(false);
  }, [query, page]);

  useEffect(() => {
    const debounceTimeout = setTimeout(fetchData, DEBOUNCE_TIMEOUT);
    return () => clearTimeout(debounceTimeout);
  }, [fetchData]);

  const clearData = useCallback(() => {
    setData([]);
  }, []);

  return { data, loading, clearData };
}

export default useDataFetching;
