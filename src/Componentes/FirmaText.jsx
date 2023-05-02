import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

export function FirmaText(props) {


  return (
    <View>
      <Text style={ [estilo.texto,props.isPortrait ? " " : {fontSize:10,left:Dimensions.get("window").width / 6.5}]}>Presidente AMTAR</Text>

      <Image
        source={require("../Imagenes/Firma.png")}
        resizeMode="contain"
        style={estilo.imagen}
      />
    </View>
  );
}
const estilo = StyleSheet.create({
  texto: {
    top: Dimensions.get("window").height / 20,
    left: Dimensions.get("window").width / 5,
    position: "absolute",
  },
  imagen: {
    height: Dimensions.get("window").height / 17,
    left: Dimensions.get("window").height / 17.8,
    bottom: Dimensions.get("window").height / 100,
    position: "relative",
  },
});
