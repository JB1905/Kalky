import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { MenuList } from '../Lists';

// import { icons } from 'constants/icons';
import { routes } from '../../constants/routes';

import './Menu.scss';

const Menu: React.FC = () => (
  <nav className="menu">
    <div className="menu__section">
      <h2 className="menu__title">Calculators</h2>

      <ul className="menu__list">
        {routes.calculators.map(({ name, path }) => (
          <li>
            <NavLink to={path}>
              {/* <FontAwesomeIcon icon={icons.basic} /> */}

              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>

    {/* <div className="menu__section">
      <h2 className="menu__title">Converters</h2>

      <ul className="menu__list">
        {routes.converters.map(({ name, path }) => (
          <li>
            <NavLink to={path}>
              <FontAwesomeIcon icon={icons.basic} />

              <span>{name}</span>
            </NavLink>
          </li>
        ))}

        <MenuList />
      </ul>
    </div> */}
  </nav>
);

export default Menu;
