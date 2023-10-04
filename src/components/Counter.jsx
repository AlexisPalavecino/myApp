import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/CounterSlice'
import { colors } from "../../src/constants/colors"

const Counter = () => {
  const [inputToAdd, setInputToAdd] = useState(0)
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  //const counter = 5
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable style={styles.counterButtons} onPress={() => dispatch(decrement())}>
          <Text style={styles.signs}>-</Text>
        </Pressable>
        <Text style={styles.signs2}>{counter}</Text>
        <Pressable style={styles.counterButtons} onPress={() => dispatch(increment())}>
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputContaienr}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="cantidad a sumar"
          value={inputToAdd}
          onChangeText={value => setInputToAdd(Number(value))}
        />
        <Pressable onPress={() => dispatch(incrementByAmount(inputToAdd))}>
          <Text style={styles.signs}>ADD</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  counterContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    height: 50,
    
  },
  counterButtons: {
    backgroundColor: colors.secundary,
    textDecorationStyle:'solid',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signs: {
    fontSize: 30,
    color:'white',
  },
  signs2: {
    fontSize: 35,
    color:'black',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 30,
    padding: 5,
    margin:10,
    
  },
  inputContaienr: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
  },
})