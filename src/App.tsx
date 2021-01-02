import { BrowserRouter as Router } from 'react-router-dom';

import Drag from 'components/Drag';
// import Menu from 'components/Menu';
// import Content from 'components/Content';

import Scanner from './screens/Scanner';

const App = () => (
  <>
    <Drag />

    <Router>
      {/* <Menu /> */}

      <Scanner />

      {/* <Content /> */}
    </Router>
  </>
);

export default App;
