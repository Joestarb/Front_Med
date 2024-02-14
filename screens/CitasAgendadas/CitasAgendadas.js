import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const CitasAgendadas = () => {
    return (
        <View className="p-5 py-10">
            <View className="flex flex-row items-center gap-5 text-xl ">
                <Ionicons size={30} name="arrow-back-outline" />
                <Text className="font-bold text-xl" >Citas Agendadas</Text>
            </View>
            <View className='flex flex-col items-center justify-center py-4'>
                <Text className='text text-3xl text-blue-400 font-semibold'>Citas Agendadas</Text>
            </View>

            <Text className='text-xl text-blue-400 font-medium '>15 de Febrero del 2024</Text>
            <View className="flex mb-3 py-4 gap-4 p-4">
                <View className="bg-slate-300 w-full h-32 rounded-md shadow-md shadow-black p-2">
                    <View className="flex flex-row justify-between">
                        <Text className=" text-lg">Juanito Perez</Text>
                        <Text className="text-lg"> 3:00pm</Text>
                    </View>
                    <Text>Descripcion de la cita:</Text>

                </View>

                <View className="bg-slate-300 w-full h-32 rounded-md shadow-md shadow-black p-2">
                    <View className="flex flex-row justify-between">
                        <Text className=" text-lg">Juanito Perez</Text>
                        <Text className="text-lg"> 3:00pm</Text>
                    </View>
                    <Text>Descripcion de la cita:</Text>

                </View>


            </View>

        </View>
    )
}

export default CitasAgendadas