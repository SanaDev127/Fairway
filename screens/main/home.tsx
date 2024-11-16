import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native';
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
 const [value, setValue] = useState('');
 const [value2, setValue2] = useState('');
 const [value3, setValue3] = useState('');
 const [open, setOpen] = useState(false); //open and close modal


 function openClubOptions (){
    setOpen(!open);
    console.log("open");
}

function closeClubOptions (){
    setOpen(!open);
}

 //const user = auth().currentUser
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4"}}>
            <View style={globalStyles.container}>
                <View style ={styles.btnContainer}>
                    <CustomButton
                        onPress={openClubOptions}
                        title='Club'
                        buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 25}}/>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={open}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalContainer}>
                                    <CustomButton
                                        onPress={()=> router.push("./clubs")}
                                        title='Create Club'
                                        buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 15}}/>
                                    
                                    <CustomButton
                                        onPress={() => console.log('View Club button pressed')}
                                        title='View Clubs'
                                        buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center", marginTop: 15, marginBottom: 10}}/>

                                    <TouchableOpacity
                                        onPress={closeClubOptions}>
                                        <Text>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                </View>
                
                <View style = {globalStyles.header}>
                    <Text style={globalStyles.title}>Welcome User</Text>
                    <Image 
                    source={require('@/assets/images/profile-icon.png')}
                    style ={styles.profileimg}/>
                    <Text style={styles.text}>This is the Home Screen</Text>
                </View>
                
                <View style={styles.container}>
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
                        

                        <TouchableOpacity onPress={() => console.log("Selected game: " + value)}>
                            <Text style ={styles.label}>Select</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text 
                    style={styles.label}>Recent Played
                    </Text> 
                    <Dropdown
                        data={data}
                        labelField={"label"}
                        valueField={"value"}
                        placeholder="Select Game"
                        value={value2}
                        search
                        searchPlaceholder="Search..."
                        maxHeight={300}
                        onChange={item => {
                            setValue2(item.value);
                            console.log(item.value);
                        }}
                        style={styles.dropdown2}
                    />
                </View>
                <View style={styles.container}>
                    <Text 
                        style={styles.label}>Invites
                    </Text> 
                    <Dropdown
                        data={data}
                        labelField={"label"}
                        valueField={"value"}
                        placeholder="List of unopened invites"
                        value={value3}
                        search
                        searchPlaceholder="Search..."
                        maxHeight={200}
                        onChange={item => {
                            setValue3(item.value);
                            console.log(item.value);
                        }}
                        style={styles.dropdown2}
                    />
                </View>
                <View style={styles.bottomButtonsContainer}>
                    <CustomButton
                        onPress={() => auth().signOut()}
                        title='Logout'
                        buttonStyle={styles.bottomButton}
                    />
                    <CustomButton
                        onPress={() => router.push("../profile/profileHome")}
                        title='Profile'
                        buttonStyle={styles.bottomButton}
                    />
                    <CustomButton
                        onPress={() => router.push("../game/startGame")}
                        title='Start Game'
                        buttonStyle={styles.bottomButton}
                    />
                    <CustomButton
                        onPress={() => router.push("../game/Games")}
                        title='Games'
                        buttonStyle={styles.bottomButton}
                    />
                </View>
            </View>    
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
    },
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
        width: 290,
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
    },
    bottomButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 10,
        width: 390,
        paddingHorizontal: 10,
    },
    bottomButton: {
        backgroundColor: "#C6ECAE",
        flex: 1,
        marginHorizontal: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
    modalContainer: {
        backgroundColor: "white",
        margin: 20,
        borderRadius: 20,
        width:200,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

})

export default Home;