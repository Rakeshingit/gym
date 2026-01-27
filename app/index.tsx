import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";  

export default function SplashScreen() {
  // Logo scale animation
  const logoScale = useSharedValue(0);

  // Text reveal animation (opacity only, no movement)
  const textOpacity = useSharedValue(0);

  const goToOnboarding = () => {
    router.replace("/(auth)/onboarding");
  };

  useEffect(() => {
    // Logo animation
    logoScale.value = withTiming(1, {
      duration: 1200,
      easing: Easing.out(Easing.exp),
    });

    // Text animation after logo finishes
    textOpacity.value = withDelay(
      1300,
      withTiming(1, { duration: 600 }, () => {
        // ✅ Navigate after animation finishes
        runOnJS(goToOnboarding)();
      })
    );
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        {/* LOGO */}
        <Animated.View style={logoStyle}>
          <Image
            source={require("../assets/images/logo.png")}
            className="w-[300px] h-[300px]"
          />
        </Animated.View>

        {/* TEXT */}
        <Animated.View style={textStyle}>
          <Text className="mt-5 text-[30px] text-center font-bold text-black">
            WEAVFIT
          </Text>

          <Text className="mt-1 text-[22px] text-center text-gray-500">
            Weaving Fitness Into Life
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
