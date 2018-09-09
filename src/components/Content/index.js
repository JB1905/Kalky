import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Content.css';

import Currency from '../../containers/Converters/Currency/Currency';
import { ContentList } from '../ContentList';

const { ipcRenderer } = window.require('electron');

export class Content extends Component {
  toggle = () => ipcRenderer.send('menu-toggle', 'true');

  render() {
    return (
      <div className="content">
        <button type="button" className="menu__toggle" onClick={this.toggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Redirect exact from="/" to="/currency" />

        <Switch>
          <Route exact path="/currency" component={Currency} />
          <ContentList />
        </Switch>
      </div>
    );
  }
}
