import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Relative from './Views/Relative';
import Absolute from './Views/Absolute';

import Title from '../../../components/Title';
import Tabs from '../../../components/Tabs';

import './TimeMachine.scss';

const TimeMachine = ({ dateTab, setDateTab, location }) => (
  <>
    <Title location={location.pathname} />

    <Tabs>
      <button className="tabs__item" onClick={() => setDateTab('relative')}>
        Relative
      </button>

      <button className="tabs__item" onClick={() => setDateTab('absolute')}>
        Absolute
      </button>
    </Tabs>

    {dateTab === 'relative' ? <Relative /> : <Absolute />}
  </>
);

const mapStateToProps = state => ({
  dateTab: state.window.dateTab
});

const mapDispatchToProps = dispatch => ({
  setDateTab: tab => dispatch({ type: 'SET_DATE_TAB', payload: tab })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TimeMachine));
