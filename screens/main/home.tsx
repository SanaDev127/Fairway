import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from "expo-router";
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';
import auth from "@react-native-firebase/auth";

const Home = () => {
 const router = useRouter();
 //const user = auth().currentUser
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4"}}>
            <View style={globalStyles.container}>
                <View style ={styles.btnContainer}>
                <CustomButton
                     onPress={()=> console.log("Pressed")}
                     title='Club'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>

                     
                    
                </View>
                
                <View style = {globalStyles.header}>
                    <Text style={globalStyles.title}>Welcome User</Text>
                    <Image 
                    source={require('@/assets/images/profile-icon.png')}
                    style ={styles.profileimg}/>
                    <Text style={styles.text}>This is the Home Screen</Text>
                </View>

                <CustomButton
                     onPress={() => auth().signOut()}
                     title='Logout'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>
                    
                <View>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

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

export default Home;