import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ITrainingDateInputProps {}

const TrainingDateInput: React.FC<ITrainingDateInputProps> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default TrainingDateInput;
