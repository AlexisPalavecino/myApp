import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={() => console.log('esta es la categoria  ${category}')} >
        <Card style={styles.Cardcontainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    Cardcontainer:{
        marginHorizontal:30,
        marginVertical:10,
        padding:10,
        justifyContent:'center',
        alignItems:'center',

    },
})