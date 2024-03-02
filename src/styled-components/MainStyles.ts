import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: clamp(1rem, 2vw, 3rem);
  margin: 2rem 0;
  padding: 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Image = styled.img`
  width: clamp(10rem, 15vw, 20rem);
  height: clamp(10rem, 15vw, 20rem);
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1, 1.1);
    outline: 2px solid rgb(45, 149, 150);
  }

  &:hover::after {
    opacity: 0;
  }

  &.clicked {
    transform: none;
  }
`;

export const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NotFound = styled.p`
  position: fixed;
  top: 20rem;
  z-index: -1;
`;
