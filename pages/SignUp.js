import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
});

function Signup() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skillCategory, setSkillCategory] = useState('STEM');
  const [specificSkill, setSpecificSkill] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const nextStep = () => {
    if (step === 1 && username && name && email && password) {
      setStep(2);
    } else if (step === 2 && skillCategory && specificSkill) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {step === 1 ? 'Basic Info' : step === 2 ? 'Interests and Strengths' : 'About You'}
      </Text>
      <View style={styles.section}>
        {step === 1 && (
          <>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
            <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
          </>
        )}
        {step === 2 && (
          <>
            <Picker selectedValue={skillCategory} onValueChange={(itemValue) => setSkillCategory(itemValue)} style={styles.picker}>
              <Picker.Item label="STEM" value="STEM" />
              <Picker.Item label="Communications" value="Communications" />
            </Picker>
            <TextInput placeholder="Specific Skill" value={specificSkill} onChangeText={setSpecificSkill} style={styles.input} />
          </>
        )}
        {step === 3 && (
          <>
            <TextInput
              placeholder="Describe Yourself"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              style={styles.input}
            />
            <TouchableOpacity>
              <Text>Upload Profile Picture (Optional)</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {step > 1 && (
          <TouchableOpacity onPress={prevStep} style={[styles.button, { marginRight: 8 }]}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={nextStep} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
