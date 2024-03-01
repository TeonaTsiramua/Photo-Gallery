import { Input } from '../../styled-components/SearchInputStyles';

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Input
      id='search'
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Search for photos...'
    />
  );
}

export default SearchInput;
