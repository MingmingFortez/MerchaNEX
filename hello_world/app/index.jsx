import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Button, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Redirect, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaView className="text-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
           <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Hello World</Text>
           <CustomButton
              title="Sign Up"
              handlePress={() => router.push('/sign-up')}
              containerStyles="w-full mt-7"
           />
            <CustomButton
              title="Go Home"
              handlePress={() => router.push('/home')}
              containerStyles="w-full mt-7"
           />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});