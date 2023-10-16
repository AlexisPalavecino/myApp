import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Singup, Login} from '../screens'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {

        return(
           
                <AuthStack.Navigator initialRouteName="Singup">
                    <AuthStack.Screen name='Singup' component={Singup} />
                    <AuthStack.Screen name='Login' component={Login} />
                    
                </AuthStack.Navigator>
            
        )
}

export default AuthStackNavigator