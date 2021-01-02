import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import Title from 'components/Title';
// import Screen from 'components/Screen';
// import { MemoPanel } from 'components/Memo';
// import { StandardKeyboard } from 'components/Keyboards';

import Data from '../../Data';

import { RootState } from '../../../reducers';

const Standard = ({ location }: RouteComponentProps) => {
  const {
    value,
    //  showMemo
  } = useSelector((state: RootState) => ({
    value: state.calculator.value,
    // showMemo: state.window.showMemo,
  }));

  return (
    <>
      {/* <Title location={location.pathname} /> */}

      {/* <input type="text" value={''} /> */}

      {/* <Screen className="standard" value={value} /> */}

      {/* <MemoPanel /> */}

      {/* {showMemo ? (
        <Data />
      ) : (
        <StandardKeyboard clicked={(e: any) => console.log(e)} />
      )} */}
    </>
  );
};

export default Standard;
