import React, { Component } from 'react';
import fx from 'money';

import { Screen } from '../../../components/Screen';
import Title from '../../../components/Title';
import { ConverterKeyboard } from '../../../components/Keyboard';
import { SelectCurrency } from '../../../components/Select';

import '../Convert.scss';

import { getCurrency } from '../../../api';

export default class Currency extends Component {
  state = {
    date: 'Loading...',
    from: '',
    to: '',
    rates: [],
    val: '',
    converted: null
  };

  componentDidMount() {
    getCurrency().then(data => {
      fx.rates = data.rates;

      this.setState({ date: data.date.replace(/-/g, '.'), rates: fx.rates });
    });
  }

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
    const converted = fx(this.state.val)
      .from(this.state.from)
      .to(this.state.to);

    this.setState({ converted });
  };

  render() {
    return (
      <>
        <Title location={this.props.location.pathname} />
        <span className="date">{this.state.date}</span>

        <Screen value={this.state.val || '0'} />

        <SelectCurrency units={this.state.rates} onChange={this.from} />
        <SelectCurrency units={this.state.rates} onChange={this.to} />

        <Screen value={this.state.converted || '0'} />

        <ConverterKeyboard {...this.props} clicked={this.handleClick} />
      </>
    );
  }
}
