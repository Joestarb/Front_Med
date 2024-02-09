import { View, Text } from 'react-native';
import React from 'react';

const HourPicker = ({ hour }) => {
  return (
    <View style={{backgroundColor: '#1178BD', borderRadius: 10, marginRight: 8}}>
    <Text
      style={{
        paddingVertical: 12,
        fontSize: 20,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 15
      }}
    >
      {hour}
    </Text>
    </View>
  );
};

export default HourPicker;
