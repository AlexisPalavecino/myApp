import { Pressable, Text, View, Image } from 'react-native'
import styles from './Profile.styles'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { setCameraImage } from '../../features/auth/authSlice'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = ({navigation}) => {
    const image = useSelector(state => state.auth.imageCamera)
    const { localId } = useSelector(state => state.auth)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
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
        //dispatch(setCameraImage(image))
        dispatch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`))

          //setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        //)
      }
    }
    }

    const confirmImage =() => {
      triggerSaveProfileImage({ image, localId })
      console.log(result)
    }

  return (
    <View style={styles.container}>
    {image ? <Image source={{uri:image}}
      style={styles.image}
      resizeMode='cover'/> : (
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqehCs5-Y0mpysjTzdiHJy6Ig6RmpL6Vokpw&usqp=CAU'}}
      style={styles.image}
      resizeMode='cover'/>
      )}

      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <Text>Confirmar</Text>
      </Pressable>
       <Pressable
        style={{ ...styles.cameraButton, marginTop: 20 }}
        onPress={() => navigation.navigate('Location')}
      >
        <Text>Ir a mi ubiacion</Text>
      </Pressable>
    </View>
     )
}

export default Profile

