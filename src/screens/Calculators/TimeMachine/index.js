import React from 'react';
import { withRouter } from 'react-router-dom';

import Relative from './Views/Relative';
import Absolute from './Views/Absolute';

import Title from '../../../components/Title';
import Tabs from '../../../components/Tabs';

import './TimeMachine.scss';

const TimeMachine = props => (
  <>
    <Title location={props.location.pathname} />

    <Tabs>
      <button
        className="tabs__item"
        onClick={() => props.history.push({ hash: '' })}
      >
        Relative
      </button>

      <button
        className="tabs__item"
        onClick={() => props.history.push({ hash: 'absolute' })}
      >
        Absolute
      </button>
    </Tabs>

    {props.location.hash ? <Absolute /> : <Relative />}
  </>
);

export default withRouter(TimeMachine);
