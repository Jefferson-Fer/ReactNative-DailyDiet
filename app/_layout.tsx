import "react-native-reanimated";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import theme from "@/constants/theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" translucent />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="DetailsPercent/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Snack/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="Snack/[id]/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Snack/[id]/Info/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Snack/[id]/Edit/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
