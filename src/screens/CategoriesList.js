import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesList = ({category}) => {
  return (
    <>
    <Headers title ={category}/>
    <View style={styles.container}>
        <Text>Categorias</Text>
    </View>
    </>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    }
})