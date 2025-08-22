import * as React from 'react';
import Svg, {G, Path, Rect, Defs, ClipPath, SvgProps} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CloudCard = (props: SvgProps) => (
  <Svg
    width={328}
    height={110}
    viewBox="0 0 328 110"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Rect width={328} height={110} rx={8} fill="#fff" />
      <G filter="url(#b)">
        <G clipPath="url(#c)">
          <Rect width={328} height={110} rx={8} fill="#FFE77E" />
          <Path
            d="M35.195 191.91s-41.659-44.342-13.317-95.991c21.864-39.846 74.757-32.746 101.896-15.892 11.559 7.18 36.395-5.986 67.891-45.96 36.564-46.406 178.126-18.092 153.679 70.574-11.831 42.908 36.007 44.468 11.632 87.359z"
            fill="#FFF4C2"
          />
        </G>
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={328} height={110} rx={8} fill="#fff" />
      </ClipPath>
      <ClipPath id="c">
        <Rect width={328} height={110} rx={8} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CloudCard;
