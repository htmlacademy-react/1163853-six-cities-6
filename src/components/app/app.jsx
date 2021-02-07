import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {hotelSrtucture} from '../../utils/types';

import ScreenMain from '../screen-main/screen-main';
import ScreenLogin from '../screen-login/screen-login';

const App = ({hotels}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ScreenMain
            hotels={hotels}
          />
        </Route>
        <Route exact path="/login" component={ScreenLogin}/>
        <Route>
          <h2>WHAT THE HELL IS GOING ON HERE</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelSrtucture).isRequired,
};

export default App;
