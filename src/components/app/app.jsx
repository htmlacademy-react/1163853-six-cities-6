import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {hotelStructure} from '../../utils/types';
import {getMatchingOffer} from '../../utils';

import ScreenMain from '../screen-main/screen-main';
import ScreenLogin from '../screen-login/screen-login';
import ScreenFavorites from '../screen-favorites/screen-favorites';
import ScreenRoom from '../screen-room/screen-room';
import Warning from '../warning/warning';

const App = ({hotels}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ScreenMain
              hotels={hotels}
            />
          )}
        />
        <Route
          exact
          path="/login"
          component={ScreenLogin}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <ScreenFavorites
              hotels={hotels}
            />
          )}
        />
        <Route
          exact
          path="/offer/:id"
          render={({match}) => (
            <ScreenRoom
              hotel={getMatchingOffer(hotels, match)}
              hotels={hotels}
            />
          )}
        />
        <Route>
          <Warning />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
};

export default App;
