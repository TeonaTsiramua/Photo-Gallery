import { Photos } from '../../interface/interfaces';
import { Image, Li, PhotoUl } from '../../styled-components/MainStyles';

export default function PhotoSet({
  keyName,
  photos,
  isSelected,
  togglePhotos,
  handlePhotoClick,
}: {
  keyName: string;
  photos: Photos[];
  isSelected: boolean;
  togglePhotos: () => void;
  handlePhotoClick: (photo: Photos) => void;
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
                />
              )}
            </Li>
          ))}
        </PhotoUl>
      )}
    </>
  );
}
