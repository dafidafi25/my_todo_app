import SvgWrapper from '@components/atom/SvgWrapper';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import IconProp from './IconProp';

const ArrowLeft: React.FC<IconProp> = ({ width = 24, height = 24, color }) => {
  return (
    <SvgWrapper aspectRatio={24 / 24} width={width} height={height}>
      <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
        <Path
          d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
          fill={color}
        />
      </Svg>
    </SvgWrapper>
  );
};

export default ArrowLeft;
