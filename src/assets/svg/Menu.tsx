import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const Menu = ({...props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill="#fff">
      <Path d="M1 6h22a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2m22 3H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2m0 10H1a1 1 0 1 0 0 2h22a1 1 0 0 0 0-2m0-5H1a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Menu;
