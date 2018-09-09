import React, { Component } from 'react';

export class SelectCurrency extends Component {
  state = { possibilities: [], selected: '' };

  change = e => {
    this.setState({ selected: e.target.value });
    this.props.onChange(e.target.value);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.units !== this.props.units && prevProps.units.length === 0) {
      const possibilities = Object.keys(this.props.units);

      this.setState({ possibilities, selected: possibilities[0] });
    }
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
