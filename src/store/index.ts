import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import app from './app/slice';
import list from './list/slice';

export const listPersistConfig = {
  key: 'list',
  storage: AsyncStorage,
  whitelist: ['data', 'favorite'],
};

const reducers = combineReducers({
  app,
  list: persistReducer(listPersistConfig, list),
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .prepend()
      .concat(),
});
export const persisStore = persistStore(store);
