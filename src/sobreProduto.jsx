import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SobreProduto extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* Titulo */}
        <Text style={styles.titulo}>Sobre o Produto</Text>

        <View style={styles.conteudo}>
            <Text style={styles.subtitulo}>Nome do Produto</Text>
            <Text style={styles.conteudo2}>Nome do Produto</Text>

            <Text style={styles.subtitulo}>Data de Fabricação</Text>
            <Text style={styles.conteudo2}>__/__/____</Text>

            <Text style={styles.subtitulo}>ID do Produto</Text>
            <Text style={styles.conteudo2}>n° 01</Text>

            <Text style={styles.subtitulo}>Características</Text>
            <Text style={styles.conteudo2}>Lorem ipsum dolor, sit amet  doloremccusamus cumulpa expedita amet cum deleniti?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  titulo: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600'
  }
});

export default SobreProduto;