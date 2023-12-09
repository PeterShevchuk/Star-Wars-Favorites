import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useGlobalState} from '../../hooks/useGlobalState.tsx';

export const LoaderLayout = () => {
  const {loader} = useGlobalState();

  return loader ? (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator
          size="large"
          color={'yellow'}
          style={{transform: [{scale: 2.5}]}}
        />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
