import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

// import Title from '../../../components/Title';
// import Screen from '../../../components/Screen';
// import { MemoPanel } from '../../../components/Memo';
// import { ScientificKeyboard } from '../../../components/Keyboards';

import Data from '../../Data';

import { RootState } from '../../../reducers';

const Scientific = ({ location }: RouteComponentProps) => {
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

      {/* <Screen className="scientific" value={value} />

      <MemoPanel /> */}

      {/* {showMemo ? <Data /> : <ScientificKeyboard />} */}
    </>
  );
};

export default Scientific;
