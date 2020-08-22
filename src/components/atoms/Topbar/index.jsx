import React, { useContext } from 'react';

import UserContext from '@contexts/userContext';

import {
  Container,
  Logout
} from './style';

/**
 * The Topbar displays the logo and the logout button at protected paths.
 */
const Topbar = () => {
  const { logout } = useContext(UserContext);

  return (
    <Container>
      <a href="/navers">
        <i className="icon-logo" />
      </a>
      <Logout onClick={() => logout()}>Sair</Logout>
    </Container>
  );
}

export default Topbar;
