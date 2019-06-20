import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Relative from './Views/Relative';
import Absolute from './Views/Absolute';

import Title from '../../../components/Title';
import Tabs from '../../../components/Tabs';

import './TimeMachine.scss';

const TimeMachine = ({ location }) => {
  const dateTab = useSelector(state => state.window.dateTab);

  const dispatch = useDispatch();

  const setDateTab = useCallback(
    tab => dispatch({ type: 'SET_DATE_TAB', payload: tab }),
    [dispatch]
  );

  return (
    <>
      <Title location={location.pathname} />

      <Tabs>
        <button className="tabs__item" onClick={() => setDateTab('relative')}>
          Relative
        </button>

        <button className="tabs__item" onClick={() => setDateTab('absolute')}>
          Absolute
        </button>
      </Tabs>

      {dateTab === 'relative' ? <Relative /> : <Absolute />}
    </>
  );
};

export default withRouter(TimeMachine);
