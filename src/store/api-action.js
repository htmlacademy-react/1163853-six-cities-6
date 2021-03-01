import {adaptAllHotelsToClient} from '../services/adapter';
import {ActionCreator} from './action';

export const fetchHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`).then(({data}) => {
    const hotels = adaptAllHotelsToClient(data);
    dispatch(ActionCreator.setHotels(hotels));
  })
);
