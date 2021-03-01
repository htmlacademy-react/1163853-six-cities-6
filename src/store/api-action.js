import {adaptAllHotelsToClient} from '../services/adapter';
import {AuthorizationStatus} from '../utils/constants';
import {ActionCreator} from './action';

export const fetchHotels = () => (dispatch, _getState, api) => (
  api.get(`/hotels`).then(({data}) => {
    const hotels = adaptAllHotelsToClient(data);
    dispatch(ActionCreator.setHotels(hotels));
  })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

// Как это работает на примере асинхронного экшена fetchHotels.
//    Это функция, которая возвращает другую функцию, которой thunk докидывает параметры dispatch, _getState, api
//    это позволит передать middlewate этот api
//    Далее - axios.get возвращает json.response, далее - then и когда промис зарезолвится, делаем dispatch
// checkAuth - необходима для проверки авторизован ли пользователь
// login - необходим, чтобы залогиниться
