import React from 'react';
import {WarningType} from '../../utils/constants';

const ScreenLoading = () => {
  const styleLoading = {
    textAlign: `center`,
    fontSize: `28px`,
    color: `#8B0000`,
    lineHeight: `26px`,
  };

  return (
    <div style={styleLoading}>
      <p>{WarningType.LOADING}</p>
    </div>
  );
};

export default ScreenLoading;
