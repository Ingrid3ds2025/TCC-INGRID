import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DescricaoArea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.campo}>
                    <View> 
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DescricaoArea;