import usePhotoStatistics from '../hooks/usePhotoStatistics';
import { Photos } from '../interface/interfaces';
import {
  Content,
  ModalImg,
  ModalSpan,
  Overlay,
} from '../styled-components/ModalStyles';

export default function Modal({
  photo,
  onClose,
}: {
  photo: Photos | null;
  onClose: () => void;
}) {
  const statistics = usePhotoStatistics(photo?.id);

  if (!photo) return null;

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClickOutside}>
      <Content>
        <ModalSpan onClick={onClose}>✖</ModalSpan>
        <ModalImg src={photo.urls.regular} alt='' />

        <div>
          <p>⬇️ Downloads: {statistics?.downloads?.total || ''}</p>
          <p>👁️ Views: {statistics?.views?.total || ''}</p>
          <p>❤️ Likes: {photo.likes || ''}</p>
        </div>
      </Content>
    </Overlay>
  );
}
