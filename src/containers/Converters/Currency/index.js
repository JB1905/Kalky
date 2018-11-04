import React, { useState, useEffect } from 'react';
import fx from 'money';

import Title from '../../../components/Title';
import Screen from '../../../components/Screens';
import { ConverterKeyboard } from '../../../components/Keyboards';
import { SelectCurrency } from '../../../components/Select';

import '../Convert.scss';

import { getCurrency } from '../../../api';

export default function Currency(props) {
  const [date, setDate] = useState('Loading...');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrency().then(data => {
      setDate(data.date.replace(/-/g, '.'));
      setRates((fx.rates = data.rates));
    });
  }, []);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [value, setValue] = useState('0');
  const [converted, setConverted] = useState('0');

  useEffect(
    () => {
      setConverted(
        fx(value)
          .from(from)
          .to(to)
      );

      return null;
    },
    [value, from, to]
  );

  return (
    <>
      <Title location={props.location.pathname} />
      <span className="date">{date}</span>

      <Screen value={value} />

      <SelectCurrency units={rates} onChange={e => setFrom(e)} />
      <SelectCurrency units={rates} onChange={e => setTo(e)} />

      <Screen value={converted} />

      <ConverterKeyboard {...props} clicked={e => setValue(e || '0')} />
    </>
  );
}
