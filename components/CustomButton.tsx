import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onpress,title}) => {
  return (
 <TouchableOpacity
            onPress={onpress}
            className="my-5 bg-pink-500 p-3 rounded-lg"
          >
            <Text className="text-white text-center">{title}</Text>
          </TouchableOpacity>
  )
}

export default CustomButton