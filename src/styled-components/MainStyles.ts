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
`;

export const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;
