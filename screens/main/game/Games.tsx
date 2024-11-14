import {Dropdown} from 'react-native-element-dropdown'
import { globalStyles } from "@/assets/style/signinstyling";
import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";


const data =[
    {label: 'Game 1', value: '1'},
    {label: 'Game 2', value: '2'},
    {label: 'Game 3', value: '3'},
    {label: 'Game 4', value: '4'},
 ];

const Game = () => {
    const router = useRouter();

    const [dateFilter, setdateFilter] = useState('');
    const [courseFilter, setcourseFilter] = useState('');
    const [ParticipantsFilter, setParticipantsFilter] = useState('');
    const [value, setValue] = useState('');

    return (
        <SafeAreaView style={{flex : 1, backgroundColor:"#e8ecf4"}}>
            <View style={globalStyles.container}>
                <View style={globalStyles.header} >
                    <View style={styles.dropdownContainer}>
                        
                        
                        <Text>Course filter:</Text>
                        <Dropdown
                            data={data}
                            labelField={"label"}
                            valueField={"value"}
                            placeholder="Select Course"
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                                console.log(item.value);
                            }}
                            style={styles.dropdown}
                        />
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
});
export default Game;