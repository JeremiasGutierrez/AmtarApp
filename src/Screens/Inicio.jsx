import { Text, View, } from "react-native";
import { Theme } from "../Theme";
import { useState, useEffect } from "react";
import { ScreenTarjetaAzul } from "../Componentes/TarjetaAzul";
import {data} from "../Funciones/apiRequest"
export function ScreenInicio() {
  

  return (
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      <ScreenTarjetaAzul/>
    </View>
  );
}
