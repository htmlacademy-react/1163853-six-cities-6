import React from 'react';
import ReactDOM from 'react-dom';
import {mockHotels} from './temp';

import App from './components/app/app';

const hotels = mockHotels;

ReactDOM.render(
    <App
      hotels={hotels}
    />, document.querySelector(`#root`)
);
