import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrainingTimeInput from './TrainingTimeInput';

interface ITimeFormProps {}

const TimeForm: React.FC<ITimeFormProps> = () => {
  return (
    <View style={styles.container}>
      <TrainingTimeInput label="Mulai" />
      <TrainingTimeInput label="Selesai" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimeForm;
