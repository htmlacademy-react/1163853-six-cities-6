import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {hotelStructure, reviewStructure} from '../../utils/types';
import {getMatchingOffer} from '../../utils';
import {JumpTo} from '../../utils/constants';
import {fetchHotels} from '../../store/api-action';

import {ScreenMain, ScreenLogin, ScreenFavorites, ScreenRoom, Warning, ScreenLoading} from '../../components';

const App = ({hotels, comments, isDataLoaded, onLoadData}) => {

  React.useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
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
        <Route
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
          <Warning />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
  comments: PropTypes.arrayOf(PropTypes.arrayOf(reviewStructure).isRequired).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = ({hotels, comments, isDataLoaded}) => ({hotels, comments, isDataLoaded});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchHotels);
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
