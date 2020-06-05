import { Rates } from './Rates';

export interface CurrencyRatesSuccess {
  readonly success: boolean;
  readonly timestamp: number;
  readonly base: string;
  readonly date: string;
  readonly rates: Rates;
}
