import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import styles from './Orders.styles'
import { useGetOrdersQuery } from '../../services/shopApi'
//import { isLoading } from 'expo-font'

const Orders = () => {
  const {data, isLoading} = useGetOrdersQuery()
  return (
    <View styles={styles.container}>
      {!isLoading && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item}</Text>}
          key={item => item}
        />
      )}
    </View>
  )
}

export default Orders

