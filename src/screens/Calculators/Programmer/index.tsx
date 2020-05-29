import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

// import Title from 'components/Title';
// import Screen from 'components/Screen';
// import { MemoPanel } from 'components/Memo';
// import { ProgrammerKeyboard } from 'components/Keyboards';

import Data from '../../Data';

import { RootState } from '../../../reducers';

const Programmer: React.FC<RouteComponentProps> = ({ location }) => {
  const dispatch = useDispatch();

  const {
    value,
    // showMemo
  } = useSelector((state: RootState) => ({
    value: state.calculator.value,
    // showMemo: state.window.showMemo,
  }));

  const operation = useCallback(
    (data) => dispatch({ type: 'CALCULATOR_OPERATIONS', payload: data }),
    [dispatch]
  );

  return (
    <>
      {/* <Title location={location.pathname} /> */}

      {/* <input type="text" value={''} /> */}

      {/* <Screen className="programmer" value={value} /> */}

      {/* <MemoPanel /> */}

      {/* {showMemo ? <Data /> : <ProgrammerKeyboard clicked={operation} />} */}
    </>
  );
};

export default Programmer;
