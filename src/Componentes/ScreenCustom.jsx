import {
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import {Theme} from "../Theme"
import Constants from "expo-constants";

const styles = StyleSheet.create({
    default: {
          height: Dimensions.get("window").height - Constants.statusBarHeight,
          marginTop: Constants.statusBarHeight,
          width: Dimensions.get("window").width,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
    },
    colorMain:{
      backgroundColor:Theme.main
    },
    colorSecondary:{
      backgroundColor:Theme.secondary
    }
})

export function ScreenCustom({
    color,
    children,
    style,
    ...restOfProps
}) {
    const backgroundStyles = [
        styles.default,
        color === "Dark" && styles.colorMain,
        color === "Azul" && styles.colorSecondary,
        style,
    ]
    return (
        <View style={[backgroundStyles, style]} {...restOfProps}>
            {children}
        </View>
    )
}
