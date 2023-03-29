import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "../Screens/Login";
import { ScreenInicio } from '../Screens/Inicio';
import { NavigationContainer } from '@react-navigation/native';
export function MyStack() {
  const Stack = createNativeStackNavigator();
  return(
 
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ScreenInicio" component={ScreenInicio} />
    </Stack.Navigator>

    )
}