import SvgWrapper from '@components/atom/SvgWrapper';
import React from 'react';
import { Circle, Svg } from 'react-native-svg';
import IconProp from './IconProp';

const CircleStatus: React.FC<IconProp> = ({
  width = 24,
  height = 24,
  color,
}) => {
  return (
    <SvgWrapper aspectRatio={24 / 24} width={width} height={height}>
      <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
        <Circle cx={12} cy={12} r={12} fill={color} />
      </Svg>
    </SvgWrapper>
  );
};

export default CircleStatus;
