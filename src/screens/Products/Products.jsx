import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'


const Products = ({category}) => {
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
    <View>
      <Text>Products</Text>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})