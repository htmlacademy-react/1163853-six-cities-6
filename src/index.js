import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducers/reducer';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './utils/constants';
import {checkAuth} from './store/api-action';
import {createAPI} from './services/api';

import App from './components/app/app';

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.querySelector(`#root`)
);

// thunk - позволяет вызывать экшены в виде функций
// createAPI - сконфигурированный api с коллбэком requireAuthorization,
//    который будет вызываться в случае, если пользователь не авторизован
// createStore - создаёт хранилище. У него есть два аргумента:
//    reducer - ссылка на функцию, которая будет обновлять хранилище
//    composeWithDevTools - подключает devTools и в него же передаём applyMiddleware с сконфигурированным axios
// Provider - обёртка, которая соединяет redux с react
