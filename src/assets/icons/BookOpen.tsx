import SvgWrapper from '@components/atom/SvgWrapper';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import IconProp from './IconProp';

const BookOpen: React.FC<IconProp> = ({ width = 24, height = 24, color }) => {
  return (
    <SvgWrapper aspectRatio={24 / 24} width={width} height={height}>
      <Svg width="100%" height="100%" fill="none" viewBox="0 0 24 24">
        <Path
          d="M13,12H20V13.5H13M13,9.5H20V11H13M13,14.5H20V16H13M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M21,19H12V6H21"
          fill={color}
        />
      </Svg>
    </SvgWrapper>
  );
};

export default BookOpen;
