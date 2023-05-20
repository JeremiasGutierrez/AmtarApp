import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../Theme";
import { usersData } from "../Funciones/apiRequest";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
export function IniciarSesion() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dni, setDni] = useState("");
  const navigation = useNavigation();
  const { data, loading } = usersData(dni.trim());
  const user = auth().currentUser;
  const [tokenPersona, setTokenPersona] = useState(null);
  const handleLogin = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      messaging().onTokenRefresh((newToken) => {
        firestore()
          .collection('Usuarios')
          .doc(dni)
          .update({
            Token: newToken,
          })
          .then(() => {
            console.log('User updated!');
          });
      });
    } catch (error) {
      alert('OWO?', error.message);
    }
   await user
      .reload()
      .then(() => {
        if (user.emailVerified) {
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              if (!loading) {
                firestore()
                  .collection("Usuarios")
                  .doc(data.Badocnumdo)
                  .get()
                  .then((doc) => {
                    if (doc.data().Email === email) {
                      navigation.navigate("BottomTab", { otherParam: data });
                    } else {
                      alert("Email o contraseña incorrectos");
                    }
                  });
              }
            })
            .catch((error) => {
              alert("Email o contraseña incorrectos");
            });
        }
        else {
         
          alert("Verifique su Email porfavor!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={estilo.container}>
      <Text style={[estilo.title, { color: "#DDD" }]}>Iniciar sesión</Text>
      <View style={[estilo.form]}>
        <Text style={{ color: "#DDD" }}>Correo electrónico</Text>
        <TextInput
          style={estilo.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={{ color: "#DDD" }}>DNI</Text>
        <TextInput
          style={estilo.input}
          value={dni}
          onChangeText={setDni}
          keyboardType="number-pad"
        />

        <Text style={{ color: "#DDD" }}>Contraseña</Text>
        <TextInput
          style={estilo.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button
          styles={estilo.button}
          title="Iniciar sesión"
          onPress={handleLogin}
        />
        <TouchableOpacity
          style={estilo.botonIniciar}
          onPress={() => {
            navigation.navigate("cambiarContra");
          }}
        >
          <Text style={estilo.crearText}>Olvide mi contraseña</Text>
          <MaterialCommunityIcons
            name="form-textbox-password"
            size={50}
            color="black"
            style={estilo.loguito}
          />
        </TouchableOpacity>
        { <TouchableOpacity
          style={estilo.botonIniciar}
          onPress={async () => {
            await user.sendEmailVerification();
          }}
        >
          <Text style={estilo.crearText}>Enviar Correo de verificacion</Text>
          <MaterialIcons
            name="verified"
            size={50}
            color="black"
            style={estilo.loguito}
          />
        </TouchableOpacity> }
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  loguito: {
    height: Dimensions.get("window").height / 5,
    alignSelf: "center",
    position: "absolute",
    left: Dimensions.get("window").width / 70,
  },
  botonIniciar: {
    marginTop: 20,
    width: "100%",
    padding: 13,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: Theme.Dorado,
  },
  crearText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  container: {
    color: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: Theme.Dark,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#000",
  },
  input: {
    backgroundColor: "#DDD",
    color: "#000",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  form: {
    width: "100%",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
