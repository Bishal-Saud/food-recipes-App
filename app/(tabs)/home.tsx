import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeCard from '@/components/RecipeCard'
import EmptyState from '@/components/EmptyState'
import SearchInput from '@/components/SearchInput'
import { images } from '@/constants/'

const fakeData =[
  {
    "id": 1,
    "imageUrl": images.burger,
    "title": "Burger Recipe",
    "para": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
  },
  {
    "id": 2,
    "imageUrl": images.chickenChowmin,
    "title": "Chicken Chowmin Recipe",
    "para": "A popular Indian curry dish made with marinated chicken in a spiced tomato cream sauce."
  },
  {
    "id": 3,
    "imageUrl":images.noodles,
    "title": "Noodles Recipe",
    "para": "A simple yet delicious toast topped with mashed avocado, salt, pepper, and optional toppings."
  },
  {
    "id": 4,
    "imageUrl": images.omelet,
    "title": "Omelet Recipe",
    "para": "A refreshing salad with romaine lettuce, croutons, parmesan, and Caesar dressing."
  },
  {
    "id": 5,
    "imageUrl": images.shushi,
    "title": "Sushi Recipe",
    "para": "Fluffy pancakes packed with juicy blueberries and served with syrup."
  }
]


const Home = () => {
  return (
   <SafeAreaView className='mx-5'>
    <FlatList  
    data={fakeData}
keyExtractor={(item)=>item.id}
renderItem={(item)=>(

 <ScrollView>
  <View className='flex flex-row'>

 <Text>
  Hey
 </Text>
  </View>
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
 
 <RecipeCard data={fakeData}/>
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