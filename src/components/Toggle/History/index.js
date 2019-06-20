import React from 'react';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import './History.scss';

const History = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="toggle toggle--history"
      onClick={() => dispatch({ type: 'TOGGLE_MEMORY_TAB' })}
    >
      <FontAwesomeIcon icon={faHistory} />
    </button>
  );
};

export default History;
