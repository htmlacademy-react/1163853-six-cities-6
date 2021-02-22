import React from 'react';
import PropTypes from 'prop-types';
import {hotelStructure} from '../../utils/types';
import {City, getCity} from '../../temp/service';
import {RenderType} from '../../utils/constants';

import {Places, NoPlaces, Header} from '../../components';

const ScreenMain = ({hotels, onClickHotel}) => {
  const [currentCity, setCurrentCity] = React.useState(getCity(`Paris`));

  // Эмуляция отсутствия отелей в Дюссельдорфе
  const hotelsFilteredByCity = (currentCity.name === `Dusseldorf`) ? [] : hotels.filter(({cityName}) => cityName === currentCity.name);

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
                          setCurrentCity(getCity(city));
                        }}
                        className={`locations__item-link tabs__item ${(currentCity.name === city) && `tabs__item--active`}`}>
                        <span>{city}</span>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </section>
        </div>
        {hotelsFilteredByCity.length ? <Places currentCity={currentCity} hotels={hotelsFilteredByCity} onClickHotel={onClickHotel} /> : <NoPlaces />}
      </main>
    </div>
  );
};

ScreenMain.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  onClickHotel: PropTypes.func.isRequired,
};

export default ScreenMain;
