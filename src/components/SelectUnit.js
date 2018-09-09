import React, { Component } from 'react';
import convert from 'convert-units';

export class SelectUnit extends Component {
  state = { val: '', values: [] };

  change = e => {
    this.setState({ val: e.target.value });
    this.props.onChange(e.target.value);
  };

  componentDidMount() {
    const value = convert().possibilities(this.props.units.replace('/', ''));

    this.setState({ values: value, val: value[0] });
    this.props.onChange(value[0]);
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
