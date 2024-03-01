import { useState } from 'react';
import { Photos } from '../interface/interfaces';

import useCachedPhotos from '../hooks/useCachedPhotos';
import useHistoryScroll from '../hooks/useHistoryScroll';
import useFetchMorePhotos from '../hooks/useFetchMorePhotos';

import Modal from '../components/Modal';
import SearchList from '../components/HistoryPage/SearchList';
import CustomPhotoSet from '../components/HistoryPage/CustomPhotoSet';
import LoadingIndicator from '../components/LoadingIndicator';

import { Main } from '../styled-components/MainStyles';

function HistoryPage() {
  const [cachedPhotos, setCachedPhotos] = useState<
    { key: string; photos: Photos[] }[]
  >([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(2);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  useCachedPhotos(setCachedPhotos);

  useHistoryScroll({ selectedKey, setPage, setShouldFetch });

  useFetchMorePhotos({
    selectedKey,
    page,
    setLoading,
    setCachedPhotos,
    shouldFetch,
  });

  const togglePhotos = (key: string) => {
    setSelectedKey((prevKey) => (prevKey === key ? null : key));
    setSelectedPhoto(null);
    setPage(1);
  };

  const handlePhotoClick = (photo: Photos) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <Main>
      <h1>History Page</h1>
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
      <div className='photo-set'>
        <SearchList cachedPhotos={cachedPhotos} togglePhotos={togglePhotos} />
        <CustomPhotoSet
          cachedPhotos={cachedPhotos}
          selectedKey={selectedKey}
          togglePhotos={togglePhotos}
          handlePhotoClick={handlePhotoClick}
        />
        {loading && <LoadingIndicator />}
      </div>
    </Main>
  );
}

export default HistoryPage;
