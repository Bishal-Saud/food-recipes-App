import CustomButton from '@/components/CustomButton'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const Recipes = () => {
  const {title,imageUrl,para,instructions} = useLocalSearchParams()
  const decodedInstructions = Array.isArray(instructions) 
  ? instructions[0] 
  : instructions;
const parsedInstructions = JSON.parse(decodeURIComponent(decodedInstructions));

const recipeInstructions = parsedInstructions[0].cookingInstructions[0]
 
const router = useRouter()

  return (
    
   <ScrollView className=' mx-5'>
    <View className='flex items-center mt-10'>
      <Image source={imageUrl} className='w-40 h-40 rounded-full' resizeMode='cover'/>
      <Text className='text-2xl font-psemibold mt-2 text-pink-500'>{title}</Text>
    </View>
    <View className=''>
      <Text className='text-center mt-2 font-psemibold'>{"👉🏼"} {para} {"👈🏼"}</Text>
    </View>

    <View className=' mt-5'>
      <Text className='text-start font-bold text-pink-500 text-3xl'>Ingredients</Text>
      <Text className='text-start '>{parsedInstructions[0].ingredients}</Text>
    </View>

    <View className=' mt-5 mb-10'>
      <Text className='text-start font-bold text-pink-500 text-3xl'>Cooking Instructions</Text>
      <Text className='text-start mt-5  font-psemibold'><Text className='text-2xl font-bold text-pink-500'>{"👉🏼"} </Text>{""}{recipeInstructions.one}</Text>
      <Text className='text-start mt-5  font-psemibold'><Text className='text-2xl font-bold text-pink-500'>{"👉🏼"} </Text>{""}{recipeInstructions.two}</Text>
      <Text className='text-start mt-5  font-psemibold'><Text className='text-2xl font-bold text-pink-500'>{"👉🏼"} </Text>{""}{recipeInstructions.three}</Text>
      <Text className='text-start mt-5  font-psemibold'><Text className='text-2xl font-bold text-pink-500'>{"👉🏼"} </Text>{""}{recipeInstructions.four}</Text>
      <Text className='text-start mt-5  font-psemibold'><Text className='text-2xl font-bold text-pink-500'>{"👉🏼"} </Text>{""}{recipeInstructions.five}</Text>
      {recipeInstructions.six && (
     <Text className='text-start mt-5  font-psemibold'><Text className='text-2xl font-bold text-pink-500'>{"👉🏼"} </Text>{""}{recipeInstructions.six}</Text>
      )}
 
    </View>
<CustomButton title="Back to Home" onpress={()=>router.push('/home') } />
   </ScrollView>
  )
}

export default Recipes