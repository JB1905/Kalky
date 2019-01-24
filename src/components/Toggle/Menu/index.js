import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Menu.scss';

const ipcRenderer = window.ipcRenderer;

const Menu = () => (
  <button
    type="button"
    className="menu__toggle"
    onClick={() => ipcRenderer.send('menu-toggle', 'true')}
  >
    <FontAwesomeIcon icon={faBars} />
  </button>
);

export default Menu;
