import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';

const PersonalDetails = () => {
    // sample user
    const userDetails = {
        name: "Motheo Mekoa",
        email: "motheomekoa@example.com",
        phone: "066 996 7351",
        address: "Some place in Midrand"
    };

    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileimg: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginBottom: 20,
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
    buttonContainer: {
        marginTop: 30,
        alignSelf: 'center',
    }
});



export default PersonalDetails;
