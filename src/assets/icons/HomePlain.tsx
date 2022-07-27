import SvgWrapper from '@components/atom/SvgWrapper';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import IconProp from './IconProp';

const HomePlain: React.FC<IconProp> = ({ width = 24, height = 24, color }) => {
  return (
    <SvgWrapper aspectRatio={24 / 24} width={width} height={height}>
      <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
        <Path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" fill={color} />
      </Svg>
    </SvgWrapper>
  );
};

export default HomePlain;
