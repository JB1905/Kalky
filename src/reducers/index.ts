import { combineReducers } from 'redux';

import { calculatorReducer } from './calculatorReducer';
import { historyReducer } from './historyReducer';
import { memoryReducer } from './memoryReducer';
import { settingsReducer } from './settingsReducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  history: historyReducer,
  memory: memoryReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
