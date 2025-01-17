import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.input} />
        </HeaderLink>
        <HeaderLink to="/list">
          <FormattedMessage {...messages.list} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
