import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    color: '#6a1b9a',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#673ab7',
    borderRadius: 5,
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#e1bee7',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#673ab7',
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: '#e1bee7',
  },
  button: {
    backgroundColor: '#303f9f',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
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

function SignUp() {
  const [selectedValue, setSelectedValue] = useState('STEM');
  
  const data = ['STEM', 'Communication', 'Art'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        {data.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Specific Skills"
      />

      <TextInput
        style={styles.input}
        placeholder="About Me"
        multiline
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;
