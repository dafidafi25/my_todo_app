import SvgWrapper from '@components/atom/SvgWrapper';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import IconProp from './IconProp';

const CheckBoxOutline: React.FC<IconProp> = ({
  width = 24,
  height = 24,
  color,
}) => {
  return (
    <SvgWrapper aspectRatio={24 / 24} width={width} height={height}>
      <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
        <Path
          d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9"
          fill={color}
        />
      </Svg>
    </SvgWrapper>
  );
};

export default CheckBoxOutline;
