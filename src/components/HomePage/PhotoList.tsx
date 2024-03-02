import { useEffect, useState } from 'react';
import { Photos } from '../../interface/interfaces';
import {
  Image,
  Li,
  NotFound,
  PhotoUl,
} from '../../styled-components/MainStyles';

function PhotoList({
  photos,
  onPhotoClick,
  clicked,
}: {
  photos: Photos[];
  onPhotoClick: (photo: Photos) => void;
  clicked: boolean;
}) {
  const [showNoPhotosMessage, setShowNoPhotosMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNoPhotosMessage(photos.length === 0);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [photos]);

  return (
    <>
      {showNoPhotosMessage && <NotFound>No photos found</NotFound>}{' '}
      {photos.length > 0 && (
        <PhotoUl>
          {photos.map((photo, index) => (
            <Li key={photo.id + index}>
              <Image
                onClick={() => onPhotoClick(photo)}
                src={photo.urls.small}
                alt={photo.alt_description || ''}
                className={clicked ? 'clicked' : ''}
              />
            </Li>
          ))}
        </PhotoUl>
      )}
    </>
  );
}

export default PhotoList;
