import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({color = '#C4C4C4', size = 22}) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <Path
      d="M15.583 16.493v5.5h3.667a2.75 2.75 0 0 0 2.75-2.75v-8.361c0-.476-.185-.934-.516-1.276l-7.79-8.421a3.667 3.667 0 0 0-5.385 0L.533 9.603A1.83 1.83 0 0 0 0 10.896v8.347a2.75 2.75 0 0 0 2.75 2.75h3.667v-5.5c.017-2.5 2.035-4.54 4.472-4.6 2.518-.06 4.675 2.015 4.694 4.6"
      fill={color}
    />
    <Path
      d="M11 13.742a2.75 2.75 0 0 0-2.75 2.75v5.5h5.5v-5.5a2.75 2.75 0 0 0-2.75-2.75"
      fill={color}
    />
  </Svg>
);

export default HomeIcon;
