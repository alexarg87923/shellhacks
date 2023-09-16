import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Nav from './components/Nav';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function ScreenWithNav({ Component }) {
  const isFocused = useIsFocused();
  
  return (
    <View style={styles.container}>
      <View style={styles.navigatorContainer}>
        <Component />
      </View>
      { isFocused && <Nav /> }
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home">
            {() => <ScreenWithNav Component={Home} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Explore">
            {() => <ScreenWithNav Component={Explore} />}
          </Stack.Screen>
          <Stack.Screen name="Messages">
            {() => <ScreenWithNav Component={Messages} />}
          </Stack.Screen>
          <Stack.Screen name="Profile">
            {() => <ScreenWithNav Component={Profile} />}
          </Stack.Screen>
      </Stack.Navigator>
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
