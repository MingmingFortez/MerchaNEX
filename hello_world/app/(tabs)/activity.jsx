import { View, Text, TextInput, ScrollView, Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';

const Activity = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const handlePress = () => {
    Alert.alert('Button Pressed', `You entered: ${inputText}`);
    setDisplayText(inputText);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Activity</Text>
        <Text style={{ marginVertical: 20 }}>Playing around with it fr</Text>

        <TextInput 
          style={styles.input}
          placeholder="Type something funny..."
          placeholderTextColor="#aaa" 
          value={inputText}
          onChangeText={setInputText}
        />
      
        <CustomButton 
          title="Press Me" 
          handlePress={handlePress} 
          containerStyles="mt-4 p-4 bg-blue-500"
        />

        {displayText ? (
          <Text style={styles.displayText}>You entered: {displayText}</Text>
        ) : null}
        
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  content: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 20,
  },
  displayText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default Activity
