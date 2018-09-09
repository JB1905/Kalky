import React, { Component } from 'react';
import convert from 'convert-units';

export class SelectUnit extends Component {
  state = { possibilities: [], selected: '' };

  change = e => {
    this.setState({ selected: e.target.value });
    this.props.onChange(e.target.value);
  };

  componentDidMount() {
    const possibilities = convert().possibilities(
      this.props.units.replace('/', '')
    );

    this.setState({ possibilities, selected: possibilities[0] });
    this.props.onChange(possibilities[0]);
  }

  render() {
    return (
      <select value={this.state.selected} onChange={this.change}>
        {this.state.possibilities.map(possibility => (
          <option key={possibility} value={possibility}>
            {possibility}
          </option>
        ))}
      </select>
    );
  }
}
