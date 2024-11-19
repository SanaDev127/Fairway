import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ScoreModalProps = {
    playerName: string;
    par: number;
}

const PlayerScoreModal = (props:ScoreModalProps) => {
    let par = props.par;
    const [strokes, setStrokes] = useState<number>(par);
    const [points, setPoints] = useState<number>(par-strokes);

    const handleIncrement = () => {
        setStrokes(strokes + 1);
        setPoints(par - strokes);
    }

    const handleDecrement = () => {
        setStrokes(strokes - 1);
        setPoints(par - strokes);

    }

    return (
        <View style={styles.modalContainer}>
            <View><Text style={styles.headerText}>{props.playerName}</Text></View>

            <View style={{flexDirection: "row", padding:5}}>
                <Text style={{marginRight:10}}>Strokes: {strokes}</Text>
                <Text>Points: {points}</Text>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}
                                  onPress={handleIncrement}>
                    <Text style={{justifyContent: "center"}}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={handleDecrement}>
                    <Text style={{justifyContent: "center"}}>Decrement</Text>
                </TouchableOpacity>
            </View>

        </View>
);
}

const styles = StyleSheet.create({
    container: {margin: 10, backgroundColor: "white", flex: 1},
    modalContainer: {
        backgroundColor: "white",
        marginTop: 2,
        borderRadius: 20,
        width: "100%",
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
    headerText: {
        fontSize: 16,
        fontWeight: 'semibold',
    },
    modalText: {
        margin: 5
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        fontSize: 16,
        padding: 13,
        margin: 5,
        borderRadius: 8,
        backgroundColor: "green",
        elevation: 20,
    },

})
export default PlayerScoreModal;