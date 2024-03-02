import { useState } from 'react';
import { Photos } from '../interface/interfaces';

import Modal from '../components/Modal';
import SearchInput from '../components/HomePage/SearchInput';
import PhotoList from '../components/HomePage/PhotoList';
import LoadingIndicator from '../components/LoadingIndicator';

import useDataFetching from '../hooks/useDataFetching';
import useScrollHandler from '../hooks/useScrollHandler';

import { Main } from '../styled-components/MainStyles';

function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [page, setPage] = useState<number>(1);
  const { data, loading, clearData } = useDataFetching(query, page);
  const [clicked, setClicked] = useState(false);

  useScrollHandler(() => {
    setPage((prevPage) => prevPage + 1);
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1);
    clearData();
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
      <h1>Photo Gallery</h1>
      <SearchInput value={query} onChange={handleSearchChange} />
      <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      <PhotoList
        photos={data}
        onPhotoClick={handlePhotoClick}
        clicked={clicked}
      />
      {loading && <LoadingIndicator />}
    </Main>
  );
}

export default HomePage;
