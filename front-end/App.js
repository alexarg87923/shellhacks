import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Nav from './components/Nav';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={({ route }) => ({
              header: route.name !== 'Login' && route.name !== 'SignUp' ? () => <Nav title="Home" /> : undefined
            })}
          />
          <Stack.Screen 
            name="Profile" 
            component={Profile}
            options={({ route }) => ({
              header: route.name !== 'Login' && route.name !== 'SignUp' ? () => <Nav title="Profile" /> : undefined
            })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
