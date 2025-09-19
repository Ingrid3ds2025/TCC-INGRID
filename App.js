import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './src/telaInicial';
import Routes from './src/routes';


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (

         
            <NavigationContainer>
              <StatusBar backgroundColor='#38A69D' barStyle='light-content'/>
              <Routes/> 
            </NavigationContainer>
             
          
          
  );
}

