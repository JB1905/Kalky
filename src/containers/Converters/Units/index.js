import React, { useState, useEffect } from 'react';
import convert from 'convert-units';

import Title from '../../../components/Title';
import Screen from '../../../components/Screens';
import { ConverterKeyboard } from '../../../components/Keyboards';
import { SelectUnit } from '../../../components/Select';

import '../Convert.scss';

export default function Units(props) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [value, setValue] = useState('0');
  const [converted, setConverted] = useState('0');

  if (value && from && to) {
    useEffect(
      () => {
        setConverted(
          convert(value)
            .from(from)
            .to(to)
        );

        return null;
      },
      [value, from, to]
    );
  }

  return (
    <>
      <Title location={props.location.pathname} />

      <Screen value={value} />
      <SelectUnit units={props.location.pathname} onChange={e => setFrom(e)} />
      <SelectUnit units={props.location.pathname} onChange={e => setTo(e)} />
      <Screen value={converted} />

      <ConverterKeyboard {...props} clicked={e => setValue(e || '0')} />
    </>
  );
}
