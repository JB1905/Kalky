import React from 'react';
import { Route } from 'react-router-dom';
import convert from 'convert-units';

import Units from '../containers/Converters/Units/Units';

export const ContentList = () =>
  convert()
    .measures()
    .map(val => <Route exact path={`/${val}`} key={val} component={Units} />);
