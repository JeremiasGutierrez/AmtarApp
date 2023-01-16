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
  row1: {
    flexDirection: "row",
    right: 3,
  },
  textoCiudadRespuesta: {
    fontWeight: "bold",
    left: 80,
    fontSize: 17,
    
  },
  textoCiudad: {
    left: 100,
  },
  numAfi: {
    left: 145,
    fontWeight: "bold",
    fontSize: 17,
  },
  row2: {
    flexDirection: "row",
    zIndex: 2,
    bottom: 1,
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
    right: -285,
  },
  eman: {
    fontWeight: "bold",
    left: -110,
  },

  textoAfiliado: {
    left: 205,
  },
  textoDocNum: {
    left: 200,
    fontWeight: "bold",
  },
  textoDoc: {
    left: 185,
  },
  textoParentesco:{
    left:100
  },
  nacRespuestaTitular: {
    fontWeight: "bold",
  },
  textoTitular: {
    fontWeight: "bold",
    left: 99.1,
  },
  row3: {
    flexDirection: "row",
    zIndex: 2,
  },
  row4: { flexDirection: "row", zIndex: 2 },
 
});
