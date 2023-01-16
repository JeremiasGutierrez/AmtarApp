import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../Theme";

export const estilo = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 1.1,
    backgroundColor: Theme.TarjetaAzul,
    borderRadius: 10,
    alignSelf: "center",
    top: 150,
  },
  containerHeader: {
    height: Dimensions.get("window").height / 49.99,
    width: Dimensions.get("window").width / 1.2,
    top: 70,
    flex: 2,
    flexDirection: "row",
    position: "absolute",
    zIndex: 2,
  },
  amtarTitulo: {
    right: 0,
    fontSize: 58,
    zIndex: 2,
    position: "absolute",
  },
  imagen: {
    height: Dimensions.get("window").height / 12,
    width: Dimensions.get("window").width / 5.4,
    top: 3,
    position: "relative",
  },
  texto: {
    top: 2,
    right: -5,
    fontWeight: "bold",
  },
  nombre: { left: 0 },

  textoCiudadRespuesta: {
    fontWeight: "bold",
    left: Dimensions.get("window").width / 5.5,
    fontSize: 17,

  },
  textoCiudad: {
    left: 100,
  },
  numAfi: {
    left: Dimensions.get("window").width / 3,
    fontWeight: "bold",
    fontSize: 17,
  },
  row1: {
    flexDirection: "row",
    right: 3,
    fontSize: 12
  },
  row2: {
    flexDirection: "row",
  },
  row3: {
    flexDirection: "row",
    zIndex: 2,
  },
  row4: {
    flexDirection:
      "row",
    zIndex: 2
  },
  textoNac: {},

  nombreRespuesta: {
    fontWeight: "bold",
    fontSize: 20,
  },
  nacRespuesta: {
    fontWeight: "bold",
    fontSize: 17,
  },

  rnep: {
    fontWeight: "bold",
    left: Dimensions.get("window").width / 1.7,
  },
  eman: {
    fontWeight: "bold",
    left: -110,
  },

  textoAfiliado: {
    left: Dimensions.get("window").width / 2.11,
  },
  textoDocNum: {
    left: Dimensions.get("window").width / 2.44,
    fontWeight: "bold",
  },
  textoDoc: {
    left: Dimensions.get("window").width / 2.44,
  },
  textoParentesco: {
    left: Dimensions.get("window").width / 3.73
  },
  nacRespuestaTitular: {
    fontWeight: "bold",
  },
  textoTitular: {
    fontWeight: "bold",
    left: Dimensions.get("window").width / 3.73,
  },


});
