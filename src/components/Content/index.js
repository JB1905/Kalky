import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { MenuToggle } from '../Toggle';

import Currency from '../../containers/Converters/Currency';
import TimeMachine from '../../containers/Calculators/TimeMachine';
import { ContentList } from '../Lists';

import './Content.scss';

const Content = ({ history }) => {
  useEffect(() => history.push({ pathname: '/currency' }), []);

  return (
    <main className="content">
      <MenuToggle />

      <Switch>
        <Route exact path="/currency" component={Currency} />
        <Route exact path="/date" component={TimeMachine} />
        <ContentList />
      </Switch>
    </main>
  );
};

export default withRouter(Content);
