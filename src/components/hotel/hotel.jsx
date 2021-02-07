import React from 'react';
import PropTypes from 'prop-types';
import {RATING_MULTIPLIER} from '../../utils/constants';

const Hotel = ({isPremium, title, preview, price, isFavorite, type, rating}) => {
  const styleRating = {width: `${rating * RATING_MULTIPLIER}%`};
  return (
    <article className="cities__place-card place-card">
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={preview} width="260" height="200" alt={`${title} image`} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            `place-card__bookmark-button
            ${isFavorite && `place-card__bookmark-button--active`}
            button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={styleRating}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Hotel.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default Hotel;
