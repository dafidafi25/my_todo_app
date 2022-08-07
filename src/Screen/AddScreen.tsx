import Button from '@components/atom/Button';
import Spacer from '@components/atom/Spacer';
import NavigationHeader from '@components/molecule/NavigationHeader';
import TimeForm from '@components/molecule/TimeForm';
import TrainingDateInput from '@components/molecule/TrainingDateInput';
import TrainingOption, { IOption } from '@components/molecule/TrainingOption';
import TextAreaInput from '@components/molecule/TrainingTextAreaInput';
import TrainingTextInput from '@components/molecule/TrainingTextInput';
import colors from '@themes/Colors';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

interface IAddScreenProps {}

const AddScreen: React.FC<IAddScreenProps> = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
          />
          <NavigationHeader color={colors.white} title={'Create a Task'} />
          <Spacer spacing={25} />
          <TrainingTextInput label="Judul" />
          <Spacer spacing={40} />
          <TrainingDateInput label="Tanggal" />
        </View>
        <Spacer spacing={40} />
        <View style={styles.bottom}>
          <Spacer />
          <TimeForm />
          <Spacer />
          <TextAreaInput label="Deskripsi" />
          <Spacer spacing={20} />
          <TrainingOption label="Kategori" options={options} />
          <Spacer />
          <Button variant="primary" fullwidth text="Create Task" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  screen: { paddingHorizontal: 36 },
  bottom: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 36,
  },
});

export default AddScreen;

// dummy options

const options: IOption[] = [
  {
    text: 'Design',
    value: 1,
  },
  {
    text: 'Design',
    value: 2,
  },
  {
    text: 'Design',
    value: 3,
  },
  {
    text: 'Design',
    value: 4,
  },
  {
    text: 'Design',
    value: 5,
  },
  {
    text: 'Design',
    value: 6,
  },
];
