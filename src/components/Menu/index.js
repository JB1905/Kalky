import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from '../MenuList';

import './Menu.css';

export const Menu = () => (
  <nav className="menu">
    <ul>
      <li>
        <NavLink to="/currency">Currency</NavLink>
      </li>
      <MenuList />
    </ul>
  </nav>
);
