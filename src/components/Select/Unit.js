import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import convert from 'convert-units';

export default function Unit({ onChange, units, change }) {
  const [possibilities, setPossibilities] = useState([]);
  const [selected, setSelected] = useState('');

  const choose = e => {
    setSelected(e.target.value);
    onChange(e.target.value);
  };

  useEffect(
    () => {
      const options = convert().possibilities(units.replace('/', ''));

      setPossibilities(options);
      setSelected(options[0]);

      if (change !== selected) setSelected(change);
    },
    [units, change]
  );

  return (
    <select value={selected} onChange={choose}>
      {possibilities.map(possibility => (
        <option key={possibility} value={possibility}>
          {possibility}
        </option>
      ))}
    </select>
  );
}

Unit.propTypes = {
  onChange: PropTypes.func,
  units: PropTypes.string,
  change: PropTypes.string
};
