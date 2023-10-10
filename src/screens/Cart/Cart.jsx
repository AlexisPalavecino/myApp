import { FlatList, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './Cart.styles'
import CartItem from './components/Cartitem'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector( state=> state.cart.items)
  const total = useSelector( state => state.cart.total)

  const renderItem =({item}) =>   <CartItem item={item}/>


  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={cart} 
          keyExtractor={item => item.id} 
          renderItem={renderItem}/>
      </View>
      <View>
        <Pressable>
          <Text>
              Confirm
          </Text>
          <View>
            <Text>{`Total $${total}`}</Text>
          </View>
        </Pressable>
      </View>
      
    </View>
  )
}

export default Cart

