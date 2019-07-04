import React, { useState, useEffect } from 'react';
import DateDiff from 'date-diff';

export default function Relative() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const year = date.getFullYear();
  const month =
    (date.getMonth() + 1).toString().length > 1
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;

  const day =
    date.getDate().toString().length > 1
      ? date.getDate()
      : `0${date.getDate()}`;

  const defaultDate = `${year}-${month}-${day}`;

  const [from, setFrom] = useState(defaultDate);
  const [to, setTo] = useState(defaultDate);
  const [relative, setRelative] = useState(0);

  useEffect(() => {
    setRelative(new DateDiff(new Date(to), new Date(from)));
  }, [to, from]);

  return (
    <div className="date date--relative">
      <h4 className="date__section-name">From:</h4>
      <input
        type="date"
        className="date__from"
        onChange={e => setFrom(e.target.value)}
        value={from}
      />

      <h4 className="date__section-name">To:</h4>
      <input
        type="date"
        className="date__to"
        onChange={e => setTo(e.target.value)}
        value={to}
      />

      <h4 className="date__section-name">Difference:</h4>
      <div className="date__differences">
        <p>in days: {relative && relative.days()}</p>
        <p>in months: {relative && relative.months()}</p>
        <p>in years: {relative && relative.years()}</p>
      </div>
    </div>
  );
}
