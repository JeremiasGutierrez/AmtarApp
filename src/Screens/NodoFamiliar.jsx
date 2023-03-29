import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenTarjetaAzul } from "../Componentes/TarjetaAzul";
import { Theme } from "../Theme";
import { ScreenTarjetaBlanca } from "./../Componentes/TarjetaBlanca";
export function NodoFamiliar({ route }) {
  const { otherParam } = route.params;
  const marca = otherParam.grupoFamiliar[0].Marca[0].baafmcodig;
  let screen = [];
  otherParam.grupoFamiliar.slice(1, otherParam.length).forEach((element) => {
    screen.push(
      [42, 43, 44, 45, 46].includes(element.Plan) ? (
        <ScreenTarjetaBlanca data={element} Marca={marca} />
      ) : (
        <ScreenTarjetaAzul data={element} Marca={marca} />
      )
    );
  });
  let item = screen.map((element, index) => {
    return (
      <View key={index} style={{ marginBottom: 200 }}>
        {element}
      </View>
    );
  });

  return (
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      <ScrollView>{item}</ScrollView>
    </View>
  );
}
