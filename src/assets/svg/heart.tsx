import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useStyles} from '../../hooks/useStyles.ts';

export const HeartIcon = (props: SvgProps) => {
  const styles = useStyles({icon: {width: 32}});

  return (
    <Svg
      width={styles.icon.width}
      height={styles.icon.width}
      viewBox="0 0 16 16"
      fill="#000"
      {...props}>
      <Path
        d="M13.799 2.801a4.1 4.1 0 01.141 5.65L13.8 8.6 8 14.399 2.201 8.6l-.141-.148A4.1 4.1 0 017.852 2.66L8 2.8l.148-.141A4.1 4.1 0 0113.8 2.8zm-1.06 1.06c-.937-.936-2.418-1.012-3.417-.232l-.14.117L8 4.872l-1.156-1.1a2.6 2.6 0 00-3.582.09c-.937.936-1.013 2.417-.233 3.416l.117.14.116.121L8 12.278l4.713-4.712.116-.122a2.6 2.6 0 00.032-3.451l-.123-.131z"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  );
};
