import { Component } from "react";
import {View, Text, Image, StyleSheet} from "react-native";



class Tela extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            umidade: 30,
        };

        mostrarUmidade = () => {
           this.setState(prevState => {
            umidade = (prevState.umidade)
           });
        }
        
    }
    render(){ 
        return( 
            <View style={styles.container}>

                {/* TITULO DO PROJETO*/}
                <Text style={styles.titulo}>Resultado da Monitoração</Text>
                
                 {/* DADOS DO MONITORAMENTO*/}
                <View style={styles. divisao}>
                    <Text style={styles.textDados}>UMIDADE</Text>
                    <Text style={styles.textDados}> A umidade é de {this.mostrarUmidade()}</Text>
                </View >

                <View style={styles. divisao}>
                     <Text style={styles.textDados}>LUZ SOLAR</Text>
                </View>

                <View style={styles. divisao}>
                    <Text style={styles.textDados}>UMIDADE DO SOLO</Text>
                </View>

                <View style={styles. divisao}>
                    <Text style={styles.textDados}>TEMPERATURA</Text>
                </View>
            </View>
        )
    };
}

export default Tela;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
        
    
    },

    titulo:{
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 100
    },

    divisao:{
        borderWidth: 1,
        borderColor: '#4169e1',
        height: 100,
        width: 150,
        marginBottom: 20,
        alignItems: 'center',
        paddingTop: 5
    },

    textDados: {
        color: 'white',
        fontWeight: '500'
    }

});