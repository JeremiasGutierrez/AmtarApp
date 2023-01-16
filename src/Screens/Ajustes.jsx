import { StyleSheet,Text, TouchableOpacity, } from "react-native";
import Constats from "expo-constants"
export function ScreenAjustes(){
    return(
        <TouchableOpacity style={styles.bodyText}>
            <Text style={{marginTop:Constats.statusBarHeight}}>
                    Ola chino 
            </Text>

        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    bodyText:{
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'column'
        
    }
})