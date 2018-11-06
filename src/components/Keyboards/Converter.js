import React, { useState, useEffect } from 'react';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../Input';

export default function Converter({ clicked, location }) {
  const [positive, setPositive] = useState(null);
  const [value] = useState([]);

  useEffect(() => {
    const routes = ['/temperature', '/pressure'];

    if (routes.includes(location.pathname)) setPositive(true);
    else setPositive(false);

    document.addEventListener('keydown', e => operation(e.key));
  }, []);

  function operation(key) {
    if (typeof key === 'number' || key.match(/[0-9]+/)) {
      value.push(key);
    } else {
      if (key === 'point' || key.match(/[.,]+/)) {
        if (!value.includes('.')) value.push('.');
      } else if (key === 'delete' || key === 'Backspace') {
        value.pop();

        if (value.length === 1 && value.includes('-')) {
          value.splice(0, value.length);
        }
      } else if (key === 'clear' || key === 'Escape') {
        value.splice(0, value.length);
      } else if (key === 'positive') {
        if ((value.length === 1 && !value.includes(0)) || value.length > 1) {
          if (!value.includes('-')) value.unshift('-');
          else value.shift();
        }
      }
    }

    clicked(value.toString().replace(/,/g, ''));
  }

  return (
    <div className="keyboard">
      <Input isWide={true} action={() => operation('clear')} value="C" />

      <Input
        action={() => operation('delete')}
        value={<FontAwesomeIcon icon={faBackspace} />}
      />

      <Input action={() => operation(7)} value="7" />
      <Input action={() => operation(8)} value="8" />
      <Input action={() => operation(9)} value="9" />

      <Input action={() => operation(4)} value="4" />
      <Input action={() => operation(5)} value="5" />
      <Input action={() => operation(6)} value="6" />

      <Input action={() => operation(1)} value="1" />
      <Input action={() => operation(2)} value="2" />
      <Input action={() => operation(3)} value="3" />

      {positive && (
        <Input action={() => operation('positive')}>
          <sup>+</sup>∕<sub>-</sub>
        </Input>
      )}

      <Input isWide={!positive} action={() => operation(0)} value="0" />
      <Input action={() => operation('point')} value="." />
    </div>
  );
}
