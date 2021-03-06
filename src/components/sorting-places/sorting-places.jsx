import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RenderType, SortType} from '../../utils/constants';
import {cityStructure, hotelStructure} from '../../utils/types';
import {ActionCreator} from '../../store/action';
import {getSortedHotels} from '../../utils';

import {HotelsList} from '..';

const SortingPlaces = ({currentCity, hotels, onClickHotel, activeSort, onClickActiveSort}) => {
  const [isOptionsOpen, setIsOptionsOpen] = React.useState(false);

  const sortedHotels = getSortedHotels(hotels, activeSort);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${hotels.length} places to stay in ${currentCity.name}`}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          onClick={(evt) => {
            evt.preventDefault();
            setIsOptionsOpen(true);
          }}
          className="places__sorting-type" tabIndex="0">
          {activeSort}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${isOptionsOpen && `places__options--opened` || ``}`}>
          {
            Object.values(SortType).map((sort) => (
              <li
                key={sort}
                onClick={(evt) => {
                  evt.preventDefault();
                  onClickActiveSort(sort);
                  setIsOptionsOpen(false);
                }}
                className={`places__option ${activeSort}`}
                tabIndex="0">
                {sort}
              </li>
            ))
          }
        </ul>
      </form>
      <HotelsList
        hotels={sortedHotels}
        renderType={RenderType.ALL_HOTELS}
        onClickHotel={onClickHotel}/>
    </section>
  );
};

SortingPlaces.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  onClickHotel: PropTypes.func.isRequired,
  currentCity: PropTypes.shape(cityStructure).isRequired,
  activeSort: PropTypes.string.isRequired,
  onClickActiveSort: PropTypes.func.isRequired,
};

const mapStateToProps = ({activeSort}) => ({activeSort});

const mapDispatchToProps = (dispatch) => ({
  onClickActiveSort(sort) {
    dispatch(ActionCreator.setActiveSort(sort));
  }
});

export {SortingPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(SortingPlaces);
