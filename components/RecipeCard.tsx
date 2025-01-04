import { View, Text, Image, FlatList, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { images } from '@/constants'

type Props = {
    data:[ item: {
        id: number;
        imageUrl: string;
        title: string;
        para: string;
      }]
   
  };

  interface Data{
    data:Props
  }


const RecipeCard = ({data}) => {
  
    const scaleValue = useRef(new Animated.Value(1)).current;
  
   
    const startZoomAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 0.9, // Zoom in
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1, // Zoom out
            duration: 900,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
  
    useEffect(() => {
      startZoomAnimation(); // Start animation on component mount
    }, []);
  
  return (
 <FlatList
 data={data}

 keyExtractor={(item)=> item.id}
 renderItem={({item})=>(
<Animated.View style={{transform:[{scale:scaleValue}]}}>


<TouchableOpacity 
activeOpacity={0.5}

>


    <View className='w-52 mt-5 mx-1  rounded-lg' >
    <View className='w-full h-[100px]' >
    
    <Image source={item.imageUrl} style={{height:"100%",width:"100%"}} resizeMode='cover' className='rounded-lg'/>
    </View>
    <Text className='text-md text-center font-psemibold mt-2'>{item.title}</Text>
    {/* <Text className='text-sm'>{item.para}</Text> */}
    </View>
    </TouchableOpacity>
    </Animated.View>
    
 )}

 horizontal
 />
  )
}

export default RecipeCard