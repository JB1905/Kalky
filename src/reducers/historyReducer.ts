import {
  HISTORY_ADD,
  HISTORY_CLEAR,
  HISTORY_RECALL,
  HISTORY_SUBSTRACT,
} from '../actions';

import { HistoryState } from '../interfaces/HistoryState';

import type { HistoryActionTypes } from '../types/HistoryActionTypes';

const initialState: HistoryState = {
  items: [],
};

export const historyReducer = (
  state = initialState,
  action: HistoryActionTypes
) => {
  switch (action.type) {
    case HISTORY_RECALL:
      return { ...state, items: [...state.items, action.payload] };

    case HISTORY_ADD:
      return { ...state, items: state.items.concat(action.payload) };

    case HISTORY_SUBSTRACT:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };

    case HISTORY_CLEAR:
      return initialState;

    default:
      return state;
  }
};
