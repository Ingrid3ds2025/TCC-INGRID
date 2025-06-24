import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RelatorioGeral extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.informacoes}>
            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Titulo</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Titulo</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Titulo</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Titulo</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>
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
     justifyContent: 'flex-start'
  },

  informacoes:{
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    flexDirection: 'column',
    borderColor: 'pink',
    borderWidth: 5
  },

  campo: {
    flex: 1,
    flexDirection: 'row',
   
  },

  subtitulo:{
    color: 'green'
  },

  dado:{
    color: 'white'
  }
});

export default RelatorioGeral;