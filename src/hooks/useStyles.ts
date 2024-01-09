import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {NamedStyles} from '../interfaces/useStyles.ts';
import {guidelineBaseWidth, scaleItems} from '../constants/styles.ts';
import {getSizesState} from '../store/app/selectors.ts';
import {useAppSelector} from './useRedux.ts';

export const useStyles = (styles: any): NamedStyles => {
  const sizes = useAppSelector(getSizesState);

  const fixStyles = useCallback(
    (object = {}) => {
      const scale = (size: number, factor = 0.5): number =>
        size + ((sizes.width / guidelineBaseWidth) * size - size) * factor;

      const objectReduce = (acc: any, [key, value]: [string, any]) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          value = fixStyles(value);
        } else if (typeof value === 'number' && scaleItems.includes(key)) {
          value = scale(value);
        }

        acc[key] = value;

        return acc;
      };

      return Object.entries(object).reduce(objectReduce, {});
    },
    [sizes],
  );

  return StyleSheet.create({...fixStyles(styles)});
};
