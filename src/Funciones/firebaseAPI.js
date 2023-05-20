import messaging from "@react-native-firebase/messaging";
import firestore from "@react-native-firebase/firestore";


export const todosTopic = (user) => {
  if (user && user.Plan && !user.Plan.todos) {
    messaging()
      .subscribeToTopic("Todos")
      .then(() => {
        firestore().collection("Usuarios").doc(user.DNI).update({
          "Plan.todos": true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const whiteTopic = (user) => {
  if (user && user.Plan && !user.Plan.subBlanca) {
    messaging()
      .subscribeToTopic("TarjetaBlanca")
      .then(() => {
        firestore().collection("Usuarios").doc(user.DNI).update({
          "Plan.subBlanca": true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
export const blueTopic = (user) => {
  if (user && user.Plan && !user.Plan.subAzul) {
    messaging()
      .subscribeToTopic("TarjetaAzul")
      .then(() => {
        firestore().collection("Usuarios").doc(user.DNI).update({
          "Plan.subAzul": true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
export const createUser = async (
  user,
  datoDni,
  datoNombre,
  telefono,
  img,
  email,
) => {
  if (!user.exists) {
    await messaging()
      .getToken()
      .then(async (token) => {
        const userRef = firestore().collection("Usuarios").doc(datoDni);
        const docSnapshot = await userRef.get();
        if (docSnapshot.exists) {
          console.log("El usuario ya existe");
        } else {
          userRef
            .set({
              Token: token,
              DNI: datoDni,
              Nombre: datoNombre,
              Plan: { todos: false, subBlanca: false, subAzul: false },
              DownloadUrl: img,
              Telefono: telefono,
              Email: email,
            })
            .then(() => {
              console.log("usuario creado");
            })
            .catch((error) => {
              console.error("Error adding document:", error);
            });
        }
      });
    return true;
  }
  return false;
};
export const getUserImg = async (user) => {
  if (user && user.DNI) {
   
    return await firestore()
      .collection("Usuarios")
      .doc(user.DNI)
      .get({ downloadUrl });
  }
};
