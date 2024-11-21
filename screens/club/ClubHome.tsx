import React, { useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useRouter } from "expo-router";
import { globalStyles } from '@/assets/style/signinstyling';
import CustomButton from '@/components/Butons/CustomButton';
import { FlatListStyle } from '@/assets/style/flatListStyle';
import ActiveGameScorecard from "@/screens/main/game/ActiveGameScorecard";
import NavigationButtons from '@/components/Butons/NavigationButtons';


const ClubHome = () => {

    const router = useRouter();

    const [isModalVisible, setModalVisible] = useState(false);
    const  [continuePlayingData, setContinuePlayingData] = useState([
        { name: 'Game 1', id: '1', course: 'Centurion Country Club', date: '2024-11-21' },
    ])
    const  [recentPlayedData, setRecentPlayedData] = useState([
        { name: 'Game 1', id: '1', course: 'Kyalami Country Club', date: '2024-10-17' },
    ]);
    const  [upcomingGamesData, setupcomingGamesData] = useState([
        { name: 'Game 1', id: '1', course: 'Observatory Golf Club', date: '2024-10-20' },
    ]);
    const [clubData, setClubData] = useState({
        clubName: "MTM Golf Club", id: "1"

    })
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        };

    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#e8ecf4"}}>
            <View style = {globalStyles.container}>
                <Text style={globalStyles.title}>{clubData.clubName}</Text>

                <View style={styles.container}>
                    <Text style={styles.label}>Continue Playing</Text>

                    <ActiveGameScorecard isVisible={isModalVisible} onClose={toggleModal}/>

                        <View style={styles.dropdownContainer}>
                            <FlatList
                                data ={continuePlayingData}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => (
                                    <TouchableOpacity 
                                        onPress={() => toggleModal()}
                                        >    
                                        
                                        <View style={FlatListStyle.itemContainer}>
                                                <Text style={FlatListStyle.item}>Game Name: {item.name}</Text>
                                                <Text style={FlatListStyle.item}>Course: {item.course || "Course Name"}</Text>
                                                <Text style={FlatListStyle.item}>Date: {item.date || "Game Date"}</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                                />
                        </View>


                        <View style={styles.container}>
                            <Text 
                            style={styles.label}>Recent Played
                            </Text> 
                            <FlatList
                                data ={recentPlayedData}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => (   
                                    <TouchableOpacity onPress={() => toggleModal()}> 
                                <View style={FlatListStyle.itemContainer}>
                                        <Text style={FlatListStyle.item}>Game Name: {item.name}</Text>
                                        <Text style={FlatListStyle.item}>Course: {item.course || "Course Name"}</Text>
                                        <Text style={FlatListStyle.item}>Date: {item.date || "Game Date"}</Text>
                                </View>
                                    </TouchableOpacity>
                                )}

                                />
                        </View>

                        <View style={styles.container}>
                            <Text 
                            style={styles.label}>Upcoming Games
                            </Text> 
                            <FlatList
                                data ={upcomingGamesData}
                                keyExtractor={(item) => item.id}
                                renderItem={({item}) => (   
                                    <TouchableOpacity onPress={() => toggleModal()}> 
                                <View style={FlatListStyle.itemContainer}>
                                        <Text style={FlatListStyle.item}>Game Name: {item.name}</Text>
                                        <Text style={FlatListStyle.item}>Course: {item.course || "Course Name"}</Text>
                                        <Text style={FlatListStyle.item}>Date: {item.date || "Game Date"}</Text>
                                </View>
                                    </TouchableOpacity>
                                )}

                                />
                        </View>
                </View>
                


                <View style={styles.bottomButtonsContainer}>
                    <NavigationButtons
                        onPress={() => router.push("../league/LeagueTable")}
                        imageSource={require("@/assets/images/league_icon.png")}                       
                        label='League'
                        />

                    <NavigationButtons
                        onPress={() => router.push("../game/Games")}
                        imageSource={require("@/assets/images/game_icon.png")}                       
                        label='Games'
                        />

                    <NavigationButtons
                        onPress={() => console.log("../club/ClubScreen")}
                        imageSource={require("@/assets/images/club_icon.png")}                       
                        label='Club'
                        />


                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dropdown2: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
    dropdown: {
        margin: 16,
        height: 50,
        width: 290,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
      },
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
    label:{
        fontSize: 17,
        color: "#222",
    },
    bottomButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 10,
        width: 390,
        paddingHorizontal: 10,
        alignSelf: "center",
    },
    bottomButton: {
        backgroundColor: "#C6ECAE",
        flex: 1,
        marginHorizontal: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
    modalContainer: {
        backgroundColor: "white",
        margin: 20,
        borderRadius: 20,
        width:200,
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

})


export default ClubHome;