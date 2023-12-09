import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {moderateScale} from '../../utils/metrics.ts';

export const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg
      width={moderateScale(24)}
      height={moderateScale(24)}
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
    </Svg>
  );
};
