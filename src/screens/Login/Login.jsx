import { Text, View , TextInput, Pressable} from 'react-native'
import React from 'react'
import styles from './login.styles'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput
          style={styles.inputEmail}
        //   value={email}
        //   onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
        //   value={password}
        //   onChangeText={setPassword}
        />
        <Pressable style={styles.loginButton} /*onPress={onSubmit}*/>
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
        <Text>No have an account?</Text>
        <Pressable
          style={styles.loginButton}
        //   onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: 'white' }}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login

