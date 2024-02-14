import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'; // Import TextInput
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import rodri from "../../assets/rodri.png";
import Mas from "../../assets/Mas.png";
import Logout from '../../assets/Logout.png';
const PerfilUsuarioScreen = ({ name }) => {
    const navigation = useNavigation(); // Initialize navigation

    return (
        <View className="flex-1 p-5 bg-white">
            <Text className="text-2xl font-bold">                                                       <Image source={Logout} className="w-8 h-8" />
            </Text>

            {/* Contenedor para la imagen y el texto */}
            <View className="flex flex-col items-center justify-center mb-6">
                <Image source={rodri} className="w-36 h-36 mb-6" />
                <Text className="text-2xl font-bold">Rodrigo Bojorquez {name}</Text>
            </View>

            {/* Acerca de mi */}
            <View className="mb-8">
                <Text className="text-xl font-bold mb-3 bg-[#E9E9E9] px-4 py-1 rounded-md">Acerca de mi</Text>
                <TouchableOpacity onPress={() => navigation.navigate('InfoPersonal')}>
                <View className="flex flex-row justify-between">
                    <Text className="text-lg my-1">Informacion Personal</Text>
                    <Image source={Mas} />
                </View>
                </TouchableOpacity>
                <View className="flex flex-row justify-between">
                    <Text className="text-lg my-1">Contacto</Text>
                    <Image source={Mas} />
                </View>
                <View className="flex flex-row justify-between">
                    <Text className="text-lg my-1">Seguro Medico</Text>
                    <Image source={Mas} />
                </View>
                <View className="flex flex-row justify-between">
                    <Text className="text-lg my-1">Historial Medico</Text>
                    <Image source={Mas} />
                </View>
                <View className="flex flex-row justify-between">
                    <Text className="text-lg my-1">Historial de citas</Text>
                    <Image source={Mas} />
                </View>
            </View>
        </View>
    );
};

export default PerfilUsuarioScreen;
