import {ArrowIcon} from '../assets/svg/arrow.tsx';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGlobalState} from '../hooks/useGlobalState.tsx';
import {moderateScale} from '../utils/metrics.ts';

export const HomeListPagination = () => {
  const {params, setParams} = useGlobalState();

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
      <Text>
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

const styles = StyleSheet.create({
  paginationBlock: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  navButton: {paddingHorizontal: moderateScale(8)},
});
