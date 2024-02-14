import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import rodri from "../../assets/rodri.png";

const InfoPersonal = ({ name, onPressRemove, onPressEdit, onPressSave, onChangeName, onChangeSpecialty, onChangeLicense, onChangeContact, aboutMe, onPressChangePhoto, specialty, license, contact, onChangeAboutMe }) => {
    return (
        <ScrollView className="flex-1 p-4 bg-white">
            <Text className="text-2xl font-bold mb-4 text-center text-[#11AEBD]">Edite sus datos</Text>
            <Text className="text-xl font-bold mb-2 text-[#11AEBD]">Foto de Perfil</Text>
            <View className="flex flex-row items-center mb-4">
                <TouchableOpacity className="w-24 h-24 rounded-full overflow-hidden mr-2" onPress={onPressChangePhoto}>
                    <Image source={rodri} className="w-full h-full" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#1178BD] py-2 px-4 rounded-md ml-4 mr-2" onPress={onPressEdit}>
                    <Text className="text-white font-bold">Cambiar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#D9D9D9] py-2 px-4 rounded-md" onPress={onPressRemove}>
                    <Text className="text-black font-bold">Remover</Text>
                </TouchableOpacity>
            </View>
            <Text className="text-xl font-bold mb-2 text-[#11AEBD]">Datos personales</Text>
            <Text className="text-sm font-bold mb-1">Nombre Completo</Text>
            <TextInput
                className="h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2"
                value={name}
                onChangeText={onChangeName}
                placeholder="Introduzca su nombre completo"
            />
            <Text className="text-sm font-bold mb-1">Especialidad</Text>
            <TextInput
                className="h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2"
                value={specialty}
                onChangeText={onChangeSpecialty}
                placeholder="Introduzca su especialidad médica"
            />
            <Text className="text-sm font-bold mb-1">Numero de licencia</Text>
            <TextInput
                className="h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2"
                value={license}
                onChangeText={onChangeLicense}
                placeholder="Introduzca su número de licencia médica"
            />
            <Text className="text-sm font-bold mb-1">Numero de contacto</Text>
            <TextInput
                className="h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2"
                value={contact}
                onChangeText={onChangeContact}
                placeholder="Introduzca su número de contacto"
            />
            <Text className="text-sm font-bold mb-1">Acerca de mí:</Text>
            <TextInput
                className="h-20 shadow-md bg-[#D9D9D9] rounded-md px-4 py-2 mb-2"
                multiline
                value={aboutMe}
                onChangeText={onChangeAboutMe}
                placeholder="Agrega una pequeña descripción sobre ti"
            />
            <TouchableOpacity className="text-center bg-[#1178BD] text-white text-2xl flex justify-center rounded-2xl  font-semibold p-2 mt-2 mb-7" onPress={onPressSave}>
                <Text className="text-white text-center text-2xl flex justify-center rounded-2xl  font-semibold p-2">Guardar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default InfoPersonal;
