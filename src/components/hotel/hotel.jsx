import React from 'react';
import PropTypes from 'prop-types';
import {RATING_MULTIPLIER, RenderType} from '../../utils/constants';

const Hotel = ({isPremium, title, preview, price, isFavorite, type, rating, renderType}) => {
  const styleRating = {width: `${rating * RATING_MULTIPLIER}%`};
  const isAllHotels = renderType === RenderType.ALL_HOTELS;
  const isFavoriteHotels = renderType === RenderType.FAVORITE_HOTELS;
  const isNearestHotels = renderType === RenderType.NEAR_HOTELS;

  return (
    <article className={
      isAllHotels && `cities__place-card place-card` ||
      isFavoriteHotels && `favorites__card place-card` ||
      isNearestHotels && `near-places__card place-card`
    }>
      {
        isPremium && isAllHotels && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className={
        isAllHotels && `cities__image-wrapper place-card__image-wrapper` ||
        isFavoriteHotels && `favorites__image-wrapper place-card__image-wrapper` ||
        isNearestHotels && `near-places__image-wrapper place-card__image-wrapper`
      }>
        <a href="#">
          <img
            className="place-card__image"
            src={preview}
            width={(isAllHotels || isNearestHotels) && `260` || isFavoriteHotels && `150`}
            height={(isAllHotels || isNearestHotels) && `200` || isFavoriteHotels && `110`}
            alt={`${title} image`}
          />
        </a>
      </div>
      <div className={`${isFavoriteHotels && `favorites__card-info`} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
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
  rating: PropTypes.number.isRequired,
  renderType: PropTypes.string.isRequired,
};

export default Hotel;
