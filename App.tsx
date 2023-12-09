/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NativeRouter} from 'react-router-native';
import {RootNavigation} from './src/screens/Root.tsx';
import {GlobalStateContextProvider} from './src/hooks/useGlobalState.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <NativeRouter>
      <GlobalStateContextProvider>
        <RootNavigation />
      </GlobalStateContextProvider>
    </NativeRouter>
  );
}

export default App;
