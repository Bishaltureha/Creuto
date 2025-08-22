import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const PricesIcon = ({color = '#C4C4C4', size = 22}) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <G clipPath="url(#a)">
      <Path
        d="M21.083 20.167h-16.5a2.75 2.75 0 0 1-2.75-2.75V.917A.917.917 0 1 0 0 .917v16.5A4.59 4.59 0 0 0 4.583 22h16.5a.917.917 0 0 0 0-1.833"
        fill={color}
      />
      <Path
        d="M5.5 18.333a.917.917 0 0 0 .917-.916V11a.917.917 0 0 0-1.834 0v6.417a.917.917 0 0 0 .917.916m3.667-9.166v8.25a.916.916 0 0 0 1.833 0v-8.25a.917.917 0 0 0-1.833 0m4.583 2.75v5.5a.917.917 0 0 0 1.833 0v-5.5a.917.917 0 1 0-1.833 0m4.584-3.667v9.167a.917.917 0 0 0 1.833 0V8.25a.917.917 0 1 0-1.834 0M5.5 8.25a.92.92 0 0 0 .648-.269l3.287-3.287a.94.94 0 0 1 1.296 0l1.991 1.991a2.75 2.75 0 0 0 3.889 0l5.12-5.12A.917.917 0 0 0 20.435.269l-5.12 5.12a.917.917 0 0 1-1.297 0l-1.99-1.991a2.75 2.75 0 0 0-3.89 0L4.853 6.685A.917.917 0 0 0 5.5 8.25"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PricesIcon;
