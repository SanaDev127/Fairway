import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from "expo-router";
const Home = () => {
 const router = useRouter();
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.text}>Welcome to the Home Screen</Text>
                <Text style={styles.text}>This is the Home Screen</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text : {
        fontSize : 24,
        fontWeight: 'bold',
    }
})

export default Home;