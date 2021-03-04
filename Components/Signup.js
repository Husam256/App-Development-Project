import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('Email');
  const [username, setUsername] = useState('Username');
  const [password, setPassword] = useState('Password');

  return (
    <View style={styles.container}>
      <Text> Enter Email</Text>
      <TextInput
        placeholder="e.g. someone@something.com"
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />

      <Text>Create Username:</Text>
      <TextInput
        placeholder="e.g. Husam64"
        style={styles.input}
        onChangeText={(value) => setUsername(value)}
      />

      <Text>Create Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />

      <Text style={styles.result}>
        email: {email}, username: {username}, password: {password}
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
