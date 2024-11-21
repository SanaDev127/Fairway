import {Dropdown} from 'react-native-element-dropdown'
import { globalStyles } from "@/assets/style/signinstyling";
import { FlatListStyle } from "@/assets/style/flatListStyle";
import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Modal, TextInput, FlatList } from "react-native";
import CustomButton from '@/components/Butons/CustomButton';
import CalendarPicker from 'react-native-calendar-picker';
import { coursesData, playerdata } from "@/constants/Data";
import ActiveGameScorecard from "@/screens/main/game/ActiveGameScorecard";





const Game = () => {

    // Code inspired by the following YouTube video:
    // Title:React Native Tutorial #7 - Flat List Component
    // URL:https://www.youtube.com/watch?v=iMCM1NceGJY
    // Channel: Net Ninja
    // Published on: 2 December 2019
     const  [searchData, setSearchData] = useState([
        { name: 'Game 1', id: '1', course: 'Course A', date: '2024-10-17', score: '85' },
        { name: 'Game 2', id: '2', course: 'Course B', date: '2024-10-18', score: '90' },
        { name: 'Game 3', id: '3', course: 'Course C', date: '2024-10-19', score: '78' },
        { name: 'Game 4', id: '4', course: 'Course D', date: '2024-10-20', score: '92' },
    ])
    const router = useRouter();

    const [dateFilter, setdateFilter] = useState('');
    const [courseFilter, setcourseFilter] = useState('');
    const [ParticipantsFilter, setParticipantsFilter] = useState('');

    const [courseValue, setCourseValue] = useState('');
    const [playerValue, setPlayerValue] = useState('');
    const [open, setOpen] = useState(false); //open and close modal
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const[searchedGame, setSearchedGame] = useState('');

    const minDate = new Date();

    // Code inspired by the following YouTube video:
    // Title:React Native | How To Add A Date Picker
    // URL:https://www.youtube.com/watch?v=22txA5uRhHo
    // Channel: Declan Miller
    // Published on: 7 February 2023
    function OpenDatepicker (){
        setOpen(!open);
    }

    function CloseDatePicker (){
        setOpen(!open);
    }

    function clearbtn (){
        setSelectedStartDate(null);
        setSelectedEndDate(null);
        setCourseValue('');
        setPlayerValue('');
    }

    const formatDate = (date) => {
        return date ? date.toLocaleDateString("en-GB", {
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric'
        }) : "None";
    };

    const onDateChange = (date, type) => {
        if (type === "END_DATE") {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null); // Clear end date if a new start date is chosen
        }
    };

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <SafeAreaView style={{flex : 1, backgroundColor:"#e8ecf4"}}>
            <View style={globalStyles.container}>
                <View style={globalStyles.header} >
                    
                    <View style={styles.dropdownContainer}>
                        
                        <Text>Date filter:</Text>

                        <View>

                            <TextInput 
                                editable={false}
                                style={styles.textBox}
                                value ={`${formatDate(selectedStartDate)} to ${formatDate(selectedEndDate)}`}
                                />

                        </View>

                        <CustomButton 
                            onPress={OpenDatepicker}
                            title='Open'
                            buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={open}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalContainer}>
                                    <CalendarPicker
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={minDate}
                                        todayBackgroundColor="#f2e6ff"
                                        selectedDayColor="#7300e6"
                                        selectedDayTextColor="#FFFFFF"
                                        onDateChange={onDateChange}
                                    />
                                    
                                    <CustomButton 
                                        onPress={CloseDatePicker}
                                        title='Close'
                                        buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>

                                </View>
                            </View>

                        </Modal>
                    </View>
                    
                    <View style={styles.dropdownContainer}>
                        <Text>Course filter:</Text>
                        <Dropdown
                            data={coursesData}
                            labelField={"courseName"}
                            valueField={"value"}
                            placeholder="Select Course"
                            value={courseValue}
                            search
                            searchPlaceholder="Search..."
                            onChange={item => {
                                setCourseValue(item.value);
                                console.log(item.value);
                            }}
                            style={styles.dropdown}
                        />
                    </View>

                    <View style={styles.dropdownContainer}>
                        <Text>Player filter:</Text>
                        <Dropdown
                            data={playerdata}
                            key={"playerId"}
                            labelField={"playerName"}
                            valueField={"playerId"}
                            placeholder="Select Player"
                            value={playerValue}
                            onChange={item => {
                                setPlayerValue(item.playerId);
                                console.log(item.playerId);
                            }}
                            style={styles.dropdown}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <CustomButton
                            onPress={()=> console.log("Search Button Pressed")}
                            title=' Search'
                            buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/> 
                        <CustomButton
                            onPress={()=> {clearbtn()}}
                            title='Clear'
                            buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>
                    </View>
                </View>
                <ActiveGameScorecard isVisible={isModalVisible} onClose={toggleModal}/>
                <View style ={{flex: 1}}>
                        <FlatList
                            data={searchData}
                            renderItem={({ item }) => (
                            <View style={FlatListStyle.itemContainer}>
                                <TouchableOpacity onPress={() => toggleModal()}>
                                    <Text style={FlatListStyle.item}>{item.name}:</Text>
                                    <Text style={FlatListStyle.item}>Course: {item.course || "Course Name"}</Text>
                                    <Text style={FlatListStyle.item}>Date: {item.date || "Game Date"}</Text>
                                    <Text style={FlatListStyle.item}>Score: {item.score || "User's Score"}</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    <ActiveGameScorecard isVisible={isModalVisible} onClose={toggleModal}/> 
                </View>
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

      btnContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        width:"100%",
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

      textBox: {
        height: 40,
        width: 230,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: "#f8f8f8",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
    },
    item: {
        fontSize: 16,
        color: "#555",
        marginBottom: 4,
    },
});

export default Game;