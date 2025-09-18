import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

class PerfilUsuario extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.conteudo}>
            <Image
              source={require('../imagens/planta.png')}
              style={{ width: 300, height: 300}}
            />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10
  },

  conteudo:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 70,
    marginBottom: 0
  },

  titulo: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
    marginTop: 20,
   
  },

  subtitulo:{
    color: 'green',
    fontSize: 25,
    fontWeight: '700'
  },

  conteudo2:{
    color: 'white',
    marginTop: 5,
    fontSize: 15,
    marginBottom: 30
  },

  descricao:{
    color: 'white',
    marginTop: 5,
    fontSize: 15,
    marginLeft: 20
  }
});

export default PerfilUsuario;