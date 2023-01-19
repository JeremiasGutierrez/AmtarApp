import { View, StyleSheet,Dimensions,PixelRatio} from "react-native";

export function Sellos() {
    return(
  <View style={{flex:1,flexDirection:'row', justifyContent:"space-evenly",left:Dimensions.get("window").width/20}}>
    <View style={[estilo.sello]}/>
    <View style={[estilo.sello,{left:Dimensions.get("window").width/20}]}/>
    <View style={[estilo.sello,{left:Dimensions.get("window").width/10}]}/>
  </View>
 
  )
}

const estilo = StyleSheet.create({
  sello: {
    height: Dimensions.get("window").height / 19,
    width: Dimensions.get("window").width / 10.5,
    top: Dimensions.get("window").height / 50,
    borderRadius: 100 / PixelRatio.get(),
    borderColor: "white",
    borderWidth: 2,
  },
  
});
