import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TLayout} from '../interfaces/Layout.ts';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../utils/metrics.ts';

export const Layout: TLayout = ({children, style}) => {
  return <SafeAreaView style={[styles.view, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: '#F6F5E8',
  },
});
