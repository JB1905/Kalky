import { useDispatch } from 'react-redux';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './History.scss';

const History = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="toggle toggle--history"
      // onClick={() => dispatch({ type: TOGGLE_MEMORY_TAB })}
    >
      <FontAwesomeIcon icon={faHistory} />
    </button>
  );
};

export default History;
