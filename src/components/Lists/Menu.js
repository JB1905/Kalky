import React from 'react';
import { NavLink } from 'react-router-dom';
import convert from 'convert-units';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from '../../constants/icons';

import { toTitle } from '../../helpers';

const Menu = () =>
  convert()
    .measures()
    .sort()
    .map(item => (
      <li key={item}>
        <NavLink to={`/${item}`}>
          <FontAwesomeIcon icon={icons[item.toLowerCase()]} />
          <span>{toTitle(item)}</span>
        </NavLink>
      </li>
    ));

export default Menu;
