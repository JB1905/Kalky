import React from 'react';
import { NavLink } from 'react-router-dom';
import convert from 'convert-units';

import { toTitle } from '../../helpers';

const Menu = () =>
  convert()
    .measures()
    .sort()
    .map(item => (
      <li key={item}>
        <NavLink to={`/${item}`}>{toTitle(item)}</NavLink>
      </li>
    ));

export default Menu;
