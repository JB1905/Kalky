import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Drag from './components/Drag';

import Menu from './containers/Menu';
import Content from './containers/Content';

const App: React.FC = () => (
  <Router>
    <Drag />

    <Menu />
    <Content />
  </Router>
);

export default App;
