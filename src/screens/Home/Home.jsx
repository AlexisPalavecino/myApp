import { FlatList, View, SafeAreaView} from 'react-native'
import React from 'react'

import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'
import { StatusBar } from 'expo-status-bar'
import { useGetCategoriesQuery } from '../../services/shopApi'


const Home = ({ navigation}) => {
  const {data, isLoading} = useGetCategoriesQuery()
  console.log({data})
  return (
    <SafeAreaView style={styles.container}>
    
    <StatusBar animated={true} barStyle={'dark-content'} />
    <Header title={'Categories'}/>
    <View style={styles.listContainer}>
      
      {!isLoading && (
        <FlatList 
        data={data}
        keyExtractor={category => category.title}
        renderItem={({item})=>(
        <CategoryItem 
            category={item.title}
            navigation={navigation} 
            
          />
          )}
      />)}
    </View>
    </SafeAreaView>
    
    
    
  )
}

export default Home




