export const ActionType = {
  LOAD_HOTELS: `reducer.initialState/loadData`,
  SET_COMMENTS: `reducer.initialState/setComments`,
  SET_ACTIVE_CITY: `screenMain/setActiveCity`,
  HIGHLIGHT_HOTEL_ID: `hotel/highlightHotelID`,
  SET_ACTIVE_SORT: `sortingPlaces/activeSort`,
  REQUIRED_AUTHORIZATION: `user/requireAuthorization`,
  LOGOUT: `user/logout`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const ActionCreator = {
  loadHotels: (hotels) => ({
    type: ActionType.LOAD_HOTELS,
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

  logout: (status) => ({
    type: ActionType.LOGOUT,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};

// Логика:
// в mapDispatchToProps передаётся коллбэк
// коллбэк вызывает dispatch, в котором вызывается необходимый action, а в action передаётся агрумент коллбэка как payload
// затем dispatch вызывает reducer, reducer вызывает store
// и на изменения store подписываются connect(mapStateToProps, mapDispatchToProps)
