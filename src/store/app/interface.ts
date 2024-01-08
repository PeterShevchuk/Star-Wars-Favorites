interface IAppSizes {
  width: number;
  height: number;
}

export interface IAppSliceInitialState {
  isLoading: boolean;
  size: IAppSizes;
}
