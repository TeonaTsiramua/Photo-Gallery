import styled from 'styled-components';

export const Input = styled.input`
  background-color: rgb(241, 250, 218);
  color: rgb(38, 80, 115);
  border: none;
  height: 1.5rem;
  border-radius: 5px;
  margin: 0;
  padding: 0.2rem 1rem;
  font-family: inherit;

  &:focus {
    outline: 2px solid rgb(45, 149, 150);
    color: rgb(38, 80, 115);
    caret-color: rgb(45, 149, 150);
  }

  ::placeholder {
    color: rgb(45, 149, 150);
    opacity: 0.5;
  }
`;
