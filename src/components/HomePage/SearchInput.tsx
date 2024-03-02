import {
  Input,
  InputContainer,
  // Logo,
} from '../../styled-components/SearchInputStyles';
// import searchIcon from '../../assets/images/image_search.svg';

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <InputContainer>
      {/* <Logo src={searchIcon} alt='Image search logo' /> */}
      <Input
        id='search'
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search for photos...'
      />
    </InputContainer>
  );
}

export default SearchInput;
