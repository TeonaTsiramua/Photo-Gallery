import { Photos } from '../../interface/interfaces';
import PhotoSet from './PhotoSet';

function CustomPhotoSet({
  cachedPhotos,
  selectedKey,
  togglePhotos,
  handlePhotoClick,
}: {
  cachedPhotos: {
    key: string;
    photos: Photos[];
  }[];
  selectedKey: string | null;
  togglePhotos: (key: string) => void;
  handlePhotoClick: (photo: Photos) => void;
}) {
  return (
    <>
      {cachedPhotos.map(({ key, photos }, index) => (
        <PhotoSet
          key={`photoSet-${index}`}
          keyName={key}
          photos={photos}
          isSelected={selectedKey === key}
          togglePhotos={() => togglePhotos(key)}
          handlePhotoClick={handlePhotoClick}
        />
      ))}
    </>
  );
}

export default CustomPhotoSet;
