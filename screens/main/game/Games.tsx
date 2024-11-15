import {Dropdown} from 'react-native-element-dropdown'
import { globalStyles } from "@/assets/style/signinstyling";
import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import CustomButton from '@/components/Butons/CustomButton';
import CalendarPicker from 'react-native-calendar-picker';

const data =[
    {label: 'item 1', value: '1'},
    {label: 'item 2', value: '2'},
    {label: 'item 3', value: '3'},
    {label: 'item 4', value: '4'},
 ];

const Game = () => {
    
    const router = useRouter();

    const [dateFilter, setdateFilter] = useState('');
    const [courseFilter, setcourseFilter] = useState('');
    const [ParticipantsFilter, setParticipantsFilter] = useState('');

    const [courseValue, setCourseValue] = useState('');
    const [playerValue, setPlayerValue] = useState('');
    const [open, setOpen] = useState(false); //open and close modal
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const minDate = new Date();

    function OpenDatepicker (){
        setOpen(!open);
    }

    function CloseDatePicker (){
        setOpen(!open);
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

                        <TouchableOpacity onPress={OpenDatepicker}>
                            <Text>Open</Text>
                        </TouchableOpacity>

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
                                    
                                    <TouchableOpacity onPress={CloseDatePicker}>
                                        <Text>close</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>

                        </Modal>
                    </View>
                    
                    <View style={styles.dropdownContainer}>
                        <Text>Course filter:</Text>
                        <Dropdown
                            data={data}
                            labelField={"label"}
                            valueField={"value"}
                            placeholder="Select Course"
                            value={courseValue}
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
                            data={data}
                            labelField={"label"}
                            valueField={"value"}
                            placeholder="Select Player"
                            value={playerValue}
                            onChange={item => {
                                setPlayerValue(item.value);
                                console.log(item.value);
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
                            onPress={()=> console.log("Clear Button Pressed")}
                            title='Clear'
                            buttonStyle={{backgroundColor: "#C6ECAE", alignSelf: "center"}}/>
                    </View>
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
});

export default Game;