/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import text from '@styles/text';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={text.header}>Selamat Datang !</Text>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

export default App;
