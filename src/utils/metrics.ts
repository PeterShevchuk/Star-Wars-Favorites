import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export {horizontalScale, verticalScale, moderateScale};
