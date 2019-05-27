import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { MenuToggle } from '../Toggle';

import TimeMachine from '../../screens/Calculators/TimeMachine';

import Currency from '../../screens/Converters/Currency';
import { ContentList } from '../Lists';

import './Content.scss';

const Content = ({ history, ...props }) => {
  useEffect(() => history.push({ pathname: '/currency' }), [history]);

  return (
    <main className="content">
      <MenuToggle />

      <Switch>
        <Route exact path="/dateCalculation" component={TimeMachine} />

        <Route exact path="/currency" component={Currency} />
        <ContentList />
      </Switch>
    </main>
  );
};

export default withRouter(Content);
