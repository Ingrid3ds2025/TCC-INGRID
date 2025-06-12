import React,{ Component } from "react";
import {View, Text, Image, StyleSheet,SafeAreaView, TouchableOpacity} from "react-native";

class TelaInicial extends Component{
    render(){ 
        return( 
            <SafeAreaView style={styles.container}>
                <View>
                    <Text> Meu App </Text>

                    <TouchableOpacity>
                        <Text style={styles.menu}> {'\u2630'}</Text>
                    </TouchableOpacity>
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
        color: 'white',
        fontSize: 50,
    }
});