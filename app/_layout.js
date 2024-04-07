import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontLoaded] = useFonts({
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded])

  if(!fontLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
