import React, { Component } from 'react';

import './Screen.css';

export default class Screen extends Component {
  render() {
    const { className, value } = this.props;

    return (
      <div className={className}>
        <div className="screen">
          <span>{parseFloat(value)}</span>
        </div>
      </div>
    );
  }
}
