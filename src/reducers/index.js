import { combineReducers } from 'redux';

import historyReducer from './history';
import memoryReducer from './memory';
import windowReducer from './window';

const rootReducer = combineReducers({
  history: historyReducer,
  memory: memoryReducer,
  window: windowReducer
});

export default rootReducer;
