import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {hotelStructure} from '../../utils/types';
import {getMatchingOffer} from '../../utils';
import {JumpTo} from '../../utils/constants';

import {ScreenMain, ScreenLogin, ScreenFavorites, ScreenRoom, Warning} from '../../components';

const App = ({hotels}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={JumpTo.ROOT}
          render={() => (
            <ScreenMain
              hotels={hotels}
            />
          )}
        />
        <Route
          exact
          path={JumpTo.LOGIN}
          component={ScreenLogin}
        />
        <Route
          exact
          path={JumpTo.FAVORITES}
          render={() => (
            <ScreenFavorites
              hotels={hotels}
            />
          )}
        />
        <Route
          exact
          path={JumpTo.OFFER_ID}
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
