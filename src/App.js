import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Drag from './components/Drag';
import Menu from './components/Menu';
import Content from './components/Content';

const { ipcRenderer } = window.require('electron');

export default function App() {
  ipcRenderer.on('light', () => document.body.classList.remove('dark'));
  ipcRenderer.on('dark', () => document.body.classList.add('dark'));

  return (
    <Router>
      <Drag />
      <Menu />
      <Content />
    </Router>
  );
}
