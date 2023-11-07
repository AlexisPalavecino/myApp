import { Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'
import Fontisto from'@expo/vector-icons/Fontisto'
import { colors } from "../../constants/colors"
import { useDispatch } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'
 

const Header = ({title}) => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(clearUser())
    deleteSession
  }

  return (
    <View style={ 
      { flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: colors.quaternary,
        height: 80,
        width: '100%',}
    }>
      <Text style={styles.text}>{title}</Text>
      <Fontisto name="power" size={24} onPress={logout}/>
    </View>
  )
}

export default Header

