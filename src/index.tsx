import React from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import './index.scss';
import { persistor, reduxStore } from './redux/store';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
if (container === null) {
  throw new Error('Root element not found');
}


const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


