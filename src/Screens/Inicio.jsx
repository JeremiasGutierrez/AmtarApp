import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Constants from "expo-constants";
import { Theme } from "../Theme";
import { estilo } from "./Perfil/StyleSheetInicio";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import axios from "axios"
export function ScreenInicio() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "http://osarpyh-testint.dyndns.org/wsvalidaafi2/apiafi.php?numdoc=5324335&entidad=1",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);


  console.log(list)
  return (
    <View style={{ backgroundColor: Theme.Dark, height: "100%" }}>
      <TouchableOpacity style={estilo.container}>
        <Text style={estilo.amtarTitulo}>A.M.T.A.R.</Text>
        <View style={estilo.containerHeader}>
          <Text style={estilo.rnep}>R.N.E.M.P 311234</Text>
          <Text style={estilo.eman}>E.N.A.M Nº785</Text>
        </View>
        <Image
          style={estilo.imagen}
          source={require("../Imagenes/AmtarNegro.png")}
          resizeMode="contain"
        />

        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "black",
            marginVertical: 15,
            top: 7,
          }}
        ></View>
        <Text style={estilo.nombreRespuesta}> { }</Text>
        <Text style={estilo.nombre}>Nombre</Text>
        <View style={estilo.row1}>
          <Text style={estilo.nacRespuesta}> 14/2/2003</Text>
          <Text style={estilo.textoCiudadRespuesta}>Mar del Plata</Text>
          <Text style={estilo.numAfi}>100</Text>
        </View>
        <View style={estilo.row2}>
          <Text style={estilo.textoNac}> Fecha Nac</Text>
          <Text style={estilo.textoCiudad}> Ciudad</Text>
          <Text style={estilo.textoAfiliado}> AF Nº</Text>
        </View>

        <View style={estilo.row3}>
          <Text style={estilo.nacRespuestaTitular}> 01/5/1977</Text>
          <Text style={estilo.textoTitular}> Titular</Text>
          <Text style={estilo.textoDocNum}> 44635345</Text>
        </View>
        <View style={estilo.row4}>
          <Text style={estilo.textoNac}> Fecha Nac</Text>
          <Text style={estilo.textoParentesco}> Parentesco</Text>
          <Text style={estilo.textoDoc}> DOC</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
