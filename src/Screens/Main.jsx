import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { ScreenAjustes } from "./Ajustes";
import { ScreenInicio } from "./Inicio";
import { CustomDrawer } from "../Componentes/CustomDrawer";
import { ScreenPrimeraVez } from "./PrimeraVez";
<<<<<<< Updated upstream

=======
import { ScreenNotificaciones } from "../Funciones/notificaciones";
>>>>>>> Stashed changes
const Drawer = createDrawerNavigator();
export function Main() {
 
  // if(miembro==="true") return (<ScreenLogin/>)
  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgba(0,0,0,0)", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
          headerTransparent: true,
          headerTitle: "",
          headerStatusBarHeight: 15,
        }}
      >
        <Drawer.Screen name="ScreenInicio" component={ScreenInicio} />
        <Drawer.Screen name="ScreenAjustes" component={ScreenAjustes} />
        <Drawer.Screen name="ScreenLogin" component={ScreenAjustes} />
<<<<<<< Updated upstream
=======
        <Drawer.Screen name="ScreenNotificaciones" component={ScreenNotificaciones}/>
        <Drawer.Screen name="Login" component={ScreenPrimeraVez}/>
>>>>>>> Stashed changes
      </Drawer.Navigator>
    </>
  );
}
