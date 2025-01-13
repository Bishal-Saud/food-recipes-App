import React from 'react'
import { Text, View } from 'react-native'


interface EmptyStateProps{
    title:string,
    subtitles:string
}

const EmptyState:React.FC<EmptyStateProps>  = ({title,subtitles}) => {
  return (
    <View className=' justify-center items-center px-4'>
      {/* <Image source={images} className='w-[270px] h-[215px]' resizeMode='contain'/> */}
      <Text className='font-psemibold mt-2 text-xl text-white'>
          {title}
        </Text>
        <Text className='text-sm font-pmedium text-gray-100'>
        {subtitles}
        </Text>

  
    </View>

  )
}

export default EmptyState