import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    padding: 12,
  },
  button: {
    backgroundColor: '#303f9f',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 60
  },
  buttonText: {
    color: '#FFF',
  },
  section: {
    backgroundColor: '#e1bee7',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
  }
});

function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      Alert.alert('Success', 'Account created!');
      navigation.navigate('Login');
    }
  }

  return (
      <View style={styles.container}>
          <Text style={styles.header}>Sign Up</Text>
          
          <ScrollView 
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps='handled'
          >
              <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  onChangeText={text => setFirstName(text)}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  onChangeText={text => setLastName(text)}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => setPassword(text)}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={text => setConfirmPassword(text)}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="number-pad"
                  maxLength={10} // Assuming 10 digits without formatting, adjust if needed
                  onChangeText={text => setPhoneNumber(text)}
              />
              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
          </ScrollView>
      </View>
  );
}

export default SignUp;
