import Button from '@components/atom/Button';
import Spacer from '@components/atom/Spacer';
import NavigationHeader from '@components/molecule/NavigationHeader';
import TimeForm from '@components/molecule/TimeForm';
import TrainingDateInput from '@components/molecule/TrainingDateInput';
import TrainingOption, { IOption } from '@components/molecule/TrainingOption';
import TextAreaInput from '@components/molecule/TrainingTextAreaInput';
import TrainingTextInput from '@components/molecule/TrainingTextInput';
import { useAppDispatch } from '@hooks/Redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nanoid } from '@reduxjs/toolkit';
import RootStackParamList from '@routers/router';
import { addTodo } from '@stores/features/TodoSlice';
import colors from '@themes/Colors';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

interface TodoForm {
  judul: string;
  createdAt: Date;
  timeStart?: number;
  timeEnd?: number;
  deskripsi?: string;
  kategori: number | string;
}

interface IAddScreenProps {}

const AddScreen: React.FC<IAddScreenProps> = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { control, handleSubmit, setValue } = useForm<TodoForm>({
    defaultValues: {
      judul: '',
      createdAt: new Date(),
      kategori: 1,
    },
  });
  const onSubmit = handleSubmit((data: TodoForm) => {
    dispatch(
      addTodo({
        ...data,
        createdAt: data.createdAt.toLocaleDateString('en-GB'),
        id: nanoid(),
      }),
    );
    navigation.goBack();
  });

  const handleStartTime = (newDate: number) => {
    setValue('timeStart', newDate);
  };
  const handleEndTime = (newDate: number) => {
    setValue('timeEnd', newDate);
  };

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
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TrainingTextInput
                label="Judul"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="judul"
          />

          <Spacer spacing={40} />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TrainingDateInput
                label="Tanggal"
                onChangeDate={onChange}
                value={value}
              />
            )}
            name="createdAt"
          />
        </View>
        <Spacer spacing={40} />
        <View style={styles.bottom}>
          <Spacer />
          <TimeForm
            onChangeStart={handleStartTime}
            onChangeEnd={handleEndTime}
          />
          <Spacer />

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextAreaInput
                label="Deskripsi"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="deskripsi"
          />

          <Spacer spacing={20} />
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TrainingOption
                label="Kategori"
                options={options}
                onChange={onChange}
                selected={value}
              />
            )}
            name="kategori"
          />

          <Spacer />
          <Button
            variant="primary"
            fullwidth
            text="Create Task"
            onPress={onSubmit}
          />
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
    text: 'Kerja',
    value: 2,
  },
  {
    text: 'Rapat',
    value: 3,
  },
  {
    text: 'Bermain',
    value: 4,
  },
  {
    text: 'Makan',
    value: 5,
  },
  {
    text: 'Belajar',
    value: 6,
  },
];
