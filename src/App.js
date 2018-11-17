import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Drag from './components/Drag';
import Menu from './components/Menu';
import Content from './components/Content';

const { ipcRenderer } = window.require('electron');

export default function App() {
  ipcRenderer.on('light', () => {
    document.body.classList.add('light');

    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
    }
  });

  ipcRenderer.on('dark', () => {
    document.body.classList.add('dark');

    if (document.body.classList.contains('light')) {
      document.body.classList.remove('light');
    }
  });

  return (
    <Router>
      <Drag />
      <Menu />
      <Content />
    </Router>
  );
}
