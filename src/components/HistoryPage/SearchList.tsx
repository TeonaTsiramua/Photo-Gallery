import { Photos } from '../../interface/interfaces';

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
    <div className='searched-items'>
      {cachedPhotos.map(({ key }) => (
        <ul
          key={key}
          className='search-list'
          onClick={() => togglePhotos(key)}
          style={{ cursor: 'pointer' }}
        >
          <li>{key}</li>
        </ul>
      ))}
    </div>
  );
}

export default SearchList;
