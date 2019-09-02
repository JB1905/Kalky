import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

const Tabs = ({ children }) => <div className="tabs">{children}</div>;

Tabs.propTypes = {
  children: PropTypes.node
};

export default Tabs;
