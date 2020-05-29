import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// import { MenuToggle, HistoryToggle } from '../Toggle';

// import Standard from 'screens/Calculators/Standard';
// import Scientific from 'screens/Calculators/Scientific';
// import Programmer from 'screens/Calculators/Programmer';
// import TimeMachine from 'screens/Calculators/TimeMachine';

// import Currency from 'screens/Converters/Currency';
// import { ContentList } from '../Lists';

// import Scanner from 'screens/Scanner';

// import { pattern } from 'helpers';

// import { routes } from '../../constants/routes';

import './Content.scss';

const Content: React.FC = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => navigate('standard'), [navigate]);

  // const showHistory = ['standard', 'scientific', 'programmer'];

  return (
    <main className="content">
      {/* <MenuToggle />

      {showHistory.includes(pattern(location)) && <HistoryToggle />} */}

      <Switch>
        {/* <Route exact path={routes.standard} component={Standard} />
        <Route exact path={routes.scientific} component={Scientific} />
        <Route exact path={routes.programmer} component={Programmer} />
        <Route exact path={routes.dateCalculation} component={TimeMachine} />

        <Route exact path={routes.currency} component={Currency} />
        <ContentList />

        <Route exact path={routes.scanner} component={Scanner} /> */}
      </Switch>
    </main>
  );
};

export default Content;
