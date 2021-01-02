import { useState, useEffect } from 'react';

const Absolute = () => {
  // const [date, setDate] = useState(new Date());
  // date.setHours(0, 0, 0, 0);

  // const year = date.getFullYear();
  // const month =
  //   (date.getMonth() + 1).toString().length > 1
  //     ? date.getMonth() + 1
  //     : `0${date.getMonth() + 1}`;

  // const day =
  //   date.getDate().toString().length > 1
  //     ? date.getDate()
  //     : `0${date.getDate()}`;

  // const defaultDate = `${year}-${month}-${day}`;

  // const [from, setFrom] = useState(defaultDate);
  // const [relative, setRelative] = useState('0');

  // const [action, setAction] = useState('add');
  // const [years, setYears] = useState('0');
  // const [months, setMonths] = useState('0');
  // const [days, setDays] = useState('0');

  // useEffect(() => {
  //   setDate(new Date(from));
  // }, [from]);

  // useEffect(() => {
  //   const newDate = new Date();

  //   newDate.setFullYear(
  //     action === 'add'
  //       ? date.getFullYear() + parseInt(years)
  //       : date.getFullYear() - parseInt(years)
  //   );

  //   newDate.setMonth(
  //     action === 'add'
  //       ? date.getMonth() + parseInt(months)
  //       : date.getMonth() - parseInt(months)
  //   );

  //   newDate.setDate(
  //     action === 'add'
  //       ? date.getDate() + parseInt(days)
  //       : date.getDate() - parseInt(days)
  //   );

  //   setRelative(
  //     `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`
  //   );
  // }, [action, from, years, months, days, date]);

  return (
    <div className="date date--absolute">
      <h4 className="date__section-name">From:</h4>
      {/* <input
        type="date"
        className="date__from"
        onChange={(e) => setFrom(e.target.value)}
        value={from}
      /> */}

      <div className="date__options">
        <label className="date__option date__option--add">
          {/* <input
            type="radio"
            checked={action === 'add'}
            onChange={() => setAction('add')}
          /> */}
          Add
        </label>

        <label className="date__option date__option--substract">
          <input
            type="radio"
            // checked={action === 'substract'}
            // onChange={() => setAction('substract')}
          />
          Substract
        </label>
      </div>

      <div className="date__time">
        <label className="date__field date__field--years">
          Years
          <input
            type="number"
            name="years"
            className="date__input"
            // onChange={(e) => setYears(e.target.value)}
            // value={years}
            min="0"
          />
        </label>

        <label className="date__field date__field--months">
          Months
          <input
            type="number"
            name="months"
            className="date__input"
            // onChange={(e) => setMonths(e.target.value)}
            // value={months}
            min="0"
          />
        </label>

        <label className="date__field date__field--days">
          Days
          <input
            type="number"
            name="days"
            className="date__input"
            // onChange={(e) => setDays(e.target.value)}
            // value={days}
            min="0"
          />
        </label>
      </div>

      <h4 className="date__section-name">Date:</h4>
      <div className="date__differences">
        {/* <p>{relative.includes('NaN') ? 'Input correct date' : relative}</p> */}
      </div>
    </div>
  );
};

export default Absolute;
