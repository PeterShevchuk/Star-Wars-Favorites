import React, {createContext, useContext, useMemo, useState} from 'react';
import {
  GlobalContent,
  IListItem,
  IParams,
  TGlobalStateContextProvider,
  TList,
} from '../interfaces/GlobalState.ts';

const defaultValue = {
  list: [],
  loader: false,
  params: {
    page: 1,
    count: 0,
    next: false,
    previous: false,
  },
  favorite: [],
  setList: () => undefined,
  favoriteToggle: () => undefined,
  setParams: () => undefined,
  startLoader: () => undefined,
  stopLoader: () => undefined,
  resetFavorite: () => undefined,
};

const GlobalStateContext = createContext<GlobalContent>(defaultValue);

export const GlobalStateContextProvider: TGlobalStateContextProvider =
  props => {
    const [loader, setLoader] = useState<Boolean>(defaultValue.loader);
    const [params, setParams] = useState<IParams>(defaultValue.params);
    const [list, setList] = useState<TList>(defaultValue.list);
    const [favorite, setFavorite] = useState<TList>(defaultValue.favorite);

    const favoriteToggle = (item: IListItem) => {
      setFavorite(prev =>
        prev.find(prevItem => item.name === prevItem.name)
          ? prev.filter(prevItem => item.name !== prevItem.name)
          : [...prev, item],
      );
    };

    const parseList = useMemo(() => {
      return list?.map((item: IListItem) => ({
        ...item,
        favorite: favorite.find(prevItem => item.name === prevItem.name),
      }));
    }, [list, favorite]) as TList;

    const value: GlobalContent = {
      loader,
      favorite,
      list: parseList,
      params,
      setList,
      favoriteToggle,
      setParams: newParams => setParams(prev => ({...prev, ...newParams})),
      startLoader: () => setLoader(true),
      stopLoader: () => setLoader(false),
      resetFavorite: () => setFavorite(defaultValue.favorite),
    };

    return (
      <GlobalStateContext.Provider value={value}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  };

export const useGlobalState = () => useContext(GlobalStateContext);
