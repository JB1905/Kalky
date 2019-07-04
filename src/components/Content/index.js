import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { MenuToggle, HistoryToggle } from '../Toggle';

import Standard from '../../screens/Calculators/Standard';
import Scientific from '../../screens/Calculators/Scientific';
import Programmer from '../../screens/Calculators/Programmer';
import TimeMachine from '../../screens/Calculators/TimeMachine';

import Currency from '../../screens/Converters/Currency';
import { ContentList } from '../Lists';

import { pattern } from '../../helpers';

import './Content.scss';

const Content = ({ history, location }) => {
  useEffect(() => history.push({ pathname: '/standard' }), [history]);

  const showHistory = ['standard', 'scientific', 'programmer'];

  return (
    <main className="content">
      <MenuToggle />

      {showHistory.includes(pattern(location)) && <HistoryToggle />}

      <Switch>
        <Route exact path="/standard" component={Standard} />
        <Route exact path="/scientific" component={Scientific} />
        <Route exact path="/programmer" component={Programmer} />
        <Route exact path="/dateCalculation" component={TimeMachine} />

        <Route exact path="/currency" component={Currency} />
        <ContentList />
      </Switch>
    </main>
  );
};

export default withRouter(Content);
