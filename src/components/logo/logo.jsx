import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {JumpTo} from '../../utils/constants';

const Logo = ({classNameForLogoLink}) => {
  return (
    <div className="header__left">
      <Link
        to={JumpTo.ROOT}
        className={`header__logo-link ${classNameForLogoLink}`}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  classNameForLogoLink: PropTypes.string,
};

export default Logo;
