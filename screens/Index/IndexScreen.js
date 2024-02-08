import React from 'react';
import { View, Text, Image } from 'react-native';
import rodri from "../../assets/rodri.png";
import Mas from "../../assets/Mas.png";
import notificacion from "../../assets/notificacion.png";
import Privacidad from "../../assets/Privacidad.png";
import Configcuenta from "../../assets/Configcuenta.png";
import Logout from '../../assets/Logout.png';
const IndexScreen = ({ name }) => {
    return (
        <View className="flex-1 p-5 bg-white">
            <Text className="text-2xl font-bold mb-5">Perfil de usuario                        <Image source={Logout} className="w-8 h-8 my-6" />
            </Text>

            {/* Contenedor para la imagen y el texto */}
            <View className="flex flex-col items-center justify-center mb-6">
                <Image source={rodri} className="w-36 h-36 my-6" />
                <Text className="text-2xl font-bold">Rodrigo Bojorquez {name}</Text>
            </View>

            {/* Acerca de mi */}
            <View className="mb-8">
                <Text className="text-xl font-bold mb-3 bg-[#E9E9E9] px-2 py-1 rounded-md">Acerca de mi</Text>
                <View className="flex flex-row justify-between">
                    <Text className="text-lg my-1">Informacion personal</Text>
                    <Image source={Mas} />
                </View>
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

            {/* Preferencias de la app */}
            <View className="mb-8">
                <Text className="text-xl font-bold mb-3 bg-[#E9E9E9] px-2 py-1 rounded-md">Preferencias de la app</Text>
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-lg my-1 mr-2">
                        <Image source={Configcuenta} className=" mr-2" />   Configuración de Cuenta
                    </Text>
                    <Image source={Mas} />
                </View>
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-lg my-1 mr-2">
                        <Image source={notificacion} className="mr-2" />   Configuración de Notificaciones
                    </Text>
                    <Image source={Mas} />
                </View>
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-lg my-1 mr-2">
                        <Image source={Privacidad} className="mr-2" />   Privacidad y Seguridad
                    </Text>
                    <Image source={Mas} />
                </View>
            </View>
        </View>
    );
};

export default IndexScreen;
