import {
  SetCalculatorValueAction,
  SetCalculatorOperationsAction,
} from '../interfaces/CalculatorState';

export type AppearanceActionTypes =
  | SetCalculatorValueAction
  | SetCalculatorOperationsAction;
