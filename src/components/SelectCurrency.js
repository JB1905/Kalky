import React, { Component } from 'react';

export class SelectCurrency extends Component {
  state = { val: '', values: [] };

  change = e => {
    this.props.onChange(e.target.value);
    this.setState({ val: e.target.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.units !== this.props.units && prevProps.units.length === 0) {
      const value = Object.keys(this.props.units);

      this.setState({ values: value, val: value[0] });
    }
  }

  render() {
    return (
      <select value={this.state.val} onChange={this.change}>
        {this.state.values.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    );
  }
}
