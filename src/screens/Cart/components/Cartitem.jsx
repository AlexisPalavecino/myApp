import { Pressable, Text, View } from 'react-native'
import React from 'react'
import Fontisto from'@expo/vector-icons/Fontisto'
import styles from './Cartitem.styles'

const Cartitem = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.name}>Nombre</Text>
        </View>
        <View>
            <View style={styles.details}>
                <Text>Cantidad</Text>
                <Text>precio</Text>
            </View>
            <Pressable>
                <Fontisto name="trash" size={24} color="red"/>
            </Pressable>

        </View>
    </View>
  )
}

export default Cartitem

