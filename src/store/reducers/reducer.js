import {extend, getPlace} from '../../utils';
import {ActionType} from '../action';
import {mockHotels} from '../../temp/hotel';
import {mockComments} from '../../temp/comment';
import {CitiesList} from '../../utils/constants';

const initialState = {
  hotels: mockHotels,
  activeCity: getPlace(mockHotels, CitiesList[0]),
  comments: mockComments,
  highlightHotelID: ``,
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
    case ActionType.HIGHLIGHT_HOTEL_ID:
      return extend(state, {
        highlightHotelID: action.payload,
      });
    default:
      return state;
  }
};

export {reducer};
