import React from 'react';

import './Title.scss';

import { toTitle, locationToTitle } from '../../helpers';

const Title = ({ location }) => (
  <h2 className="screen__title">{locationToTitle(toTitle(location))}</h2>
);

export default Title;
