import { useState } from 'react';
import { Photos } from '../interface/interfaces';

import Modal from '../components/Modal';
import SearchInput from '../components/HomePage/SearchInput';
import PhotoList from '../components/HomePage/PhotoList';
import LoadingIndicator from '../components/LoadingIndicator';

import useDataFetching from '../hooks/useDataFetching';
import useScrollHandler from '../hooks/useScrollHandler';

function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [page, setPage] = useState<number>(1);
  const { data, loading, clearData } = useDataFetching(query, page);

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
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <main className='App'>
      <h1>Photos</h1>
      <SearchInput value={query} onChange={handleSearchChange} />
      <Modal photo={selectedPhoto} onClose={handleCloseModal} />
      <PhotoList photos={data} onPhotoClick={handlePhotoClick} />
      {loading && <LoadingIndicator />}
    </main>
  );
}

export default HomePage;
