import {API} from '../_service/api.ts';
import {useGlobalState} from './useGlobalState.tsx';
import {IParams} from '../interfaces/GlobalState.ts';
import {useNavigate} from 'react-router-native';
import {navigation} from '../constants/navigation.ts';

export const useService = () => {
  const {startLoader, stopLoader, setList, setParams} = useGlobalState();
  const navigate = useNavigate();

  const getAllList = async (params: IParams) => {
    try {
      startLoader();
      const result = await API.getList(params);

      if (result.data.results.length > 0) {
        setList(result.data.results);

        setParams({
          count: result.data.count,
          next: !!result.data.next,
          previous: !!result.data.previous,
        });
      }
    } catch (e) {
      console.log('getAllList error: ', e);
    } finally {
      stopLoader();
    }
  };

  const getCharacterDetails = async (url: string) => {
    try {
      startLoader();
      const result = await API.getDetails(url);

      if (result.data) {
        navigate(navigation.DETAILS_SCREEN, {state: result.data});
      }
    } catch (e) {
      console.log('getCharacterDetails error: ', e);
    } finally {
      stopLoader();
    }
  };

  return {
    getAllList,
    getCharacterDetails,
  };
};
