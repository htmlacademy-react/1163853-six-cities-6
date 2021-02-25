import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducers/reducer';

import App from './components/app/app';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.querySelector(`#root`)
);

// createStore - создаёт хранилище
// передаём в createStore - ссылку на функцию, назовём её reducer, которая будет обновлять хранилище
// Provider - обёртка, которая соединяет redux с react
