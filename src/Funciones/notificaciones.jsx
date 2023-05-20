import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
import { Theme } from "../Theme";
import moment from "moment";
import "moment/locale/es";

export const Notificaciones = ({ route }) => {
  const [notifications, setNotifications] = useState([]);
  const { otherParam } = route.params;
  const numeroTitular = otherParam.Nafiliado;
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const querySnapshot = await firestore()
          .collection("Usuarios")
          .doc(numeroTitular)
          .get();
        const userData = querySnapshot.data();
        const obj = userData.Plan;
        const arr = Object.keys(obj).map((key) => ({ key, value: obj[key] }));
        const topico = arr.filter(
          (item) => item.value === true && item.key !== "todos"
        );

        if (userData && userData.notificaciones) {
          setNotifications(userData.notificaciones);
        }
      } catch (error) {
        console.log(
          "Error al obtener las notificaciones desde Firestore:",
          error
        );
      }
    };

    const unsubscribe = messaging().onMessage(async (message) => {
      console.log("dfadadada");
      const topic = message.notification.topic;
      const newNotification = {
        title: message.notification.title,
        body: message.notification.body,
//
        timestamp: Date.now(),
      };
      console.log(topic);
      try {
        const userRef = firestore().collection("Usuarios").doc(numeroTitular);

        await userRef.update({
          notificaciones: firestore.FieldValue.arrayUnion(newNotification),
        });

        setNotifications((prevNotifications) => [
          newNotification,
          ...prevNotifications,
        ]);
      } catch (error) {
        console.log("Error al guardar la notificación en Firestore:", error);
      }
    });
    fetchNotifications();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Historial de notificaciones:</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => `${item.timestamp}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.timestamp}>
              {moment(item.timestamp).locale("es").format("LLL")}{" "}
              {/* Formatea el timestamp con Moment.js */}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Theme.Dark,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  messageContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
});
