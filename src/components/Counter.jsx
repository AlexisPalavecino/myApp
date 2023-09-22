import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const Counter = () => {
  const counter = 0
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable style={styles.counterButtons}>
          <Text style={styles.signs}>-</Text>
        </Pressable>
        <Text style={styles.signs}>{counter}</Text>
        <Pressable style={styles.counterButtons}>
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputContaienr}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="cantidad a sumar"
        />
        <Pressable>
          <Text>add</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-between',
    height: 50,
  },
  counterButtons: {
    backgroundColor: 'blue',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signs: {
    fontSize: 35,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 30,
  },
  inputContaienr: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
  },
})