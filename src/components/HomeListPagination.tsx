import {ArrowIcon} from '../assets/svg/arrow.tsx';
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from '../hooks/useStyles.ts';
import {useAppSelector} from '../hooks/useRedux.ts';
import {geParamsListState} from '../store/list/selectors.ts';
import {useDispatch} from 'react-redux';
import {setParams} from '../store/list/slice.ts';

export const HomeListPagination = () => {
  const dispatch = useDispatch();
  const params = useAppSelector(geParamsListState);

  const styles = useStyles(getStyles);

  const onPressPrev = useCallback(() => {
    if (params.previous) {
      dispatch(setParams({page: params.page - 1}));
    }
  }, [params]);

  const onPressNext = useCallback(() => {
    if (params.next) {
      dispatch(setParams({page: params.page + 1}));
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
