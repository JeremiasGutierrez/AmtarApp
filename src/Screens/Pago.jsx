import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Theme } from "../Theme";
import { WebView } from "react-native-webview";
import * as React from "react";
export function Pago() {
  return (
    <View style={{flex:1}}>
      <WebView
        source={{ uri: "http://starpyh.dyndns.org/pagos/" } }
        mixedContentMode="always"
        style={{ flex: 1}}
        scalesPageToFit={true}
      />
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    height: Dimensions.get("window").height / 15,
    width: Dimensions.get("window").width / 2,
    borderRadius: 6,
    alignSelf: "center",
    backgroundColor: Theme.Pago,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    color: "white",
    padding: 10,
  },
});
