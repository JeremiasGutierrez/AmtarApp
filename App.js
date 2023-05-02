import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "./src/Componentes/BottomTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/Screens/Login";
import { ScreenPrimeraVez } from "./src/Screens/PrimeraVez";
import { ScreenInicio } from "./src/Screens/Inicio";
import { IniciarSesion } from "./src/Screens/InicioSesion";
import { DatosLogin } from "./src/Screens/IngresarDatos";
import { ChangeEmail } from "./src/Componentes/cambiarEmail";
import ForgotPassword from "./src/Componentes/cambiarContra";
const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="cambiarEmail"
          component={ChangeEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cambiarContra"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IngresarDatos"
          component={DatosLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenInicio"
          component={ScreenInicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inicio"
          component={ScreenPrimeraVez}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
