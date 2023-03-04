import { Text, View,Alert } from "react-native";
import { Theme } from "../Theme";
import { useState, useEffect } from "react";
import { ScreenTarjetaAzul } from "../Componentes/TarjetaAzul";
import {usersData} from "../Funciones/apiRequest"
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
export function ScreenInicio() {

  return(
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      <ScreenTarjetaAzul/>
      
    </View>
  );
}
