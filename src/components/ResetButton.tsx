import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useStyles} from '../hooks/useStyles.ts';

interface IResetButton {
  label: string;
  onPress: () => void;
}

export const ResetButton = ({label, onPress}: IResetButton) => {
  const styles = useStyles(getStyles);

  return (
    <TouchableOpacity onPress={onPress} style={styles.resetButton}>
      <Text style={styles.resetButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const getStyles = {
  resetButton: {
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 14,
    color: 'red',
    textTransform: 'uppercase',
  },
};
