// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#8761cf', // Personaliza el color del fondo del encabezado
            },
            headerTintColor: 'white', // Personaliza el color del texto del encabezado
          }}
        name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
