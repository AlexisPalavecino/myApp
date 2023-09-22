import { FlatList, View } from 'react-native'
import React from 'react'
import categories from '../../data/categories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'
import Counter from '../../components/Counter'

const Home = ({setCategorySelected}) => {
  return (
    
    <View style={styles.container}>
     
    <Header title={'Home'}/>
      <FlatList 
      data={categories}
      keyExtractor={category => category}
      renderItem={({item})=>(
       <CategoryItem 
          category={item} 
          setCategorySelected={setCategorySelected}
        />
        )}
      />
    </View>
    
    
    
  )
}

export default Home




