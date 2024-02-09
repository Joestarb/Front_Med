import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";
import React from "react";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import HourPicker from "./components/HourPicker";

const ConsultarCitas = () => {
  const [date, setDate] = useState();
  const validHours = [
    '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM',
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM',
  ];

  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );
  const lastDate = getFormatedDate(
    today.setDate(today.getDate() + 365),
    "YYYY/MM/DD"
  );

  const handleChangeDate = (value) => {
    setDate(value);
  };

  const handleSeeMore = () => {
    console.log("ver mas");
  };

  const selectHour = () => {
    console.log("seleccionar hora")
  }

  const registerAppointment = () => {
    console.log("registrar cita");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ backgroundColor: "white", flex: 1, padding: 10, paddingTop: 25 }}>
        <Text className="mt-5" style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#11AEBD" }}>
          Consulta tus citas
        </Text>
        <DatePicker
          mode="calendar"
          current={date}
          minimumDate={startDate}
          maximumDate={lastDate}
          onDateChange={handleChangeDate}
        />
        <View style={{ marginTop: 25 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 7 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Citas</Text>
            <TouchableOpacity onPress={handleSeeMore}>
              <Text>Ver más</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{ maxHeight: 6 * (15 + 2 * 4) + 2 * (10 + 2 * 4) }}>
          <View className="bg-[#EEEDEB] mb-2 rounded-xl shadow-xl">
            <View style={{ padding: 10, fontSize: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text>Dr Juan Perez</Text>
              <Text>12:00pm</Text>
            </View>
            <Text className="-mt-4 p-2" style={{ fontSize: 15 }}>Medico- Especialidad Odontologia</Text>
          </View>
          <View className="bg-[#EEEDEB] mb-2 rounded-xl shadow-xl">
            <View style={{ padding: 10, fontSize: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text>Dr Juan Perez</Text>
              <Text>12:00pm</Text>
            </View>
            <Text className="-mt-4 p-2" style={{ fontSize: 15 }}>Medico- Especialidad Odontologia</Text>
          </View>
        <View className="bg-[#EEEDEB] mb-2 rounded-xl shadow-xl">
            <View style={{ padding: 10, fontSize: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text>Dr Juan Perez</Text>
              <Text>12:00pm</Text>
            </View>
            <Text className="-mt-4 p-2" style={{ fontSize: 15 }}>Medico- Especialidad Odontologia</Text>
          </View>
          <View className="bg-[#EEEDEB] mb-2 rounded-xl shadow-xl">
            <View style={{ padding: 10, fontSize: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text>Dr Juan Perez</Text>
              <Text>12:00pm</Text>
            </View>
            <Text className="-mt-4 p-2" style={{ fontSize: 15 }}>Medico- Especialidad Odontologia</Text>
          </View>
            <View className="bg-[#EEEDEB] mb-2 rounded-xl shadow-xl">
            <View style={{ padding: 10, fontSize: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text>Dr Juan Perez</Text>
              <Text>12:00pm</Text>
            </View>
            <Text className="-mt-4 p-2" style={{ fontSize: 15 }}>Medico- Especialidad Odontologia</Text>
          </View>
          </ScrollView>
        </View>



        <TouchableOpacity
          style={{ backgroundColor: "#1178BD", borderRadius: 5, padding: 10, marginTop: 20, marginBottom: 5 }}
          onPress={registerAppointment}
        >
          <Text style={{ color: "white", fontSize: 18, textAlign: "center", fontWeight: "bold" }}>Registrar cita</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ConsultarCitas;
