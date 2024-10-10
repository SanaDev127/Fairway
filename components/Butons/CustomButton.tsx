import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({ 
    onPress,
    title, textStyles="",
    containerStyles="",
}: CustomButtonProps) => {
  return (
    <Pressable 
        className={`bg-lime-800 rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
        onPress={onPress}>
            <Text className={`font-semibold text-lg ${textStyles}`}>
                {title}
            </Text>
    </Pressable>
  )
}

export default CustomButton