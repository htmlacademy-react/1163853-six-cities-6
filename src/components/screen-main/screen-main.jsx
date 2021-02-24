import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {cityStructure, hotelStructure} from '../../utils/types';
import {RenderType} from '../../utils/constants';
import {City, getCity} from '../../temp/city';
import {ActionCreator} from '../../store/action';

import {Places, NoPlaces, Header} from '../../components';

const ScreenMain = ({hotels, onClickHotel, activeCity, onClickTabLocation}) => {

  // Эмуляция отсутствия отелей в Дюссельдорфе
  const hotelsFilteredByCity = (activeCity.name === `Dusseldorf`) ? [] : hotels.filter(({cityName}) => cityName === activeCity.name);

  return (
    <div className="page page--gray page--main">
      <Header renderMainLogo={RenderType.MAIN_LOGO} />
      <main className={`page__main page__main--index ${!hotelsFilteredByCity.length && `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                Object.values(City).map((city) => {
                  return (
                    <li key={city} className="locations__item">
                      <a
                        onClick={(evt) => {
                          evt.preventDefault();
                          onClickTabLocation(getCity(city));
                        }}
                        className={`locations__item-link tabs__item ${(activeCity.name === city) && `tabs__item--active`}`}>
                        <span>{city}</span>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </section>
        </div>
        {hotelsFilteredByCity.length ? <Places currentCity={activeCity} hotels={hotelsFilteredByCity} onClickHotel={onClickHotel} /> : <NoPlaces />}
      </main>
    </div>
  );
};

ScreenMain.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  onClickHotel: PropTypes.func.isRequired,
  activeCity: PropTypes.shape(cityStructure).isRequired,
  onClickTabLocation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTabLocation(newSelectedCity) {
    dispatch(ActionCreator.setActiveCity(newSelectedCity));
  }
});

export {ScreenMain};
export default connect(mapStateToProps, mapDispatchToProps)(ScreenMain);
