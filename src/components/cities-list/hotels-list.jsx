import React from 'react';
import PropTypes from 'prop-types';
import {hotelSrtucture} from '../../utils/types';
import Hotel from '../hotel/hotel';

const HotelsList = ({hotels}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        hotels.map(({id, title, isPremium, preview, price, isFavorite, type, rating}) => (
          <Hotel
            key={`${id}`}
            title={title}
            isPremium={isPremium}
            preview={preview}
            price={price}
            isFavorite={isFavorite}
            type={type}
            rating={rating}
          />
        ))
      }
    </div>
  );
};

HotelsList.propTypes = {
  hotels: PropTypes.arrayOf(hotelSrtucture).isRequired,
};

export default HotelsList;
