import {extend} from '../../utils';
import {ActionType} from '../action';

const initialState = {
  cities: [],
  hotels: [],
  activeCity: -1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return extend(state, {
        hotels: action.payload,
      });
    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload,
      });
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
  }

  return state;
};

export {reducer};
