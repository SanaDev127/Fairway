import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { globalStyles } from '@/assets/style/signinstyling';

// Sample buddy data (can be replaced with dynamic data from an API or state)
const buddiesData = [
    { id: '1', name: 'Motheo Mekoa', image: require('@/assets/images/profile-icon.png') },
    { id: '2', name: 'Masana Ramaswiela', image: require('@/assets/images/profile-icon.png') },
    { id: '3', name: 'Tlotlo Matras', image: require('@/assets/images/profile-icon.png') },
];

const Buddies = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>Buddies</Text>
            </View>

            <FlatList
                data={buddiesData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.buddyContainer}>
                        <Image 
                            source={item.image}
                            style={styles.profileimg}
                        />
                        <Text style={styles.buddyName}>{item.name}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileimg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    buddyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },
    buddyName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Buddies;
