import React from 'react';
import { View, Text } from 'react-native';

import Nav from '../components/Nav';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Nav />
    </View>
  );
}

export default HomeScreen;
