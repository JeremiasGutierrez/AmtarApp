import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import { ScreenCustom } from "../Componentes/ScreenCustom";
import { useNavigation } from "@react-navigation/native";

export function ScreenPrimeraVez() {
  const navigation = useNavigation();
  return (
    <ScreenCustom color="Dark">
      <Image
        source={require("../Imagenes/AmtarLogo.png")}
        style={estilo.imagen}
        resizeMode="contain"
      />

      <View style={estilo.contenedorBtn}>
        <Pressable
          style={estilo.container}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={estilo.texto}>Iniciar Sesion</Text>
        </Pressable>
      </View>
    </ScreenCustom>
  );
}
const estilo = StyleSheet.create({
  imagen: {
    height: Dimensions.get("window").height / 1.2,
    width: Dimensions.get("window").width / 1.2,
    position: "relative",
  },
  container: {
    backgroundColor: "#1E90FF",
    borderRadius: 30,
    padding: 15,
    margin: 10,
  },
  containerSesion: {
    backgroundColor: "gray",
    borderRadius: 30,
    padding: 15,
    margin: 10,
  },
  contenedorBtn: {
    width: Dimensions.get("window").width,
    position: "relative",
    top: -Dimensions.get("window").height / 6.5,
  },
  texto: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
