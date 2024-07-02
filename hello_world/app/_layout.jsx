import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import {SplashScreen, Stack } from 'expo-router';

import GlobalProvider from '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
  });

  useEffect(() => {
    if(fontError) {
      throw fontError;
    }
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, fontError])

  if(!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <GlobalProvider>
      <Stack>
          <Stack.Screen name="index" options={{ headerShown: false}}/>
          <Stack.Screen name="(auth)" options={{ headerShown: false}}/>
          <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
      </Stack>
    </GlobalProvider>
  )
}

export default RootLayout
