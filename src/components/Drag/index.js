import React from 'react';

import './Drag.scss';

const remote = window.remote;

const main = remote.getCurrentWindow();

const Drag = () => (
  <div className="drag">
    {navigator.platform.toLowerCase() === 'win32' && (
      <div className="drag__controls drag__controls--window">
        <button
          className="drag__control drag__control--minimize"
          onClick={main.minimize}
        >
          <span className="drag__icon">&#xE921;</span>
        </button>

        <button
          className="drag__control drag__control--close"
          onClick={main.close}
        >
          <span className="drag__icon">&#xE8BB;</span>
        </button>
      </div>
    )}
  </div>
);

export default Drag;
