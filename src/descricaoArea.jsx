import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class DescricaoArea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.informacoes}>

          <View  style={styles.campo}> 
            <Text style={styles.subtitulo}>Área:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>
          
          <View style={styles.campo}>
            <Text style={styles.subtitulo}>Tamanho:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>
          
          <View style={styles.campo}>
            <Text style={styles.subtitulo}>Cultivo:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>
          
          <View style={styles.campo}>
            <Text style={styles.subtitulo}>Localização:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.subtitulo}>Sensores:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.subtitulo}>Instalação:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.subtitulo}>Responsável:</Text>
            <Text style={styles.dado}>Dado</Text>
          </View>  

        </View>

        {/*MAPA AQUI */}

        <View style={styles.localizacao}>
          <Text style={styles.textLocalizacao}>Localização</Text>
          <Image
            source={require('../imagens/maps.png')}
            style={{ width: 300, height: 200}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center', // <-- importante para deixar os filhos no início horizontalmente
    padding: 20
  },

  informacoes:{
    flexDirection: 'column',
    alignSelf: 'flex-start', // <-- este é o mais importante
    
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
  },

  localizacao:{
    alignItems: 'center',
  },

  textLocalizacao:{
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10
  },
});

export default DescricaoArea;