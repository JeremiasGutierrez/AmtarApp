import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Constants from "expo-constants";
import { Theme } from "../Theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export function ScreenInicio() {
  return (
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      <TouchableOpacity style={estilo.container}>
        <Text style={estilo.AmtarTitulo}>A.M.T.A.R.</Text>
        <Text style={{fontWeight:'bold',right:-250,top:20}}>
          R.N.E.M.P 311234
        </Text>
        <Image
          style={estilo.imagen}
          source={require("../Imagenes/AmtarNegro.png")}
          resizeMode="contain"
        />
        <Text style={estilo.texto}>E.N.A.M Nº785</Text>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: Theme.Blanco,
            marginVertical: 10,
            
          }}
        ></View>
        <Text style={estilo.NombreRespuesta}>Gutierrez Roldan Jeremias</Text>
        <Text style={estilo.Nombre}>Nombre</Text>
        <Text style={estilo.NacRespuesta}>14/2/2003</Text>
        <Text style={estilo.textoNac}>Fecha Nac</Text>
        <Text style={estilo.textoCiudadRespuesta}>Mar del Plata</Text>
        <Text style={estilo.textoCiudad}>Ciudad</Text>
        <Text>AF Nº</Text>
      </TouchableOpacity>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 3.4,
    width: Dimensions.get("window").width / 1.22,
    backgroundColor: Theme.TarjetaAzul,
    borderRadius: 10,
    alignSelf: "center",
    top: 150,
  },
  AmtarTitulo: {
    right: 10,
    fontSize: 50,
    zIndex: 2,
    position: "absolute",
  },
  imagen: {
    height: Dimensions.get("window").height / 12,
    width: Dimensions.get("window").width / 5,
    top: -12,
    position: "relative",
  },
  texto: {
    top: 2,
    right: -5,
    fontWeight:'bold'

  },
  textoCiudadRespuesta: {
    left: 200,
    bottom: 57,
    fontWeight: "bold",
  },
  textoCiudad: {
    left: 200,
    bottom: 57,
  },
  textoNac: {},
  Nombre: {},
  NombreRespuesta: {
    fontWeight: "bold",
  },
  NacRespuesta: {
    fontWeight: "bold",
  },
});
