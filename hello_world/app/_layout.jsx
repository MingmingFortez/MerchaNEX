import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font'




const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  })

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout
