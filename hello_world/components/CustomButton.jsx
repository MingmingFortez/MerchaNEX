import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-primary rounded-xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        diabled={isLoading}
    >
        <Text className={`text-white text-lg ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton