import {API} from '../_service/api.ts';
import {useNavigate} from 'react-router-native';
import {navigation} from '../constants/navigation.ts';
import {useDispatch} from 'react-redux';
import {startLoading, stopLoading} from '../store/app/slice.ts';
import {setList} from '../store/list/slice.ts';
import {TParamsPartial} from '../store/list/interface.ts';

export const useService = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getAllList = async (params: TParamsPartial) => {
    try {
      dispatch(startLoading());
      const result = await API.getList(params);

      if (result.data.results.length > 0) {
        dispatch(
          setList({
            data: result.data.results,
            params: {
              count: result.data.count,
              next: !!result.data.next,
              previous: !!result.data.previous,
            },
          }),
        );
      }
    } catch (e) {
      console.log('getAllList error: ', e);
    } finally {
      dispatch(stopLoading());
    }
  };

  const getCharacterDetails = async (url: string) => {
    try {
      dispatch(startLoading());
      const result = await API.getDetails(url);

      if (result.data) {
        navigate(navigation.DETAILS_SCREEN, {state: result.data});
      }
    } catch (e) {
      console.log('getCharacterDetails error: ', e);
    } finally {
      dispatch(stopLoading());
    }
  };

  return {
    getAllList,
    getCharacterDetails,
  };
};
