import React from 'react';

import './Title.css';

import { toTitle, locationToTitle } from '../../helpers';

export const Title = ({ location }) => (
  <h2 className="screen__title">{locationToTitle(toTitle(location))}</h2>
);
