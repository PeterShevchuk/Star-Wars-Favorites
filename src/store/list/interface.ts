export type TListItemID = string;
export interface IParams {
  page: number;
  count: number;
  next: boolean;
  previous: boolean;
}

export interface IListItem {
  id: TListItemID;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  favorite?: boolean;
}
export type TList = IListItem[];

export interface IListSliceInitialState {
  params: IParams;
  data: TList;
  favorite: TList;
}

export interface IListSetListPayload {
  data: TList;
  params: TParamsPartial;
}

export type TParamsPartial = Partial<IParams>;
