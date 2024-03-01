import { Photos } from '../../interface/interfaces';
import { Image, Li, PhotoUl } from '../../styled-components/MainStyles';

function PhotoList({
  photos,
  onPhotoClick,
}: {
  photos: Photos[];
  onPhotoClick: (photo: Photos) => void;
}) {
  return (
    <PhotoUl>
      {photos.map((photo, index) => (
        <Li key={photo.id + index}>
          <Image
            onClick={() => onPhotoClick(photo)}
            src={photo.urls.small}
            alt={photo.alt_description || ''}
          />
        </Li>
      ))}
    </PhotoUl>
  );
}

export default PhotoList;
