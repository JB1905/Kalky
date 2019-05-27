import React from 'react';
import PropTypes from 'prop-types';

import './Screen.scss';

const Screen = ({ className = '', value }) => (
  <section className={`screen ${className}`}>{value}</section>
);

Screen.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Screen;
