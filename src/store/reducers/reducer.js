import {getPlace} from '../../utils';
import {ActionType} from '../action';
import {CitiesList, SortType, AuthorizationStatus} from '../../utils/constants';

const initialState = {
  isHotelsLoaded: false,
  hotels: [],
  activeHotel: {},
  activeCity: null,
  comments: [],
  highlightHotelID: ``,
  activeSort: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {...state, isHotelsLoaded: true, hotels: action.payload, activeCity: getPlace(action.payload, CitiesList[0])};
    case ActionType.SET_ACTIVE_CITY:
      return {...state, activeCity: action.payload};
    case ActionType.HIGHLIGHT_HOTEL_ID:
      return {...state, highlightHotelID: action.payload};
    case ActionType.SET_ACTIVE_SORT:
      return {...state, activeSort: action.payload};
    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload};
    case ActionType.LOGOUT:
      return {...state, authorizationStatus: action.payload};
    case ActionType.LOAD_COMMENTS:
      return {...state, comments: action.payload};
    case ActionType.SET_ACTIVE_HOTEL:
      return {...state, activeHotel: action.payload};
    default:
      return state;
  }
};

export {reducer};
