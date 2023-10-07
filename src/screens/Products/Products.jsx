import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import { Header, SearchInput} from '../../components'
import styles from './Products.style'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'



const Products = ({navigation, route}) => {
    const category = useSelector(state => state.shop.categorySelected)
    const  [keyword, setKeyword] = useState('')
    const {data, isLoading} = useGetProductsByCategoryQuery(category)
   

    useEffect(() => {
      if(data) {
        
        const productsFiltered = data.filter(product =>
                product.title.includes(keyword)
              )
            
      }
    
     
    }, [keyword])
    
  return (

    <SafeAreaView style={styles.container}>
      <Header title={category}/>
      <SearchInput onSearch={setKeyword}/>
      <View style={styles.listContainer}>
       {!isLoading && (
       <FlatList 
       data={Object.values(data)}
       numColumns={2}
       columnWrapperStyle={styles.weapperStyle}
       renderItem={({item})=>(
        <TouchableOpacity onPress={() => navigation.navigate('Details', {product: item})}> 
            <Image
                  style={styles.image}
                  source={{
                    uri: item.images[0],
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
        </TouchableOpacity>

      )}
       keyExtractor={item=> item.id}/> )}
    </View>
    </SafeAreaView>
   
  )
}

export default Products

