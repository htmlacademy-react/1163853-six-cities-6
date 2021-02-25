import React from 'react';
import PropTypes from 'prop-types';

import {Logo} from '../../components';

const Header = ({classNameForLogoLink}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo classNameForLogoLink={classNameForLogoLink}/>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  classNameForLogoLink: PropTypes.string,
};

export default Header;
