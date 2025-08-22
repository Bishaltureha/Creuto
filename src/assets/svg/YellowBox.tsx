import * as React from 'react';
import Svg, {G, Rect, Path, Defs, ClipPath} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = ({...props}) => (
  <Svg
    width={368}
    height={150}
    viewBox="0 0 368 150"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <G clipPath="url(#b)">
        <Rect x={0} y={0} width={328} height={110} rx={8} fill="#FFE77E" />
        <Path
          d="M55.195 199.91s-41.659-44.342-13.317-95.991c21.864-39.846 74.757-32.746 101.896-15.892 11.559 7.18 36.395-5.986 67.891-45.96C248.229-4.34 389.791 23.975 365.344 112.64c-11.831 42.908 36.007 44.468 11.632 87.359z"
          fill="#FFF4C2"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="b">
        <Rect x={20} y={8} width={328} height={110} rx={8} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
