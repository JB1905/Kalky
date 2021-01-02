import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { MenuList } from '../Lists';

// import { icons } from 'constants/icons';
import { routes } from '../../routes';

import './Menu.scss';

// TODO
const MenuItem = ({ path, icon, name }: any) => {
  return (
    <li>
      <NavLink to={path}>
        <FontAwesomeIcon icon={icon} />

        <span>{name}</span>
      </NavLink>
    </li>
  );
};

// TODO MenuSection?
const MenuGroup = ({ title, routes }: any) => {
  return (
    <div className="menu__section">
      <h2 className="menu__title">{title}</h2>

      <ul className="menu__list">
        {/* {routes.map((route) => (
          <MenuItem {...route} key={} />
        ))} */}
      </ul>
    </div>
  );
};

// TODO
const Menu = () => {
  return (
    <nav className="menu">
      {/* {groups.map((group) => (
        <MenuGroup {...group} key={} />
      ))} */}
    </nav>
  );
};

export default Menu;
