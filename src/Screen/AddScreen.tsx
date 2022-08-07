import Spacer from '@components/atom/Spacer';
import NavigationHeader from '@components/molecule/NavigationHeader';
import TimeForm from '@components/molecule/TimeForm';
import TrainingTextInput from '@components/molecule/TrainingTextInput';
import TrainingTimeInput from '@components/molecule/TrainingTimeInput';
import colors from '@themes/Colors';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

interface IAddScreenProps {}

const AddScreen: React.FC<IAddScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <NavigationHeader color={colors.white} title={'Create a Task'} />
        <Spacer />
        <TrainingTextInput label="Judul" />
        <Spacer />
        <TrainingTextInput label="Alamat" />
      </View>
      <View style={styles.bottom}>
        <Spacer />
        <TimeForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  screen: { flex: 1, paddingHorizontal: 36 },
  bottom: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 36,
  },
});

export default AddScreen;
