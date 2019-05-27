import React, { useState, useEffect, useRef } from 'react';
import { fillParentContainer } from 'fancy-textfill';
import PropTypes from 'prop-types';

import './Screen.scss';

const clipboard = window.clipboard;

const Screen = ({ className = '', value }) => {
  const ref = useRef();

  const [screenValue, setScreenValue] = useState(0);

  useEffect(() => {
    setScreenValue(value);

    ref.current.addEventListener('click', e => {
      const text = e.target.innerText;

      document.addEventListener('copy', () => {
        clipboard.writeText(text);
      });

      document.addEventListener('paste', () => {
        if (!isNaN(clipboard.readText())) {
          setScreenValue(clipboard.readText());
        }
      });

      document.addEventListener('cut', () => {
        clipboard.writeText(text);
        setScreenValue(0);
      });
    });
  }, [value]);

  useEffect(() => {
    fillParentContainer(ref.current, {
      minFontSize: 14,
      maxFontSize: 30,
      maxWidth: ref.current.offsetWidth,
      multiline: false
    });
  }, [screenValue]);

  return (
    <section className={`screen ${className}`} ref={ref}>
      {screenValue}
    </section>
  );
};

Screen.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Screen;
