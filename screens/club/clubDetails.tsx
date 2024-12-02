import {Dropdown} from 'react-native-element-dropdown'
import { globalStyles } from "@/assets/style/signinstyling";
import { FlatListStyle } from "@/assets/style/flatListStyle";
import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity,Image, Modal, TextInput, FlatList } from "react-native";
import CustomButton from '@/components/Butons/CustomButton';
import ActiveGameScorecard from "@/screens/main/game/ActiveGameScorecard";


const ClubDetails = () => {


    const buddiesData = [
        { id: '1', name: 'Mehluli Booi', image: require('@/assets/images/profile-icon.png') },
        { id: '2', name: 'Milani Figlan', image: require('@/assets/images/profile-icon.png') },
        { id: '3', name: 'Tlotlo Matras', image: require('@/assets/images/profile-icon.png') },
    ];

    const [clubData,setClubData] = useState([    
    {
        id:"1",
        name: "MTM Golf Club",
        mission:
            "A passion, an obsession, a romance, a nice acquaintanceship with trees, sand and water",
        phone: "066 996 7351",
        Fees: "R150.00" }])
        


    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return(

        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4", marginTop: 30}}>
            <Text style = {globalStyles.title}>Club Info</Text>



            <View style = {globalStyles.container}>
                <View>

                    <Image
                        source={require('@/assets/images/club_logo1.png')}
                        style={{alignSelf: 'center'}}
                        />
                        <FlatList
                            data={clubData}
                            renderItem={({ item }) => (
                            <View style={FlatListStyle.itemContainer}>
                                    <Text style={FlatListStyle.item}>{item.name}:</Text>
                                    <Text style={FlatListStyle.item}>Name: {item.name}</Text>
                                    <Text style={FlatListStyle.item}>Mission: {item.mission}</Text>
                                    <Text style={FlatListStyle.item}>Fees: {item.Fees}</Text>
                            </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    <ActiveGameScorecard isVisible={isModalVisible} onClose={toggleModal}/> 
                </View>

                <FlatList
                data={buddiesData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.buddyContainer}>
                        <Image 
                            source={item.image}
                            style={styles.profileimg}
                        />
                        <Text style={styles.buddyName}>{item.name}</Text>
                    </View>
                )}
                />
            </View>
        </SafeAreaView>
    )
}

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
        top: 15,
        right: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        padding: 10,
        margin: 10,
        width: 200
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
        alignSelf: "center",
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
      modalContainer2: {
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
      buddyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },
    buddyName: {
        fontSize: 18,
        fontWeight: 'bold',
    },

})

export default ClubDetails