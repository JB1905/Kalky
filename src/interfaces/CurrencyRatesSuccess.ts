import { Rates } from './Rates';

export interface CurrencyRatesSuccess {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
