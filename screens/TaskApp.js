import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import DateTimePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const TaskApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showMenu, setShowMenu] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const showInput = () => {
        setShowMenu(true);
    };

    const hiddenInput = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        // Cargar tareas almacenadas al inicio
        loadTasks();
    }, []);

    // Guardar y cargar tareas
    const loadTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const saveTasks = async (updatedTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.error('Error guardando tareas:', error);
        }
    };

    const addTask = () => {
        const currentDate = new Date();
        const newTaskObject = {
            text: newTask,
            date: currentDate.toISOString().split('T')[0], // Fecha en formato 'YYYY-MM-DD'
            time: currentDate.toLocaleTimeString(), // Hora en formato 'HH:mm:ss'
        };

        const updatedTasks = [...tasks, newTaskObject];
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
        setNewTask('');
        hiddenInput();
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    const showDatePickerInput = () => {
        setShowDatePicker(true);
    };

    const hideDatePicker = () => {
        setShowDatePicker(false);
    };

    return (

        <View className="bg-[#8761cf] flex-1">
            {showMenu ? (
                <>
                    <TextInput
                        placeholder="Enter a new task"
                        value={newTask}
                        onChangeText={(text) => setNewTask(text)}
                    />
                    
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            onChange={(event, date) => {
                                if (date !== undefined) {
                                    setSelectedDate(date);
                                }
                                hideDatePicker();
                            }}
                            mode="datetime"
                        />
                    )}

                    <Button title="Select Date" onPress={showDatePickerInput} />
                    <Button title="Add Task" onPress={addTask} />
                    <Button title="Cancelar" onPress={hiddenInput} />
                </>
            ) : (
                <>
                    <Text className="text-white text-xl text-center font-semibold">Task List</Text>
                    {tasks.length == 0 ?
                        (<View className="flex-1 justify-center items-center">
                            <Text className="text-white text-3xl text-center ">No hay tareas agregadas. Empieza agregando algunas</Text>
                        </View>)
                        :
                        (<>
                            {tasks.map((task, index) => (
                                <View key={index} className="">
                                    <Text>{task.text}</Text>
                                    <Text>Date: {task.date}</Text>
                                    <TouchableOpacity onPress={() => deleteTask(index)}>
                                        <Text className="text-red-500">Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </>)}

                    <Button title="Mostrar Menú" onPress={showInput} />
                </>
            )}
        </View>
    );
};

export default TaskApp;
