import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const NotificationBell = ({...props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m20.796 13.385-1.584-5.697a7.768 7.768 0 0 0-15.065.395L2.92 13.596a4.166 4.166 0 0 0 4.067 5.07h.929a4.167 4.167 0 0 0 8.166 0h.699a4.166 4.166 0 0 0 4.015-5.281M12 20.333a2.5 2.5 0 0 1-2.347-1.666h4.694A2.5 2.5 0 0 1 12 20.333m6.772-4.32A2.48 2.48 0 0 1 16.78 17H6.988a2.5 2.5 0 0 1-2.44-3.043l1.225-5.513a6.1 6.1 0 0 1 11.834-.31l1.583 5.697a2.48 2.48 0 0 1-.418 2.182"
        fill="#F7FBFF"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M2 2h20v20H2z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NotificationBell;
