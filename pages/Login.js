import React from 'react';
import { View, Text } from 'react-native';

import Nav from '../components/Nav';

function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Nav />
    </View>
  );
}

export default Login;
