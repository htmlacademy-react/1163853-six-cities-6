import React from 'react';
import PropTypes from 'prop-types';
import {hotelStructure} from '../../utils/types';

import {FavoriteList, Logo} from '../../components';

const ScreenFavorites = ({hotels}) => {
  const favoriteHotels = hotels.filter(({isFavorite}) => isFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            {<Logo />}
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteHotels.length && <FavoriteList favoriteHotels={favoriteHotels}/>}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

ScreenFavorites.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
};

export default ScreenFavorites;
