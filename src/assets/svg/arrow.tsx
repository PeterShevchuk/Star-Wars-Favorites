import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useStyles} from '../../hooks/useStyles.ts';

export const ArrowIcon = (props: SvgProps) => {
  const styles = useStyles({icon: {width: 24}});

  return (
    <Svg
      width={styles.icon.width}
      height={styles.icon.width}
      viewBox="0 0 24 24"
      {...props}>
      <Path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
    </Svg>
  );
};
