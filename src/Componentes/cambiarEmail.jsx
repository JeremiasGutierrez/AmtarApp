import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Auth,{firebase} from '@react-native-firebase/auth';

export function ChangeEmail() {
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = async () => {
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      oldEmail,
      password,
    );
    try {
      await user.reauthenticateWithCredential(credential);
      await user.updateEmail(newEmail);
      Alert.alert('Correo electrónico actualizado con éxito');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico antiguo"
        value={oldEmail}
        onChangeText={setOldEmail}
      />
      <TextInput
        placeholder="Correo electrónico nuevo"
        value={newEmail}
        onChangeText={setNewEmail}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Actualizar correo electrónico" onPress={handleChangeEmail} />
    </View>
  );
}
