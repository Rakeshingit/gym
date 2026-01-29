import AuthInput from "@/components/onboarding/AuthInput";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center">
        {/* Signup */}

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
        </View>
        <View className="mt-4 flex-row justify-center">
          <Text className="text-gray-500 font-regular">
            Don’t have an account?{" "}
          </Text>
          <Pressable>
            <Text className="text-black  font-regular font-bold">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
