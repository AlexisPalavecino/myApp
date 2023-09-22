import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import { Header, SearchInput} from '../../components'
import styles from './Products.style'


const Products = ({category, setProductSelected}) => {
    const  [arrProducts, setArrProducts] = useState([])
    const  [keyword, setKeyword] = useState('')

    useEffect(() => {
      if(category) {
        const products = allProducts.filter(
            product => product.category === category)
        const productsFiltered = products.filter(product =>
                product.title.includes(keyword)
              )
              setArrProducts(productsFiltered)
        } else {
        const productsFiltered = allProducts.filter(product =>
                product.title.includes(keyword)
        )
        setArrProducts(productsFiltered)

      }
    
     
    }, [category, keyword])
    
  return (
    <View style={styles.container}>
      <Header title={category}/>
      <SearchInput onSearch={setKeyword}/>
      <View>
       <FlatList 
       data={arrProducts}
       renderItem={({item})=>(
        <TouchableOpacity onPress={() => setProductSelected(item)}> 
            <Text>{item.title}</Text>
        </TouchableOpacity>

       )}
       keyExtractor={item=> item.id}/> 
    </View>
    </View>
   
  )
}

export default Products

