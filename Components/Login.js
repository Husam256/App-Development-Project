import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('Username');
  const [password, setPassword] = useState('Password');

  return (
    <View style={styles.container}>
      <Text>Enter Username:</Text>
      <TextInput
        placeholder="e.g. Husam64"
        style={styles.input}
        onChangeText={(value) => setUsername(value)}
      />

      <Text>Enter Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />

      <Text style={styles.result}>
        username: {username}, password: {password}
      </Text>
    </View>
  );
}

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
