import { FlatList, View } from 'react-native'
import React from 'react'
import categories from '../../data/categories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'


const Home = ({ navigation}) => {
  return (
    
    <View style={styles.container}>
     
    <Header title={'Categories'}/>
      <FlatList 
      data={categories}
      keyExtractor={category => category.title}
      renderItem={({item})=>(
       <CategoryItem 
          category={item}
          navigation={navigation} 
          // setCategorySelected={setCategorySelected}
        />
        )}
      />
    </View>
    
    
    
  )
}

export default Home




