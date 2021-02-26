export const ActionType = {
  SET_HOTELS: `reducer.initialState/setHotels`,
  SET_COMMENTS: `reducer.initialState/setComments`,
  SET_ACTIVE_CITY: `screenMain/setActiveCity`,
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

// Логика:
// в mapDispatchToProps передаётся коллбэк
// коллбэк вызывает dispatch, в котором вызывается необходимый action, а в action передаётся агрумент коллбэка как payload
// затем dispatch вызывает reducer, reducer вызывает store
// и на изменения store подписываются connect(mapStateToProps, mapDispatchToProps)
