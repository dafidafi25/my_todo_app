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
import AddScreen from '@Screen/AddScreen';
import RootStackParamList from '@routers/router';
import { Provider } from 'react-redux';
import { store } from '@stores/Store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@Screen/Login';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <ScreenNavigation />
    </Provider>
  );
};

const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.primary, height: 72 },
        tabBarActiveTintColor: colors.white,
      }}
      backBehavior="history"
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
        component={AddScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.addIcon}>
              <PlusCircle color={colors.primary} width={80} />
            </View>
          ),
          tabBarStyle: {
            opacity: 0,
            backgroundColor: 'rgba(52, 52, 52, 0)',
            display: 'none',
          },
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
  );
};

const styles = StyleSheet.create({
  icon: { bottom: 8 },
  addIcon: { bottom: 55 },
});

export default App;
