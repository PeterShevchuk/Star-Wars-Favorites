import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {useCallback, useMemo} from 'react';
import {useGlobalState} from './useGlobalState.tsx';
import {NamedStyles} from '../interfaces/useStyles.ts';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;
const scaleItems = [
  'borderWidth',
  'borderRadius',
  'fontSize',
  'gap',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingRight',
  'paddingLeft',
  'paddingHorizontal',
  'paddingVertical',
  'margin',
  'marginTop',
  'marginBottom',
  'marginRight',
  'marginLeft',
  'marginHorizontal',
  'marginVertical',
  'width',
  'height',
];

export const useStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T & NamedStyles<any>,
): T => {
  const {orientation} = useGlobalState();

  const {width, scale} = useMemo(() => {
    const screenWidth = Dimensions.get('screen').width;

    return {
      width: screenWidth,
      scale: (size: number, factor = 0.5): number =>
        size + ((width / guidelineBaseWidth) * size - size) * factor,
    };
  }, [orientation]);

  const fixStyles = useCallback(
    (object = {}) => {
      const objectReduce = (acc: any, [key, value]: [string, any]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          value = fixStyles(value);
        } else if (scaleItems.includes(key) && typeof value === 'number') {
          value = scale(value);
        }

        acc[key] = value;

        return acc;
      };

      return Object.entries(object).reduce(objectReduce, {});
    },
    [width],
  );

  return StyleSheet.create({...fixStyles(styles)});
};
