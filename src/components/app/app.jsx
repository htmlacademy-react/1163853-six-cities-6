import React from 'react';
import PropTypes from 'prop-types';
import ScreenMain from '../screen-main/screen-main';
import {hotelSrtucture} from '../../utils/types';

const App = ({hotels}) => {
  return (
    <ScreenMain
      hotels={hotels}
    />
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelSrtucture).isRequired,
};

export default App;
