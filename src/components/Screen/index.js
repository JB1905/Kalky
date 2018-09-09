import React from 'react';

import './Screen.css';

export const Screen = ({ className, value }) => (
  <div className={className}>
    <div className="screen">
      <span>{parseFloat(value)}</span>
    </div>
  </div>
);
