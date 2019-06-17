import { createStore } from 'redux';

import { loadHistory, saveHistory } from './reducers/history';
import { loadMemory, saveMemory } from './reducers/memory';

import rootReducer from './reducers';

const store = createStore(rootReducer, {
  history: loadHistory(),
  memory: loadMemory(),
  window: {
    showMemo: false,
    memoTab: 'memory',
    dateTab: 'relative'
  }
});

store.subscribe(() => {
  saveHistory(store.getState().history);
  saveMemory(store.getState().memory);
});

export default store;
