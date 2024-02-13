import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import rodri from "../../assets/rodri.png"
import Icon from "react-native-vector-icons/Fontisto"
import DoctorIcon from "../../assets/icons/DoctorIcon.svg"

// COMPONENTS
import Appointment from './components/appointment'

const HomeDoctor = () => {

  const profileInfo = {
    username: "Rodrigo",
    lastname: "Bojorquez"
  }

  const menusInfo = {
    left: "Sin asignar",
    right: "Sin asignar"
  }

  const nextAppointments = [
    {   
        id: 1,
        patient: "Juanito Perez",
        description: "juanito viene a revicion medica anual",
        hour: "15:00"
    },
    {
        id: 2,
        patient: "Alexis dolores",
        description: "alexis viene a cita con el  doctor por una lesion en la pierna izquierda",
        hour: "18:30"
    }
  ]

  return (
    <View style={{paddingTop: 25, paddingHorizontal: 15 ,flex: 1, backgroundColor: "white"}}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image source={rodri} style={{height: 70, width: 70}} />
            <View style={{marginLeft: 10}}>
                <Text style={{color: "#858585", fontSize: 20, marginBottom: 5}}>Bienvenido, Dr</Text>
                <Text style={{fontSize: 23, fontWeight: 550}}>{profileInfo.username} {profileInfo.lastname}</Text>
            </View>
        </View>
        
        <TouchableOpacity >
            <Icon name="bell" size={30} color="black"/>
        </TouchableOpacity>
      </View>

      <Text style={{color: "#11AEBD", fontSize: 25, fontWeight: 550, marginTop: 30}}>Cita del día</Text>

      {/* GRID DE HOME */}
      <View style={{marginTop: 20, }}>
        <View style={{backgroundColor: "#11BD92", borderRadius: 10, color: "white", alignItems: "center", justifyContent: "center"}}>
            <Text>
                La medicina es el arte de acompañar a lar personas en su camino hacia la salud
            </Text>
            <Image source={DoctorIcon} style={{height: 100, width: 100, tintColor: "black"}} />
        </View>
        <View>
            <View style={{}}>
                <Text>{menusInfo.left}</Text>
            </View>
            <View>
                <Text>{menusInfo.right}</Text>
            </View>
        </View>
      </View>

      <Text>Próximas citas</Text>

      <View>
        {nextAppointments?.map((appoinment) => (
            <Appointment data={appoinment} key={appoinment.id} />
        ))}
      </View>
    </View>
  )
}

export default HomeDoctor