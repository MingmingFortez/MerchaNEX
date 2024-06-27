import { ScrollView, View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
})

  return (
    <SafeAreaView className="text-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text>
            Log in
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp