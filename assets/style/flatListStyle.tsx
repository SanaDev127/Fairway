import { StyleSheet } from "react-native";

export const FlatListStyle = StyleSheet.create({
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