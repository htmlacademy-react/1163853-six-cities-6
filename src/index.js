import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducers/reducer';
import {mockHotels} from './temp/hotel';

import App from './components/app/app';
import {generateComments} from './temp/service';

const hotels = mockHotels;
const comments = generateComments(hotels.length);

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        hotels={hotels}
        comments={comments}
      />
    </Provider>, document.querySelector(`#root`)
);

// createStore - создаёт хранилище
// передаём в createStore - ссылку на функцию, назовём её reducer, которая будет обновлять хранилище
// Provider - обёртка, которая соединяет redux с react
