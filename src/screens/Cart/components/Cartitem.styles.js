import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 8,
        borderBottomColor:colors.primary,
        borderBottomWidth: 1,
    },
    name:{
        fontSize:18
    },
    details:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between'
    },
    image: {
        width: 50,
        height: 50,
      },

})