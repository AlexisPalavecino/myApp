import { FlatList, View } from 'react-native'
import React from 'react'
import categories from '../../data/categories'
import { CategoryItem } from './components'
import { Header } from '../../components'
import styles from './Home.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Counter from '../../components/Counter'


const Home = ({ navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Counter/>
    <StatusBar animated={true} barStyle={'dark-content'} />
    <Header title={'Categories'}/>
    <View style={styles.listContainer}>
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
    </SafeAreaView>
    
    
    
  )
}

export default Home




