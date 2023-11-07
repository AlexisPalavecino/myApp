import React, {useState, useEffect} from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopApi'
import { setCameraImage } from '../features/auth/authSlice'
import { fetchSession } from '../db'

const MainNavigator = () => {
    //const [user, setUser]=useState(null)
    const {user, localId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data, error, isLoading} = useGetProfileImageQuery(localId)
    
    useEffect(() => {
        //('Main navigator data', data)
        console.log(data)
        if (data) {
          dispatch(setCameraImage(data.image))
        }
      }, [data])
    
      useEffect(() => {
        ;(async () => {
          try {
            const session = await fetchSession()
            console.log('Esta es la sesion', session)
            if (session.rows.length) {
              console.log(session.rows._array[0])
              const user = session.rows._array[0]
              dispatch(setUser(user))
            }
          } catch (error) {
            console.log('Error en obtener ususario', error.message)
          }
        })()
      }, [])


    return user ? <BottomTabNavigator /> : <AuthStackNavigator />

  
}

export default MainNavigator