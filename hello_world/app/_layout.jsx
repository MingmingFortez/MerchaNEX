import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "SpaceMono-Regular.ttf": require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  // what to do when screen is loading
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
    if (!fontsLoaded && !error) return null;
  }, [fontsLoaded, error])
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout
