import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGlobalState} from '../hooks/useGlobalState.tsx';
import {ResetButton} from './ResetButton.tsx';
import {useStyles} from '../hooks/useStyles.ts';

export const HomeTitleBlock = () => {
  const {resetFavorite} = useGlobalState();

  const styles = useStyles(getStyles);

  const onPressReset = useCallback(() => {
    resetFavorite();
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Fans</Text>
      <ResetButton onPress={onPressReset} label={'Reset fans'} />
    </View>
  );
};

const getStyles = {
  view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter',
  },
};
