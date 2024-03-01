import { useEffect, useState } from 'react';
import { Photos } from '../interface/interfaces';
import PhotoSet from '../components/PhotoSet';
import Modal from '../components/Modal'; // Step 1: Import Modal component

function HistoryPage() {
  const [cachedPhotos, setCachedPhotos] = useState<
    { key: string; photos: Photos[] }[]
  >([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null); // Step 2: State for managing modal visibility

  useEffect(() => {
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

  const togglePhotos = (key: string) => {
    setSelectedKey(selectedKey === key ? null : key);
    setSelectedPhoto(null); // Close modal when toggling photos
  };

  const handlePhotoClick = (photo: Photos) => {
    setSelectedPhoto(photo); // Open modal when a photo is clicked
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null); // Close modal
  };

  return (
    <main className='App'>
      <h1>History Page</h1>
      {selectedPhoto && ( // Render modal if selectedPhoto is not null
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
      <div className='photo-set'>
        <div className='searched-items'>
          {cachedPhotos.map(({ key }: { key: string }, index: number) => (
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
        {cachedPhotos.length > 0 ? (
          cachedPhotos.map(
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
                handlePhotoClick={handlePhotoClick} // Pass handlePhotoClick function to PhotoSet
              />
            )
          )
        ) : (
          <p>No history available</p>
        )}
      </div>
    </main>
  );
}

export default HistoryPage;
