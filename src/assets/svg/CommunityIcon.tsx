import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const CommunityIcon = ({color = '#C4C4C4', size = 30}) => (
  <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    <G clipPath="url(#a)">
      <Path
        d="M25.083 14.084H23.25v-1.833a.917.917 0 0 0-1.834 0v1.833h-1.833a.917.917 0 0 0 0 1.833h1.834v1.834a.917.917 0 1 0 1.833 0v-1.834h1.833a.917.917 0 0 0 0-1.833M12.25 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-9.167a3.667 3.667 0 1 1 0 7.334 3.667 3.667 0 0 1 0-7.334m0 11.001A8.26 8.26 0 0 0 4 25.084a.917.917 0 0 0 1.833 0 6.417 6.417 0 0 1 12.834 0 .916.916 0 1 0 1.833 0 8.26 8.26 0 0 0-8.25-8.25"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M4 4h22v22H4z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CommunityIcon;
