import { combineReducers } from 'redux';

import memoryReducer from './memory';
import historyReducer from './history';
import windowReducer from './window';

const rootReducer = combineReducers({
  memory: memoryReducer,
  history: historyReducer,
  window: windowReducer
});

export default rootReducer;
