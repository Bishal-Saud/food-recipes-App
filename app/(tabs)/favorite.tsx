import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import FavoriteCard from '@/components/FavoriteCards'
import { categoriesJson } from '@/constants/categoriesJson'

const Favorite = () => {
  

  return (
    <ScrollView  className="">
      
      <View className='mx-5 flex flex-row flex-wrap justify-between my-5 gap-3'> 
        {
categoriesJson.map((item)=>(

  <FavoriteCard key={item.id} item={item}/>
))
        }
</View>
      
                  </ScrollView>
  )
}

export default Favorite