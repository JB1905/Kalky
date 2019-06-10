import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuList } from '../Lists';

import './Menu.scss';

const Menu = () => (
  <nav className="menu">
    <div className="menu__section">
      <h2 className="menu__title">Calculators</h2>

      <ul className="menu__list">
        <li>
          <NavLink to="/dateCalculation">Date Calculation</NavLink>
        </li>
      </ul>
    </div>

    <div className="menu__section">
      <h2 className="menu__title">Converters</h2>

      <ul className="menu__list">
        <li>
          <NavLink to="/currency">Currency</NavLink>
        </li>
        <MenuList />
      </ul>
    </div>
  </nav>
);

export default Menu;
