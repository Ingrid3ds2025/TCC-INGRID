import { Component } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcon";

class TelaInicial extends Component{
    render(){ 
        return( 
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>

                    </Text>

                    <TouchableOpacity>
                        <Icon name={isOpenMenu ? 'close' : 'menu' } size={30} color="000"/>
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
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'black',
        marginBottom: 50,
    },

});