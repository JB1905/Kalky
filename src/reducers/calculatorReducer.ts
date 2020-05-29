import { SET_CALCULATOR_VALUE, SET_CALCULATOR_OPERATIONS } from '../actions';

import { CalculatorState } from '../interfaces/CalculatorState';

import type { AppearanceActionTypes } from '../types/CalculatorActionTypes';

const initialState: CalculatorState = {
  value: 0,
  operations: [],
  operand: 0,
  operator: 0,
};

export const calculatorReducer = (
  state = initialState,
  actions: AppearanceActionTypes
) => {
  switch (actions.type) {
    case SET_CALCULATOR_VALUE:
      return { ...state, value: actions.payload };

    case SET_CALCULATOR_OPERATIONS:
      return { ...state, operations: [...state.operations, actions.payload] };

    default:
      return state;
  }
};
