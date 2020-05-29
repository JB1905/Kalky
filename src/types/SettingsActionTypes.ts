import {
  ToggleMemoryTabAction,
  SetMemoryTabAction,
  SetDateTabAction,
  ToggleMenuAction,
} from '../interfaces/SettingsState';

export type SettingsActionTypes =
  | ToggleMemoryTabAction
  | SetMemoryTabAction
  | SetDateTabAction
  | ToggleMenuAction;
