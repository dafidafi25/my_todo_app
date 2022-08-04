import React from 'react';
import { View, StyleSheet } from 'react-native';

import NavigationHeader from '@components/molecule/NavigationHeader';
import Spacer from '@components/atom/Spacer';
import SearchBar from '@components/molecule/SearchBar';

import StatusCards from '@components/organism/StatusCards';

interface ISearchScreenProps {}

const SearchScreen: React.FC<ISearchScreenProps> = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader title="Task List" />
      <Spacer />
      <SearchBar />
      <Spacer />

      <StatusCards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 15 },
});

export default SearchScreen;
