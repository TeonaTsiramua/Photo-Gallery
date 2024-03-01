import { Photos } from '../../interface/interfaces';

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
    <div className='x'>
      <div>
        {isSelected && (
          <ul className='photos'>
            {photos.map((photo: Photos) => (
              <li key={photo.id}>
                {photo.urls && photo.urls.small && (
                  <img
                    src={photo.urls.small}
                    alt=''
                    onClick={() => handlePhotoClick(photo)}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
