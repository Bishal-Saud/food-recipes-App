import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { icons, images,foods } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useFocusEffect } from "expo-router";

import {categoriesJson} from '@/constants/categoriesJson'




export const RecipeCategoryCard = ({ source, title, onpress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className=" relative rounded-lg justify-evenly items-center h-36 w-[48%] bg-white  shadow-black  shadow-2xl"
      onPress={onpress}
    >
      <Image
        source={source}
        style={{ width: "100%", height: "100%" }}
        className="bg-black opacity-80 rounded-lg"
        resizeMode="cover"
      />
      <Text className="absolute bottom-1 text-white text-center text-sm font-psemibold mt-2">
        {title}
      </Text>
    </TouchableOpacity>
  );
};


const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };


  useFocusEffect(
    React.useCallback(() => {
      setSelectedCategory(null);
    }, [])
  );

  const selectedCategoryData =
    selectedCategory &&
    categoriesJson.find((category) => category.id === selectedCategory);

    
  return (
    <>

      {selectedCategory  ? (
        <ScrollView className="m-5 ">
          <View>
            <Text className="text-2xl font-psemibold text-pink-500">
            {selectedCategoryData.title}
            </Text>
          </View>
        
          <View className=" my-5 ">
            {
        

                selectedCategoryData.items.map((item,i)=>(
                  <View key={i} className="flex flex-row my-2 shadow-black shadow-2xl rounded-lg bg-white ">
                  <Image
                    source={item.image}
                    className="h-32 w-32"
                    resizeMode="cover"
                  />
                  <View className="mx-3 my-1 flex-1 ">
                    <Text className="text-xl font-semibold">{item.name}</Text>
                    <Text className="my-1">
                {item.description.slice(0,50)}...
                    </Text>
                 <Text className="text-blue-500 underline my-2">Read More</Text>
                  </View>
                </View>

                ))
            
           
            }
          
          </View>
          <CustomButton title="Back to Categories" onpress={()=>setSelectedCategory(null)}/>
        </ScrollView>
      ) : (
        <ScrollView className="mt-2 p-5">
          <View className="flex  w-full flex-row justify-between items-center">
            <Text className="text-2xl font-psemibold text-pink-500">All Categories</Text>
          
          </View>

          <View className="mx-5 flex flex-row flex-wrap justify-between mt-5 gap-3">
            {categoriesJson.map((item) => (
              <RecipeCategoryCard
                key={item.id}
                source={item.image}
                title={item.title}
                onpress={() => handleCategoryClick(item.id)}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Category;
