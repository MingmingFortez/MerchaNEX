import { StatusBar } from 'expo-status-bar'; 
import { View, Text } from 'react-native'
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622"/>
    </>
  )
}

export default AuthLayout