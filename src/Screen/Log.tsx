import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatusCards from '@components/organism/StatusCards';
import SearchBar from '@components/molecule/SearchBar';
import Spacer from '@components/atom/Spacer';
import NavigationHeader from '@components/molecule/NavigationHeader';

interface ILogProps {}

const Log: React.FC<ILogProps> = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader title="Task List" color="green" />
      <Spacer />
      <SearchBar />
      <Spacer />
      <StatusCards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 20 },
});

export default Log;
