import { StyleSheet, StyleProp,Text, TouchableOpacity, Pressable, ViewStyle } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
}

const CustomButton = ({ 
    onPress,
    title, textStyles,
    buttonStyle,
}: CustomButtonProps) => {
  return (
    <Pressable 
        style={[styles.button, buttonStyle]}
        onPress={onPress}>
            <Text 
            style={[textStyles, textStyles]}>
                {title}
            </Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    button : {
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 1,
      borderColor:"#C6ECAE",
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    btnText:{
      fontSize: 18,
      fontWeight: 600,

    },
})

export default CustomButton