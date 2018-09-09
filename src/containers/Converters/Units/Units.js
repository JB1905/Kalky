import React, { Component } from 'react';
import convert from 'convert-units';

import '../Convert.css';

import { Screen } from '../../../components/Screen';
import { ConvertInputs } from '../../../components/Inputs';
import { Title } from '../../../components/Title';
import { SelectUnit } from '../../../components/SelectUnit';

export default class Units extends Component {
  state = { val: null, from: '', to: '', converted: null };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.val !== this.state.val ||
      prevState.from !== this.state.from ||
      prevState.to !== this.state.to
    )
      this.convert();
  }

  handleClick = val => this.setState({ val });
  from = from => this.setState({ from });
  to = to => this.setState({ to });

  convert = () => {
    const converted = convert(this.state.val)
      .from(this.state.from)
      .to(this.state.to);

    this.setState({ converted });
  };

  render() {
    return (
      <React.Fragment>
        <Title location={this.props.location.pathname} />
        <Screen value={this.state.val || '0'} />

        <SelectUnit units={this.props.location.pathname} onChange={this.from} />
        <SelectUnit units={this.props.location.pathname} onChange={this.to} />

        <Screen value={this.state.converted || '0'} />

        <ConvertInputs {...this.props} clicked={this.handleClick} />
      </React.Fragment>
    );
  }
}
