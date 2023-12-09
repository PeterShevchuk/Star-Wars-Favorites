import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Route, Routes} from 'react-router-native';
import {navigation} from '../constants/navigation';
import {HomeScreen} from './Home.tsx';
import {LoaderLayout} from '../components/layout/LoaderLayout.tsx';
import {DetailsScreen} from './Details.tsx';

export const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <Routes>
        <Route path={navigation.HOME} element={<HomeScreen />} />
        <Route path={navigation.DETAILS_SCREEN} element={<DetailsScreen />} />
      </Routes>
      <LoaderLayout />
    </SafeAreaProvider>
  );
};
