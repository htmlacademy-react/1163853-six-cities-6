import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {hotelStructure, reviewStructure} from '../../utils/types';
import {getMatchingOffer} from '../../utils';
import {JumpTo} from '../../utils/constants';

import {ScreenMain, ScreenLogin, ScreenFavorites, ScreenRoom, ScreenWarning, ScreenLoading, PrivateRoute} from '..';

const App = ({hotels, comments, isHotelsLoaded}) => {

  if (!isHotelsLoaded) {
    return (
      <ScreenLoading />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={JumpTo.ROOT}
          render={({history}) => {
            return <ScreenMain
              hotels={hotels}
              onClickHotel={(id) => history.push(`${JumpTo.OFFER}/${id}`)}
            />;
          }}
        />
        <Route
          exact
          path={JumpTo.LOGIN}
          component={ScreenLogin}
        />
        <PrivateRoute
          exact
          path={JumpTo.FAVORITES}
          render={({history}) => (
            <ScreenFavorites
              hotels={hotels}
              onClickHotel={(id) => history.push(`${JumpTo.OFFER}/${id}`)}
            />
          )}
        />
        <Route
          exact
          path={`${JumpTo.OFFER}/:id`}
          render={({match}) => (
            <ScreenRoom
              hotel={getMatchingOffer(hotels, match)}
              hotels={hotels}
              comments={comments[match.params.id]}
            />
          )}
        />
        <Route>
          <ScreenWarning />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure),
  comments: PropTypes.arrayOf(PropTypes.arrayOf(reviewStructure).isRequired).isRequired,
  isHotelsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({hotels, comments, isHotelsLoaded}) => ({hotels, comments, isHotelsLoaded});

export {App};
export default connect(mapStateToProps, null)(App);
