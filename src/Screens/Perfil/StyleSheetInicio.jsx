import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../Theme";

export const estilo = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2.7,
    width: Dimensions.get("window").width / 1.1,
    backgroundColor: Theme.TarjetaAzul,
    borderRadius: 10,
    alignSelf: "center",
    top: Dimensions.get('window').height/8,
  },
  row: {
    left:10,
    flex: 1,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    rowGap: 3,
    flexWrap: "wrap",
    position:"absolute",
    top:Dimensions.get("window").height/8,
    width: Dimensions.get("window").width/1,
  },
  textoResaltado:{
      fontSize: 14,
      fontWeight: "bold",
      flexGrow: 5,
      height: 25,
      width: 100,
  },
  textoNormal:{
    fontSize: 12,
    flexGrow: 5,
    height: 25,
    width: 100,

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
    alignSelf:'flex-end',
    fontSize: Dimensions.get("window").height / 15,
    zIndex: 2,
    position: "absolute",
  },
  imagen: {
    height: Dimensions.get("window").height / 12,
    width: Dimensions.get("window").width / 5.4,
    right:Dimensions.get('window').width/55,
  },
  amtarSubTitulo: {
    alignSelf: "flex-end",
    bottom: 25,
    fontWeight: "bold",
  },
});
