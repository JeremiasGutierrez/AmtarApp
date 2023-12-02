import { View, Text, Dimensions, Image } from "react-native";
import { estilo } from "../Componentes/StyleSheetTarjetaBlanca";
import { LogoText } from "./LogoText.jsx";
import { FirmaText } from "./FirmaText.jsx";
import { Sellos } from "./Sellos.jsx";
import FlipCard from "react-native-flip-card";
import firestore from "@react-native-firebase/firestore";
import { todosTopic, whiteTopic, createUser } from "../Funciones/firebaseAPI";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState, useCallback } from "react";
import { usePreventScreenCapture } from "expo-screen-capture";
import { MaterialIcons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export function ScreenTarjetaBlanca({ data, Marca }) {
  usePreventScreenCapture();
  const [isPortrait, setIsPortrait] = useState(true);
  const [img, setImg] = useState("");
  const datoDni = data.Badocnumdo;
  const handleOrientationChange = useCallback(
    ({ orientationInfo }) => {
      if (
        orientationInfo &&
        typeof orientationInfo.orientation === "number" &&
        orientationInfo.orientation ===
          ScreenOrientation.Orientation.PORTRAIT_UP
      ) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    },
    [setIsPortrait]
  );
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        await firestore()
          .collection("Usuarios")
          .doc(datoDni)
          .get()
          .then((data) => {
            setImg(data.data().DownloadUrl);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    obtenerDatos();
  }, [datoDni]);
  const sourceImage = img !== "" ? { uri: img } : null;
  useEffect(() => {
    const allowScreenOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE |
          ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };

    allowScreenOrientation();
    ScreenOrientation.unlockAsync();

    ScreenOrientation.addOrientationChangeListener(handleOrientationChange);

    return () => {
      ScreenOrientation.removeOrientationChangeListener(
        handleOrientationChange
      );
    };
  }, [handleOrientationChange]);

  const datoNombre = data.Apenom;

  const setTopics = async () => {
    try {
      const user = await firestore().collection("Usuarios").doc(datoDni).get();
      if (user.exists) {
        todosTopic(user.data());
        whiteTopic(user.data());
      }
    } catch (error) {
      alert(message.error);
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
      <TouchableOpacity style={estilo.expiradoContainer}>
        <MaterialIcons
          name="error"
          size={50}
          color={"white"}
          style={estilo.loguito}
        />
        <Text>Servicio restingido. Comuniquese con AMTAR</Text>
      </TouchableOpacity>
    ) : (
      null
    );
    let moroso2= 
      Marca && ["MO2"].includes(Marca.trim()) ? (
        <TouchableOpacity style={estilo.expiradoContainer}>
        <MaterialIcons
          name="error"
          size={50}
          color={"white"}
          style={estilo.loguito}
        />
        <Text>
          Servicio Limitado. Comuniquese con AMTAR (0223) 473-3351/475-1514.
          Usted solo cuenta con el Programa medico obligatorio
        </Text>
      </TouchableOpacity>
      
    ) : (
      null
    );
  let servicioLimitado =
    Marca && ["MO3"].includes(Marca.trim()) ? (
      
      <TouchableOpacity style={estilo.expiradoContainer}>
        <MaterialIcons
          name="error"
          size={50}
          color={"white"}
          style={estilo.loguito}
        />
        <Text>
          Servicio Limitado. Comuniquese con AMTAR (0223) 473-3351/475-1514
        </Text>
      </TouchableOpacity>
      
    ) : (
      null
    );
  
    const expiredDate=()=>{
      if(data.hasOwnProperty("FecVen")&&new Date(data.FecVen[0].bagfmfevto)<Date.now()){ 
        return data.FecVen
      }
      return null
    }
 
  setTopics();
  if(expiredDate()!==null){ 
    return( 
    <View>
        <TouchableOpacity style={estilo.expiradoContainer}>
          <MaterialIcons
            name="error"
            size={50}
            color={"white"}
            style={estilo.loguito}
          />
          <Text
            style={{ color: Theme.Blanco, textAlign: "center", fontSize: 20 }}
          >
            Servicio expirado. Comuniquese con AMTAR (0223) 473-3351/475-1514.
            DNI: {datoDni}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }else if(mensajeError!==null){
    return(
      <View>
        <Text style={{color:Theme.Blanco,textAlign:"center", fontSize:20}}>{mensajeError}</Text>
      </View>
    )
  }
  else{
    return (
      <FlipCard flipVertical={false} flipHorizontal={true}>
        <View
          style={
            isPortrait ? estilo.containerTarjetaBlanca : estilo.containerLandscape
          }
        >
          <Text style={[estilo.amtarTitulo, estilo.dorado]}>A.M.T.A.R.</Text>
          <LogoText />
          <Text style={estilo.amtarSubTitulo}>R.N.E.M.P: 311234</Text>
          <View style={estilo.containerHeader}/> 
          <View style={estilo.linea} />
          <View
            style={[
              isPortrait ? estilo.row : estilo.rowLandscape,
              isPortrait
                ? { top: Dimensions.get("window").height / 8 }
                : { top: Dimensions.get("window").height / 3.8 },
            ]}
          >
            <Text style={[estilo.textoResaltado, estilo.dorado]}>
              {data.Apenom}
            </Text>
          </View>
          <View
            style={[
              isPortrait ? estilo.row : estilo.rowLandscape,
              isPortrait
                ? { top: Dimensions.get("window").height / 6.4 }
                : { top: Dimensions.get("window").height / 3.2 },
            ]}
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
            style={[
              isPortrait ? estilo.row : estilo.rowLandscape,
              isPortrait
                ? { top: Dimensions.get("window").height / 5.4 }
                : { top: Dimensions.get("window").height / 2.8 },
            ]}
          >
            <Text style={estilo.textoNormal}>FechaNac</Text>
            <Text style={estilo.textoNormal}>Ciudad</Text>
            <Text style={estilo.textoNormal}>AF Nº</Text>
          </View>
          <View
            style={[
              isPortrait ? estilo.row : estilo.rowLandscape,
              isPortrait
                ? { top: Dimensions.get("window").height / 4.7 }
                : { top: Dimensions.get("window").height / 2.4 },
            ]}
          >
            <Text style={[estilo.textoResaltado, estilo.dorado]}>
              {data.fechaIngreso}
            </Text>
            <Text style={[estilo.textoResaltado, estilo.dorado]}>Titular</Text>
            <Text style={[estilo.textoResaltado, estilo.dorado]}>
              {data.Badocnumdo}
            </Text>
          </View>
          <View
            style={[
              isPortrait ? estilo.row : estilo.rowLandscape,
              isPortrait
                ? { top: Dimensions.get("window").height / 4.2 }
                : { top: Dimensions.get("window").height / 2.2 },
            ]}
          >
            <Text style={estilo.textoNormal}>Ingreso</Text>
            <Text style={estilo.textoNormal}>Parentesco</Text>
            <Text style={estilo.textoNormal}>Doc</Text>
          </View>
  
          <View
            style={[
              isPortrait ? estilo.row : estilo.rowLandscape,
              isPortrait
                ? { top: Dimensions.get("window").height / 3.57 }
                : { top: Dimensions.get("window").height / 2 },
            ]}
          >
            {sellos}
            <View>
              <FirmaText isPortrait={isPortrait} />
            </View>
          </View>
          <View>
                {servicioLimitado!==null ? servicioLimitado : moroso2 !==null ? moroso2 : "" }
            </View>
        </View>
  
        <View
          style={[
            isPortrait
              ? estilo.containerTarjetaBlanca
              : estilo.containerLandscape,
          ]}
        >
          <Image
            source={require("../Imagenes/AMTARBLANCO.png")}
            style={[isPortrait ? estilo.revezVertical : estilo.revezHorizontal]}
          />
          <Image
            source={sourceImage}
            style={[
              isPortrait
                ? estilo.imagenFotoVertical
                : estilo.imagenFotoHorizontal,
            ]}
            resizeMode="contain"
          />
        </View>
      </FlipCard>
    );
  }
 
}
