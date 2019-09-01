import { createStore } from 'redux';

import { loadHistory, saveHistory } from './reducers/history';
import { loadMemory, saveMemory } from './reducers/memory';
import { saveSettings } from './reducers/window';

import rootReducer from './reducers';

const store = createStore(rootReducer, {
  history: loadHistory(),
  memory: loadMemory()
});

store.subscribe(() => {
  saveHistory(store.getState().history);
  saveMemory(store.getState().memory);
  saveSettings(store.getState().window.showMenu);
});

export default store;
