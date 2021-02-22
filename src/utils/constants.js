export const RATING_MULTIPLIER = 20;
export const NOT_INITIALIZED = -1;
export const FIVE_STARS = [1, 2, 3, 4, 5];

export const MapType = {
  MAIN_MAP: `cities__map`,
  OFFER_MAP: `property__map`,
};

export const RenderType = {
  FAVORITE_HOTELS: `favorite`,
  ALL_HOTELS: `usual`,
  NEAR_HOTELS: `near`,
};

export const WarningType = {
  INVALID_ADDRESS_BAR: `WHAT THE HELL IS GOING ON HERE`,
};

export const JumpTo = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
};

export const ReviewLength = {
  MIN: 49,
  MAX: 300
};

export const MarkerType = {
  pin: {
    iconUrl: `./img/pin.svg`,
    iconSize: [25, 35]
  },
  pinActive: {
    iconUrl: `./img/pin-active2.svg`,
    iconSize: [35, 45]
  },
};