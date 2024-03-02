import styled from 'styled-components';

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ItemsUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ItemsLi = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  color: rgb(154, 208, 194);
  position: relative;

  &::before {
    content: '';
    background-color: rgb(45, 149, 150);
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    bottom: 0;
    height: 90%;
    background-color: rgb(241, 250, 218, 0.9);
  }

  &:hover {
    color: rgb(38, 80, 115);
  }
`;
