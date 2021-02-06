import React from 'react';
import PropTypes from 'prop-types';
import {hotelSrtucture} from '../../utils/validator.prop';
import Hotel from '../hotel/hotel';

const HotelsList = ({hotels}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        hotels.map(({id, title, isPremium, image, price, isFavorite, type, rating}) => (
          <Hotel
            key={`${id}-${title}`}
            title={title}
            isPremium={isPremium}
            image={image}
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
