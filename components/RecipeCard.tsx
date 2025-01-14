import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface JsonDataProps {
  id:string;
  imageUrl:ImageSourcePropType;
  title:string;
  para:string;
  instructions:{
    ingredients:string;
    cookingInstructions:{
      one?:string;
      two?:string;
      three?:string;
      four?:string;
      five?:string;
      six?:string;
      seven?:string;
      eight?:string;
      nine?:string;
      ten?:string;
    }[];
  }[];
}

interface DataProps {
  data : JsonDataProps
}



const RecipeCard:React.FC<DataProps> = ({data }) => {
 
  
    const scaleValue = useRef(new Animated.Value(1)).current;
  
   const router = useRouter()
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

onPress={() =>{
  const instructionsString = encodeURIComponent(JSON.stringify(item.instructions));
  router.push(`/recipes/${item.id}?title=${item.title}&imageUrl=${item.imageUrl}&para=${item.para}&instructions=${instructionsString}`)}}

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