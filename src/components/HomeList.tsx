import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useGlobalState} from '../hooks/useGlobalState.tsx';
import {useService} from '../hooks/useService.ts';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from '../utils/metrics.ts';
import {SearchIcon} from '../assets/svg/searchIcon.tsx';
import {IListItem} from '../interfaces/GlobalState.ts';
import {HomeListPagination} from './HomeListPagination.tsx';
import {HomeListRenderItem} from './HomeListRenderItem.tsx';
import {ResetButton} from './ResetButton.tsx';

export const HomeList = () => {
  const {list, params, favoriteToggle} = useGlobalState();
  const {getAllList, getCharacterDetails} = useService();

  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch('');
    getAllList(params);
  }, [params.page]);

  const onPressCharacter = useCallback((item: IListItem) => {
    getCharacterDetails(item.url);
  }, []);

  const onPressFavorite = useCallback((item: IListItem) => {
    favoriteToggle(item);
  }, []);

  const parseList = useMemo(() => {
    return search ? list.filter(item => item.name.includes(search)) : list;
  }, [search, list]);

  return (
    <View style={styles.view}>
      <View style={styles.searchWrapper}>
        <SearchIcon />
        <TextInput
          style={{flex: 1}}
          placeholder={'Search'}
          onChangeText={setSearch}
          value={search}
        />
      </View>

      {parseList.length ? (
        <View style={styles.table}>
          {parseList.map((item, index, all) => (
            <HomeListRenderItem
              key={item.name}
              item={item}
              isLast={all.length === index + 1}
              onPressCharacter={onPressCharacter}
              onPressFavorite={onPressFavorite}
            />
          ))}
        </View>
      ) : (
        <View style={styles.emptyList}>
          <Text style={{fontSize: moderateScale(16)}}>No characters found</Text>
          <ResetButton onPress={() => setSearch('')} label={'reset search'} />
        </View>
      )}
      <HomeListPagination />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
    padding: moderateScale(16),
    gap: moderateScale(16),
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(16),
  },
  table: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(4),
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    padding: moderateScale(10),
    gap: moderateScale(16),
    alignItems: 'center',
    borderColor: '#ccc',
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  descriptionBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: moderateScale(10),
  },
  column: {
    flex: 1,
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  emptyList: {
    alignSelf: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
});
