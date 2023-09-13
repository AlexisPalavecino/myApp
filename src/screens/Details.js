import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({product}) => {
  return (
    <>
      <Headers title ={product}/>
    
        <Text>Details</Text>
   
    </>  )
}

export default Details

const styles = StyleSheet.create({})