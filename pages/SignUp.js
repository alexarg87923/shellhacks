import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

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
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height,
  },
});

function Signup() {
  const [selectedValue, setSelectedValue] = useState('STEM');
  
  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/background.mp4')}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        repeat
        style={styles.videoBackground}
      />

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
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="STEM" value="STEM" />
        <Picker.Item label="Communication" value="Communication" />
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

export default Signup;
