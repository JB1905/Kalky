import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Drag from './components/Drag';
import Menu from './components/Menu';
import Content from './components/Content';

export default function App() {

  return (
    <Router>
      <Drag />
      <Menu />
      <Content />
    </Router>
  );
}
