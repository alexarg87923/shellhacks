import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';  // Import the SignUp component

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />  // Add SignUp as a new Stack.Screen
      </Stack.Navigator>
    </NavigationContainer>
  );
}
