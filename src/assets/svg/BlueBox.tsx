import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';
const BlueBox = ({...props}) => (
  <Svg
    width={328}
    height={110}
    viewBox="0 0 328 110"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Rect width={328} height={110} rx={8} fill="#E1EFFF" />
      <Path
        d="M35.195 191.91s-41.659-44.342-13.317-95.991c21.864-39.846 74.757-32.746 101.896-15.892 11.559 7.18 36.395-5.986 67.891-45.96 36.564-46.406 178.126-18.092 153.679 70.574-11.831 42.908 36.007 44.468 11.632 87.359z"
        fill="#F7FBFF"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={328} height={110} rx={8} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BlueBox;
