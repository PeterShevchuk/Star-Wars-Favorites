import {createSlice} from '@reduxjs/toolkit';
import {
  IListItem,
  IListSetListPayload,
  IListSliceInitialState,
  TParamsPartial,
} from './interface';

const initialState: IListSliceInitialState = {
  data: [],
  favorite: [],
  params: {
    page: 1,
    count: 0,
    next: false,
    previous: false,
  },
};

const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    favoriteToggle(state, {payload}: {payload: IListItem}) {
      state.favorite = state.favorite.find(
        prevItem => payload.name === prevItem.name,
      )
        ? state.favorite.filter(prevItem => payload.name !== prevItem.name)
        : [...state.favorite, payload];
    },
    resetFavorite(state) {
      state.favorite = initialState.favorite;
    },
    setList(state, {payload}: {payload: IListSetListPayload}) {
      state.data = payload.data.map(item => ({...item, favorite: false}));
      state.params = {...state.params, ...payload.params};
    },
    setParams(state, {payload}: {payload: TParamsPartial}) {
      state.params = {...state.params, ...payload};
    },
  },
  extraReducers: () => undefined,
});

export const {favoriteToggle, resetFavorite, setParams, setList} =
  slice.actions;
export default slice.reducer;
