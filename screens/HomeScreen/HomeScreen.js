// screens/HomeScreen.js
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import loginImg from "../../assets/LoginAssets/login.png";

const HomeScreen = ({ navigation }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.fadeIn(4000); // Puedes ajustar la animación según tus necesidades
    }, []);

    return (
        <View className="  bg-white h-screen  "  >
            <Animatable.View ref={titleRef}>
                <Animatable.Image source={loginImg} className=" w-[350] h-[350]" />
                <Animatable.Text className=" font-bold text-4xl" animation="slideInDown" iterationCount={1} direction="alternate">Inicia sesión</Animatable.Text>
                <Animatable.Text className=" text-center" animation="slideInUp" iterationCount={1} direction="alternate" onPress={() => navigation.navigate('Index')}>Ir a TaskApp</Animatable.Text>
            </Animatable.View>
        </View>
    );
};

export default HomeScreen;
1