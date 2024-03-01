import { useEffect, useState } from 'react';
import { fetchPhotoStatistics } from '../api/api';

function usePhotoStatistics(photoId: string | undefined) {
  const [statistics, setStatistics] = useState<any | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      if (photoId) {
        const stats = await fetchPhotoStatistics(photoId);
        setStatistics(stats);
      }
    };

    fetchStatistics();

    return () => {
      setStatistics(null);
    };
  }, [photoId]);

  return statistics;
}

export default usePhotoStatistics;
