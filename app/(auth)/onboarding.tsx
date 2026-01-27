import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <StatusBar style="dark" />
      <View className="px-5 flex-1 mt-3 ">
        {/* Top Images */}
        <View className="flex-col w-full items-center ">
          <View className="w-[95%] rounded-2xl items-center overflow-hidden">
            <Image
              source={require("../../assets/images/s1.png")}
              className="w-full shadow-sm"
              resizeMode="contain"
            />
          </View>

          <View className="w-[95%] rounded-2xl items-center overflow-hidden">
            <Image
              source={require("../../assets/images/s2.png")}
              className="w-full shadow-sm"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Text */}
        <View className="items-center mt-3">
          <View className="flex justify-center items-center">

          <Text className="text-[26px] font-bold text-black text-center">
            Transform in 100 Days
          </Text>

          <Text className=" text-gray-500 text-center text-[15px] px-2">
            Achieve weight loss with balanced workouts, mindful diet and guided
            training.
          </Text>
          </View>

          {/* Button */}
          <Pressable
            className="mt-6 bg-orange-500 w-full py-4 rounded-full items-center"
            onPress={() => router.push("/(auth)/login")}
          >
            <Text className="text-white text-lg font-bold">Get Started</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}