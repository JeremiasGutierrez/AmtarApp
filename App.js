import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "./src/Componentes/BottomTab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/Screens/Login";
import { ScreenPrimeraVez } from "./src/Screens/PrimeraVez";
import { ScreenInicio } from "./src/Screens/Inicio";
import * as ScreenOrientation from "expo-screen-orientation";

const Stack = createNativeStackNavigator();
async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE
  );
}
changeScreenOrientation();
export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
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
