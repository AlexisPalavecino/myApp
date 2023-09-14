import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import categories from '../data/categories'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList data={categories}
      keyExtractor={category => category}
      renderItem={({item})=> <CategoryItem category={item}/>}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    }

})