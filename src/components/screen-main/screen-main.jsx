import React from 'react';
import PropTypes from 'prop-types';
import {hotelStructure} from '../../utils/types';
import {Cities} from '../../temp/service';
import {RenderType} from '../../utils/constants';

import {Places, NoPlaces, Header} from '../../components';

const ScreenMain = ({hotels, onClickHotel}) => {
  const [currentCity] = React.useState(Cities.Amsterdam);

  return (
    <div className="page page--gray page--main">
      <Header renderMainLogo={RenderType.MAIN_LOGO} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        {hotels.length ? <Places currentCity={currentCity} hotels={hotels} onClickHotel={onClickHotel} /> : <NoPlaces />}
      </main>
    </div>
  );
};

ScreenMain.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  onClickHotel: PropTypes.func.isRequired,
};

export default ScreenMain;
