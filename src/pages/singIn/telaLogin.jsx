import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SingIn() {
    
    return (
      <View style={styles.container}> 
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem-vindo (a)!</Text>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
          <Text style={styles.titulo}>Email</Text>
          <TextInput
            placeholder='Digite um e-mail'
            style={styles.input}
          />

          <Text style={styles.titulo}>Senha</Text>
          <TextInput
            placeholder='Digite uma senha'
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegistrar}>
            <Text style={styles.textRegistrar}>Não possui uma conta? Cadastre-se</Text>
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
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom:12,
    fontSize: 16
  }
})


