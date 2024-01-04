import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useStyles} from '../../hooks/useStyles.ts';

export const SearchIcon = (props: SvgProps) => {
  const styles = useStyles({icon: {width: 20}});
  return (
    <Svg
      width={styles.icon.width}
      height={styles.icon.width}
      viewBox="0 0 20 20"
      {...props}>
      <Path
        d="M16 15l2 1 4 4-2 2-4-4-1-2 1-1zM9.5 2a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
        transform="translate(-2 -2)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
};
