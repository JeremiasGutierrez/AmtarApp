import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import {firebase} from '@react-native-firebase/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert('Se ha enviado un correo electrónico para restablecer la contraseña');
    } catch (error) {
      Alert.alert('Ha ocurrido un error al restablecer la contraseña',error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Restablecer contraseña" onPress={handleForgotPassword} />
    </View>
  );
}