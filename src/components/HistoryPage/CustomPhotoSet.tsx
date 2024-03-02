import { Photos } from '../../interface/interfaces';
import PhotoSet from './PhotoSet';

function CustomPhotoSet({
  cachedPhotos,
  selectedKey,
  handlePhotoClick,
  clicked,
}: {
  cachedPhotos: {
    key: string;
    photos: Photos[];
  }[];
  selectedKey: string | null;
  handlePhotoClick: (photo: Photos) => void;
  clicked: boolean;
}) {
  return (
    <>
      {cachedPhotos.map(({ key, photos }, index) => (
        <PhotoSet
          key={`photoSet-${index}`}
          photos={photos}
          isSelected={selectedKey === key}
          handlePhotoClick={handlePhotoClick}
          clicked={clicked}
        />
      ))}
    </>
  );
}

export default CustomPhotoSet;
