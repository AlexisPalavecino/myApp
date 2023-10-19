import { Pressable, Text, View, Image } from 'react-native'
import styles from './Profile.styles'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'

const Profile = () => {
    const image = useSelector(state => state.auth.imageCamera)
   // const [image, setImage]= useState(null)
    const dispatch= useDispatch()

    const verifyCameraPermissions = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
    }

    const pickImage = async () => {
      const isCameraOk = await verifyCameraPermissions()

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.3,
      })
      if (!result.canceled) {
        //console.log(result.assets)
        //dispatch(
          setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        //)
      }
    }
    }

    const confirmImage =() => {
      dispatch(setCameraImage(image))

    }

  return (
    <View style={styles.container}>
    {image ? null : (
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqehCs5-Y0mpysjTzdiHJy6Ig6RmpL6Vokpw&usqp=CAU'}}
      style={styles.image}
      resizeMode='cover'/>
      )}

      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar foto de perfil</Text>
      </Pressable>
    </View>
     )
}

export default Profile

