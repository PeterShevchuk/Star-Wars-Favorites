import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Route, Routes} from 'react-router-native';
import {navigation} from '../constants/navigation';
import {HomeScreen} from './Home.tsx';
import {LoaderLayout} from '../components/layout/LoaderLayout.tsx';
import {DetailsScreen} from './Details.tsx';
import {Dimensions} from 'react-native';
import {useGlobalState} from '../hooks/useGlobalState.tsx';
import {isPortrait} from '../utils/metrics.ts';
import {IOrientationTypes} from '../interfaces/GlobalState.ts';

export const RootNavigation = () => {
  const {changeOrientation} = useGlobalState();

  useEffect(() => {
    const description = Dimensions.addEventListener('change', () => {
      changeOrientation(
        isPortrait() ? IOrientationTypes.PORTRAIT : IOrientationTypes.PORTRAIT,
      );
    });

    return () => {
      description.remove();
    };
  }, []);

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
