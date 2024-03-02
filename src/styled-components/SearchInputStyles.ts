import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  background-color: rgb(241, 250, 218);
  color: rgb(38, 80, 115);
  border: none;
  height: 1.5rem;
  border-radius: 5px;
  margin: 0;
  padding: 0.2rem 1.9rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;

  &:focus {
    outline: 2px solid rgb(45, 149, 150);
    color: rgb(38, 80, 115);
    caret-color: rgb(45, 149, 150);
  }

  &::placeholder {
    color: rgb(45, 149, 150);
    opacity: 0.5;
  }
`;

export const Logo = styled.img`
  opacity: 1;
  position: absolute;
  left: 0.2rem;
`;
