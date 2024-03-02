import { Photos } from '../../interface/interfaces';
import { NotFound } from '../../styled-components/MainStyles';
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
    <>
      {cachedPhotos.length > 0 ? (
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
      ) : (
        <NotFound>No search history available</NotFound>
      )}
    </>
  );
}

export default SearchList;
