import { Link } from 'react-router-dom';
import { NavLi, StyledNav, NavUl } from '../styled-components/HeaderStyles';

function Nav() {
  return (
    <StyledNav>
      <NavUl>
        <NavLi>
          <Link to='/'>Home</Link>
        </NavLi>
        <NavLi>
          <Link to='history'>History</Link>
        </NavLi>
      </NavUl>
    </StyledNav>
  );
}

export default Nav;
