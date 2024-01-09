import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TLayout} from '../interfaces/Layout.ts';
import {useStyles} from '../hooks/useStyles.ts';

export const Layout: TLayout = ({children, style}) => {
  const styles = useStyles({
    view: {
      flex: 1,
      backgroundColor: '#F6F5E8',
    },
  });

  return <SafeAreaView style={[styles.view, style]}>{children}</SafeAreaView>;
};
