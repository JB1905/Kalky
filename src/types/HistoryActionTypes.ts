import {
  HistoryAddAction,
  HistoryClearAction,
  HistoryRecallAction,
  HistorySubstractAction,
} from '../interfaces/HistoryState';

export type HistoryActionTypes =
  | HistoryAddAction
  | HistoryClearAction
  | HistoryRecallAction
  | HistorySubstractAction;
