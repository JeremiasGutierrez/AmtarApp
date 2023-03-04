import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
  ImageBackground,
} from "react-native";
import { estilo } from "./StyleSheetInicio.jsx";
import { usersData } from "../Funciones/apiRequest.js";
import { LogoText } from "./LogoText.jsx";
import { FirmaText } from "./FirmaText.jsx";
import { Sellos } from "./Sellos.jsx";
export function ScreenTarjetaAzul() {
  const {
    data,
    loading,
  } = usersData();

  return (
     (
      <TouchableOpacity style={estilo.container}>
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
            <Text style={estilo.textoResaltado}>FechadelOtro</Text>
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
            <Sellos />
            <View>
              <FirmaText />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  );
}

