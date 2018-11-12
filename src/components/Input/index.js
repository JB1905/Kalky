import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, children, action, isWide }) => (
  <button className={isWide && 'wide'} onClick={action}>
    {value ? value : children}
  </button>
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  children: PropTypes.node,
  action: PropTypes.func,
  isWide: PropTypes.bool
};

export default Input;
