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
import { StyleSheet, View } from 'react-native';
import Dashboard from '@Screen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePlain from '@assets/icons/HomePlain';
import PlusCircle from '@assets/icons/PlusCircle';
import Magnify from '@assets/icons/Magnify';
import colors from '@themes/Colors';
import SearchScreen from '@Screen/SearchScreen';

export type RootStackParamList = {
  Dashboard: undefined;
  AddScreen: undefined;
  SearchScreen: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: colors.primary, height: 72 },
          tabBarActiveTintColor: colors.white,
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.icon}>
                <HomePlain color={color} width={41} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AddScreen"
          component={Dashboard}
          options={{
            tabBarIcon: () => (
              <View style={styles.addIcon}>
                <PlusCircle color={colors.primary} width={80} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.icon}>
                <Magnify color={color} width={43} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: { bottom: 8 },
  addIcon: { bottom: 55 },
});

export default App;
