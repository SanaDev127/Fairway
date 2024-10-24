import React from 'react';
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';


const ProfileHome = () => {
    const router = useRouter();
    return(
        <SafeAreaView>
            <View style = {globalStyles.header}>
                    <Text style={globalStyles.title}>Profile</Text>
                    <Image 
                    source={require('@/assets/images/profile-icon.png')}
                    style ={styles.profileimg}/>

                <CustomButton
                     onPress={() => router.push("./personalDetails")}
                     title='Peronal Details'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

                <CustomButton
                     onPress={() => router.push("./clubDetails")}
                     title='Club Details'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

                <CustomButton
                     onPress={() => router.push("./buddies")}
                     title='Buddies'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

                     


                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize : 24,
        fontWeight: 'bold',
    },
    profileimg : {
        width: 150,
        height: 150,
        alignSelf: "center",
    },
    btnContainer : {
        position: "absolute",
        top: 10,
        right: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})

export default ProfileHome