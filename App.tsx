// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'; // Renombra App como Home si no lo has hecho
import Camara from './Screens/Camara';
import Propiedades from './Screens/Propiedades';
import Lista from './Screens/Lista';
import Informacion from './Screens/Informacion'; // Ajusta el path si es diferente

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camara" component={Camara} options={{ headerShown: false }} />
        <Stack.Screen name="Propiedades" component={Propiedades} options={{ headerShown: false }}/>
        <Stack.Screen name="Lista" component={Lista} options={{ headerShown: false }}/>
        <Stack.Screen name="Informacion" component={Informacion} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
