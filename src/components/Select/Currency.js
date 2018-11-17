import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Currency({ onChange, units }) {
  const [possibilities, setPossibilities] = useState([]);
  const [selected, setSelected] = useState('');

  const choose = e => {
    setSelected(e.target.value);
    onChange(e.target.value);
  };

  useEffect(
    () => {
      const options = Object.keys(units);

      setPossibilities(options);
      setSelected(options[0]);

      return () => null;
    },
    [units]
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

Currency.propTypes = {
  onChange: PropTypes.func,
  units: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]),
  change: PropTypes.string
};
