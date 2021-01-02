import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'App';

import { store, persistor } from 'store';

import 'index.scss';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      {/* TODO null */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
