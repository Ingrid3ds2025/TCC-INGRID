import { Component } from "react";
import {View, Text, Image, StyleSheet} from "react-native";

class Tela extends Component{
    render(){ 
        return( 
            <View style={styles.container}>
                <View style={styles. divisao}>
                    <Text>teste</Text>
                </View >

                <View style={styles. divisao}>
                     <Text>teste</Text>
                </View>

                <View style={styles. divisao}>
                    <Text>teste</Text>
                </View>

                <View style={styles. divisao}>
                    <Text>teste</Text>
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
        marginBottom: 50,
    },

    divisao:{
        borderWidth: 1,
        borderColor: '#4169e1',
        height: 100,
        width: 150,
        marginBottom: 20,
    }
});