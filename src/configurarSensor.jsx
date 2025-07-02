import React from 'react';
import {View, StyleSheet,Text, TextInput, TouchableOpacity} from 'react-native';


const ConfigurarSensor = () => {
  const [text, onChangeText] = React.useState(' ');
  

  return (
    <View style={styles.container}>

       {/*TITULO*/}
       <Text style={styles.titulo}>VAMOS CONFIGURAR SEU SENSOR!</Text>

      {/*FORMULARIO PARA PREENCHIMENTO DOS DADOS*/}
      <View style={styles.formulario}>

        {/*INSIRIR NOME DO SENSOR*/}
        <Text style={styles.subtitulo}>DE UM NOME PARA O SEU SENSOR:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        {/*INSIRIR TAMANHO DA ÁREA*/}
        <Text style={styles.subtitulo}> QUAL O TAMANHO DA ÁREA DE ONDE ELE FICA?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        {/*INSIRIR CULTIVO*/}
        <Text style={styles.subtitulo}>O QUE É CULTIVADO LÁ?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        {/*INSIRIR ENDEREÇO*/}
        <Text style={styles.subtitulo}>QUAL É O ENDEREÇO DA SUA PROPRIEDADE?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        {/*INSIRIR DATA DE INSTALAÇÃO*/}
        <Text style={styles.subtitulo}>QUAL É A DATA DE INSTALAÇÃO DO SENSOR</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        {/*INSIRIR RESPONSÁVEL*/}
        <Text style={styles.subtitulo}>QUEM É O RESPONSÁVEL PELO SENSOR?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <TouchableOpacity style={styles.botao}>
        CONFIGURAR
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10
    },

    titulo: {
        color: 'white',
        fontSize:20,
        fontWeight: '600',
        marginTop: 20,
       
      },

    subtitulo:{
      color:'green',
      fontSize: 15,
      marginBottom: 10,
      fontWeight: '600',
    },

    formulario: {
        color: 'white',
        marginTop: 20
    },

    input: {
        color: 'white',
        height: 40,
        borderWidth: 1,
        borderColor: 'green',
        padding: 10,
        marginBottom: 15
    },

    botao:{
      backgroundColor: 'green',
      height: 40,
      width: 345,
      marginBottom: 10,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 15,
      fontWeight: '600',
      fontFamily: 'Arial'
    },
});

export default ConfigurarSensor;