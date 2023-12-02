import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import messaging from "@react-native-firebase/messaging";
import { Theme } from "../Theme";
import moment from "moment";
import "moment/locale/es";

export const Notificaciones = ({ route }) => {
  const [notifications, setNotifications] = useState([]);
  const { otherParam } = route.params;
  const numeroTitular = otherParam.Nafiliado;
  const isFocused = useIsFocused();

  const fetchNotifications = useCallback(async () => {
    try {
      const querySnapshot = await firestore()
        .collection("Usuarios")
        .doc(numeroTitular)
        .get();
      const userData = querySnapshot.data();

      if (userData && userData.notificaciones) {
        const sortedNotifications = userData.notificaciones.sort(
          (a, b) => b.date - a.date
        );
        setNotifications(sortedNotifications);
      }

    } catch (error) {
      console.log("Error al obtener las notificaciones desde Firestore:", error);
    }
  }, [numeroTitular]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  useEffect(() => {
    if (isFocused) {
      fetchNotifications();
    }
  }, [fetchNotifications, isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Historial de notificaciones:</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => `${item.date}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.timestamp}>
              {moment(item.date).locale("es").format("LLL")}{" "}
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
