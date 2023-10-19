import React, {useState, useEffect} from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopApi'
import { setCameraImage } from '../features/auth/authSlice'

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


    return user ? <BottomTabNavigator /> : <AuthStackNavigator />

  
}

export default MainNavigator