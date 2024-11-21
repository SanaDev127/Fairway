import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

type GameHeaderProps = {
    par: number,
    hole: number,
    difficulty: number,
}
const ActiveGameHeader = (props: GameHeaderProps) => {

    return (
        <View style={styles.modalContainer}>
            <Text style={styles.headerText}>Hole Details</Text>
            <Text>Hole Number: {props.hole}</Text>
            <Text>Par: {props.par}</Text>
            <Text>Difficulty: {props.difficulty}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {margin: 10, backgroundColor: "white", flex: 1},
    modalContainer: {
        backgroundColor: "white",
        marginTop: 20,
        marginLeft:5,
        borderRadius: 20,
        width: "95%",
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
        fontSize: 24,
        fontWeight: 'bold',
    },
})
export default ActiveGameHeader;