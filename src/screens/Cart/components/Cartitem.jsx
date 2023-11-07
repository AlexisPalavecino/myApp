import { Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import Fontisto from'@expo/vector-icons/Fontisto'
import styles from './Cartitem.styles'

const Cartitem = ({item}) => {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.image}
            source={{uri: item.images[0]}}>
        
            </Image>
        </View>
        <View>
            <Text style={styles.name}>{item.title}</Text>
        </View>
        <View>
            <View style={styles.details}>
                <Text>{item.quantity}</Text>
                <Text>{item.price}</Text>
            </View>
            <Pressable>
                <Fontisto name="trash" size={24} color={'red'}/>
            </Pressable>

        </View>
    </View>
  )
}

export default Cartitem

