import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useService} from '../hooks/useService.ts';
import {Text, TextInput, View} from 'react-native';
import {SearchIcon} from '../assets/svg/searchIcon.tsx';
import {HomeListPagination} from './HomeListPagination.tsx';
import {HomeListRenderItem} from './HomeListRenderItem.tsx';
import {ResetButton} from './ResetButton.tsx';
import {useStyles} from '../hooks/useStyles.ts';
import {useAppSelector} from '../hooks/useRedux.ts';
import {geParamsListState, getDataListState} from '../store/list/selectors.ts';
import {useDispatch} from 'react-redux';
import {favoriteToggle} from '../store/list/slice.ts';
import {IListItem, TList} from '../store/list/interface.ts';

export const HomeList = () => {
  const dispatch = useDispatch();
  const list = useAppSelector(getDataListState);
  const {page} = useAppSelector(geParamsListState);

  const {getAllList, getCharacterDetails} = useService();

  const [search, setSearch] = useState('');

  const styles = useStyles({
    view: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 4,
      padding: 16,
      gap: 16,
    },
    searchWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    table: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 4,
    },
    itemView: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      gap: 16,
      alignItems: 'center',
      borderColor: '#ccc',
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
    },
    descriptionBlock: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      gap: 10,
    },
    column: {
      flex: 1,
      fontSize: 12,
      fontWeight: '400',
    },
    emptyList: {
      alignSelf: 'center',
      alignItems: 'center',
      gap: 10,
    },
    notFoundText: {
      fontSize: 16,
    },
  });

  useEffect(() => {
    setSearch('');
    getAllList({page});
  }, [page]);

  const onPressCharacter = useCallback((item: IListItem) => {
    getCharacterDetails(item.url);
  }, []);

  const onPressFavorite = useCallback((item: IListItem) => {
    dispatch(favoriteToggle(item));
  }, []);

  const parseList = useMemo(() => {
    return (
      search ? list.filter(item => item.name.includes(search)) : list
    ) as TList;
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
          <Text style={styles.notFoundText}>No characters found</Text>
          <ResetButton onPress={() => setSearch('')} label={'reset search'} />
        </View>
      )}
      <HomeListPagination />
    </View>
  );
};
