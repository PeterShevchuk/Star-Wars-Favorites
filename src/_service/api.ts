import axios from 'axios';
import {TParamsPartial} from '../store/list/interface.ts';

const baseURL = 'https://swapi.dev/api';

const Instance = axios.create({baseURL});

export const API = {
  getList: async (params: TParamsPartial) => {
    return await Instance.get('/people', {params: {page: params.page}});
  },
  getDetails: async (url: string) => {
    return await Instance.get(url);
  },
};
