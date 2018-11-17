import React, { useState, useEffect } from 'react';
import DateDiff from 'date-diff';

import Title from '../../../components/Title';
import SectionName from '../../../components/SectionName';

import './TimeMachine.scss';

export default function TimeMachine(props) {
  const [from, setFrom] = useState(new Date().setHours(0, 0, 0, 0));
  const [to, setTo] = useState(new Date().setHours(0, 0, 0, 0));
  const [relative, setRelative] = useState('');

  useEffect(() => setRelative(new DateDiff(new Date(to), new Date(from))), [
    to,
    from
  ]);

  return (
    <>
      <Title location={props.location.pathname} />

      <SectionName name="From:" />
      <input type="date" value={from} onChange={e => setFrom(e.target.value)} />

      <SectionName name="To:" />
      <input type="date" value={to} onChange={e => setTo(e.target.value)} />

      <SectionName name="Difference:" />
      <p>in days: {relative && relative.days()}</p>
      <p>in months: {relative && relative.months()}</p>
      <p>in years: {relative && relative.years()}</p>
    </>
  );
}
