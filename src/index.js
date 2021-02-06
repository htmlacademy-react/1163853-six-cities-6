import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {generateHotels} from './temp';

const hotels = generateHotels(10);

ReactDOM.render(
    <App
      hotels={hotels}
    />, document.querySelector(`#root`)
);
