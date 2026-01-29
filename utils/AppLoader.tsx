import { useFonts } from "expo-font";
import { createContext, ReactNode, useContext, useState } from "react";

const AppLoaderContext = createContext<{
  ready: boolean;
  setReady: (v: boolean) => void;
}>({
  ready: false,
  setReady: () => {},
});

export function AppLoaderProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  const [fontsLoaded] = useFonts({
    MontserratLight: require("assets/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("assets/fonts/Montserrat-Bold.ttf"),
  });

  // 🚨 If fonts not loaded → render nothing (keep splash)
  if (!fontsLoaded) return null;

  return (
    <AppLoaderContext.Provider value={{ ready, setReady }}>
      {children}
    </AppLoaderContext.Provider>
  );
}

export function useAppLoader() {
  return useContext(AppLoaderContext);
}
