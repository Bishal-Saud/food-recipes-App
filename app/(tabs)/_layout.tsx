import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {icons} from '../../constants'
interface TabIconProps {
    icon?: any;
    color?: string;
    name?: string;
    iconStyles?:string;
    focused?: boolean;
  }
    
  const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused,iconStyles }) => {
    return (
      <View className='flex-1 items-center justify-start gap-2 mt-2'>
        <Image source={icon} resizeMode='contain'
        tintColor={color}
         className={`w-6 h-6 ${iconStyles}`}/>
         <Text className={`${focused ?'font-psemibold': 'font-pregular'} text-[5px]`} style={{color:color}}>{name}</Text>
      </View>
    );
  };

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false,   tabBarActiveTintColor:"#FF2E63",
             tabBarInactiveTintColor:'#222831',
             tabBarStyle:{
                backgroundColor:"#F9F5F6",
                borderTopWidth:1,
                borderTopColor:"#232533",
                height:50,
             }}}>
        <Tabs.Screen
          name="home"
          options={{ title: "Home", headerShown: false,
          tabBarIcon:({color,focused})=>(
            <TabIcon icon={icons.home} color={color} focused={focused} />
          )

           }}
        />
        <Tabs.Screen
          name="category"
          options={{ title: "Category", headerShown: false,tabBarIcon:({color,focused})=>(
            <TabIcon  icon={icons.category} color={color} focused={focused} />
          ) }}
        />
        <Tabs.Screen
          name="favorite"
          options={{ title: "favorite", headerShown: false,tabBarIcon:({color,focused})=>(
            <TabIcon  icon={icons.favorite} color={color} focused={focused} />
          )  }}
        />
        <Tabs.Screen
          name="recipe"
          options={{ title: "recipe", headerShown: false,tabBarIcon:({color,focused})=>(
            <TabIcon  icon={icons.bookmark} color={color} focused={focused} />
          )  }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
