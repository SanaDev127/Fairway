import { ImageStyle, StyleProp, TouchableOpacity, Image, Text, StyleSheet, ViewStyle } from "react-native";


interface NavigationButtonsProps {
    onPress: () => void;
    imageSource: any;
    imageStyle?:StyleProp<ImageStyle>;
    label: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const NavigationButtons =({
    onPress,
    imageSource,
    imageStyle,
    label,
    containerStyle,

}: NavigationButtonsProps) =>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <Image source={imageSource} style={[styles.image, imageStyle]}/>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
            

    )
};

const styles = StyleSheet.create({
    container : {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    image :{
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    text : {
        fontSize: 12,
        color: "#333",
    }
});

export default NavigationButtons