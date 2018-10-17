import React from 'react';

import './Screen.scss';

export const Screen = ({ className, value }) => (
  <div className={className}>
    <div className="screen">
      <span>{parseFloat(value)}</span>
    </div>
  </div>
);
