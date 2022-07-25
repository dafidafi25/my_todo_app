import SvgWrapper from '@components/atom/SvgWrapper';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import IconProp from './IconProp';

const PlusCircle: React.FC<IconProp> = ({ width = 24, height = 24, color }) => {
  return (
    <SvgWrapper aspectRatio={24 / 24} width={width} height={height}>
      <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
        <Path
          d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          fill={color}
        />
      </Svg>
    </SvgWrapper>
  );
};

export default PlusCircle;
