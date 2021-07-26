import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Tabuada from './screens/Tabuada'
import Distancia from './screens/Distancia'
import Elevado from './screens/Elevado'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tabuada" component={Tabuada} />
        <Stack.Screen name="Distancia" component={Distancia} />
        <Stack.Screen name="Quadrado e Cubo" component={Elevado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}