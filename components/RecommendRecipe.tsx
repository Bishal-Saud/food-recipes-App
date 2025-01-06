import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'



const RecommendRecipe = ({data :{item}}) => {
    
  const router = useRouter()
    
  return (
   <TouchableOpacity
   activeOpacity={0.6}
   onPress={()=>{
    const instructionsString = encodeURIComponent(JSON.stringify(item.instructions));
    router.push(`/recipes/${item.id}?title=${item.title}&imageUrl=${item.imageUrl}&para=${item.para}&instructions=${instructionsString}`)}}
   >
    <View className='w-full h-full mt-5 mb-5 mx-1  rounded-lg' >
        <View className='w-[300px] h-[250px]' >
        <Image source={item.imageUrl} style={{height:"100%",width:"100%"}} resizeMode='cover' className='rounded-lg'/>
        </View>
        <Text className='text-xl text-center font-psemibold mt-2 text-pink-500'>
            {item.title}
            </Text>
        {/* <Text className='text-sm'>{item.para}</Text> */}
        </View>
   </TouchableOpacity>
  )
}

export default RecommendRecipe