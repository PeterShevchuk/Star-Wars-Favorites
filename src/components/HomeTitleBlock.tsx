import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResetButton} from './ResetButton.tsx';
import {useStyles} from '../hooks/useStyles.ts';
import {useDispatch} from 'react-redux';
import {resetFavorite} from '../store/list/slice.ts';

export const HomeTitleBlock = () => {
  const dispatch = useDispatch();

  const styles = useStyles(getStyles);

  const onPressReset = useCallback(() => {
    dispatch(resetFavorite());
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
