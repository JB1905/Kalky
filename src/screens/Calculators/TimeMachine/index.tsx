import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Relative from './Views/Relative';
import Absolute from './Views/Absolute';

// import Title from 'components/Title';
// import Tabs from 'components/Tabs';

import { RootState } from '../../../reducers';

import './TimeMachine.scss';

const TimeMachine: React.FC<RouteComponentProps> = ({ location }) => {
  // const dateTab = useSelector((state: RootState) => state.window.dateTab);

  const dispatch = useDispatch();

  const setDateTab = useCallback(
    (tab) => dispatch({ type: 'SET_DATE_TAB', payload: tab }),
    [dispatch]
  );

  return (
    <>
      {/* <Title location={location.pathname} />

      <Tabs>
        <button className="tabs__item" onClick={() => setDateTab('relative')}>
          Relative
        </button>

        <button className="tabs__item" onClick={() => setDateTab('absolute')}>
          Absolute
        </button>
      </Tabs>

      {dateTab === 'relative' ? <Relative /> : <Absolute />} */}
    </>
  );
};

export default TimeMachine;
