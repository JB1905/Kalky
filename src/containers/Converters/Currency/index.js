import React, { useState, useEffect } from 'react';
import fx from 'money';

import Title from '../../../components/Title';
import Screen from '../../../components/Screens';
import { ConverterKeyboard } from '../../../components/Keyboards';
import { SelectCurrency } from '../../../components/Select';

import './Currency.scss';

import { getCurrency } from '../../../api';

export default function Currency({ location }) {
  const [date, setDate] = useState('Loading...');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrency().then(data => {
      setDate(data.date.replace(/-/g, '.'));
      setRates((fx.rates = data.rates));
      setFrom(Object.keys(fx.rates)[0]);
      setTo(Object.keys(fx.rates)[1]);
    });

    return () => null;
  }, []);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [value, setValue] = useState(0);
  const [converted, setConverted] = useState(0);

  useEffect(
    () => {
      setConverted(
        fx(value)
          .from(from)
          .to(to)
      );

      return () => null;
    },
    [value, from, to]
  );

  return (
    <>
      <Title location={location.pathname} />
      <time>{date}</time>

      <Screen value={value} />

      <section>
        <SelectCurrency
          offset={to ? to : Object.keys(rates)[1]}
          units={rates}
          onChange={e => setFrom(e)}
        />
        <SelectCurrency
          offset={from ? from : Object.keys(rates)[0]}
          units={rates}
          onChange={e => setTo(e)}
        />
      </section>

      <Screen value={converted} />

      <ConverterKeyboard location={location} clicked={e => setValue(e || 0)} />
    </>
  );
}
