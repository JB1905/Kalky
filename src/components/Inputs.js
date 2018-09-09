import React, { Component } from 'react';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ConvertInputs extends Component {
  state = { positive: null, value: [], toggle: false };

  componentDidMount() {
    if (
      this.props.location.pathname === '/temperature' ||
      this.props.location.pathname === '/pressure'
    ) {
      this.setState({ positive: true });
    } else {
      this.setState({ positive: false });
    }
  }

  operation(key) {
    if (typeof key === 'number') this.state.value.push(key);
    else {
      switch (key) {
        case 'point': {
          if (this.state.value.includes('.') === false) {
            this.state.value.push('.');
          }

          break;
        }

        case 'delete':
          this.state.value.pop();
          break;

        case 'clear':
          this.state.value.splice(0, this.state.value.length);
          break;

        case 'positive': {
          if (this.state.toggle) {
            this.state.value.unshift('-');
            this.setState({ toggle: false });
          } else {
            this.state.value.shift();
            this.setState({ toggle: true });
          }

          break;
        }

        default:
          break;
      }
    }

    this.props.clicked(this.state.value.toString().replace(/,/g, ''));
  }

  render() {
    return (
      <div className="keyboard">
        <button className="null" onClick={() => this.operation('clear')}>
          C
        </button>
        <button onClick={() => this.operation('delete')}>
          <FontAwesomeIcon icon={faBackspace} />
        </button>

        <button onClick={() => this.operation(7)}>7</button>
        <button onClick={() => this.operation(8)}>8</button>
        <button onClick={() => this.operation(9)}>9</button>

        <button onClick={() => this.operation(4)}>4</button>
        <button onClick={() => this.operation(5)}>5</button>
        <button onClick={() => this.operation(6)}>6</button>

        <button onClick={() => this.operation(1)}>1</button>
        <button onClick={() => this.operation(2)}>2</button>
        <button onClick={() => this.operation(3)}>3</button>

        {this.state.positive && (
          <button onClick={() => this.operation('positive')}>
            <sup>+</sup>∕<sub>-</sub>
          </button>
        )}
        <button
          className={this.state.positive ? '' : 'null'}
          onClick={() => this.operation(0)}>
          0
        </button>
        <button onClick={() => this.operation('point')}>.</button>
      </div>
    );
  }
}
