import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenAjustes } from "../Screens/Ajustes";
import { ScreenInicio } from "../Screens/Inicio";
import { Pago } from "../Screens/Pago";
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import { NodoFamiliar } from "../Screens/NodoFamiliar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DatosLogin } from "../Screens/IngresarDatos";
import { IniciarSesion } from "../Screens/InicioSesion";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function BottomTab({ route }) {
  const { otherParam } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="ScreenInicio"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#D1D3F1",
      }}
    >
      <Tab.Screen
        name="ScreenInicio"
        component={ScreenInicio}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
        initialParams={{
          otherParam: otherParam,
        }}
      />
      <Tab.Screen
        name="NodoFamiliar"
        component={NodoFamiliar}
        initialParams={{
          otherParam: otherParam,
        }}
        options={{
          tabBarLabel: "Tu Familia",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="family-restroom" size={24} color="black" />
          ),
        }}
      /> 
      <Tab.Screen
        name="Pago"
        component={Pago}
        initialParams={{
          otherParam: otherParam,
        }}
        options={{
          tabBarLabel: "Pagar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-bill" size={24} color={"black"} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={ScreenAjustes}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
