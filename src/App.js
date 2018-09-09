import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Content } from './components/Content';

import './App.css';

export const App = () => (
  <Router>
    <React.Fragment>
      <div className="drag" />

      <Menu />
      <Content />
    </React.Fragment>
  </Router>
);
