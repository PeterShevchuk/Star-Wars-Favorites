import {RootState} from '../interface';

export const getLoadingState = ({app}: RootState): boolean => app.isLoading;
export const getSizesState = ({app}: RootState) => app.size;
