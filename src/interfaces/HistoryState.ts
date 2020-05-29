import {
  HISTORY_ADD,
  HISTORY_CLEAR,
  HISTORY_RECALL,
  HISTORY_SUBSTRACT,
} from '../actions';

export interface HistoryState {
  readonly items: any[];
}

export interface HistoryAddAction {
  readonly type: typeof HISTORY_ADD;
  readonly payload: any;
}

export interface HistoryClearAction {
  readonly type: typeof HISTORY_CLEAR;
  readonly payload: any;
}

export interface HistoryRecallAction {
  readonly type: typeof HISTORY_RECALL;
  readonly payload: any;
}

export interface HistorySubstractAction {
  readonly type: typeof HISTORY_SUBSTRACT;
  readonly payload: any;
}
