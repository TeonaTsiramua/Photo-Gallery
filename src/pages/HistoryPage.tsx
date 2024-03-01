import { useEffect, useState } from 'react';
import { Photos } from '../interface/interfaces';
import PhotoSet from '../components/PhotoSet';
import Modal from '../components/Modal';
import { fetchSearchPhotos } from '../api/api';

function HistoryPage() {
  const [cachedPhotos, setCachedPhotos] = useState<
    { key: string; photos: Photos[] }[]
  >([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(2);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false); // Track whether fetching should occur

  useEffect(() => {
    // Load cached photos initially
    const cachedData: { [key: string]: string } = { ...sessionStorage };

    const photosWithKeys = Object.entries(cachedData)
      .filter(([key, value]) => !key.endsWith('_timestamp'))
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
  }, []);

  useEffect(() => {
    // Detect scrolling to the bottom of the page
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        if (selectedKey) {
          setPage((prevPage) => prevPage + 1);
          setShouldFetch(true); // Set shouldFetch to true when scrolling to trigger fetching
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedKey]);

  // Function to fetch more photos when shouldFetch is true
  useEffect(() => {
    if (shouldFetch) {
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

      // Reset shouldFetch after fetching
      const debounceTimeout = setTimeout(fetchMorePhotos, 500);
      return () => {
        clearTimeout(debounceTimeout);
      };
    }
  }, [selectedKey, shouldFetch, page]);

  // Function to toggle selectedKey
  const togglePhotos = (key: string) => {
    setSelectedKey((prevKey) => (prevKey === key ? null : key));
    setSelectedPhoto(null);
    setPage(1); // Reset page to 1 when selecting a different key
  };

  // Function to handle photo click
  const handlePhotoClick = (photo: Photos) => {
    setSelectedPhoto(photo);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <main className='App'>
      <h1>History Page</h1>
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
      <div className='photo-set'>
        <div className='searched-items'>
          {cachedPhotos.map(({ key }: { key: string }) => (
            <ul
              key={key}
              className='search-list'
              onClick={() => togglePhotos(key)}
              style={{ cursor: 'pointer' }}
            >
              <li>{key}</li>
            </ul>
          ))}
        </div>
        {cachedPhotos.map(
          (
            { key, photos }: { key: string; photos: Photos[] },
            index: number
          ) => (
            <PhotoSet
              key={`photoSet-${index}`}
              keyName={key}
              photos={photos}
              isSelected={selectedKey === key}
              togglePhotos={() => togglePhotos(key)}
              handlePhotoClick={handlePhotoClick}
            />
          )
        )}
        {loading && <li>Loading...</li>}
      </div>
    </main>
  );
}

export default HistoryPage;
