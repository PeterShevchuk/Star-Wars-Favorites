import {ArrowIcon} from '../assets/svg/arrow.tsx';
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useGlobalState} from '../hooks/useGlobalState.tsx';
import {useStyles} from '../hooks/useStyles.ts';

export const HomeListPagination = () => {
  const {params, setParams} = useGlobalState();

  const styles = useStyles(getStyles);

  const onPressPrev = useCallback(() => {
    if (params.previous) {
      setParams({page: params.page - 1});
    }
  }, [params]);

  const onPressNext = useCallback(() => {
    if (params.next) {
      setParams({page: params.page + 1});
    }
  }, [params]);

  return (
    <View style={styles.paginationBlock}>
      <TouchableOpacity
        disabled={!params.previous}
        style={styles.navButton}
        onPress={onPressPrev}>
        <ArrowIcon style={{opacity: params.previous ? 1 : 0.6}} />
      </TouchableOpacity>
      <Text style={styles.text}>
        {params.count
          ? `${params.page * 10 - 9} - ${Math.min(
              params.page * 10,
              params.count,
            )} of ${params.count}`
          : 0}
      </Text>
      <TouchableOpacity
        disabled={!params.next}
        style={styles.navButton}
        onPress={onPressNext}>
        <ArrowIcon
          style={{
            transform: [{rotate: '180deg'}],
            opacity: params.next ? 1 : 0.6,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = {
  paginationBlock: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  navButton: {
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 12,
  },
};
