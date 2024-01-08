import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-native';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeOrientation} from '../store/app/slice.ts';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigation} from '../constants/navigation.ts';
import {HomeScreen} from './Home.tsx';
import {DetailsScreen} from './Details.tsx';
import {LoaderLayout} from '../components/layout/LoaderLayout.tsx';

export const RootNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const description = Dimensions.addEventListener('change', () => {
      dispatch(changeOrientation());
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
