import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';



export default function SingIn() {

    const navigation = useNavigation();

    function Cadastrar(){
       navigation.navigate('CadastroUsuario');
    }

    function Acessar(){
       navigation.navigate('TelaInicial');
    }

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
          />

          <Text style={styles.titulo}>Email</Text>
          <TextInput
            placeholder='Digite um e-mail'
            style={styles.input}
          />

          <Text style={styles.titulo}>Senha</Text>
          <TextInput
            placeholder='Digite uma senha'
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} 
          />

          <Text style={styles.titulo}>Confirme sua senha</Text>
          <TextInput
            placeholder='Confirme sua senha'
            style={styles.input}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} 
          />

          <TouchableOpacity style={styles.button} onPress={Acessar}>
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
  titulo:{
    fontSize: 20,
    marginTop: 28,
     fontWeight: 'bold'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom:12,
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
  textButton:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegistrar: {
    marginTop: 14,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  textRegistrar: {
    color: '#a1a1A1',

  },
  textRegistrarCadastrar: {
    color:'green',
    marginLeft: 5,
  }
})


