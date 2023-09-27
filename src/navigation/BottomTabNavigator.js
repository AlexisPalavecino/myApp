import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import StackNavigator from './StackNavigator'
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Fontisto from'@expo/vector-icons/Fontisto'

const BottomTab =createBottomTabNavigator()

function BottomTabNavigator(){
    return(
        <BottomTab.Navigator screenOptions={{
            headerShown: false, 
            tabBarShowLabel:false, 
            tabBarStyle: styles.tabBar,}}>
            <BottomTab.Screen name='Shop' component={StackNavigator} options={{
                tabBarIcon:({focused}) =>(
                    <Fontisto name="shopping-bag" size={24} color={focused ? colors.quaternary : '#fff'}/>
                ),
            }}/>
            <BottomTab.Screen name='CartNav' component={CartNavigator}  options={{
                tabBarIcon:({focused}) =>(
                    <Fontisto name="shopping-basket" size={24} color={focused ? colors.quaternary : '#fff'}/>
                ),
            }}/>
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator



const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.tertiary,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 5,
      },
      iconContainer: {
        backgroundColor: colors.secundary,
        borderRadius: 20,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
})