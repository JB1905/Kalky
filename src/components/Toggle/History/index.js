import React from 'react';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import './History.scss';

const History = ({ toggleMemo }) => (
  <button
    type="button"
    className="toggle toggle--history"
    onClick={() => toggleMemo()}
  >
    <FontAwesomeIcon icon={faHistory} />
  </button>
);

const mapDispachToProps = dispatch => {
  return {
    toggleMemo: () => dispatch({ type: 'TOGGLE_MEMORY_TAB' })
  };
};

export default connect(
  null,
  mapDispachToProps
)(History);
