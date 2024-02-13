import { View, Text } from 'react-native'
import React from 'react'

const Appointment = ({ data }) => {
  return (
    <View>
      <Text>{data.username}</Text>
      <Text>{data.description}</Text>
      <Text>{data.hour}</Text>
    </View>
  )
}

export default Appointment