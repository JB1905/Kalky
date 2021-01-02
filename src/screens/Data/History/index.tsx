import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFileExport } from '@fortawesome/free-solid-svg-icons';

import { RootState } from '../../../reducers';

const History = () => {
  const dispatch = useDispatch();

  const history = useSelector((state: RootState) => state.history.items);

  return history.length ? (
    <ul className="data__list data__list--history">
      {/* {history.map((item, index: number) => (
        <li className="data__item" key={index}>
          {item.value}
        </li>
      ))} */}

      <button onClick={() => dispatch({ type: 'HISTORY_CLEAR' })}>
        <FontAwesomeIcon icon={faTrash} />
      </button>

      <button onClick={() => dispatch({ type: 'HISTORY_EXPORT' })}>
        <FontAwesomeIcon icon={faFileExport} />
      </button>
    </ul>
  ) : (
    <p className="data__empty">No history data</p>
  );
};

export default History;
