import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { MenuToggle } from '../Toggle';

import Currency from '../../containers/Converters/Currency';
import { ContentList } from '../Lists';

import './Content.scss';

const Content = ({ history }) => {
  useEffect(() => history.push({ pathname: '/currency' }), []);

  return (
    <main className="content">
      <MenuToggle />

      <Switch>
        <Route exact path="/currency" component={Currency} />
        <ContentList />
      </Switch>
    </main>
  );
};

export default withRouter(Content);
