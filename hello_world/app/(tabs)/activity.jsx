import { View, Text, ScrollView, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const Activity = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the custom button!');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Activity</Text>
        <Text style={{ marginVertical: 20 }}>Playing around with it fr</Text>
        
      
        <CustomButton 
          title="Press Me" 
          handlePress={handlePress} 
          containerStyles="mt-4 p-4 bg-blue-500"
        />
      </View>
    </ScrollView>
  )
}

export default Activity
