import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

import { toTitle, locationToTitle } from '../../helpers';

const Title = ({ location }) => (
  <h2 className="screen__title">{locationToTitle(toTitle(location))}</h2>
);

Title.propTypes = {
  location: PropTypes.string.isRequired
};

export default Title;
