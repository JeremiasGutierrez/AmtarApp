import { View, Text, Image, Dimensions, Pressable } from "react-native";
import Auth from "@react-native-firebase/auth";
import { estilo } from "../Componentes/StyleSheetIngresar";
import { useState, useEffect } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Feather } from "@expo/vector-icons";
import { createUser } from "../Funciones/firebaseAPI";
import Checkbox from "expo-checkbox";
import { Theme } from "../Theme";
import * as Progress from "react-native-progress";

export function DatosLogin({ route }) {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();
  const { otherParam } = route.params;
  const DNI = otherParam.Badocnumdo;
  const [initializing, setInitializing] = useState(true);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [crearDesactivado, setCrearDesactivado] = useState(false);
  const [progress, setProgress] = useState(0);
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  function onAuthStateChanged(user) {
    setUser(user);

    if (user) {
      navigation.navigate("IniciarSesion", { otherParam: otherParam });
    } else {
      navigation.navigate("IngresarDatos", { otherParam: otherParam });
    }
    if (initializing) setInitializing(false);
  }

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const validatePassword = () => {
    const errors = [];

    if (!passwordRegex.test(password)) {
      if (password.length < 8) {
        errors.push("La contraseña debe tener al menos 8 caracteres");
      }

      if (!/\d/.test(password)) {
        errors.push("La contraseña debe contener al menos un número");
      }

      if (!/[a-z]/.test(password)) {
        errors.push("La contraseña debe contener al menos una letra minúscula");
      }

      if (!/[A-Z]/.test(password)) {
        errors.push("La contraseña debe contener al menos una letra mayúscula");
      }
      setErrorMessages(errors);
    }
  };

  const capturePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  useEffect(() => {
    console.log(downloadUrl);
  }, [downloadUrl]);
  const uploadImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();
    const imageName = DNI;
    const ref = storage().ref(`images/${imageName}.png`);
    const task = ref.put(blob);
    task.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
    });
    await task;
    await ref.put(blob);
    const url = await ref.getDownloadURL();
    setDownloadUrl(url);
    return url;
  };

  const setDownloadUrlPromise = () => {
    return new Promise((resolve) => {
      setDownloadUrl((url) => {
        resolve(url);
        return url;
      });
    });
  };

  const registrar = async () => {
    try {
      const downloadUrl = await uploadImage();
      setCrearDesactivado(true);
      await setDownloadUrlPromise();

      let errors = [];
      if (!email) {
        errors.push("El correo no puede estar vacio");
      }
      if (!password || password !== confirmPassword) {
        errors.push(
          "La contraseña no puede estar vacia y debe coincidir con la confirmacion"
        );
      }
      if (!telefono) {
        errors.push("No hay telefono, por favor ingrese un numero de telefono");
      }
      if (!image) {
        errors.push("No hay imagen, por favor ingrese una imagen");
      }
      if (errors.length > 0) {
        alert(errors.join(" y \n"));
        return;
      }
      const { user } = await Auth().createUserWithEmailAndPassword(
        email,
        password
      );
      const userExist = await firestore().collection("Usuarios").doc(DNI).get();
      await createUser(
        userExist,
        DNI,
        otherParam.Apenom,
        telefono,
        downloadUrl,
        email
      );

      await sendEmailVerification(user);
      setCrearDesactivado(false);
    } catch (error) {
      setCrearDesactivado(false);
      console.log(error);
      alert(error.message);
    }
  };
  const handleEmailChange = (text) => {
    if (emailRegex.test(text)) {
      setEmail(text);
    }
  };
  const sendEmailVerification = async (user) => {
    try {
      await user.sendEmailVerification();
      console.log("Correo de verificación enviado:");
    } catch (error) {
      console.error("Error al enviar correo de verificación:", error);
    }
  };

  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <ScrollView>
        <View style={estilo.fondo}>
          <View style={estilo.cuadradoFoto}>
            {image ? (
              <Image
                source={{ uri: image }}
                resizeMode="contain"
                style={{ width: 200, height: 200, borderRadius: 100 }}
              />
            ) : (
              <Entypo name="camera" size={80} color="black" />
            )}
          </View>
          <Pressable onPress={capturePhoto} style={estilo.botonFoto}>
            <Text style={estilo.fotoText}>Tomar foto</Text>
          </Pressable>
          <View
            style={{
              marginTop: Dimensions.get("window").height / 3,
              flex: 1,
              justifyContent: "space-evenly",
              flexDirection: "column",
              alignContent: "space-around",
              position: "relative",
            }}
          >
            <View
              style={[
                estilo.containerEmail,
                { marginBottom: Dimensions.get("window").height / 20 },
              ]}
            >
              <Text style={{ color: "black" }}>Email</Text>
              <TextInput
                placeholder="Ingrese su Email"
                style={estilo.placeHolderEmail}
                autoCapitalize="none"
                onChangeText={handleEmailChange}
                keyboardType="email-address"
              />
            </View>

            <View
              style={[
                estilo.containerContra,
                errorMessages.length > 0
                  ? { minHeight: Dimensions.get("window").height / 3.6 }
                  : "",
                { marginBottom: Dimensions.get("window").height / 20 },
              ]}
            >
              <Text style={{ color: "black" }}>Contraseña</Text>
              <TextInput
                placeholder="Ingrese su Contraseña "
                style={estilo.placeHolderContra}
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => handlePasswordChange(text)}
                secureTextEntry={!isChecked}
                onBlur={validatePassword}
              />

              {errorMessages.map((error, index) => (
                <Text
                  key={index}
                  style={{
                    color: "red",

                    width: Dimensions.get("window").width / 1.37,
                    position: "relative",
                    flex: 1,
                    alignItems: "flex-start",
                  }}
                >
                  {error.trim()}
                </Text>
              ))}
            </View>
            <View
              style={[
                estilo.containerContraConfir,
                { marginBottom: Dimensions.get("window").height / 20 },
              ]}
            >
              <Text style={{ color: "black" }}>Confirmar contraseña</Text>
              <TextInput
                placeholder="Confirme su Contraseña"
                style={estilo.placeHolderContra}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry={!isChecked}
              />
            </View>
            <View
              style={[
                estilo.contarinerTelefono,
                { marginBottom: Dimensions.get("window").height / 20 },
              ]}
            >
              <Text>Numero de telefono</Text>
              <TextInput
                placeholder="Ingrese su numero de telefono"
                style={estilo.placeHolderTel}
                value={telefono}
                keyboardType="phone-pad"
                onChangeText={(text) => setTelefono(text)}
              />
            </View>
            <View style={estilo.checkBoxView}>
              <Checkbox
                style={estilo.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#4630EB" : undefined}
              />
              <Feather
                name={isChecked ? "eye" : "eye-off"}
                size={30}
                color={"white"}
                style={{
                  marginLeft: 5,
                  bottom: Dimensions.get("window").height / 6.2,
                  alignSelf: "center",
                  position: "absolute",
                }}
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: !crearDesactivado
                    ? pressed
                      ? "gray"
                      : Theme.Dorado
                    : Theme.Dorado,
                  height: Dimensions.get("window").height / 15,
                  width: Dimensions.get("window").width / 1.2,
                  bottom: Dimensions.get("window").height / 15,
                  padding: 13,
                  alignItems: "center",
                  alignSelf: "center",
                  borderRadius: 15,
                },
              ]}
              onPress={registrar}
              disabled={crearDesactivado}
            >
              <Text style={estilo.crearText}>Crear</Text>
            </Pressable>
            <View>
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  bottom: Dimensions.get("window").height / 19,
                }}
              >
                Progreso de subida
              </Text>
              <Progress.Bar
                width={200}
                height={20}
                progress={progress / 100}
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  bottom: Dimensions.get("window").height / 20,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginTop: 100,
                rowGap: 10,
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
