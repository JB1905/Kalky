import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import convert from 'convert-units';

// import Title from 'components/Title';
// import Screen from 'components/Screen';
// import { ConverterKeyboard } from 'components/Keyboards';
// import { SelectUnit } from 'components/Select';
// import Switch from 'components/Switch';

const Units: React.FC<RouteComponentProps> = ({ location }) => {
  // const [rates, setRates] = useState([]);

  // useEffect(() => {
  //   setRates(convert().possibilities(location.pathname.replace('/', '')));
  // }, [location.pathname]);

  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');

  // useEffect(() => {
  //   setFrom(rates[0]);
  //   setTo(rates[1]);
  // }, [rates]);

  // const [value, setValue] = useState(0);
  // const [converted, setConverted] = useState(0);
  // const [reverse, setReverse] = useState(false);

  // useEffect(() => {
  //   reverse
  //     ? setValue(from && to ? convert(converted).from(to).to(from) : converted)
  //     : setConverted(from && to ? convert(value).from(from).to(to) : value);
  // }, [value, converted, reverse, from, to]);

  return (
    <>
      {/* <Title location={location.pathname} /> */}

      {/* <Screen value={value} className="converter" /> */}

      <section>
        {/* <SelectUnit
          offset={to || rates[1]}
          units={rates}
          onChange={(e) => setFrom(e)}
        /> */}

        {/* <Switch reverse={reverse} onClick={() => setReverse(!reverse)} />

        <SelectUnit
          offset={from || rates[0]}
          units={rates}
          onChange={(e) => setTo(e)}
        /> */}
      </section>

      {/* <Screen value={converted} className="converter" />

      <ConverterKeyboard
        location={location}
        clicked={(e) => (reverse ? setConverted(e || 0) : setValue(e || 0))}
      /> */}
    </>
  );
};

export default Units;
