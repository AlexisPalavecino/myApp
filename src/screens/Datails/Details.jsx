import { Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'

const Details = ({route}) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({...product, quantity: 1}))
  }


  const {product} = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
       <Image
      style={styles.image}
      source={{uri: product.images[0]}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>Rent: {`$ ${product.price}`}</Text> 
      <Pressable style={styles.btnFav} onPress={handleAddToCart}>
        <Text style={styles.titleFav}>Add to Favorites</Text>
      </Pressable>
    </View>
  )
}

export default Details

