import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuList } from '../Lists';

import './Menu.scss';

const Menu = () => (
  <nav className="menu">
    <h2>Converters</h2>
    <ul>
      <li>
        <NavLink to="/currency">Currency</NavLink>
      </li>
      <MenuList />
    </ul>
  </nav>
);

export default Menu;
