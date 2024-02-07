// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Index from './screens/Index/IndexScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: ' ',
          }}
          name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{
            title: ' ', 
          }}
          name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
