import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import History from './History';
import Memory from './Memory';

import { RootState } from '../../reducers';

// import Tabs from '../../components/Tabs';

import './Data.scss';

const Data: React.FC = () => {
  const dispatch = useDispatch();

  // const memoTab = useSelector((state: RootState) => state.window.memoTab);

  const setMemoTab = useCallback(
    (tab) => dispatch({ type: 'SET_MEMORY_TAB', payload: tab }),
    [dispatch]
  );

  return (
    <div className="data">
      {/* <Tabs> */}
      <button className="tabs__item" onClick={() => setMemoTab('memory')}>
        Memory
      </button>

      <button className="tabs__item" onClick={() => setMemoTab('history')}>
        History
      </button>
      {/* </Tabs> */}

      {/* {memoTab === 'memory' ? <Memory /> : <History />} */}
    </div>
  );
};

export default Data;
