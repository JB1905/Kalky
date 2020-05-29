import {
  CURRENCY_RATES_LOADING,
  CURRENCY_RATES_SUCCESS,
  CURRENCY_RATES_ERROR,
} from '../actions';

import { Rates } from './Rates';
import { CurrencyRatesSuccess } from './CurrencyRatesSuccess';

export interface CurrencyState {
  readonly isLoading: boolean;
  readonly rates: Rates | null;
  readonly error: Error | null;
}

export interface CurrencyRatesLoadingAction {
  readonly type: typeof CURRENCY_RATES_LOADING;
}

export interface CurrencyRatesSuccessAction {
  readonly type: typeof CURRENCY_RATES_SUCCESS;
  readonly payload: CurrencyRatesSuccess;
}

export interface CurrencyRatesErrorAction {
  readonly type: typeof CURRENCY_RATES_ERROR;
  readonly payload: Error;
}
