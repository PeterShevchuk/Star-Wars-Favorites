import {RootState} from '../interface.ts';
import {IListItem} from './interface.ts';

export const getDataListState = ({list}: RootState) => {
  return list.data?.map((item: IListItem) => ({
    ...item,
    favorite: list.favorite.find(prevItem => item.name === prevItem.name),
  }));
};
export const getFavoriteListState = ({list}: RootState) => list.favorite;
export const geParamsListState = ({list}: RootState) => list.params;
