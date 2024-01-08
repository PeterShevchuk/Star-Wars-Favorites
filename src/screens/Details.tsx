import {Layout} from '../components/Layout.tsx';
import {useLocation, useNavigate} from 'react-router-native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ArrowIcon} from '../assets/svg/arrow.tsx';
import {useStyles} from '../hooks/useStyles.ts';
import {HeartIcon} from '../assets/svg/heart.tsx';
import React, {useCallback} from 'react';
import {useAppSelector} from '../hooks/useRedux.ts';
import {getFavoriteListState} from '../store/list/selectors.ts';
import {favoriteToggle} from '../store/list/slice.ts';
import {useDispatch} from 'react-redux';

export const DetailsScreen = () => {
  const dispatch = useDispatch();
  const favorite = useAppSelector(getFavoriteListState);

  const {state} = useLocation();
  const navigate = useNavigate();

  const styles = useStyles({
    view: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 4,
      padding: 16,
      gap: 16,
    },
    back: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      gap: 16,
    },
  });

  const isFavorite = favorite.find(item => item.name === state.name);

  const reset = useCallback(() => {
    dispatch(favoriteToggle(state));
  }, [state]);

  return (
    <Layout>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.back} onPress={() => navigate(-1)}>
          <ArrowIcon />
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <HeartIcon fill={isFavorite ? 'red' : 'black'} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.view}>
        <Text>Name: {state.name}</Text>
        <Text>Height: {state.height}</Text>
        <Text>Mass: {state.mass}</Text>
        <Text>Hair color: {state.hair_color}</Text>
        <Text>Skin color: {state.skin_color}</Text>
        <Text>Eye color: {state.eye_color}</Text>
        <Text>Birth year: {state.birth_year}</Text>
        <Text>Gender: {state.gender}</Text>
      </ScrollView>
    </Layout>
  );
};
