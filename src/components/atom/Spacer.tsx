import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ISpacerProps {
  spacing?: number;
}

const Spacer: React.FC<ISpacerProps> = ({ spacing = 20 }) => {
  const styles = StyleSheet.create({
    container: { marginBottom: spacing },
  });

  return <View style={styles.container} />;
};

export default Spacer;
