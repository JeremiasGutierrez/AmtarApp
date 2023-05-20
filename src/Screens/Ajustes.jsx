import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Auth, { firebase } from "@react-native-firebase/auth";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Theme } from "../Theme";
import { useNavigation } from "@react-navigation/native";
export function ScreenAjustes() {
  const navigation = useNavigation();
  const cerrarSesion = async () => {
    try {
      await Auth().signOut();
      navigation.navigate("IniciarSesion");
    } catch (error) {
      alert(message.error);
    }
  };
  return (
    <View style={styles.fondo}>
      <TouchableOpacity style={styles.botonIniciar} onPress={cerrarSesion}>
        <Text style={styles.crearText}>Cerrar Sesion</Text>
        <AntDesign
          name="logout"
          size={50}
          color="black"
          style={styles.loguito}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonIniciar}
        onPress={() => {
          navigation.navigate("cambiarEmail");
        }}
      >
        <Text style={styles.crearText}>Cambiar email</Text>
        <MaterialCommunityIcons
          name="email-edit"
          size={50}
          color="black"
          style={styles.loguito}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  fondo: {
    backgroundColor: Theme.Dark,
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: 0,
  },

  loguito: {
    height: Dimensions.get("window").height / 5,
    alignSelf: "center",
    position: "absolute",
    left: Dimensions.get("window").width / 70,
  },
  loguito2: {
    height: Dimensions.get("window").height / 5,
    alignSelf: "center",
    position: "absolute",
    bottom: -Dimensions.get("window").height / 12,
    // left: Dimensions.get("window").width / 70,
  },
  botonIniciar: {
    height: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").width / 1.2,
    padding: 13,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: Theme.Dorado,
  },
  crearText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
