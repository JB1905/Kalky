import React, { useState, useEffect } from 'react';
import convert from 'convert-units';

import Title from '../../../components/Title';
import Screen from '../../../components/Screens';
import { ConverterKeyboard } from '../../../components/Keyboards';
import { SelectUnit } from '../../../components/Select';

export default function Units({ location }) {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    setRates(convert().possibilities(location.pathname.replace('/', '')));

    return () => null;
  }, []);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    setFrom(rates[0]);
    setTo(rates[1]);
  }, [rates]);

  const [value, setValue] = useState(0);
  const [converted, setConverted] = useState(0);

  useEffect(
    () => {
      setConverted(
        from && to
          ? convert(value)
              .from(from)
              .to(to)
          : value
      );

      return () => null;
    },
    [value, from, to]
  );

  return (
    <>
      <Title location={location.pathname} />

      <Screen value={value} />

      <section>
        <SelectUnit
          offset={to ? to : rates[1]}
          units={rates}
          onChange={e => setFrom(e)}
        />
        <SelectUnit
          offset={from ? from : rates[0]}
          units={rates}
          onChange={e => setTo(e)}
        />
      </section>

      <Screen value={converted} />

      <ConverterKeyboard location={location} clicked={e => setValue(e || 0)} />
    </>
  );
}
