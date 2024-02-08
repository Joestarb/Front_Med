import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Agendado from "../../assets/Agendado.png";
export default function CitaConfirmScreen() {
    return (
        <View className="  bg-white h-screen  flex items-center"  >
            <View>
                <Animatable.Image source={Agendado} className="mt-20 items-center flex justify-center w-[250] h-[250]" />
                <Text className=" font-bold text-4xl text-[#11AEBD] text-center mt-10">Agendado</Text>
                <Text className=" mt-3 text-center text-lg font-bold">Tu cita ha sido agendada</Text>
                <Text className=" text-center bg-[#1178BD] text-white text-2xl  rounded-2xl  font-semibold p-2 mt-48" onPress={() => navigation.navigate('')}>Regresar</Text>
            </View>
        </View>
    );
};