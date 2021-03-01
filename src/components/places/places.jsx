import React from 'react';
import PropTypes from 'prop-types';
import {MapType} from '../../utils/constants';
import {hotelStructure, cityStructure} from '../../utils/types';

import {Map, SortingPlaces} from '..';

const Places = ({currentCity, hotels, onClickHotel}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <SortingPlaces
          currentCity={currentCity}
          hotels={hotels}
          onClickHotel={onClickHotel}/>
        <Map
          mapType={MapType.MAIN_MAP}
          city={currentCity}
          hotels={hotels}/>
      </div>
    </div>
  );
};

Places.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  onClickHotel: PropTypes.func.isRequired,
  currentCity: PropTypes.shape(cityStructure).isRequired,
};

export default Places;
