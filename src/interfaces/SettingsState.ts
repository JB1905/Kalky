import {
  TOGGLE_MEMORY_TAB,
  SET_MEMORY_TAB,
  SET_DATE_TAB,
  TOGGLE_MENU,
} from '../actions';

export interface SettingsState {
  readonly isMemoShow: boolean;
  readonly activeMemoTab: any;
  readonly activeDateTab: any;
  readonly isMenuShow: boolean;
}

export interface ToggleMemoryTabAction {
  readonly type: typeof TOGGLE_MEMORY_TAB;
}

export interface SetMemoryTabAction {
  readonly type: typeof SET_MEMORY_TAB;
  readonly payload: any;
}

export interface SetDateTabAction {
  readonly type: typeof SET_DATE_TAB;
  readonly payload: any;
}

export interface ToggleMenuAction {
  readonly type: typeof TOGGLE_MENU;
}
