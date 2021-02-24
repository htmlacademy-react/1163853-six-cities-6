import {extend} from '../../utils';
import {ActionType} from '../action';
import {City, getCity} from '../../temp/city';

const initialState = {
  hotels: [],
  activeCity: getCity(City.PARIS),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return extend(state, {
        hotels: action.payload,
      });
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
  }

  return state;
};

export {reducer};
