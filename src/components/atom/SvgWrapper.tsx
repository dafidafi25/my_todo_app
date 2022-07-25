import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ISvgWrapperProps {
  width?: string | number;
  height?: string | number;
  aspectRatio: number;
  children: JSX.Element;
}

const SvgWrapper: React.FC<ISvgWrapperProps> = ({
  width,
  height,
  aspectRatio,
  children,
}) => {
  const styles = StyleSheet.create({
    container: { width: width, height: height },
    icon: { aspectRatio: aspectRatio },
  });

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{children}</View>
    </View>
  );
};

export default SvgWrapper;
