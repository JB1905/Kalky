import React from 'react';
import PropTypes from 'prop-types';

import './Screen.scss';

const Screen = ({ className = '', value }) => (
  <div className={`screen ${className}`}>{value}</div>
);

Screen.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Screen;
