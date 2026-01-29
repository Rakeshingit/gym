import AuthInput from "@/components/onboarding/AuthInput";
import NavButton from "@/components/onboarding/NavButton";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 gap- h-full justify-center">
        {/* Signup */}

        <View className="absolute top-6 right-[24px]">
          <Pressable onPress={() => router.replace("/(main)/home")}>
            <Text className="text-[14px] font-light text-gray-500">Skip</Text>
          </Pressable>
        </View>
        <View className="flex-[1] justify-end pb-[52px] gap-2 h-full">
          <Text className="text-[30px] font-bold">Signin</Text>
          <Text className="text-[14px] font-light">
            Create your account now and start exploring amazing features
            instantly.
          </Text>
        </View>
        <View className="flex-[3]">
          <View className="gap-4">
            <View className="flex-row justify-between">
              <AuthInput placeholder="First Name" width="half" />

              <AuthInput placeholder="Last Name" width="half" />
            </View>
            <AuthInput
              placeholder="Email Address"
              type="email"
              leftIcon="mail-outline"
            />

            <AuthInput
              placeholder="Password"
              type="password"
              leftIcon="lock-closed-outline"
            />

            <AuthInput
              placeholder="Confirm Password"
              type="password"
              leftIcon="lock-closed-outline"
            />
            <NavButton title="Signin" to="/(auth)/signin" rounded={5} />
          </View>
          <View className="mt-4 flex-row justify-center">
            <Text className="text-black text-[18px] font-regular">
              Already an account?{" "}
            </Text>
            <Pressable>
              <Text className="text-[#E37528] text-[18px]  font-regular font-bold">
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
