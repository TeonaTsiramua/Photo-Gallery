import { useEffect, useState } from 'react';
import { Photos } from '../interface/interfaces';
import { fetchPhotoStatistics } from '../api/api';

export default function Modal({
  photo,
  onClose,
}: {
  photo: Photos | null;
  onClose: () => void;
}) {
  const [statistics, setStatistics] = useState<any | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      if (photo) {
        const stats = await fetchPhotoStatistics(photo.id);
        setStatistics(stats);
      }
    };

    fetchStatistics();
  }, [photo]);

  if (!photo) return null;

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleClickOutside} className='modal-overlay'>
      <div className='modal-content'>
        <span onClick={onClose}>✖</span>
        <img className='modal-image' src={photo.urls.regular} alt='' />

        <div>
          <p>⬇️ Downloads: {statistics?.downloads?.total || ''}</p>
          <p>👁️ Views: {statistics?.views?.total || ''}</p>
          <p>❤️ Likes: {photo.likes || ''}</p>
        </div>
      </div>
    </div>
  );
}
