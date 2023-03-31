import { View, Text, Image, Dimensions, ImageBackground } from "react-native";
import { estilo } from "./StyleSheetInicio.jsx";
import { LogoText } from "./LogoText.jsx";
import { FirmaText } from "./FirmaText.jsx";
import { Sellos } from "./Sellos.jsx";
import FlipCard from "react-native-flip-card";
import { Theme } from "../Theme.jsx";
import firestore from "@react-native-firebase/firestore";
import { todosTopic, blueTopic, createUser } from "../Funciones/firebaseAPI";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export function ScreenTarjetaAzul({ data, Marca }) {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const datoDni = data.Badocnumdo;
  const datoNombre = data.Apenom;
  const setTopics = async () => {
    try {
      const user = await firestore().collection("Usuarios").doc(datoDni).get();
      if (user.exists) {
        todosTopic(user.data());
        blueTopic(user.data());
      } else {
        createUser(user, datoDni, datoNombre);
        setTopics();
      }
    } catch (error) {
      console.log(error);
    }
  };
  let sellos;
  sellos =
    Marca && "CL" === Marca.trim() ? (
      <View>
        <Sellos />
      </View>
    ) : (
      <View>
        <Text></Text>
      </View>
    );
  let mensajeError =
    Marca && "MO1" === Marca.trim() ? (
      <View>
        <Text>Servicio restingido. Comuniquese con AMTAR</Text>
      </View>
    ) : (
      <View>
        <Text></Text>
      </View>
    );
  let servicioLimitado =
    Marca && ["MO2", "MO3"].includes(Marca.trim()) ? (
      <View>
        <Text>Servicio Limitado. Comuniquese con AMTAR</Text>
      </View>
    ) : (
      <View>
        <Text></Text>
      </View>
    );
  setTopics();
  return (
    <FlipCard flipVertical={false} flipHorizontal={true}>
      <View style={estilo.container}>
        <ImageBackground
          source={require("../Imagenes/fondo.png")}
          resizeMode="cover"
          objectFit="scale-down"
          style={{
            height: Dimensions.get("window").height / 2.7,
            width: Dimensions.get("window").width / 1.1,
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={estilo.amtarTitulo}>A.M.T.A.R.</Text>
          <LogoText />
          <Text style={estilo.amtarSubTitulo}>R.N.E.M.P: 311234</Text>
          <View style={estilo.containerHeader}></View>

          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: "black",
              marginVertical: 15,
              bottom: 35,
            }}
          ></View>
          <View style={estilo.row}>
            <Text style={estilo.textoResaltado}>{data.Apenom}</Text>
          </View>
          <View
            style={[estilo.row, { top: Dimensions.get("window").height / 6.4 }]}
          >
            <Text style={estilo.textoResaltado}>{data.Fechanac}</Text>
            <Text style={estilo.textoResaltado}>Mar del plata</Text>
            <Text style={estilo.textoResaltado}>{data.Nafiliado}</Text>
          </View>
          <View
            style={[estilo.row, { top: Dimensions.get("window").height / 5.4 }]}
          >
            <Text style={estilo.textoNormal}>FechaNac</Text>
            <Text style={estilo.textoNormal}>Ciudad</Text>
            <Text style={estilo.textoNormal}>AF Nº</Text>
          </View>
          <View
            style={[estilo.row, { top: Dimensions.get("window").height / 4.7 }]}
          >
            <Text style={estilo.textoResaltado}>{data.Nafititu}</Text>
            <Text style={estilo.textoResaltado}>Titular</Text>
            <Text style={estilo.textoResaltado}>{data.Badocnumdo}</Text>
          </View>
          <View
            style={[
              estilo.row,
              {
                top: Dimensions.get("window").height / 4.2,
                overflow: "visible",
              },
            ]}
          >
            <Text style={estilo.textoNormal}>Ingreso</Text>
            <Text style={estilo.textoNormal}>Parentesco</Text>
            <Text style={estilo.textoNormal}>Doc</Text>
          </View>
          <View
            style={[estilo.row, { top: Dimensions.get("window").height / 4.1 }]}
          ></View>
          <View
            style={[
              estilo.row,
              { top: Dimensions.get("window").height / 3.57 },
            ]}
          >
            {sellos}
            <View>
              <FirmaText />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={estilo.container}>
        <ImageBackground
          source={require("../Imagenes/fondo.png")}
          resizeMode="cover"
          objectFit="scale-down"
          style={{
            height: Dimensions.get("window").height / 2.7,
            width: Dimensions.get("window").width / 1.1,
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <Image
            source={require("../Imagenes/AMTARCELESTE.png")}
            style={{
              height: Dimensions.get("window").height / 2.9,
              width: Dimensions.get("window").width / 1.1,
              top: Dimensions.get("window").height / 60,
              backgroundColor: Theme.Blanco,
              borderRadius: 10,
              alignSelf: "center",
            }}
            resizeMode="cover"
          />
        </ImageBackground>
      </View>
    </FlipCard>
  );
}
