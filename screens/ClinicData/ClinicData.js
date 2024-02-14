import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const ClinicData = () => {
    return (
        <View className="p-5 py-10">
            <View className="flex flex-row items-center gap-5 text-xl ">
                <Ionicons size={30} name="arrow-back-outline" />
                <Text className="font-bold text-xl" >Datos del Perfil</Text>
            </View>
            <View className='flex flex-col items-center justify-center py-4'>
            <Text className='text text-3xl text-blue-400 font-semibold'>Edite sus datos</Text>
            </View>

            <Text className='text-xl text-blue-400 font-medium '>Clinica Asignada</Text>
            <Text className='text-md text-blue-400 font-medium p-2'>Datos del consultorio</Text>
            <View className="flex mb-3 gap-2 py-4">
                <Text>Nombre</Text>
                <TextInput placeholder="Introduzca el nombre del consultorio" className=" border-2 px-4 py-2  rounded-xl" />
                
                <Text>Direccion</Text>
                <TextInput placeholder="Introduzca la direccion de la clinica" className=" border-2 px-4 py-2  rounded-xl" />
                
                <Text>Ciudad</Text>
                <TextInput placeholder="Introduzca la ciudad de la clinica" className=" border-2 px-4 py-2  rounded-xl" />
                
                <Text>Otros datos</Text>
                <TextInput placeholder="Introduzca otro dato relacionado a la clinica" className=" border-2 px-4 py-2  rounded-xl" />
                
                </View>

                <Text className=" text-center bg-[#1178BD] text-white text-2xl  rounded-2xl  p-4 font-semibold mt-16">Guardar</Text>
                
        </View>
    )
}

export default ClinicData