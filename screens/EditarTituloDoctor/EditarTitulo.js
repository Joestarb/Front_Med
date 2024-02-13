import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, Text, View } from 'react-native-animatable'
import { Button, TextInput } from 'react-native-paper'

export default function EditarTitulo() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const handleDateChange = (event, date) => {
        if (date !== undefined) {
            setSelectedDate(date);
        }
    };

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    return (
        <View className="flex-1 p-5 bg-white">
            <Text className="text-2xl text-[#11AEBD] text-center mt-6 font-bold">
                Edite sus datos
            </Text>
            <Text className="text-xl text-[#11AEBD] text-left mt-3 font-bold">
                Datos de la institucion
            </Text>
            <View className='mt-2' >
                <Text className="text-xl  text-left mt-3 font-bold">
                    Universidad de estudios
                </Text>
                <TextInput
                    className='w-full h-12 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                    style={{ underlineColorAndroid: 'transparent' }}
                    placeholder='Nombre de la institución'
                />
            </View>
            <View className='mt-2' >
                <Text className="text-xl  text-left mt-3 mb-1 font-bold">
                    Especialidad
                </Text>
                <TextInput
                    className='w-full h-12 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                    style={{ underlineColorAndroid: 'transparent' }}
                    placeholder='Nombre de su especialidad'
                />
            </View>

        </View>
    )
}