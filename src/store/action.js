export const ActionType = {
  SET_HOTELS: `temp/hotel`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
};

export const ActionCreator = {
  setHotels: (hotels) => ({
    type: ActionType.SET_HOTELS,
    payload: hotels,
  }),

  setActiveCity: (activeCity) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: activeCity,
  }),
};
