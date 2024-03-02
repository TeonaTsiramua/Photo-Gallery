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
  const [clicked, setClicked] = useState(false);

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
    setClicked(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setClicked(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <Main>
      <h1>Search History</h1>
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      )}

      <SearchList cachedPhotos={cachedPhotos} togglePhotos={togglePhotos} />
      <CustomPhotoSet
        cachedPhotos={cachedPhotos}
        selectedKey={selectedKey}
        handlePhotoClick={handlePhotoClick}
        clicked={clicked}
      />
      {loading && <LoadingIndicator />}
    </Main>
  );
}

export default HistoryPage;
