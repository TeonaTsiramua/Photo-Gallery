import React, { useEffect, useState } from 'react';
import { Photos } from '../interface/interfaces';
import { fetchPopularPhotos, fetchSearchPhotos } from '../api/api';
import Modal from '../components/Modal';

function HomePage() {
  const [data, setData] = useState<Photos[]>([]);
  const [query, setQuery] = useState<string>('');
  const [selectedPhoto, setSelectedPhoto] = useState<Photos | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
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
    };

    const debounceTimeout = setTimeout(fetchData, 700);
    return () => clearTimeout(debounceTimeout);
  }, [query, page]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 // Adjusted threshold
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1); // Reset page when performing a new search
    setData([]); // Reset data when performing a new search
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
      <input
        type='text'
        value={query}
        onChange={handleSearchChange}
        placeholder='Search for photos...'
      />

      <Modal photo={selectedPhoto} onClose={handleCloseModal} />

      <ul className='photos'>
        {data.map((photo: Photos) => (
          <li key={photo.id}>
            <img
              onClick={() => handlePhotoClick(photo)}
              src={photo.urls.small}
              alt=''
            />
          </li>
        ))}
        {loading && <li>Loading...</li>}
      </ul>
    </main>
  );
}

export default HomePage;
