/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NativeRouter} from 'react-router-native';
import {RootNavigation} from './src/screens/Root.tsx';
import {persisStore, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persisStore}>
        <NativeRouter>
          <RootNavigation />
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
