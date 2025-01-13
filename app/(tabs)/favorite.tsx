import FavoriteCard from "@/components/FavoriteCards";
import { categoriesJson } from "@/constants/categoriesJson";
import React from "react";
import { ScrollView, View } from "react-native";

const Favorite = () => {
  return (
    <ScrollView className="">
      <View className="mx-5 flex flex-row flex-wrap justify-between my-5 gap-3">
        {categoriesJson.map((item) => (
          <FavoriteCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Favorite;
