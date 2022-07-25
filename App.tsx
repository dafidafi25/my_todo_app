/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Dashboard from '@Screen/Dashboard';
import { Text } from 'react-native-svg';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Dashboard />
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
});

export default App;
