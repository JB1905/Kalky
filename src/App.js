import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Menu } from './components/Menu';
import Content from './components/Content';

import './App.css';

const { ipcRenderer } = window.require('electron');

export default class App extends Component {
  componentDidMount() {
    ipcRenderer.on('light', (event, data) =>
      document.body.classList.remove('dark')
    );

    ipcRenderer.on('dark', (event, data) =>
      document.body.classList.add('dark')
    );
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="drag" />

          <Menu />
          <Content />
        </React.Fragment>
      </Router>
    );
  }
}
