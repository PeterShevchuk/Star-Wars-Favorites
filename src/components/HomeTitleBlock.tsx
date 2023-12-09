import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from '../utils/metrics.ts';
import {useGlobalState} from '../hooks/useGlobalState.tsx';
import {ResetButton} from './ResetButton.tsx';

export const HomeTitleBlock = () => {
  const {resetFavorite} = useGlobalState();

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

const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(32),
    fontFamily: 'Inter',
  },
});
