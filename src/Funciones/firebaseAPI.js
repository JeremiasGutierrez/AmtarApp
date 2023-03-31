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
      .subscribeToTopic("SubBlanco")
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
export const createUser = (user, datoDni, datoNombre) => {
  if (!user.exists) {
    messaging()
      .getToken()
      .then((token) => {
        firestore()
          .collection("Usuarios")
          .doc(datoDni)
          .set({
            Token: token,
            DNI: datoDni,
            Nombre: datoNombre,
            Plan: { todos: false, subBlanca: false, subAzul: false },
          });
      });
    return true;
  }
  return false;
};
