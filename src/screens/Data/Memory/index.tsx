import { useSelector, useDispatch } from 'react-redux';

// import { MemoAdd, MemoSubstract, MemoRemove } from '../../../components/Memo';

import { RootState } from '../../../reducers';

const Memory = () => {
  const dispatch = useDispatch();

  const {
    //  memory,
    value,
  } = useSelector((state: RootState) => ({
    // memory: state.memory,
    value: state.calculator.value,
  }));

  return (
    /*memory.length ? */ <ul className="data__list data__list--memory">
      {/* {memory.map((item: string, index: number) => (
        <li className="data__item" key={index}>
          <div className="data__value">{item}</div>

          <div className="data__options">
            <MemoAdd
              action={() => dispatch({ type: 'MEMORY_ADD', payload: value })}
            />

            <MemoSubstract
              action={() => dispatch({ type: 'MEMORY_RECALL', payload: item })}
            />

            <MemoRemove action={() => dispatch({ type: 'MEMORY_SUBSTRACT' })} />
          </div>
        </li>
      ))} */}
    </ul>
  );
  //  : (
  //   <p className="data__empty">No memory data</p>
  // );
};

export default Memory;
