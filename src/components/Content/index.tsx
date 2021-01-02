import { useEffect, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// import { MenuToggle, HistoryToggle } from '../Toggle';

const Standard = lazy(() => import('screens/Calculators/Standard'));
const Scientific = lazy(() => import('screens/Calculators/Scientific'));
const Programmer = lazy(() => import('screens/Calculators/Programmer'));
const TimeMachine = lazy(() => import('screens/Calculators/TimeMachine'));

const Currency = lazy(() => import('screens/Calculators/TimeMachine'));
// import { ContentList } from '../Lists';

const Scanner = lazy(() => import('screens/Scanner'));

// import { pattern } from 'helpers';

// import { routes } from '../../routes';

import './Content.scss';

const Content = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => navigate('standard'), [navigate]);

  // const showHistory = ['standard', 'scientific', 'programmer'];

  return (
    <main className="content">
      {/* <MenuToggle /> */}

      {/* {showHistory.includes(pattern(location)) && <HistoryToggle />} */}

      <Switch>
        {/* <Route exact path={routes.standard} component={Standard} />
        <Route exact path={routes.scientific} component={Scientific} />
        <Route exact path={routes.programmer} component={Programmer} />
        <Route exact path={routes.dateCalculation} component={TimeMachine} />

        <Route exact path={routes.currency} component={Currency} /> */}
        {/* <ContentList /> */}

        {/* <Route exact path={routes.scanner} component={Scanner} /> */}
      </Switch>
    </main>
  );
};

export default Content;
