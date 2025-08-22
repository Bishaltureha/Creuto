import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightArrowIcon = ({size = 24, color = '#fff', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m15.75 9.525-4.586-4.586a1.5 1.5 0 1 0-2.121 2.122l4.586 4.585a.5.5 0 0 1 0 .708l-4.586 4.585a1.5 1.5 0 0 0 2.121 2.122l4.586-4.586a3.505 3.505 0 0 0 0-4.95"
      fill={color}
    />
  </Svg>
);

export default RightArrowIcon;
