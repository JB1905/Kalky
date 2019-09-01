import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MenuList } from '../Lists';

import { icons } from '../../constants/icons';

import './Menu.scss';

const Menu = () => (
  <nav className="menu">
    <div className="menu__section">
      <h2 className="menu__title">Calculators</h2>

      <ul className="menu__list">
        <li>
          <NavLink to="/standard">
            <FontAwesomeIcon icon={icons.basic} />
            <span>Standard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/scientific">
            <FontAwesomeIcon icon={icons.scientific} />
            <span>Scientific</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/programmer">
            <FontAwesomeIcon icon={icons.programmer} />
            <span>Programmer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dateCalculation">
            <FontAwesomeIcon icon={icons.date} />
            <span>Date Calculation</span>
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="menu__section">
      <h2 className="menu__title">Converters</h2>

      <ul className="menu__list">
        <li>
          <NavLink to="/currency">
            <FontAwesomeIcon icon={icons.currency} />
            <span>Currency</span>
          </NavLink>
        </li>
        <MenuList />
      </ul>
    </div>
  </nav>
);

export default Menu;
