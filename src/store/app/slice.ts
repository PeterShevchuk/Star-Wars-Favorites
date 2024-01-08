import {createSlice} from '@reduxjs/toolkit';
import {IAppSliceInitialState} from './interface';
import {Dimensions} from 'react-native';

const initialState: IAppSliceInitialState = {
  isLoading: false,
  size: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    changeOrientation(state) {
      state.size = Dimensions.get('screen');
    },
  },
  extraReducers: () => undefined,
});

export const {startLoading, stopLoading, changeOrientation} = slice.actions;
export default slice.reducer;
