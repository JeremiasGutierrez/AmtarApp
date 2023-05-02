import { View } from "react-native";
import { Theme } from "../Theme";
import { ScreenTarjetaAzul } from "../Componentes/TarjetaAzul";
import { ScreenTarjetaBlanca } from "./../Componentes/TarjetaBlanca";
export function ScreenInicio({ route }) {
  const { otherParam } = route.params;
  const numeroTitular = otherParam.Nafititu;
  let marcaEncontrada = otherParam.grupoFamiliar[0].Marca[0].baafmcodig;
  const screen = [42, 43, 44, 45, 46].includes(otherParam.Plan) ? (
    <ScreenTarjetaBlanca data={otherParam} Marca={marcaEncontrada} />
  ) : (
    <ScreenTarjetaAzul data={otherParam} Marca={marcaEncontrada} />
  );

  return (
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      {screen}
    </View>
  );
}
