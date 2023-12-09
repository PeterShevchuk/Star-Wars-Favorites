import {useGlobalState} from '../hooks/useGlobalState.tsx';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from '../utils/metrics.ts';

export const HomeStatistic = () => {
  const {favorite} = useGlobalState();

  const {male, female, others} = useMemo(() => {
    const male = favorite?.filter(item => item.gender === 'male').length || 0;
    const female =
      favorite?.filter(item => item.gender === 'female').length || 0;

    return {
      male,
      female,
      others: favorite.length - male - female,
    };
  }, [favorite]);

  return (
    <View style={styles.view}>
      <View style={styles.block}>
        <Text style={styles.blockText}>{female}</Text>
        <Text style={styles.blockDescription}>Female Fans</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.blockText}>{male}</Text>
        <Text style={styles.blockDescription}>Male Fans</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.blockText}>{others}</Text>
        <Text style={styles.blockDescription}>Others</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(16),
  },
  block: {
    flex: 1,
    backgroundColor: 'white',
    padding: moderateScale(15),
  },
  blockText: {
    fontSize: moderateScale(32),
  },
  blockDescription: {
    fontSize: moderateScale(12),
  },
});
