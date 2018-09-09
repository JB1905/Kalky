import React from 'react';
import { NavLink } from 'react-router-dom';
import convert from 'convert-units';

export const MenuList = () =>
  convert()
    .measures()
    .sort()
    .map(val => (
      <li key={val}>
        <NavLink to={`/${val}`}>
          {val.replace(/[A-Z]/g, name => ` ${name}`)}
        </NavLink>
      </li>
    ));
