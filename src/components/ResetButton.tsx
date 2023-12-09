import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from '../utils/metrics.ts';

interface IResetButton {
  label: string;
  onPress: () => void;
}

export const ResetButton = ({label, onPress}: IResetButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.resetButton}>
      <Text style={styles.resetButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: moderateScale(14),
    color: 'red',
    textTransform: 'uppercase',
  },
});
