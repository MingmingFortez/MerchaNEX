import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Slot, Stack } from 'expo-router';




const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout
