import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../telas/firebaseConfig'; // ajuste o caminho conforme seu projeto

export default function SignIn() {
  const navigation = useNavigation();

  // Estados
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função para cadastrar usuário
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('TelaInicial'); // ou onde quiser redirecionar após cadastro
    } catch (error) {
      Alert.alert('Erro ao cadastrar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se!</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
        <Text style={styles.titulo}>Nome de Usuário</Text>
        <TextInput
          placeholder='Digite seu nome'
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.titulo}>Email</Text>
        <TextInput
          placeholder='Digite um e-mail'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Text style={styles.titulo}>Senha</Text>
        <TextInput
          placeholder='Digite uma senha'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <Text style={styles.titulo}>Confirme sua senha</Text>
        <TextInput
          placeholder='Confirme sua senha'
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  titulo: {
    fontSize: 20,
    marginTop: 28,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    marginTop: 5
  },
  button: {
    backgroundColor: '#8fbc8f',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
