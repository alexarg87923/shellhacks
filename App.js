import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Nav from './components/Nav';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.navigatorContainer}>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Explore" component={Explore} />
              <Stack.Screen name="Messages" component={Messages} />
              <Stack.Screen name="Profile" component={Profile} />
              
          </Stack.Navigator>
        </View>
        <Nav />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigatorContainer: {
    flex: 1
  }
});
