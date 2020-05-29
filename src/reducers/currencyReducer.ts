import {
  CURRENCY_RATES_LOADING,
  CURRENCY_RATES_SUCCESS,
  CURRENCY_RATES_ERROR,
} from '../actions';

import { CurrencyState } from '../interfaces/CurrencyState';

import type { CurrencyActionTypes } from '../types/CurrencyActionTypes';

const initialState: CurrencyState = {
  isLoading: false,
  rates: null,
  error: null,
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyActionTypes
) => {
  switch (action.type) {
    case CURRENCY_RATES_LOADING:
      return {};

    case CURRENCY_RATES_SUCCESS:
      return {};

    case CURRENCY_RATES_ERROR:
      return {};

    default:
      return state;
  }
};
