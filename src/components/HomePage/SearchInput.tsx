function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Search for photos...'
    />
  );
}

export default SearchInput;
