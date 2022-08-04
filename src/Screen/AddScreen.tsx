import Spacer from '@components/atom/Spacer';
import NavigationHeader from '@components/molecule/NavigationHeader';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IAddScreenProps {}

const AddScreen: React.FC<IAddScreenProps> = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader color={colors.white} title={'Create a Task'} />
      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
  },
});

export default AddScreen;
