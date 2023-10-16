import { Text, View , TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import styles from './Singup.styles'
import { useSingUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignup, result] = useSingUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
      console.log (email, password, confirmPass)
      triggerSignup ({
        email,
        password,
      })
      console.log (result)
    }



  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sing Up to start</Text>
        <TextInput
          style={styles.inputEmail}
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
        value={password}
        onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
         onChangeText={setConfirmPass}
        />
        
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Sing Up</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable
          style={styles.loginButton}
        //   onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup

