import {
  TOGGLE_MEMORY_TAB,
  SET_MEMORY_TAB,
  SET_DATE_TAB,
  TOGGLE_MENU,
} from '../actions';

import { SettingsState } from '../interfaces/SettingsState';

import type { SettingsActionTypes } from '../types/SettingsActionTypes';

const initialState: SettingsState = {
  isMemoShow: false,
  activeMemoTab: 'memory',
  activeDateTab: 'relative',
  isMenuShow: false,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes
) => {
  switch (action.type) {
    case TOGGLE_MEMORY_TAB:
      return { ...state, isMemoShow: !state.isMemoShow };

    case SET_MEMORY_TAB:
      return { ...state, activeMemoTab: action.payload };

    case SET_DATE_TAB:
      return { ...state, activeDateTab: action.payload };

    case TOGGLE_MENU:
      return { ...state, isMenuShow: !state.isMenuShow };

    default:
      return state;
  }
};
