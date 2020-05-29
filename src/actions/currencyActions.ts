import { Dispatch } from 'redux';

import { CurrencyRatesSuccess } from '../interfaces/CurrencyRatesSuccess';

import type { CurrencyActionTypes } from '../types/CurrencyActionTypes';

export const CURRENCY_RATES_LOADING = 'CURRENCY_RATES_LOADING';
export const CURRENCY_RATES_SUCCESS = 'CURRENCY_RATES_SUCCESS';
export const CURRENCY_RATES_ERROR = 'CURRENCY_RATES_ERROR';

const getCurrencyRatesFetchPending = (): CurrencyActionTypes => ({
  type: CURRENCY_RATES_LOADING,
});

const getCurrencyRatesFetchSuccess = (
  rates: CurrencyRatesSuccess
): CurrencyActionTypes => ({
  type: CURRENCY_RATES_SUCCESS,
  payload: rates,
});

const getCurrencyRatesFetchError = (err: Error): CurrencyActionTypes => ({
  type: CURRENCY_RATES_ERROR,
  payload: err,
});

export const getCurrencyRates = () => async (dispatch: Dispatch) => {
  dispatch(getCurrencyRatesFetchPending());

  try {
    const res = await fetch(
      `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_CURRENCY_API_ACCESS_KEY}`
    );

    const data: CurrencyRatesSuccess = await res.json();

    dispatch(getCurrencyRatesFetchSuccess(data));
  } catch (err) {
    dispatch(getCurrencyRatesFetchError(err));
  }
};
