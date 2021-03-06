import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';

export default function App() {
  const [first_name, setFirstname] = useState('First name');
  const [last_name, setLastname] = useState('Last name');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  return (
    <View style={styles.container}>
      <Text>Enter First Name</Text>
      <TextInput
        placeholder="e.g. Husam"
        style={styles.input}
        onChangeText={(value) => setFirstname(value)}
      />

      <Text>Enter Last Name</Text>
      <TextInput
        placeholder="e.g. Ahmad"
        style={styles.input}
        onChangeText={(value) => setLastname(value)}
      />

      <Text> Enter Email</Text>
      <TextInput
        placeholder="e.g. someone@something.com"
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />

      <Text>Create Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />

      <Text style={styles.result}>
        firstname: {first_name}, lastname: {last_name}, email: {email},
        password: {password}
      </Text>
    </View>
  );
}
// create account button

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
