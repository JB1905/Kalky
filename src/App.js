import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Drag from './components/Drag';
import Menu from './components/Menu';
import Content from './components/Content';

const { ipcRenderer } = window.require('electron');

ipcRenderer.on('light', (e, data) => document.body.classList.remove('dark'));
ipcRenderer.on('dark', (e, data) => document.body.classList.add('dark'));

const App = () => (
  <Router>
    <>
      <Drag />
      <Menu />
      <Content />
    </>
  </Router>
);

export default App;
