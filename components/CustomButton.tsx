import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props{
  onpress:()=> void;
  title:string
}

const CustomButton:React.FC<Props> = ({onpress,title}) => {
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