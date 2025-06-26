import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RelatorioGeral extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.informacoes}>
            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Umidade do solo:</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Temperatura:</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Chuva:</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>

            <View style={styles.campo}>
                <Text style={styles.subtitulo}>Luz solar:</Text>
                <Text style={styles.dado}>Dado</Text>
            </View>
        </View>

        {/*GRÁFICO */}

        <View style={styles.grafico}>
            <Text>Irrigação Realizada em 3 meses </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // <-- importante para deixar os filhos no início horizontalmente
    padding: 20
  },

  informacoes:{
    flexDirection: 'column',
    alignSelf: 'flex-start', // <-- este é o mais importante
    marginTop: 20,
  },

  campo: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
   
  },

  subtitulo:{
    color: 'green',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10
  },

  dado:{
    color: 'white',
    fontSize: 20,
  }
});

export default RelatorioGeral;