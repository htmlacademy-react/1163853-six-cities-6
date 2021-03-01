export const ActionType = {
  SET_HOTELS: `reducer.initialState/setHotels`,
  SET_COMMENTS: `reducer.initialState/setComments`,
  SET_ACTIVE_CITY: `screenMain/setActiveCity`,
  HIGHLIGHT_HOTEL_ID: `hotel/highlightHotelID`,
  SET_ACTIVE_SORT: `sortingPlaces/activeSort`,
  REQUIRED_AUTHORIZATION: `user/requireAuthorization`,
  LOADING_DATA: `loadingData`,
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

  highlightHotelID: (id) => ({
    type: ActionType.HIGHLIGHT_HOTEL_ID,
    payload: id,
  }),

  setActiveSort: (sort) => ({
    type: ActionType.SET_ACTIVE_SORT,
    payload: sort,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};

// Логика:
// в mapDispatchToProps передаётся коллбэк
// коллбэк вызывает dispatch, в котором вызывается необходимый action, а в action передаётся агрумент коллбэка как payload
// затем dispatch вызывает reducer, reducer вызывает store
// и на изменения store подписываются connect(mapStateToProps, mapDispatchToProps)
