import { View, Text, Dimensions, Image } from "react-native";
import { estilo } from "../Componentes/StyleSheetTarjetaBlanca";
import { LogoText } from "./LogoText.jsx";
import { FirmaText } from "./FirmaText.jsx";
import { Sellos } from "./Sellos.jsx";
import FlipCard from "react-native-flip-card";
import firestore from "@react-native-firebase/firestore";
import { Theme } from "../Theme";
import { todosTopic, whiteTopic, createUser } from "../Funciones/firebaseAPI";
export function ScreenTarjetaBlanca({ data, Marca }) {
  const datoDni = data.Badocnumdo;
  const datoNombre = data.Apenom;

  const setTopics = async () => {
    const user = await firestore().collection("Usuarios").doc(datoDni).get();
    if (user.exists) {
      todosTopic(user.data());
      whiteTopic(user.data());
    } else {
      createUser(user, datoDni, datoNombre);
      setTopics();
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
      <View style={estilo.containerTarjetaBlanca}>
        <Text style={[estilo.amtarTitulo, estilo.dorado]}>A.M.T.A.R.</Text>
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
          <Text style={[estilo.textoResaltado, estilo.dorado]}>
            {data.Apenom}
          </Text>
        </View>
        <View
          style={[estilo.row, { top: Dimensions.get("window").height / 6.4 }]}
        >
          <Text style={[estilo.textoResaltado, estilo.dorado]}>
            {data.Fechanac}
          </Text>
          <Text style={[estilo.textoResaltado, estilo.dorado]}>
            Mar del plata
          </Text>
          <Text style={[estilo.textoResaltado, estilo.dorado]}>
            {data.Nafiliado}
          </Text>
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
          <Text style={[estilo.textoResaltado, estilo.dorado]}>
            {data.Nafititu}
          </Text>
          <Text style={[estilo.textoResaltado, estilo.dorado]}>Titular</Text>
          <Text style={[estilo.textoResaltado, estilo.dorado]}>
            {data.Badocnumdo}
          </Text>
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
          style={[estilo.row, { top: Dimensions.get("window").height / 3.57 }]}
        >
          {sellos}
          <View>
            <FirmaText />
          </View>
        </View>
      </View>

      <View style={estilo.containerTarjetaBlanca}>
        <Image
          source={require("../Imagenes/AMTARBLANCO.png")}
          style={{
            height: Dimensions.get("window").height / 3.2,
            width: Dimensions.get("window").width / 1.1,
            top: Dimensions.get("window").height / 60,
            backgroundColor: Theme.Blanco,
            borderRadius: 10,
            alignSelf: "center",
          }}
          resizeMode="cover"
        />
      </View>
    </FlipCard>
  );
}
