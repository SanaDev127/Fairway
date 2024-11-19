import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";

const winner = "Tiger Woods";

const GameResult = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, {flexDirection:"column"}]}>
                <Text style={styles.heading}>Results</Text>
                <Text style={styles.counterValue}>Winner: {winner}</Text>
                <Text style={styles.header}>Scores</Text>
                <Text>Tiger Woods: 34</Text>
                <Text>Bubba Watson: 30</Text>
                <Text>Rory Mcilroy: 28</Text>
            </View>

            <TouchableOpacity style={styles.button}
            onPress={() => {}}>
                <Text>Home</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
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
        color: "red",
        fontSize: 35,
    },
    counterValue: {
        fontSize: 36,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#007bff",
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

export default GameResult;
