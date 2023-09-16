import { FlatList, View } from 'react-native'
import React from 'react'
import categories from '../../data/categories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'

const Home = () => {
  return (
  
    <View style={styles.container}>
    <Header title={'Home'}/>
      <FlatList data={categories}
      keyExtractor={category => category}
      renderItem={({item})=> <CategoryItem category={item}/>}
      />
    </View>
    
    
    
  )
}

export default Home




