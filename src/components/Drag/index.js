import React from 'react';

import './Drag.scss';

const remote = window.remote;

const main = remote.getCurrentWindow();

const Drag = () => (
  <div className="drag">
    {navigator.platform.toLowerCase() === 'win32' && (
      <div>
        <button onClick={() => main.minimize()}>
          <span>&#xE921;</span>
        </button>

        <button onClick={() => main.close()}>
          <span>&#xE8BB;</span>
        </button>
      </div>
    )}
  </div>
);

export default Drag;
