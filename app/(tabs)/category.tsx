import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useFocusEffect } from "expo-router";

const categoriesJson = [
  {
    id: 1,
    title: "Breakfast Delights",
    image: images.breakfastDelights,
    description: "Start your day with a variety of delicious and energizing breakfast recipes.",
  },
  {
    id: 2,
    title: "Lunch Favorites",
    image: images.lunchFavorites,
    description: "Enjoy hearty and flavorful meals perfect for midday dining.",
  },
  {
    id: 3,
    title: "Dinner Specials",
    image: images.dinnerSpecial,
    description: "Savor these carefully curated dinner recipes for a satisfying evening meal.",
  },
  {
    id: 4,
    title: "Fast Food & Snacks",
    image: images.fastFood,
    description: "Quick, tasty, and fun options for snacks and fast food cravings.",
  },
  {
    id: 5,
    title: "Healthy Recipes",
    image: images.healthyRecipe,
    description: "Nutritious and wholesome recipes to keep you fit and healthy.",
  },
  {
    id: 6,
    title: "Desserts & Sweets",
    image: images.dessertsSweet,
    description: "Indulge in a variety of sweet treats and decadent desserts.",
  },
  {
    id: 7,
    title: "Drinks & Beverages",
    image: images.drinks,
    description: "Refresh yourself with a range of drinks and beverage recipes.",
  },
];


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
  const [categoriesRecipe, setCategoriesRecipe] = useState(false);


  const isCategories = ()=>{
    setCategoriesRecipe(true)
  } 

  useFocusEffect(
    React.useCallback(() => {
      setCategoriesRecipe(false);
    }, [])
  );
  return (
    <>
    {/* REMAINING : Create same things like For each title  */}
      {categoriesRecipe ? (
        <ScrollView className="m-5 ">
          <View>
            <Text className="text-2xl font-psemibold text-pink-500">
              Easy Food Recipe
            </Text>
          </View>
        
          <View className=" my-5 ">
            {
              categoriesJson.map((item)=>(
                <View key={item.id} className="flex flex-row my-2 shadow-black shadow-2xl rounded-lg bg-white ">
                <Image
                  source={item.image}
                  className="h-32 w-32"
                  resizeMode="cover"
                />
                <View className="mx-3 flex-1">
                  <Text className="text-xl font-semibold">{item.title}</Text>
                  <Text className="mt-2">
              {item.description.slice(0,200)}...
                  </Text>
               <Text className="text-blue-500 underline mt-2">Read More</Text>
                </View>
              </View>
              ))
            }
          
          </View>
        </ScrollView>
      ) : (
        <ScrollView className="mt-2 p-5">
          <View className="flex  w-full flex-row justify-between items-center">
            <Text className="text-2xl font-semibold">Category</Text>
            <View
              style={{ backgroundColor: "#F72C5B" }}
              className="p-2 rounded-lg"
            >
              <Image
                source={icons.category}
                style={{ tintColor: "white" }}
                className=" h-10 w-10 "
                resizeMode="contain"
              />
            </View>
          </View>

          <View className="mx-5 flex flex-row flex-wrap justify-between mt-5 gap-3">
            {categoriesJson.map((item) => (
              <RecipeCategoryCard
                key={item.id}
                source={item.image}
                title={item.title}
                onpress={isCategories}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Category;
