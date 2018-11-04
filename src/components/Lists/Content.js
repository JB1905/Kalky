import React from 'react';
import { Route } from 'react-router-dom';
import convert from 'convert-units';

import Units from '../../containers/Converters/Units';

const Content = () =>
  convert()
    .measures()
    .map(route => (
      <Route exact path={`/${route}`} key={route} component={Units} />
    ));

export default Content;
