import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telaInicial';
import PerfilUsuario from './src/perfilUsuario';
import RelatorioGeral from './src/relatorioGeral';
import Welcome from '../pages/welcome/bemVindo';
import SingIn from '../pages/singIn/telaLogin';



const Stack = createNativeStackNavigator(); 

export default function Routes() {
  return (

          <NavigationContainer>
                    <Stack.Navigator> 
                      <Stack.Screen 
                        name="TelaInicial" 
                        component={TelaInicial}
                         options={{headerShown: false}}
                       />
         
                       <Stack.Screen 
                         name="PerfilUsuario" 
                         component={PerfilUsuario}
                         options={{
                           title: 'SOBRE O PRODUTO',
                           headerStyle: {
                             backgroundColor: 'black',
                           },
                           headerTintColor: 'white',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
         
                         }}
                       />
         
                       <Stack.Screen 
                         name="RelatorioGeral" 
                         component={RelatorioGeral}
                         options={{
                           title: 'RELATÓRIO GERAL',
                           headerStyle: {
                             backgroundColor: 'black',
                           },
                           headerTintColor: 'white',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
         
                         }}
                       />
                       <Stack.Screen 
                         name="Welcome" 
                         component={Welcome}
                         options={{
                           title: 'WELCOME',
                           headerStyle: {
                             backgroundColor: 'black',
                           },
                           headerTintColor: 'white',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
         
                         }}
                       />

                       <Stack.Screen 
                         name="sINGiN" 
                         component={SingIn}
                         options={{
                           title: 'SingIn',
                           headerStyle: {
                             backgroundColor: 'black',
                           },
                           headerTintColor: 'white',
                           headerTitleStyle: {
                             fontWeight: 'bold',
                           },
         
                         }}
                       />
         
                  
         
                        
                     </Stack.Navigator> 
                  </NavigationContainer>
  );
}

