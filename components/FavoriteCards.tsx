import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'



const FavoriteCard = ({item}) => {
  const [liked, setLiked] = useState(false);


  const handleDoubleClick = () => {
    setLiked(!liked); 
  };
  return (




 
       <TouchableOpacity key={item.id}
       activeOpacity={0.5}
       onPress={handleDoubleClick}
       className=" relative rounded-lg justify-evenly items-center  h-64  w-[48%] bg-white  shadow-black  shadow-2xl"
 
     >
       <Image
         source={item.image}
        
         className="bg-black h-36 w-36 opacity-80 rounded-lg"
         resizeMode="cover"
       />
    
 
    <View className="flex flex-row w-[100%] ">
 
   <View className="flex-1 ml-2 justify-center w-[70%] ">
     <Text className='text-md text-pink-500 font-psemibold'>{item.title}</Text>
     <Text className='mt-2 text-gray-500 text-sm '>
      {item.description.slice(0,20)}...
     </Text>
   </View>
 
 
   <View className="justify-end  w-[30%] ">
    {liked && (
  <Text className="text-black text-center text-2xl font-semibold">
  ❤️
 </Text>
    )}
   
   </View>
 </View>
 
     </TouchableOpacity>



               
  )
}

export default FavoriteCard