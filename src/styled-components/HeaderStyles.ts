import styled from 'styled-components';

export const Header = styled.header``;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgb(154, 208, 194);
  backdrop-filter: blur(5rem);
  border-radius: 15px;
  font-weight: 700;
  font-size: larger;
`;

export const NavUl = styled.ul`
  display: flex;
  place-content: center;
  gap: 3rem;
  margin: 0;
  padding: 1rem;
`;

export const NavLi = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;

  &:hover {
    text-shadow: 3px 3px 2px rgba(45, 149, 150, 1);
  }

  & > * {
    text-decoration: none;
    color: rgb(38, 80, 115);
  }
`;
