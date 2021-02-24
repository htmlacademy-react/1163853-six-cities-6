export const ActionType = {
  SET_CITIES: `temp/city`,
  SET_HOTELS: `temp/hotel`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
};

export const ActionCreator = {
  setCities: (cities) => ({
    type: ActionType.SET_CITIES,
    payload: cities,
  }),

  setHotels: (hotels) => ({
    type: ActionType.SET_HOTELS,
    payload: hotels,
  }),

  setActiveCity: (activeCity) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: activeCity,
  }),
};
