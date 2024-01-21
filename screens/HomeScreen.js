// screens/HomeScreen.js
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.fadeIn(4000); // Puedes ajustar la animación según tus necesidades
    }, []);

    return (
        <View className=" flex-1 justify-center items-center bg-[#8761cf]  "  >
            <Animatable.View ref={titleRef}>
                <Animatable.Text className="text-white font-bold text-4xl" animation="slideInDown" iterationCount={1} direction="alternate">To-Do App</Animatable.Text>
                <Animatable.Text className="text-white text-center" animation="slideInUp" iterationCount={1} direction="alternate" onPress={() => navigation.navigate('TaskApp')}>Ir a TaskApp</Animatable.Text>
            </Animatable.View>
        </View>
    );
};

export default HomeScreen;
1