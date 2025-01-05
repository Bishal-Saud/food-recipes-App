import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'

const categoriesJson = [
  {
    "id": 1,
    "title": "Breakfast Delights",
    "image": images.breakfastDelights
  },
  {
    "id": 2,
    "title": "Lunch Favorites",
    "image": images.lunchFavorites
  },
  {
    "id": 3,
    "title": "Dinner Specials",
    "image": images.dinnerSpecial
  },
  {
    "id": 4,
    "title": "Fast Food & Snacks",
    "image":images.fastFood
  },
  {
    "id": 5,
    "title": "Healthy Recipes",
    "image": images.healthyRecipe
  },
  {
    "id": 6,
    "title": "Desserts & Sweets",
    "image": images.dessertsSweet
  },
  {
    "id": 7,
    "title": "Drinks & Beverages",
    "image": images.drinks
  }
]

 export const RecipeCategoryCard = ({source,title})=>{
  return(
<TouchableOpacity activeOpacity={0.5} className=' relative rounded-lg justify-evenly items-center h-36 w-[48%] bg-white  shadow-black  shadow-2xl'>
  <Image source={source} style={{width:"100%",height:"100%"}} className='bg-black opacity-80 rounded-lg' resizeMode='cover'/>
  <Text className='absolute bottom-1 text-white text-center text-sm font-psemibold mt-2'>{title}</Text>
</TouchableOpacity>
  )
}

const Category = () => {
  return (
    <ScrollView className='mt-2 p-5'>
    
      <View className='flex  w-full flex-row justify-between items-center'>
      <Text className='text-2xl font-semibold'>Category</Text>
      <View style={{backgroundColor:"#F72C5B"}} className='p-2 rounded-lg'>

      <Image source={icons.category} style={{tintColor:"white"}} className=' h-10 w-10 ' resizeMode='contain'/>
      </View>
      </View>

<View className='mx-5 flex flex-row flex-wrap justify-between mt-5 gap-3'>

{
  categoriesJson.map((item)=>(
<RecipeCategoryCard key={item.id} source={item.image} title={item.title}/>

  ))
}



</View>

    </ScrollView>
  )
}

export default Category