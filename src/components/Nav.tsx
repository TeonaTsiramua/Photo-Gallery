import {
  NavLi,
  StyledNav,
  NavUl,
  StyledLink,
} from '../styled-components/HeaderStyles';

function Nav() {
  return (
    <StyledNav>
      <NavUl>
        <NavLi>
          <StyledLink to='/'>Home</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to='history'>History</StyledLink>
        </NavLi>
      </NavUl>
    </StyledNav>
  );
}

export default Nav;
