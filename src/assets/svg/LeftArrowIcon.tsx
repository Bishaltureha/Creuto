import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LeftArrowIcon = ({size = 24, color = '#fff', ...props}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.957 12.354a.5.5 0 0 1 0-.708l4.586-4.585a1.5 1.5 0 0 0-2.121-2.122L8.836 9.525a3.505 3.505 0 0 0 0 4.95l4.586 4.586a1.5 1.5 0 1 0 2.121-2.122z"
      fill={color}
    />
  </Svg>
);

export default LeftArrowIcon;
