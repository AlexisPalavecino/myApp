import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
//   imageContainer: {
//     height: '50%',
//     width: '100%',
//   },
  image: {
    height: '50%',
    width:'90%'
  },
  title: {
    fontSize: 20,
    marginVertical:15,
    fontFamily:'Mooli'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
  },
})