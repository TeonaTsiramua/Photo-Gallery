import { Photos } from '../../interface/interfaces';
import {
  Items,
  ItemsLi,
  ItemsUl,
} from '../../styled-components/SearchedItmesStyles';

function SearchList({
  cachedPhotos,
  togglePhotos,
}: {
  cachedPhotos: {
    key: string;
    photos: Photos[];
  }[];
  togglePhotos: (key: string) => void;
}) {
  return (
    <Items>
      {cachedPhotos.map(({ key }) => (
        <ItemsUl
          key={key}
          onClick={() => togglePhotos(key)}
          style={{ cursor: 'pointer' }}
        >
          <ItemsLi>{key}</ItemsLi>
        </ItemsUl>
      ))}
    </Items>
  );
}

export default SearchList;
