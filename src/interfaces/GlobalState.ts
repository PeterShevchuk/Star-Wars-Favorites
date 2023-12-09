import React from 'react';

export type TListItemID = string;
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

export interface IParams {
  page: number;
  count: number;
  next: boolean;
  previous: boolean;
}

export type GlobalContent = {
  loader: Boolean;
  startLoader: () => void;
  stopLoader: () => void;
  list: TList;
  setList: (list: TList) => void;
  params: IParams;
  favorite: TList;
  favoriteToggle: (item: IListItem) => void;
  setParams: (params: Partial<IParams>) => void;
  resetFavorite: () => void;
};

export interface IGlobalStateContextProviderProps {
  children: React.ReactNode;
}
export type TGlobalStateContextProvider =
  React.FC<IGlobalStateContextProviderProps>;
