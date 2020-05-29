import { SET_CALCULATOR_VALUE, SET_CALCULATOR_OPERATIONS } from '../actions';

export interface CalculatorState {
  readonly value: number;
  readonly operations: any;
  readonly operand: number;
  readonly operator: number;
}

export interface SetCalculatorValueAction {
  readonly type: typeof SET_CALCULATOR_VALUE;
  readonly payload: any;
}

export interface SetCalculatorOperationsAction {
  readonly type: typeof SET_CALCULATOR_OPERATIONS;
  readonly payload: any;
}
