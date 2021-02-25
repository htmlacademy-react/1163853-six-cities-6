export const ActionType = {
  SET_HOTELS: `SET_HOTELS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_COMMENTS: `SET_COMMENTS`,
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

  setComments: (comments) => ({
    type: ActionType.SET_COMMENTS,
    payload: comments,
  }),
};
