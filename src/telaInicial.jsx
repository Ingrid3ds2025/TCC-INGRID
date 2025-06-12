import React,{ Component } from "react";
import {View, Text, Image, StyleSheet,SafeAreaView, TouchableOpacity} from "react-native";

class TelaInicial extends Component{
    render(){ 
        return( 
            <SafeAreaView style={styles.container}>
               
                {/* Nav Bar */}
                <View style={styles.navbar}>
                    <Text style={styles.textTitulo}> Meu App </Text>

                    <TouchableOpacity >
                        <Text style={styles.menu}> {'\u2630'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Renderiza a temperatura e coloca o icone do clima*/}
                <View style={styles.clima}>
                    <Text style={styles.textTemp}>Temperatura de  º C</Text>
                     
                     {/* Icone do clima */}
                </View>

                {/*Renderização dos dados da umidade*/}
                <View style={styles.umidade}>
                    {/*Indica ao qual dado se refere */}
                    <Text style={styles.textUmidade}>UMIDADE DO SOLO</Text>

                    <Text style={styles.textPorcentagem}>{/*Aqui vem o dado do sensor*/}%</Text>

                    {/*Mostra a quantia de vezes que foi feita a irrigação*/}
                    <Text style={styles.textIrrigacao}>Irrigação realizada {/*Quant. realizada*/} em {/*Dias*/} dias</Text>
                </View>
            </SafeAreaView>
           
        )
    };
}

export default TelaInicial;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginBottom: 50,
    },

    menu: {
        color: 'green',
        fontSize: 45,
    },

    navbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },

    textTitulo:{
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        fontFamily: 'poppins-black'
    },

    clima: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 40,
    },

    textTemp: {
        color: 'white',
    },

    umidade: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        marginTop: 100
    },
    
    textUmidade: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'arial',
        fontWeight: '600'
    },

    textPorcentagem:{
        color: 'white',
        fontSize: 70,
        fontWeight: '800'
    },

    textIrrigacao: {
        color: 'white',
    }

});