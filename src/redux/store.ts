import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { RootReducer } from './rootReducer/RootReducer';

const persistConfig = {
  key: 'primary',
  storage,
  version: 28,
  stateReconciler: autoMergeLevel2,
  debug: process.env.NODE_ENV !== 'production',
};

type RootState = ReturnType<typeof RootReducer>;

// const composeEnhancers = composeWithDevTools({});

const persistedReducer = persistReducer<RootState>(persistConfig, RootReducer);

export const reduxStore = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(reduxStore);

export type IRootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
