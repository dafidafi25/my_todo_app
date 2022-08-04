import HeaderNavigation from '@components/molecule/HeaderNavigation';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatusCards from '@components/organism/StatusCards';
import SearchBar from '@components/molecule/SearchBar';
import Spacer from '@components/atom/Spacer';

interface ILogProps {}

const Log: React.FC<ILogProps> = () => {
  return (
    <View style={styles.container}>
      <HeaderNavigation title="Task List" />
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
