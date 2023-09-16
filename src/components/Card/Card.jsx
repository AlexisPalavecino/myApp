import styles from './Card.style'
import React, { children } from 'react'
import { View } from 'react-native'


const Card = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default Card

