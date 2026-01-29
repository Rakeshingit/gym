import { AppLoaderProvider } from "@/utils/AppLoader";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppLoaderProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AppLoaderProvider>
    </SafeAreaProvider>
  );
}
