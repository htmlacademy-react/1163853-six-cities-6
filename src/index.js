import React from 'react';
import ReactDOM from 'react-dom';
import {mockHotels} from './temp/hotel';

import App from './components/app/app';
import {generateComments} from './temp/service';

const hotels = mockHotels;

const comments = generateComments(hotels.length);

ReactDOM.render(
    <App
      hotels={hotels}
      comments={comments}
    />, document.querySelector(`#root`)
);
