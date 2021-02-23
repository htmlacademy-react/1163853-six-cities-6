import React from 'react';
import PropTypes from 'prop-types';
import {hotelStructure} from '../../utils/types';

import {FavoriteList, Header} from '../../components';

const ScreenFavorites = ({hotels, onClickHotel}) => {
  const favoriteHotels = hotels.filter(({isFavorite}) => isFavorite);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteHotels.length && <FavoriteList favoriteHotels={favoriteHotels} onClickHotel={onClickHotel}/>}
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
  onClickHotel: PropTypes.func.isRequired,
};

export default ScreenFavorites;
