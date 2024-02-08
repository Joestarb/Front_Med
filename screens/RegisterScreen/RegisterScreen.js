// screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import loginImg from "../../assets/LoginAssets/login.png";

const RegisterScreen = ({ navigation }) => {



    return (
        <View className="  bg-white h-screen  flex items-center"  >
            <View>
                <Animatable.Image source={loginImg} className=" w-[350] h-[350]" />
                <Text className=" font-bold text-4xl ml-8 mb-2" >Registro</Text>
                <View className="flex mb-3 gap-2">
                <TextInput placeholder="Nombre Completo" className=" border-2 p-4  rounded-xl" />
                <TextInput placeholder="Numero Telefonico" className=" border-2 p-4  rounded-xl" />
                <TextInput placeholder="Correo Electrónico" className=" border-2 p-4  rounded-xl" />
                <TextInput placeholder="Contraseña" className=" border-2 p-4  rounded-xl" />
                </View>
                <Text className=" text-center bg-[#1178BD] text-white text-2xl  rounded-2xl  font-semibold p-2" onPress={() => navigation.navigate('PerfilUsuarioScreen')}>Registrarse</Text>
                <Text className=" mt-3 text-center font-bold">Ya tienes una cuenta? Inicia sesión</Text>
            </View>
        </View>
    );
};

export default RegisterScreen;
1