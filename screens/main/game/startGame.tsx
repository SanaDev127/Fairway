import React from 'react';
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';


const StartGame = () => {
    const router = useRouter();

    const [courseInput, setCourseInput] = React.useState('');
    const [participantInput, setParticipantInput] = React.useState('');

    return (
        <SafeAreaView style={{flex : 1, backgroundColor:"#e8ecf4"}}>
            <View style={globalStyles.container}>
                <View style={globalStyles.border}>
                    <View style={globalStyles.header} >
                        <Text style={{marginBottom: 25, alignSelf: 'center'}} >Course:</Text> 
                        <TextInput
                        style={globalStyles.inputControl}
                        placeholder='Search'
                        placeholderTextColor="#6b7280"
                        value={courseInput}
                        onChangeText={setCourseInput}
                        />

                        <Text style={{marginBottom: 25, alignSelf: 'center'}} >Participants:</Text> 
                        <TextInput
                        style={globalStyles.inputControl}
                        placeholder='Search'
                        placeholderTextColor="#6b7280"
                        value={participantInput}
                        onChangeText={setParticipantInput}
                        />

                        
                    </View>
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

export default StartGame;