import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telaInicial';
import SobreProduto from './src/sobreProduto';
import RelatorioGeral from './src/relatorioGeral';
import DescricaoArea from './src/descricaoArea';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (

    //  <NavigationContainer>
    //     <Stack.Navigator> 
    //       <Stack.Screen 
    //         name="TelaInicial" 
    //         component={TelaInicial}
    //         options={{headerShown: false}}
    //       />

    //       <Stack.Screen 
    //         name="SobreProduto" 
    //         component={SobreProduto}
    //         options={{
    //           title: 'Tela do produto',
    //           headerStyle: {
    //             backgroundColor: 'black',
    //           },
    //           headerTintColor: 'green',
    //           headerTitleStyle: {
    //             fontWeight: 'bold',
    //           },

    //         }}
    //       />

    //       <Stack.Screen 
    //         name="RelatorioGeral" 
    //         component={RelatorioGeral}
    //         options={{
    //           title: 'Relatório Geral',
    //           headerStyle: {
    //             backgroundColor: 'black',
    //           },
    //           headerTintColor: 'green',
    //           headerTitleStyle: {
    //             fontWeight: 'bold',
    //           },

    //         }}
    //       />

    //       <Stack.Screen 
    //         name="DescricaoArea" 
    //         component={DescricaoArea}
    //         options={{
    //           title: 'Descrição da Área',
    //           headerStyle: {
    //             backgroundColor: 'black',
    //           },
    //           headerTintColor: 'green',
    //           headerTitleStyle: {
    //             fontWeight: 'bold',
    //           },

    //         }}
    //       />
    //     </Stack.Navigator> 
    //  </NavigationContainer>

    // <SobreProduto/>
    <RelatorioGeral/>
  );
}

