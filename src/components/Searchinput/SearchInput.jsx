import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Antdising from '@expo/vector-icons/AntDesign'
import styles from './Searchinput.style'

const SearchInput = ({onSearch}) => {
const [value, setValue] = useState('')

const search = () => {
    onSearch(value)
    }
const clearInput = () =>{
    setValue('')
    onSearch('')
}
  return (
    <View style={stulles.container}>
      <TextInput style={styles.input} value={value} onChange={{setValue}} placeholder='Search product' />
    <Pressable onPress={search}>
        <Antdising name='search1' size={25} color={'black'}/>
    </Pressable>
    <Pressable onPress={clearInput}>
        <Antdising name='closecircleo' size={25} color={'black'}/>
    </Pressable>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({})