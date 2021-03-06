import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';

export default function App() {
  const [first_name, setFirstname] = useState('First name');
  const [last_name, setLastname] = useState('Last name');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  async function requestAdduser() {
    const settings = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
      }),
    };
    try {
      const response = await fetch(
        'http://10.0.2.2:3333/api/1.0.0/user',
        settings,
      );

      const {status} = response;

      if (status === 201) {
        const responseJson = await response.json();
        console.log('ACCOUNT CREATED' + JSON.stringify(responseJson));
      }
      if (status === 400) {
        console.log('CREATION UNSUCCESSFUL +   details wrong');
        return 'invalid';
      }
    } catch (error) {
      console.log('CREATION UNSUCCESSFUL');
    }
  }

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
      <Button onPress={() => requestAdduser()}>Create Account</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEB887',
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
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
});
