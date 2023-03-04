import { View, Text, ImageBackground, Image, Dimensions,StyleSheet} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Entypo, Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { ScreenAjustes } from "../Screens/Ajustes";
import Constants from "expo-constants";
import { Theme } from "../Theme";

export function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Theme.Dark,
        }}
      >
        <Text style={{top:Dimensions.get("window").height-600,color:'white'}}>jeremartin223@gmail.com</Text>
        <Image
          style={{
            width: 120,
            height: 110,
            margin: 50,
            borderRadius: 400/ 2
          }}
          source={require("../Imagenes/yo.jpeg")}
        />
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: Theme.Blanco,
            marginVertical: 10,
          }}
        ></View>
      </View>
      <View style={{ backgroundColor: Theme.Dark }}>
        <DrawerItem
          style={{ width: "80%", alignSelf: "center" }}
          icon={({ color, size }) => (
            <Entypo name="home" size={35} color={Theme.Blanco} />
          )}
          labelStyle={{ fontSize: 23, color: Theme.Blanco }}
          label="Inicio"
          onPress={() => {
            props.navigation.navigate("ScreenInicio");
          }}
        />
        <DrawerItem
          style={{ width: "80%", alignSelf: "center" }}
          icon={({ color, size }) => (
            <Ionicons name="settings" size={35} color={Theme.Blanco} />
          )}
          labelStyle={{ fontSize: 23, color: Theme.Blanco }}
          label="Ajustes"
          onPress={() => {
            props.navigation.navigate("ScreenAjustes");
          }}
        />
         <DrawerItem
          style={{ width: "80%", alignSelf: "center" }}
          icon={({ color, size }) => (
            <Ionicons name="notifications" size={35} color={Theme.Blanco} />
          )}
          labelStyle={{ fontSize: 23, color: Theme.Blanco }}
          label="Notificaciones"
          onPress={() => {
            props.navigation.navigate("ScreenNotificaciones");
          }}
        />
         <DrawerItem
          style={{ width: "80%", alignSelf: "center" }}
          icon={({ color, size }) => (
            <AntDesign name="login" size={24} color={Theme.Blanco} />
          )}
          labelStyle={{ fontSize: 23, color: Theme.Blanco }}
          label="Login"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}
