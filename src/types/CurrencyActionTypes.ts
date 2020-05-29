import {
  CurrencyRatesLoadingAction,
  CurrencyRatesSuccessAction,
  CurrencyRatesErrorAction,
} from '../interfaces/CurrencyState';

export type CurrencyActionTypes =
  | CurrencyRatesLoadingAction
  | CurrencyRatesSuccessAction
  | CurrencyRatesErrorAction;
