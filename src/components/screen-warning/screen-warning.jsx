import React from "react";
import {Link} from "react-router-dom";
import {WarningType} from "../../utils/constants";

const ScreenWarning = () => {
  const styleWarning = {
    textAlign: `center`,
    fontSize: `28px`,
    color: `#8B0000`,
    lineHeight: `26px`,
  };

  return (
    <div style={styleWarning}>
      <p>{WarningType.INVALID_ADDRESS_BAR}</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default ScreenWarning;
