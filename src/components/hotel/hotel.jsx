import React from 'react';
import PropTypes from 'prop-types';
import {RATING_MULTIPLIER} from '../../utils/constants';

const Hotel = ({
  id,
  isPremium,
  title,
  preview,
  price,
  isFavorite,
  type,
  rating,
  isRenderAllHotels,
  isRenderFavoriteHotels,
  isRenderNearestHotels,
  onMouseOverHotel,
  onMouseLeaveHotel,
}) => {
  const styleRating = {width: `${rating * RATING_MULTIPLIER}%`};

  return (
    <article
      onMouseOver={() => onMouseOverHotel(id)}
      onMouseLeave={onMouseLeaveHotel}
      className={
        isRenderAllHotels && `cities__place-card place-card` ||
        isRenderFavoriteHotels && `favorites__card place-card` ||
        isRenderNearestHotels && `near-places__card place-card`
      }>
      {isPremium && isRenderAllHotels && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)
      }
      <div className={
        isRenderAllHotels && `cities__image-wrapper place-card__image-wrapper` ||
        isRenderFavoriteHotels && `favorites__image-wrapper place-card__image-wrapper` ||
        isRenderNearestHotels && `near-places__image-wrapper place-card__image-wrapper`
      }>
        <a href="#">
          <img
            className="place-card__image"
            src={preview}
            width={(isRenderAllHotels || isRenderNearestHotels) && `260` || isRenderFavoriteHotels && `150`}
            height={(isRenderAllHotels || isRenderNearestHotels) && `200` || isRenderFavoriteHotels && `110`}
            alt={`${title} image`}
          />
        </a>
      </div>
      <div className={`${isRenderFavoriteHotels && `favorites__card-info`} place-card__info`}>
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
            <span style={styleRating} />
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
  id: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isRenderAllHotels: PropTypes.bool.isRequired,
  isRenderFavoriteHotels: PropTypes.bool.isRequired,
  isRenderNearestHotels: PropTypes.bool.isRequired,
  onMouseOverHotel: PropTypes.func.isRequired,
  onMouseLeaveHotel: PropTypes.func.isRequired,
};

export default Hotel;
