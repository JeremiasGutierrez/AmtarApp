import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { usersData } from "../Funciones/apiRequest";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../Theme";

export function LoginScreen() {
  const [dni, setDni] = useState("");
  const { data, loading } = usersData(dni);
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      <Image
        source={require("../Imagenes/Logo.png")}
        style={estilo.logo}
        resizeMode="cover"
      />

      <View style={estilo.view}>
        <TextInput
          value={dni}
          onChangeText={setDni}
          placeholder="Ingresa tu DNI"
          placeholderTextColor={"white"}
          style={[estilo.ingresar, estilo.color]}
        />
        <Button
          title="Buscar"
          color={"#BCB36E"}
          onPress={() => {
            navigation.navigate("BottomTab", { otherParam: data });
          }}
          disabled={loading}
        />
      </View>
      <Image
        source={require("../Imagenes/AmtarLogo.png")}
        style={estilo.imagen}
        resizeMode="contain"
      />
    </View>
  );
}
const estilo = StyleSheet.create({
  view: {
    alignSelf: "center",
    backgroundColor: "#2F2D2E",
    width: "60%",
    borderRadius: 10,
    padding: 15,
    alignSelf: "center",
    bottom: Dimensions.get("window").height / 46.9,
  },
  ingresar: {
    fontWeight: "bold",
  },
  color: { color: "white" },
  imagen: {
    height: Dimensions.get("window").height / 2.2,
    width: Dimensions.get("window").width / 1.4,
    alignSelf: "center",
    position: "relative",
  },
  logo: {
    alignSelf: "center",
    height: Dimensions.get("window").height / 6,
    width: Dimensions.get("window").width / 6,
    bottom: -Dimensions.get("window").height / 69.9,
  },
});
