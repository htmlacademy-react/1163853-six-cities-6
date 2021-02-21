import React from 'react';
import PropTypes from 'prop-types';
import {MapType, RenderType} from '../../utils/constants';
import {hotelStructure, cityStructure} from '../../utils/types';

import {HotelsList, Map} from '../../components';

const PageMain = ({currentCity, hotels, onClickHotel}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <HotelsList
            hotels={hotels}
            renderType={RenderType.ALL_HOTELS}
            onClickHotel={onClickHotel}/>
        </section>
        <div className="cities__right-section">
          <Map
            mapType={MapType.MAIN_MAP}
            city={currentCity}
            hotels={hotels}/>
        </div>
      </div>
    </div>
  );
};

PageMain.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  onClickHotel: PropTypes.func.isRequired,
  currentCity: PropTypes.shape(cityStructure).isRequired,
};

export default PageMain;
