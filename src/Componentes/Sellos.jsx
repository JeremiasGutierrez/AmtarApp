import { View, StyleSheet, Dimensions, PixelRatio, Image } from "react-native";
export function Sellos() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        left: Dimensions.get("window").width / 20,
      }}
    >
      <View style={[estilo.sello]}>
        <Image
          style={{
            width: 60,
            height: 55,
            margin: 0,
            right: 13,
            bottom: 3,
            borderRadius: 400 / 2,
          }}
          source={require("../Imagenes/CN.png")}
        />
      </View>
      <View
        style={[estilo.sello, { left: Dimensions.get("window").width / 20 }]}
      >
        <Image
          style={{
            width: 60,
            height: 53,
            margin: 0,
            right: 12,
            bottom: 4.4,
            borderRadius: 400 / 2,
          }}
          source={require("../Imagenes/CP.png")}
        />
      </View>
      <View
        style={[estilo.sello, { left: Dimensions.get("window").width / 10 }]}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  sello: {
    height: Dimensions.get("window").height / 20,
    width: Dimensions.get("window").width / 10.5,
    top: Dimensions.get("window").height / 50,
    borderRadius: 100 / PixelRatio.get(),
    borderColor: "black",
    borderWidth: 2,
  },
});
