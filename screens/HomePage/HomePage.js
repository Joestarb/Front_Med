import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import rodri from "../../assets/rodri.png";
import OneNotifi from "../../assets/OneNotifi.png";
import Buscar from "../../assets/Buscar.png";
import Micro from "../../assets/Micro.png";

const HomePage = () => {
    const [search, setSearch] = React.useState('');

    const updateSearch = (text) => {
        setSearch(text);
    };

    return (
        <ScrollView className="bg-white h-screen">
            <View className="items-center bg-white">
                <View className="flex flex-row items-center bg-white justify-around">
                    <Image source={rodri} className="w-24 h-24 mr-4" />
                    <View>
                        <Text className="text-2xl font-bold text-[#858585]">Bienvenido,</Text>
                        <Text className="text-2xl font-bold text-black mt-1">Rodrigo Bojorquez</Text>
                    </View>
                    <Image source={OneNotifi} />
                </View>
                <View className="flex flex-row mx-4 items-center mt-4 px-4 py-4 bg-gray-200 rounded-lg">
                    <Image source={Buscar} className="mr-3"/>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Buscar un Doctor"
                        onChangeText={updateSearch}
                        value={search}
                    />
                    <Image source={Micro} />
                </View>
            </View>
        </ScrollView>
    );
};

export default HomePage;
