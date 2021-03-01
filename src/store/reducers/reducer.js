import {getPlace} from '../../utils';
import {ActionType} from '../action';
import {mockHotels} from '../../temp/hotel';
import {mockComments} from '../../temp/comment';
import {CitiesList, SortType, AuthorizationStatus} from '../../utils/constants';

const initialState = {
  // hotels: [],
  hotels: mockHotels,
  activeCity: getPlace(mockHotels, CitiesList[0]),
  comments: mockComments,
  highlightHotelID: ``,
  activeSort: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return {...state, hotels: action.payload};
    case ActionType.SET_ACTIVE_CITY:
      return {...state, activeCity: action.payload};
    case ActionType.HIGHLIGHT_HOTEL_ID:
      return {...state, highlightHotelID: action.payload};
    case ActionType.SET_ACTIVE_SORT:
      return {...state, activeSort: action.payload};
    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, authorizationStatus: action.payload};
    default:
      return state;
  }
};

export {reducer};
