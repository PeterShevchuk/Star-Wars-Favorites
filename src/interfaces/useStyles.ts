import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type NamedStyles<T = any> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
