import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router'
const index = () => {
  return (
    <SafeAreaView className="">
      <ScrollView>
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg">Easy Recipe Guide </Text>
          <Link href='/home'>Home</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
