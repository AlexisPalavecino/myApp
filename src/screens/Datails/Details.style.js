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
    fontSize: 25,
    marginVertical:15,
    fontFamily:'Mooli'
  },
  titleFav: {
    fontSize: 15,
    marginVertical:10,
    fontFamily:'Mooli'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  btnFav:{
    backgroundColor: colors.secundary,
        marginVertical: 10,
        height: 50,
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        width: '50%',
        flex: 1,
          
  },
  inputComents:{
    backgroundColor: colors.quaternary,
    borderRadius: 20,
    height: 110,
    width: '100%',

  }



})