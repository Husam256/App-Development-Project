import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
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
});
