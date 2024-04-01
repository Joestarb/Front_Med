import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Platform, DatePickerIOS } from 'react-native';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import loginImg from "../../assets/LoginAssets/login.png";

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [emergencyContact, setEmergencyContact] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateOfBirth;
        setShowDatePicker(Platform.OS === 'ios');
        setDateOfBirth(currentDate);
    };

    const handleOpenDatePicker = () => {
        setShowDatePicker(true);
    };

    const handleRegister = () => {
        // Formatear la fecha de nacimiento
        const formattedDateOfBirth = dateOfBirth.toISOString().split('T')[0];
    
        // Crear el objeto de datos del usuario con la fecha formateada
        const userData = {
            username,
            lastname,
            email,
            password,
            rol: 'patient',
            appointments: [],
            contact_number: contactNumber,
            address: 'string',
            date_of_birth: formattedDateOfBirth,
            emergency_contact: emergencyContact
        };
    
        // Envía el JSON a la API
        fetch('http://192.168.1.93:8000/public/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                // Limpiar el formulario después del registro exitoso
                setUsername('');
                setLastname('');
                setEmail('');
                setPassword('');
                setContactNumber('');
                setDateOfBirth(new Date());
                setEmergencyContact('');
                
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Handle successful registration
            console.log('User registered successfully:', data);
            navigation.navigate('PerfilUsuarioScreen');
        })
        .catch(error => {
            // Handle error
            console.error('Error registering user:', error);
        });
    };
    
    

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Animatable.Image source={loginImg} className=" w-[350] h-[350]" />
                <Text className=" font-bold text-4xl ml-8 mb-2" >Registro</Text>
                <View className="flex mb-3 gap-2">
                    <TextInput
                        placeholder="Nombre"
                        className="border-2 p-4 rounded-xl"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        placeholder="Apellido"
                        className="border-2 p-4 rounded-xl"
                        value={lastname}
                        onChangeText={text => setLastname(text)}
                    />
                    <TextInput
                        placeholder="Número telefónico"
                        className="border-2 p-4 rounded-xl"
                        value={contactNumber}
                        onChangeText={text => setContactNumber(text)}
                    />
                 <TouchableOpacity
                     onPress={handleOpenDatePicker}
                     style={{ flexDirection: 'row', alignItems: 'center' }}
                     className="border-2 p-4 rounded-xl"
                       >
                      <Text>{dateOfBirth.toLocaleDateString()}</Text>
                      {showDatePicker && (
                       <DateTimePicker
                       testID="datePicker"
                        value={dateOfBirth}
                       mode="date"
                       is24Hour={true}
                       display="default"
                       onChange={handleDateChange}
                      />
                      )}
                     </TouchableOpacity>
                    <TextInput
                        placeholder="Contacto de emergencia"
                        className="border-2 p-4 rounded-xl"
                        value={emergencyContact}
                        onChangeText={text => setEmergencyContact(text)}
                    />
                    <TextInput
                        placeholder="Correo Electrónico"
                        className="border-2 p-4 rounded-xl"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Contraseña"
                        className="border-2 p-4 rounded-xl"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#1178BD', borderRadius: 8, padding: 10, marginBottom: 10 }}
                    onPress={handleRegister}
                >
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Registrarse</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 5 }}>¿Ya tienes una cuenta? Inicia sesión</Text>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;
