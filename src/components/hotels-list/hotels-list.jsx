import React from 'react';
import PropTypes from 'prop-types';
import {hotelStructure} from '../../utils/types';
import Hotel from '../hotel/hotel';
import {RenderType} from '../../utils/constants';

const HotelsList = ({hotels, renderType}) => {
  const isAllHotels = renderType === RenderType.ALL_HOTELS;
  const isFavoriteHotels = renderType === RenderType.FAVORITE_HOTELS;

  return (
    <div className={isAllHotels && `cities__places-list places__list tabs__content` || isFavoriteHotels && `favorites__places`}>
      {
        hotels.map(({id, title, isPremium, preview, price, isFavorite, type, rating}) => (
          <Hotel
            key={id}
            title={title}
            isPremium={isPremium}
            preview={preview}
            price={price}
            isFavorite={isFavorite}
            type={type}
            rating={rating}
            renderType={renderType}
          />
        ))
      }
    </div>
  );
};

HotelsList.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  renderType: PropTypes.string.isRequired,
};

export default HotelsList;
