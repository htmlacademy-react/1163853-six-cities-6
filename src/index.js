import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {mockHotels} from './temp';

const hotels = mockHotels;

ReactDOM.render(
    <App
      hotels={hotels}
    />, document.querySelector(`#root`)
);
