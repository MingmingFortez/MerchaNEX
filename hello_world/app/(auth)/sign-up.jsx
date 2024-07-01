import { ScrollView, View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { User } from '../../../backend/user-model';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
    }
    setIsSubmitting(true);

    try {
      const result = await User.create({email: form.email, password: form.password});

      // set it to global state...

      router.replace('/home')

    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="text-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <Text className="text-3xl font-ibold">
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

          <CustomButton 
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp