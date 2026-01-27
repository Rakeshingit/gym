import { Image, SafeAreaView, Text, View, Pressable } from "react-native";
import { router } from "expo-router";

export default function Onboarding() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-5 pt-8">
        {/* Top Images */}
        <View className="flex-row justify-between">
          <View className="w-[48%] rounded-2xl overflow-hidden">
            <Image
              source={require("../../assets/images/s1.png")}
              className="w-full h-[200px]"
              resizeMode="cover"
            />
          </View>

          <View className="w-[48%] rounded-2xl overflow-hidden">
            <Image
              source={require("../../assets/images/s2.png")}
              className="w-full h-[200px]"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Text */}
        <View className="mt-8 items-center">
          <Text className="text-[26px] font-bold text-black text-center">
            Transform in 100 Days
          </Text>

          <Text className="mt-3 text-gray-500 text-center text-[15px] px-2">
            Achieve weight loss with balanced workouts, mindful diet and guided
            training.
          </Text>

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
