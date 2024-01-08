import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useStyles} from '../hooks/useStyles.ts';
import {useAppSelector} from '../hooks/useRedux.ts';
import {getFavoriteListState} from '../store/list/selectors.ts';

export const HomeStatistic = () => {
  const favorite = useAppSelector(getFavoriteListState);

  const styles = useStyles(getStyles);

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

const getStyles = {
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  block: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  blockText: {
    fontSize: 32,
  },
  blockDescription: {
    fontSize: 12,
  },
};
