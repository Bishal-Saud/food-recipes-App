import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeCard from '@/components/RecipeCard'
import EmptyState from '@/components/EmptyState'
import SearchInput from '@/components/SearchInput'
import { images } from '@/constants/'
import RecommendRecipe from '@/components/RecommendRecipe'

const fakeData =[
  {
    "id": 1,
    "imageUrl": images.burger,
    "title": "Burger Recipe",
    "para": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
   "instructions": [
      {
        "ingredients": "\n- 2 beef patties\n- 2 burger buns\n- 1 slice of cheddar cheese\n- Lettuce, tomato, and onion (optional)\n- Ketchup and mustard (optional)",
        "cookingInstructions":[ {
          "one": "Marinate the patties: Season the beef patties with salt and pepper. Optionally, marinate them for 15-20 minutes.",
          "two": "Cook the patties: Heat a pan or grill over medium heat. Cook the patties for 4-5 minutes on each side until they reach your desired doneness.",
          "three": "Toast the buns: Slice the burger buns and toast them lightly on the grill or in a toaster.",
          "four": "Assemble the burger: Place the cooked patty on the bottom bun, add the slice of cheese, then layer the veggies like lettuce, tomato, and onion.",
          "five": "Serve: Add ketchup or mustard as desired and place the top bun on the burger. Serve hot with fries or chips."
        }]
      }
    ]
  },
  {
    "id": 2,
    "imageUrl": images.chickenChowmin,
    "title": "Chicken Chowmin Recipe",
    "para": "A popular Indian curry dish made with marinated chicken in a spiced tomato cream sauce.",
    "instructions": [
      {
        "ingredients": "\n- 200g chicken breast, thinly sliced\n- 200g chowmein noodles\n- 1 onion, sliced\n- 1 bell pepper, sliced\n- 2 cloves garlic, minced\n- 2 tablespoons soy sauce\n- 1 tablespoon vinegar\n- 1 teaspoon sugar\n- 1 tablespoon oil\n- Salt and pepper to taste",
        "cookingInstructions": [
          {
          "one": "Prepare the noodles: Boil the chowmein noodles according to the package instructions. Drain and set aside.",
          "two": "Cook the chicken: Heat oil in a pan over medium-high heat. Add the sliced chicken and cook until browned, around 5-7 minutes.",
          "three": "Stir-fry the vegetables: Add the onion, bell pepper, and garlic to the pan. Stir-fry for 2-3 minutes until tender.",
          "four": "Add sauces: Add soy sauce, vinegar, and sugar to the pan. Stir well to coat the chicken and vegetables.",
          "five": "Combine: Add the cooked noodles to the pan and toss everything together. Stir-fry for another 3 minutes. Season with salt and pepper to taste.",
          "six": "Serve: Serve the chicken chowmein hot as a main dish."
        }
      ]
      }
    ]
  },
  {
    "id": 3,
    "imageUrl":images.noodles,
    "title": "Noodles Recipe",
    "para": "A simple yet delicious toast topped with mashed avocado, salt, pepper, and optional toppings.",
    "instructions": [
      {
        "ingredients": "\n- 200g noodles\n- 1 tablespoon soy sauce\n- 1 tablespoon sesame oil\n- 1 tablespoon oyster sauce\n- 1 carrot, julienned\n- 1/2 bell pepper, sliced\n- 1/4 cabbage, shredded\n- 2 cloves garlic, minced\n- 1 teaspoon chili sauce (optional)\n- Salt to taste",
        "cookingInstructions":[ 
          {
          "one": "Prepare the noodles: Cook the noodles according to the package instructions. Drain and set aside.",
          "two": "Stir-fry the vegetables: Heat sesame oil in a pan. Add garlic, carrot, bell pepper, and cabbage. Stir-fry for 3-4 minutes.",
          "three": "Add sauces: Stir in soy sauce, oyster sauce, and chili sauce. Mix well.",
          "four": "Combine noodles and sauce: Add the cooked noodles into the pan and toss everything together.",
          "five": "Serve: Serve the noodles hot as a side dish or main course."
        }
      ]
      }
    ]
  },
  {
    "id": 4,
    "imageUrl": images.omelet,
    "title": "Omelet Recipe",
    "para": "A refreshing salad with romaine lettuce, croutons, parmesan, and Caesar dressing.",
    "instructions": [
      {
        "ingredients": "\n- 3 eggs\n- 1/4 cup milk\n- 1 tablespoon butter\n- 1/4 onion, chopped\n- 1/4 bell pepper, chopped\n- 1/4 cup shredded cheese\n- Salt and pepper to taste",
        "cookingInstructions":[ 
          {
          "one": "Prepare the omelet mixture: In a bowl, whisk together the eggs, milk, salt, and pepper.",
          "two": "Cook the vegetables: Heat butter in a pan. Add the onion and bell pepper, and sauté until softened, about 3-4 minutes.",
          "three": "Make the omelet: Pour the egg mixture into the pan over the cooked vegetables. Let it cook for 2-3 minutes without stirring.",
          "four": "Add cheese: Sprinkle the shredded cheese over the omelet and fold it in half.",
          "five": "Serve: Cook for another 1-2 minutes until the cheese is melted. Serve hot with toast or salad."
        }
      ]
      }
    ]
  },
  {
    "id": 5,
    "imageUrl": images.shushi,
    "title": "Sushi Recipe",
    "para": "Fluffy pancakes packed with juicy blueberries and served with syrup.",
    "instructions": [
      {
        "ingredients": "\n- 2 cups sushi rice\n- 3 cups water\n- 1 tablespoon rice vinegar\n- 1 tablespoon sugar\n- 1/2 teaspoon salt\n- 5 sheets nori (seaweed)\n- 1 cucumber, julienned\n- 1 carrot, julienned\n- Soy sauce for dipping",
        "cookingInstructions": [
          {
          "one": "Prepare the rice: Rinse the sushi rice under cold water until the water runs clear. Cook the rice with 3 cups of water in a rice cooker or pot.",
          "two": "Season the rice: Mix rice vinegar, sugar, and salt in a bowl. Stir into the cooked rice. Let the rice cool to room temperature.",
          "three": "Assemble the sushi: Place a sheet of nori on a bamboo mat. Spread a thin layer of rice over the nori, leaving a small border at the top.",
          "four": "Add fillings: Place cucumber and carrot juliennes in the center of the rice.",
          "five": "Roll the sushi: Roll the sushi tightly using the bamboo mat, applying gentle pressure. Seal the edge with a bit of water.",
          "six": "Serve: Slice the roll into 6-8 pieces and serve with soy sauce for dipping."
        }
      ]
      }
    ]
  }
]


const Home = () => {
  return (
   <SafeAreaView className='mx-5'>
    <FlatList  
    data={fakeData}
keyExtractor={(item:any)=>item.id}
renderItem={(item)=>(

 <ScrollView >

<RecommendRecipe data={item}/>

 </ScrollView>


)}

ListHeaderComponent={()=>(
  <View className='mt-10'>
    <Text className='font-psemibold text-center text-3xl'>

    Are you ready for {""}
    <Text className='font-psemibold text-center text-3xl text-pink-500'>
    cook delicious Food ?
    </Text>
    </Text>

<SearchInput/>
<View className='mt-5'>
<Text className='text-center text-secondary-200 font-pbold'>Hot Recipe's</Text>  
</View>
 
 <RecipeCard data={fakeData}/>

 <View className='mt-2'>
  <Text className='text-2xl font-pregular'>

  Welcome to Easy Recipe {""}
  <Text className='text-pink-500 font-psemibold'>Here's what we recommend for you</Text>
  </Text>
 </View>
  </View>
)}
    ListEmptyComponent={()=>(
      <EmptyState title="No Recipe Found" subtitles="Try Again ! New Recipe are coming soon"/>
    )}
  
    />
   </SafeAreaView>
  )
}

export default Home