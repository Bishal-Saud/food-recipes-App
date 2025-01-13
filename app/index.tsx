import { View, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { images } from "@/constants";
const index = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView className="bg-primary min-h-screen">
      <View className="relative h-full  ">
        <ImageBackground
          source={images.firstScreen}
          className="h-full"
          resizeMode="cover"
        />
        <TouchableOpacity
          activeOpacity={0.5}
          className="absolute top-[42rem] left-[8.5rem] p-5    bg-pink-500 rounded-lg "
          onPress={() => router.replace("/home")}
        >
          <Link href={"/home"} className="text-white font-psemibold text-2xl  ">
            {" "}
            Let's Go
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
