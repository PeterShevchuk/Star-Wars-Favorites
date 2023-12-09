import {Layout} from '../components/Layout.tsx';
import {useLocation, useNavigate} from 'react-router-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from '../utils/metrics.ts';
import {ArrowIcon} from '../assets/svg/arrow.tsx';

export const DetailsScreen = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  return (
    <Layout>
      <TouchableOpacity style={styles.back} onPress={() => navigate(-1)}>
        <ArrowIcon />
        <Text>Go Back</Text>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
    padding: moderateScale(16),
    gap: moderateScale(16),
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(16),
    gap: moderateScale(16),
  },
});
