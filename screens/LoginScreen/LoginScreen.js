// screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import loginImg from "../../assets/LoginAssets/login.png";

const LoginScreen = ({ navigation }) => {



    return (
        <View className="  bg-white h-screen  flex items-center"  >
            <View>
                <Animatable.Image source={loginImg} className=" w-[350] h-[350]" />
                <Text className=" font-bold text-4xl ml-8" >Inicia sesión</Text>
                <View className="flex mb-3 gap-2">
                <TextInput placeholder="Correo Electrónico" className=" border-2 p-4  rounded-xl" />
                <TextInput placeholder="Contraseña" className=" border-2 p-4  rounded-xl" />
                </View>
                <Text className=" text-center bg-[#1178BD] text-white text-2xl  rounded-2xl  font-semibold p-2">Iniciar Sesion</Text>
                <Text className=" mt-3 text-center font-bold"onPress={() => navigation.navigate('Register')}>No tienes cuenta? Create una</Text>
            </View>
        </View>
    );
};

export default LoginScreen;
1