import { Photos } from '../../interface/interfaces';
import { Image, Li, PhotoUl } from '../../styled-components/MainStyles';

export default function PhotoSet({
  photos,
  isSelected,
  handlePhotoClick,
  clicked,
}: {
  photos: Photos[];
  isSelected: boolean;
  handlePhotoClick: (photo: Photos) => void;
  clicked: boolean;
}) {
  return (
    <>
      {isSelected && (
        <PhotoUl>
          {photos.map((photo: Photos) => (
            <Li key={photo.id}>
              {photo.urls && photo.urls.small && (
                <Image
                  src={photo.urls.small}
                  alt={photo.alt_description || ''}
                  onClick={() => handlePhotoClick(photo)}
                  className={clicked ? 'clicked' : ''}
                />
              )}
            </Li>
          ))}
        </PhotoUl>
      )}
    </>
  );
}
