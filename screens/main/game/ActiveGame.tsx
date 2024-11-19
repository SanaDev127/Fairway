import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActiveGameHeader from "@/screens/main/game/components/ActiveGameHeader";
import PlayerScoreModal from "@/screens/main/game/components/PlayerScoreModal";

const Holes = [
    {par: 5, hole: 1, difficulty: 12},
    {par: 4, hole: 2, difficulty: 16},
    {par: 4, hole: 3, difficulty: 11},
    {par: 4, hole: 4, difficulty: 8},
    {par: 3, hole: 5, difficulty: 6},
    {par: 4, hole: 6, difficulty: 3},
    {par: 5, hole: 7, difficulty: 15},
    {par: 4, hole: 8, difficulty: 4},
    {par: 3, hole: 9, difficulty: 14},
]



const ActiveGame = () =>{

    const [holeNumber, setHoleNumber] = useState(1);

    const NextHole = () => {
        if (holeNumber < 9)setHoleNumber(holeNumber + 1)}
    const PreviousHole = () => {
        if(holeNumber > 1){
            setHoleNumber(holeNumber - 1);
        }
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.activeGameHeader}>
                <ActiveGameHeader par={Holes[holeNumber - 1].par} hole={Holes[holeNumber -1].hole} difficulty={Holes[holeNumber -1].difficulty} />
            </View>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={[styles.button, {marginRight:30}]}
                                  onPress={PreviousHole}>
                    <Text style={{justifyContent: "center"}}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {marginLeft:30}]}
                                  onPress={NextHole}>
                    <Text style={{justifyContent: "center"}}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.container, {flexDirection: "column"}]}>
                <PlayerScoreModal par={Holes[holeNumber - 1].par} playerName={"Tiger Woods"}/>
            </View>

            <TouchableOpacity style={styles.endButton}>
                <Text>End</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
    },
    header: {
        fontSize: 18,
        marginVertical: 10,
        color: "#333",
        textTransform: "uppercase",
    },
    heading: {
        color: "green",
        fontSize: 35,
    },
    counterValue: {
        fontSize: 36,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#007bff",
    },
    activeGameHeader: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        fontSize: 16,
        padding: 13,
        width: 80,
        height: 50,
        margin: 5,
        borderRadius: 8,
        justifyContent: "center",
        fontWeight: "semibold",
        backgroundColor: "blue",
        textDecorationColor: "white",
        elevation: 10,
    },
    endButton: {
        fontSize: 16,
        padding: 13,
        margin: 5,
        borderRadius: 8,
        backgroundColor: "red",
        elevation: 20,
    },
    switchHoleButton: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 13,
        margin: 5,
        borderRadius: 8,
        backgroundColor: "lightgreen",
        elevation: 20,
    },
    setInitialCountButton: {
        padding: 10,
        fontSize: 16,
        margin: 15,
        borderRadius: 8,
        backgroundColor: "blue",
        elevation: 20,
    },
});

export default ActiveGame;