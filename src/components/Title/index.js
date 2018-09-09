import React from 'react';

import './Title.css';

import { titleString } from '../../helpers';

export const Title = ({ location }) => (
  <h2 className="screen__title">{titleString(location)}</h2>
);
