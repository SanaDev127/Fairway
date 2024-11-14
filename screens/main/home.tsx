import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useRouter } from "expo-router";
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';
import {Dropdown} from 'react-native-element-dropdown'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";

const data =[
    {label: 'Game 1', value: '1'},
    {label: 'Game 2', value: '2'},
    {label: 'Game 3', value: '3'},
    {label: 'Game 4', value: '4'},
 ];

const Home = () => {
 const router = useRouter();
 const [value, setValue] = useState('null');


 //const user = auth().currentUser
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4"}}>
            <View style={globalStyles.container}>
                <View style ={styles.btnContainer}>
                    <CustomButton
                        onPress={()=> console.log("Pressed")}
                        title='Club'
                        buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/> 
                </View>
                
                <View style = {globalStyles.header}>
                    <Text style={globalStyles.title}>Welcome User</Text>
                    <Image 
                    source={require('@/assets/images/profile-icon.png')}
                    style ={styles.profileimg}/>
                    <Text style={styles.text}>This is the Home Screen</Text>
                </View>
                
                <Text 
                style={styles.label}>Continue Playing
                </Text> 
                
                <View style={styles.dropdownContainer}>
                    <Dropdown
                        data={data}
                        labelField={"label"}
                        valueField={"value"}
                        placeholder="Select Game"
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                            console.log(item.value);
                        }}
                        style={styles.dropdown}
                    />
                    
                    <CustomButton
                        onPress={() => console.log("Selected game: " + value)}
                        title="Select"
                        buttonStyle={{ backgroundColor: "#C6ECAE", marginLeft: 10 }}
                    />
                </View>

                <Text 
                style={styles.label}>Recent Played
                </Text> 
                <Dropdown
                    data={data}
                    labelField={"label"}
                    valueField={"value"}
                    placeholder="Select Game"
                    value={value}
                    search
                    onChange={item => {
                        setValue(item.value);
                        console.log(item.value);
                    }}
                style={styles.dropdown2}
                />

                <CustomButton
                     onPress={() => auth().signOut()}
                     title='Logout'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>

                <CustomButton
                     onPress={() => router.push("../profile/profileHome")}
                     title='Profile'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

                <CustomButton
                     onPress={() => router.push("../game/startGame")}
                     title='Start Game'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

                <CustomButton
                     onPress={() => router.push("../game/Games")}
                     title='Games'
                     buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

            </View>
            
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dropdown2: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
    dropdown: {
        margin: 16,
        height: 50,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
      },
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
    label:{
        fontSize: 17,
        color: "#222",
    }
})

export default Home;