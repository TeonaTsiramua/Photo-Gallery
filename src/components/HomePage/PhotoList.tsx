import { Photos } from '../../interface/interfaces';

function PhotoList({
  photos,
  onPhotoClick,
}: {
  photos: Photos[];
  onPhotoClick: (photo: Photos) => void;
}) {
  return (
    <ul className='photos'>
      {photos.map((photo, index) => (
        <li key={photo.id + index}>
          <img
            onClick={() => onPhotoClick(photo)}
            src={photo.urls.small}
            alt=''
          />
        </li>
      ))}
    </ul>
  );
}

export default PhotoList;
