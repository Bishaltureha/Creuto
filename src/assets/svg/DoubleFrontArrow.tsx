import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DoubleFrontArrow = ({...props}) => (
  <Svg
    width={19}
    height={18}
    viewBox="0 0 19 18"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.325 14.25a.75.75 0 0 1-.525-1.283l3.45-3.435a.75.75 0 0 0 0-1.065L9.8 5.032a.75.75 0 1 1 1.058-1.065L14.3 7.41a2.25 2.25 0 0 1 0 3.18l-3.442 3.443a.75.75 0 0 1-.533.217"
      fill="#0063D8"
    />
    <Path
      d="M5.075 14.25a.75.75 0 0 1-.525-1.283L8.518 9 4.55 5.032a.75.75 0 1 1 1.058-1.065l4.5 4.5a.75.75 0 0 1 0 1.065l-4.5 4.5a.75.75 0 0 1-.533.218"
      fill="#0063D8"
    />
  </Svg>
);
export default DoubleFrontArrow;
