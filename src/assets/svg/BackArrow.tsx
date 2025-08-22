import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrow = ({size = 24, color = '#0A0A0A', ...props}) => (
  <Svg
    width={size}
    height={(size * 14) / 24} // keep aspect ratio
    viewBox="0 0 24 14"
    fill="none"
    {...props}>
    <Path
      d="M.88 9.09 4.75 13a1 1 0 0 0 1.64-.325 1 1 0 0 0-.22-1.095L2.61 8H23a1 1 0 0 0 0-2H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 4.85a3 3 0 0 0 0 4.24"
      fill={color}
    />
  </Svg>
);

export default BackArrow;
