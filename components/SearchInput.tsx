import { icons } from '@/constants'
import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

const SearchInput = () => {
  return (
    <View className=" border-2 border-pink-500 rounded-2xl w-full h-16 px-4 bg-white items-center flex-row mt-5 space-x-4">
    <TextInput
      className=" text-base mt-0.5 text-primary flex-1 font-pregular"
      placeholder="Search for a video topic"
      placeholderTextColor="#CDCDE0"
    //   value={query}
    //   onChangeText={(e)=> setQuery(e)}
    />

    <TouchableOpacity 
    // onPress={()=>{
    //   if(!query){
    //     return Alert.alert("Missing query","Please input something to search results across database")
    //   }

    //   if(pathname.startsWith('/search')) router.setParams({query}) 
    //     else router.push(`/search/${query}`)
    // }}
    >
      <Image source={icons.search} className="w-5 h-5 " resizeMode="contain" style={{tintColor:"black"}}/>
    </TouchableOpacity>
  </View>
  )
}

export default SearchInput