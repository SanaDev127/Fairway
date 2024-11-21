import React from 'react';
import { useRouter } from "expo-router";
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';
import auth from "@react-native-firebase/auth";


const ProfileHome = () => {
    const router = useRouter();

    const userDetails = {name: "Motheo Mekoa", email: "motheomekoa@example.com", phone: "066 996 7351", address: "Some place in Midrand"};

    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4"}}>
            <View style = {globalStyles.container}>

            <ScrollView>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.title}>Personal Details</Text>
                    <Image 
                        source={require('@/assets/images/profile-icon.png')}
                        style={styles.profileimg}
                    />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.value}>{userDetails.name}</TextInput>

                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>{userDetails.email}</Text>

                    <Text style={styles.label}>Phone</Text>
                    <Text style={styles.value}>{userDetails.phone}</Text>

                    <Text style={styles.label}>Address</Text>
                    <Text style={styles.value}>{userDetails.address}</Text>
                </View>

            </ScrollView>


                <View style={styles.rowitemsContainer}>
                    <CustomButton
                        onPress={() => router.push("./clubDetails")}
                        title='Club Details'
                        buttonStyle={styles.button}/>

                    <CustomButton
                        onPress={() => router.push("./buddies")}
                        title='Buddies'
                        buttonStyle={styles.button}/>
                </View>
               


            </View>
        </SafeAreaView>
    )
}

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
      button: {
        backgroundColor: "#C6ECAE",
        alignSelf: "center",
        marginTop: 25,
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        elevation: 20,
        
    },
    detailsContainer: {
        marginVertical: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        marginBottom: 15,
        color: '#555',
    },
     rowitemsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    
})

export default ProfileHome