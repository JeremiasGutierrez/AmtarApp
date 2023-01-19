import { View, Text, Image, StyleSheet,Dimensions} from "react-native";

export function LogoText() {
  return (
    <View>
      <Image
        style={estilo.imagen}
        source={require("../Imagenes/AmtarNegro.png")}
        resizeMode="cover"
      />
      <Text style={estilo.texto}>I.N.A.M Nº 785</Text>
    </View>
  );
}
const estilo = StyleSheet.create({
  imagen: {
    height: Dimensions.get("window").height / 11,
    width: Dimensions.get("window").width / 5.4,
    position: "relative",
    alignSelf:'flex-start',
  },
  texto: {
    fontWeight: "bold",
    alignSelf:'flex-start',
    width:Dimensions.get('window').width/1,
    left:5,
  },
});
