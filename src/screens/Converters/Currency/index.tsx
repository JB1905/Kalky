import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import fx from 'money';

// import Title from 'components/Title';
// import Screen from 'components/Screen';
// import { ConverterKeyboard } from 'components/Keyboards';
// import { SelectCurrency } from 'components/Select';
// import Switch from 'components/Switch';

// import { getCurrency } from 'api';

import './Currency.scss';

const Currency: React.FC<RouteComponentProps> = ({ location }) => {
  // const [date, setDate] = useState('Loading...');
  // const [rates, setRates] = useState([]);
  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');

  // const loadRates = useCallback(() => {
  //   getCurrency().then((data) => {
  //     setDate(data.date.replace(/-/g, '.'));
  //     setRates((fx.rates = data.rates));

  //     !from && setFrom(Object.keys(fx.rates)[0]);
  //     !to && setTo(Object.keys(fx.rates)[1]);
  //   });
  // }, [from, to]);

  // useEffect(() => loadRates(), [loadRates]);

  // const [value, setValue] = useState(0);
  // const [converted, setConverted] = useState(0);
  // const [reverse, setReverse] = useState(false);

  // useEffect(() => {
  //   reverse
  //     ? setValue(from && to ? fx(converted).from(to).to(from) : converted)
  //     : setConverted(from && to ? fx(value).from(from).to(to) : value);
  // }, [value, converted, reverse, from, to]);

  return (
    <>
      {/* <Title location={location.pathname} />
      <time onClick={loadRates}>{date}</time>

      <Screen value={value} className="converter" />

      <section>
        <SelectCurrency
          units={rates}
          offset={to || Object.keys(rates)[1]}
          onChange={(e) => setFrom(e)}
        />

        <Switch reverse={reverse} onClick={() => setReverse(!reverse)} />

        <SelectCurrency
          units={rates}
          offset={from || Object.keys(rates)[0]}
          onChange={(e) => setTo(e)}
        />
      </section>

      <Screen value={converted} className="converter" />

      <ConverterKeyboard
        location={location}
        clicked={(e) => (reverse ? setConverted(e || 0) : setValue(e || 0))}
      /> */}
    </>
  );
};

export default Currency;
