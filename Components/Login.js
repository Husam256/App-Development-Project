import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';

export default function App() {
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  async function requestLogin() {
    const settings = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch(
        'http://10.0.2.2:3333/api/1.0.0/user/login',
        settings,
      );

      const {status} = response;

      if (status === 200) {
        const responseJson = await response.json();
        console.log('LOGIN SUCCESSFUL' + JSON.stringify(responseJson));
      }
      if (status === 400) {
        console.log('LOGIN UNSUCCESSFUL +  login details wrong');
        return 'invalid';
      }
    } catch (error) {
      console.log('LOGIN UNSUCCESSFUL');
    }
  }
  return (
    <View style={styles.container}>
      <Text>Enter Email:</Text>
      <TextInput
        placeholder="e.g. Husam64"
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />

      <Text>Enter Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />

      <Text style={styles.result}>
        email: {email}, password: {password}
      </Text>
      <Button onPress={() => requestLogin()}>Submit</Button>
    </View>
  );
}
//login button

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
