import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Nav from '../components/Nav';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#7B8B9A"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#7B8B9A"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7B8B9A"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#7B8B9A"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    color: '#6A60F2',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: '#E1E3EA',
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 8,
    color: '#333',
  },
  signUpButton: {
    width: 300,
    height: 45,
    backgroundColor: '#4B6EE8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SignUp;
