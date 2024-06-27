import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className="text-white h-full">
    <ScrollView contentContainerStyle={{ height: '100%'}}>
      <View className="w-full justify-center items-center h-full px-4">
         <Text className="text-3xl font-iblack">Hello World</Text>
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
