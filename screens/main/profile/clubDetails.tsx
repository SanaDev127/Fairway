import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';


const ClubDetails = () => {
    
    const clubDetails = {
        remainingBalance: 150.00, 
        memberRole: "General" // General, Treasurer, chair
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.title}>Club Details</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.label}>Remaining Balance (Penalty Fees)</Text>
                    <Text style={styles.value}>R{clubDetails.remainingBalance.toFixed(2)}</Text>

                    <Text style={styles.label}>Club Member Role</Text>
                    <Text style={styles.value}>{clubDetails.memberRole}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton 
                        title="Leave Club" 
                        onPress={() => console.log('Leave club button pressed')} 
                    />
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



export default ClubDetails