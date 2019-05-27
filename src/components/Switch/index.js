import React from 'react';
import PropTypes from 'prop-types';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Switch.scss';

const Switch = ({ onClick, reverse }) => (
  <button className="switch" onClick={onClick}>
    <FontAwesomeIcon icon={reverse ? faArrowUp : faArrowDown} />
  </button>
);

Switch.propTypes = {
  onClick: PropTypes.func,
  reverse: PropTypes.bool
};

export default Switch;
