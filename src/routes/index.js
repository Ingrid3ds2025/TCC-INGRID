import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../../src/pages/telas/telaInicial';  // Certifique-se de que o caminho está correto
import PerfilUsuario from '../../src/pages/telas/perfilUsuario';
import RelatorioGeral from '../../src/pages/telas/relatorioGeral';
import Welcome from '../pages/welcome/bemVindo';
import SingIn from '../pages/singIn/telaLogin';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    
      <Stack.Navigator>

<Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: 'WELCOME',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: false,  // Ocultar o cabeçalho se necessário
          }}
        />
        
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}  // Passando o componente aqui
          options={{ headerShown: false }}  // Caso queira ocultar o cabeçalho dessa tela
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{
            title: 'SOBRE O PRODUTO',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="RelatorioGeral"
          component={RelatorioGeral}
          options={{
            title: 'RELATÓRIO GERAL',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
       
        <Stack.Screen
          name="SignIn"
          component={SingIn}
          options={{
            title: 'Sign In',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
   
  );
}
