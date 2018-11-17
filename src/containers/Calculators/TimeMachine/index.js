import React, { useState, useEffect } from 'react';
import DateDiff from 'date-diff';

import Title from '../../../components/Title';
import SectionName from '../../../components/SectionName';

import './TimeMachine.scss';

export default function TimeMachine(props) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const year = date.getFullYear();
  const month =
    (date.getMonth() + 1).toString().length > 1
      ? date.getMonth() + 1
      : `0${date.getMonth()}`;
  const day =
    date.getDate().toString().length > 1
      ? date.getDate()
      : `0${date.getDate()}`;

  const defaultDate = `${year}-${month}-${day}`;

  const [from, setFrom] = useState(defaultDate);
  const [to, setTo] = useState(defaultDate);
  const [relative, setRelative] = useState(0);

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
      <div className="date__differences">
        <p>in days: {relative && relative.days()}</p>
        <p>in months: {relative && relative.months()}</p>
        <p>in years: {relative && relative.years()}</p>
      </div>
    </>
  );
}