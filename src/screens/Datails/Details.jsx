import { Text, View, Image, Pressable, TextInput } from 'react-native'
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
      <TextInput
          style={styles.inputComents}
          
        />
      <Pressable style={styles.btnFav}>
          <Text style={styles.titleFav}>Submit</Text>
        </Pressable>
      <Pressable style={styles.btnFav} onPress={handleAddToCart}>
        <Text style={styles.titleFav}>Add to Favorites</Text>
      </Pressable>
    </View>
  )
}

export default Details


  {/* <Text style={styles.price}>Rent: {`$ ${product.price}`}</Text>  */}
