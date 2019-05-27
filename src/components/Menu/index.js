import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuList } from '../Lists';

import './Menu.scss';

const Menu = () => (
  <nav className="menu">
    <div>
      <h2>Calculators</h2>

      <ul>
        <li>
          <NavLink to="/dateCalculation">Date Calculation</NavLink>
        </li>
      </ul>
    </div>

    <div>
      <h2>Converters</h2>

      <ul>
        <li>
          <NavLink to="/currency">Currency</NavLink>
        </li>
        <MenuList />
      </ul>
    </div>
  </nav>
);

export default Menu;
