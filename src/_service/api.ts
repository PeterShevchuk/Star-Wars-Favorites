import axios from 'axios';
import {IParams} from '../interfaces/GlobalState';

const baseURL = 'https://swapi.dev/api';

const Instance = axios.create({baseURL});

export const API = {
  getList: async (params: IParams) => {
    return await Instance.get('/people', {params: {page: params.page}});
  },
  getDetails: async (url: string) => {
    return await Instance.get(url);
  },
};
