import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AntDesing from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.style'

const SearchInput = ({onSearch}) => {
const [value, setValue] = useState('')

const search = (() => {
    onSearch(value)
    }, [value])
const clearInput = () =>{
    setValue('')
    onSearch('')
}
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder='Search product' />
    <Pressable onPress={search}>
        <AntDesing name='search1' size={25} color={'black'}/>
    </Pressable>
    <Pressable onPress={clearInput}>
        <AntDesing name='closecircleo' size={25} color={'black'}/>
    </Pressable>
    </View>
  )
}

export default SearchInput
