import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import PerfilUsuarioScreen from './screens/PerfilUsuarioScreen/PerfilUsuarioScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CitaConfirmScreen from './screens/CitaConfirmScreen/CitaConfirmScreen';
import PerfilDoctor from './screens/PerfilDoctor/PerfilDoctor';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'PerfilUsuarioScreen') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Register') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Cita Agendada') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
            } else if (route.name === 'Perfil del Doctor') {
              iconName = focused ? 'ios-medical' : 'ios-medical-outline'; // Cambiado a icono de médico
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
        }}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="PerfilUsuarioScreen" component={PerfilUsuarioScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Cita Agendada" component={CitaConfirmScreen} />
        <Tab.Screen name="Perfil del Doctor" component={PerfilDoctor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
