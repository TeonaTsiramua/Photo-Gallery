import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header``;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgb(154, 208, 194);
  backdrop-filter: blur(5rem);
  border-radius: 15px;
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
`;

export const StyledLink = styled(Link)`
  font-size: 1.37rem;
  font-weight: 800;
  background-image: linear-gradient(
    to right,
    rgb(45, 149, 150),
    rgb(45, 149, 150) 50%,
    rgb(38, 80, 115) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  background-clip: padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: '';
    background: rgb(45, 149, 150);
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }
`;
