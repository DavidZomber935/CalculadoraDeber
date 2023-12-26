import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaCalculadora from './PantallaCalculadora';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculadora" component={PantallaCalculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;